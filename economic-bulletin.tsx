"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import ExportButton from "./components/export-button"
import ExportAllButton from "./components/export-all-button"

export default function EconomicBulletin() {
  const [currentPage, setCurrentPage] = useState(0)
  const router = useRouter()

  const handleNextPage = () => {
    router.push("/quotations")
  }

  return (
    <div id="economic-bulletin-page" className="bg-teal-800 min-h-screen p-3 sm:p-4 md:p-8 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-yellow-300 text-lg sm:text-xl font-bold mb-2">EDIÇÃO 132 - 05/05/2025</h2>
          <div className="bg-teal-500 inline-block rounded-lg p-2 sm:p-3 mb-2">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">BOLETIM</h1>
          </div>
          <div className="block">
            <div className="bg-teal-500 inline-block rounded-lg p-2 sm:p-3">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">ECONÔMICO</h1>
            </div>
            <div className="float-none sm:float-right mt-3 sm:mt-0">
              <div className="bg-white text-teal-500 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold inline-block">
                Expectativas de Mercado
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-16 relative">
          {/* IPCA */}
          <div className="bg-teal-600 rounded-lg pb-3 sm:pb-4">
            <div className="bg-white text-teal-500 rounded-t-lg p-3 sm:p-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                IPCA<span className="text-xs sm:text-sm">(%) </span>
              </h2>
            </div>

            {/* 2025 */}
            <div className="p-3 sm:p-4">
              <div className="bg-teal-700 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2025</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">5,53</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,5 30,35 55,5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 3 semanas</div>
            </div>

            {/* 2026 */}
            <div className="p-3 sm:p-4 pt-0">
              <div className="bg-teal-800 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2026</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">4,51</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,5 30,35 55,5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 1 semana</div>
            </div>
          </div>

          {/* PIB */}
          <div className="bg-teal-600 rounded-lg pb-3 sm:pb-4">
            <div className="bg-white text-teal-500 rounded-t-lg p-3 sm:p-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                PIB<span className="text-xs sm:text-sm">(%) </span>
              </h2>
            </div>

            {/* 2025 */}
            <div className="p-3 sm:p-4">
              <div className="bg-teal-700 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2025</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">2,00</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,35 30,5 55,35" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 2 semanas</div>
            </div>

            {/* 2026 */}
            <div className="p-3 sm:p-4 pt-0">
              <div className="bg-teal-800 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2026</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">1,70</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,35 30,5 55,35" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 2 semanas</div>
            </div>
          </div>

          {/* CÂMBIO */}
          <div className="bg-teal-600 rounded-lg pb-3 sm:pb-4">
            <div className="bg-white text-teal-500 rounded-t-lg p-3 sm:p-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                CÂMBIO<span className="text-xs sm:text-sm">(R$/US$) </span>
              </h2>
            </div>

            {/* 2025 */}
            <div className="p-3 sm:p-4">
              <div className="bg-teal-700 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2025</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">5,86</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,5 30,35 55,5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 1 semana</div>
            </div>

            {/* 2026 */}
            <div className="p-3 sm:p-4 pt-0">
              <div className="bg-teal-800 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2026</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">5,91</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,5 30,35 55,5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 5 semanas</div>
            </div>
          </div>

          {/* SELIC */}
          <div className="bg-teal-600 rounded-lg pb-3 sm:pb-4">
            <div className="bg-white text-teal-500 rounded-t-lg p-3 sm:p-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                SELIC<span className="text-xs sm:text-sm">(% a.a.) </span>
              </h2>
            </div>

            {/* 2025 */}
            <div className="p-3 sm:p-4">
              <div className="bg-teal-700 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2025</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">14,75</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,5 30,35 55,5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 1 semana</div>
            </div>

            {/* 2026 */}
            <div className="p-3 sm:p-4 pt-0">
              <div className="bg-teal-800 inline-block px-2 py-1 rounded-md mb-1 sm:mb-2">
                <span className="text-white font-semibold text-sm">2026</span>
              </div>
              <div className="text-xs sm:text-sm text-white mb-1">hoje</div>
              <div className="flex justify-between items-center">
                <span className="text-2xl sm:text-4xl font-bold">12,50</span>
                <div className="w-12 h-10 sm:w-16 sm:h-12 relative">
                  <svg viewBox="0 0 60 40" className="text-yellow-300">
                    <polyline points="5,20 30,20 55,20" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-white">Há 14 semanas</div>
            </div>
          </div>

          {/* Navigation button */}
          <button
            onClick={handleNextPage}
            className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg text-teal-600 flex items-center justify-center"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Legend */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Legenda:</h3>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <svg viewBox="0 0 60 40" className="text-yellow-300">
                  <polyline points="5,5 30,35 55,5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm">Diminuição</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <svg viewBox="0 0 60 40" className="text-yellow-300">
                  <polyline points="5,35 30,5 55,35" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm">Aumento</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <svg viewBox="0 0 60 40" className="text-yellow-300">
                  <polyline points="5,20 30,20 55,20" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm">Estabilidade</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-sm gap-2">
          <div className="text-yellow-300 order-2 sm:order-1">Fonte: Banco Central do Brasil</div>
          <div className="flex gap-1 order-1 sm:order-2 mb-2 sm:mb-0">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${currentPage === index ? "bg-white" : "bg-gray-400"}`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 order-3">
            <svg viewBox="0 0 100 100" className="text-green-300">
              <path
                d="M50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 C90,30 70,10 50,10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              />
              <path d="M30,50 L45,65 L70,35" fill="none" stroke="currentColor" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Export buttons */}
      <ExportButton pageId="economic-bulletin-page" pageName="Boletim Econômico" />
      <ExportAllButton />
    </div>
  )
}
