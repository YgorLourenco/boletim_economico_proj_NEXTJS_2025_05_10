"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import html2canvas from "html2canvas"
import JSZip from "jszip"
import FileSaver from "file-saver"

interface PageInfo {
  id: string
  name: string
  path: string
}

export default function ExportAllButton() {
  const [isExporting, setIsExporting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentPage, setCurrentPage] = useState("")

  const pages: PageInfo[] = [
    { id: "economic-bulletin-page", name: "Boletim Econômico", path: "/" },
    { id: "market-quotations-page", name: "Cotações", path: "/quotations" },
    { id: "agribusiness-page", name: "Agronegócio", path: "/agribusiness" },
  ]

  const captureElement = async (elementId: string): Promise<Blob> => {
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error(`Elemento ${elementId} não encontrado`)
    }

    // Configurações para melhor qualidade
    const canvas = await html2canvas(element, {
      scale: 2, // Escala 2x para melhor qualidade
      useCORS: true, // Permitir imagens de outros domínios
      logging: false,
      backgroundColor: null,
      onclone: (document) => {
        // Ajustes antes de renderizar
        const clonedElement = document.getElementById(elementId)
        if (clonedElement) {
          // Garantir que o elemento clonado tenha o tamanho correto
          clonedElement.style.width = `${element.offsetWidth}px`
          clonedElement.style.height = `${element.offsetHeight}px`
        }
        return document
      },
    })

    // Converter canvas para blob
    return new Promise<Blob>((resolve) => {
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
  }

  const exportAllPages = async () => {
    try {
      setIsExporting(true)
      setProgress(0)

      // Verificar se estamos na página inicial
      const currentPath = window.location.pathname
      const zip = new JSZip()

      // Capturar a página atual primeiro
      const currentPageInfo = pages.find((p) => p.path === currentPath) || pages[0]
      setCurrentPage(currentPageInfo.name)

      try {
        const blob = await captureElement(currentPageInfo.id)
        zip.file(`${currentPageInfo.name.toLowerCase().replace(/\s+/g, "-")}.png`, blob)
        setProgress(Math.round(100 / pages.length))
      } catch (error) {
        console.error(`Erro ao capturar ${currentPageInfo.name}:`, error)
      }

      // Criar um iframe para cada página restante e capturar
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i]
        if (page.path === currentPath) continue // Pular a página atual que já foi capturada

        setCurrentPage(page.name)

        // Criar iframe para carregar a página
        const iframe = document.createElement("iframe")
        iframe.style.position = "absolute"
        iframe.style.top = "-9999px"
        iframe.style.width = "1200px"
        iframe.style.height = "800px"
        iframe.style.border = "none"

        // Aguardar o carregamento do iframe
        const iframeLoaded = new Promise<void>((resolve) => {
          iframe.onload = () => resolve()
        })

        // Adicionar iframe ao DOM e definir src
        document.body.appendChild(iframe)
        iframe.src = page.path

        // Aguardar carregamento
        await iframeLoaded

        // Aguardar um pouco para garantir que tudo foi renderizado
        await new Promise((resolve) => setTimeout(resolve, 1000))

        try {
          // Capturar o conteúdo do iframe
          const iframeDocument = iframe.contentDocument
          if (!iframeDocument) throw new Error("Não foi possível acessar o documento do iframe")

          const pageElement = iframeDocument.getElementById(page.id)
          if (!pageElement) throw new Error(`Elemento ${page.id} não encontrado no iframe`)

          // Usar html2canvas no elemento dentro do iframe
          const canvas = await html2canvas(pageElement, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: null,
          })

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
            )
          })

          zip.file(`${page.name.toLowerCase().replace(/\s+/g, "-")}.png`, blob)
        } catch (error) {
          console.error(`Erro ao capturar ${page.name}:`, error)
        } finally {
          // Remover iframe
          document.body.removeChild(iframe)
        }

        // Atualizar progresso
        setProgress(Math.round(((i + 2) / pages.length) * 100))
      }

      // Gerar o arquivo zip
      const zipBlob = await zip.generateAsync({ type: "blob" })
      FileSaver.saveAs(zipBlob, "boletim-economico-completo.zip")

      // Finalizar
      setTimeout(() => {
        setIsExporting(false)
        setProgress(0)
        setCurrentPage("")
      }, 1000)
    } catch (error) {
      console.error("Erro ao exportar todas as páginas:", error)
      setIsExporting(false)
      setProgress(0)
      setCurrentPage("")
      alert("Erro ao exportar imagens. Por favor, tente novamente.")
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={exportAllPages}
        disabled={isExporting}
        className="bg-white text-teal-600 hover:bg-gray-100 rounded-full p-3 shadow-lg flex items-center justify-center transition-all"
        title="Exportar todas as páginas como PNG"
      >
        {isExporting ? (
          <div className="relative">
            <Loader2 className="h-6 w-6 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold">{progress}%</span>
            </div>
          </div>
        ) : (
          <div className="relative">
            <Download className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-lime-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
        )}
      </button>

      {isExporting && currentPage && (
        <div className="fixed bottom-16 left-4 bg-white text-teal-600 px-3 py-1 rounded-md shadow-md text-xs">
          Exportando: {currentPage}
        </div>
      )}
    </div>
  )
}
