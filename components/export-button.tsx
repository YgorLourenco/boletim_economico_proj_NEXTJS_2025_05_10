"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import html2canvas from "html2canvas"

interface ExportButtonProps {
  pageId: string
  pageName: string
}

export default function ExportButton({ pageId, pageName }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)
  const [progress, setProgress] = useState(0)

  const exportAsPng = async () => {
    try {
      setIsExporting(true)
      setProgress(10)

      const element = document.getElementById(pageId)
      if (!element) {
        throw new Error("Elemento da página não encontrado")
      }

      setProgress(30)

      // Configurações para melhor qualidade
      const canvas = await html2canvas(element, {
        scale: 2, // Escala 2x para melhor qualidade
        useCORS: true, // Permitir imagens de outros domínios
        logging: false,
        backgroundColor: null,
        onclone: (document) => {
          // Ajustes antes de renderizar
          const clonedElement = document.getElementById(pageId)
          if (clonedElement) {
            // Garantir que o elemento clonado tenha o tamanho correto
            clonedElement.style.width = `${element.offsetWidth}px`
            clonedElement.style.height = `${element.offsetHeight}px`
          }
          setProgress(50)
          return document
        },
      })

      setProgress(80)

      // Converter canvas para blob
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob)
            } else {
              throw new Error("Falha ao gerar imagem")
            }
          },
          "image/png",
          0.95,
        ) // 95% de qualidade
      })

      setProgress(90)

      // Criar URL para download
      const url = URL.createObjectURL(blob)

      // Criar link de download
      const link = document.createElement("a")
      link.href = url
      link.download = `${pageName.toLowerCase().replace(/\s+/g, "-")}.png`
      document.body.appendChild(link)
      link.click()

      // Limpar
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setProgress(100)
      setTimeout(() => {
        setIsExporting(false)
        setProgress(0)
      }, 1000)
    } catch (error) {
      console.error("Erro ao exportar imagem:", error)
      setIsExporting(false)
      setProgress(0)
      alert("Erro ao exportar imagem. Por favor, tente novamente.")
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={exportAsPng}
        disabled={isExporting}
        className="bg-white text-teal-600 hover:bg-gray-100 rounded-full p-3 shadow-lg flex items-center justify-center transition-all"
        title="Exportar como PNG"
      >
        {isExporting ? (
          <div className="relative">
            <Loader2 className="h-6 w-6 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold">{progress}%</span>
            </div>
          </div>
        ) : (
          <Download className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}
