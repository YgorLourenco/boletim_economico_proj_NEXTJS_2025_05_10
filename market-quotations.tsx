"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import ExportButton from "./components/export-button"
import ExportAllButton from "./components/export-all-button"

export default function MarketQuotations() {
  const router = useRouter()

  const handlePreviousPage = () => {
    router.push("/")
  }

  const handleNextPage = () => {
    router.push("/agribusiness")
  }

  return (
    <div id="market-quotations-page" className="bg-teal-800 min-h-screen p-3 sm:p-4 md:p-8 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h2 className="text-lime-400 text-3xl sm:text-4xl font-bold">Cotações</h2>
          <div className="bg-white text-teal-500 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold">
            Mercados Internacionais
          </div>
        </div>

        {/* Currency Pairs */}
        <div className="bg-teal-700 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-b border-teal-600 pb-2">
              <div className="grid grid-cols-3 gap-2 text-center font-semibold mb-2 text-xs sm:text-sm">
                <div className="text-left">Par de Moedas</div>
                <div>Valores</div>
                <div>Variação Semanal</div>
              </div>

              {/* BRL - USD */}
              <div className="grid grid-cols-3 gap-2 items-center mb-3 text-xs sm:text-base">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>BRL - USD</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-green-500 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-blue-800 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-1 sm:w-4 sm:h-2 flex flex-col justify-between">
                        <div className="h-px bg-white"></div>
                        <div className="h-px bg-white"></div>
                        <div className="h-px bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">5,75</div>
                <div className="text-center text-green-400">1,65%</div>
              </div>

              {/* BRL - EUR */}
              <div className="grid grid-cols-3 gap-2 items-center mb-3 text-xs sm:text-base">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>BRL - EUR</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-green-500 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-blue-800 rounded-sm flex items-center justify-center">
                      <div className="flex items-center justify-center">
                        <div className="text-yellow-400 text-[8px] sm:text-xs">€</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">6,50</div>
                <div className="text-center text-green-400">1,36%</div>
              </div>

              {/* BRL - JPY */}
              <div className="grid grid-cols-3 gap-2 items-center text-xs sm:text-base">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>BRL - JPY</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-green-500 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">0,04</div>
                <div className="text-center text-green-400">1,71%</div>
              </div>
            </div>

            <div className="border-b border-teal-600 pb-2 mt-4 md:mt-0">
              <div className="grid grid-cols-3 gap-2 text-center font-semibold mb-2 text-xs sm:text-sm">
                <div className="text-left">Par de Moedas</div>
                <div>Valores</div>
                <div>Variação Semanal</div>
              </div>

              {/* BRL - GBP */}
              <div className="grid grid-cols-3 gap-2 items-center mb-3 text-xs sm:text-base">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>BRL - GBP</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-green-500 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-blue-800 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 flex flex-col items-center justify-center">
                        <div className="w-3 h-px sm:w-4 sm:h-px bg-white"></div>
                        <div className="w-px h-3 sm:w-px sm:h-4 bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">7,61</div>
                <div className="text-center text-green-400">0,88%</div>
              </div>

              {/* BRL - CNY */}
              <div className="grid grid-cols-3 gap-2 items-center mb-3 text-xs sm:text-base">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>BRL - CNY</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-green-500 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-red-600 rounded-sm flex items-center justify-center">
                      <div className="flex items-center justify-center">
                        <div className="text-yellow-400 text-[8px] sm:text-xs">★</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">0,77</div>
                <div className="text-center text-green-400">2,54%</div>
              </div>

              {/* USD - EUR */}
              <div className="grid grid-cols-3 gap-2 items-center text-xs sm:text-base">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>USD - EUR</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-blue-800 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-1 sm:w-4 sm:h-2 flex flex-col justify-between">
                        <div className="h-px bg-white"></div>
                        <div className="h-px bg-white"></div>
                        <div className="h-px bg-white"></div>
                      </div>
                    </div>
                    <div className="w-4 h-3 sm:w-6 sm:h-4 bg-blue-800 rounded-sm flex items-center justify-center">
                      <div className="flex items-center justify-center">
                        <div className="text-yellow-400 text-[8px] sm:text-xs">€</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">1,14</div>
                <div className="text-center text-green-400">0,35%</div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-col sm:flex-row justify-between text-[10px] sm:text-sm">
            <div>Aumento na variação semanal indica depreciação cambial da moeda à esquerda</div>
            <div className="mt-1 sm:mt-0">Fonte: Bacen</div>
          </div>
        </div>

        {/* Commodities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-6 relative">
          {/* Gold */}
          <div className="bg-teal-700 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row">
            <div className="flex flex-row sm:flex-col items-center justify-center pr-2 sm:pr-4 border-b sm:border-b-0 sm:border-r border-teal-600 pb-2 sm:pb-0 mb-2 sm:mb-0">
              <div className="text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0 sm:mb-1">OURO</div>
                <div className="text-white text-xs sm:text-sm">(XAU)</div>
                <div className="text-white text-[10px] sm:text-xs">(grama)</div>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 ml-2 sm:ml-0 sm:mt-2">
                <svg viewBox="0 0 100 100" className="text-yellow-400">
                  <path d="M20,80 L40,40 L60,60 L80,20" fill="none" stroke="currentColor" strokeWidth="4" />
                  <path d="M20,60 L40,20 L60,40 L80,0" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-4 sm:pl-4">
              <div className="flex flex-col justify-center items-center border-r border-teal-600">
                <div className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Valor</div>
                <div className="text-white font-bold text-sm sm:text-xl">R$ 3.324,80</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Variação Semanal</div>
                <div className="text-green-400 font-bold text-sm sm:text-xl">1,44%</div>
              </div>
            </div>
          </div>

          {/* Oil */}
          <div className="bg-teal-700 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row">
            <div className="flex flex-row sm:flex-col items-center justify-center pr-2 sm:pr-4 border-b sm:border-b-0 sm:border-r border-teal-600 pb-2 sm:pb-0 mb-2 sm:mb-0">
              <div className="text-center">
                <div className="text-white font-bold text-sm sm:text-base mb-0 sm:mb-1">PETRÓLEO</div>
                <div className="text-white text-xs sm:text-sm">BRENT/WTI</div>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 ml-2 sm:ml-0 sm:mt-2">
                <svg viewBox="0 0 100 100" className="text-yellow-400">
                  <rect x="30" y="60" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M50,10 L50,60" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M40,20 L60,20" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M35,30 L65,30" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
            </div>
            <div className="flex-1 sm:pl-4">
              <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-2 sm:mb-4">
                <div className="flex items-center justify-center bg-teal-800 rounded-sm text-[10px] sm:text-xs font-bold py-1">
                  BRENT
                </div>
                <div className="text-white font-bold text-center text-xs sm:text-base">US$ 66,57</div>
                <div className="text-green-400 font-bold text-center text-xs sm:text-base">6,93%</div>
              </div>
              <div className="grid grid-cols-3 gap-1 sm:gap-2">
                <div className="flex items-center justify-center bg-teal-800 rounded-sm text-[10px] sm:text-xs font-bold py-1">
                  WTI
                </div>
                <div className="text-white font-bold text-center text-xs sm:text-base">US$ 62,89</div>
                <div className="text-green-400 font-bold text-center text-xs sm:text-base">7,10%</div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePreviousPage}
            className="absolute -left-2 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg text-teal-600 flex items-center justify-center"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={handleNextPage}
            className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg text-teal-600 flex items-center justify-center"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Cryptocurrencies */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 sm:mb-6">
          {/* Bitcoin */}
          <div className="bg-teal-700 rounded-lg p-3 sm:p-4">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">₿</span>
              </div>
            </div>
            <div className="text-center text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">Bitcoin</div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-white text-xs sm:text-sm mb-1">Valor</div>
                <div className="text-white font-bold text-xs sm:text-base">US$ 92.664,84</div>
              </div>
              <div>
                <div className="text-white text-xs sm:text-sm mb-1">Variação Semanal</div>
                <div className="text-red-500 font-bold text-xs sm:text-base">-2,84%</div>
              </div>
            </div>
          </div>

          {/* Ether */}
          <div className="bg-teal-700 rounded-lg p-3 sm:p-4">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">Ξ</span>
              </div>
            </div>
            <div className="text-center text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">Ether</div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-white text-xs sm:text-sm mb-1">Valor</div>
                <div className="text-white font-bold text-xs sm:text-base">US$ 1.737,93</div>
              </div>
              <div>
                <div className="text-white text-xs sm:text-sm mb-1">Variação Semanal</div>
                <div className="text-red-500 font-bold text-xs sm:text-base">-4,23%</div>
              </div>
            </div>
          </div>

          {/* BNB */}
          <div className="bg-teal-700 rounded-lg p-3 sm:p-4">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">B</span>
              </div>
            </div>
            <div className="text-center text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">BNB</div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-white text-xs sm:text-sm mb-1">Valor</div>
                <div className="text-white font-bold text-xs sm:text-base">US$ 604,79</div>
              </div>
              <div>
                <div className="text-white text-xs sm:text-sm mb-1">Variação Semanal</div>
                <div className="text-green-400 font-bold text-xs sm:text-base">0,53%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-sm gap-2">
          <div className="text-center sm:text-left">
            Os dados desta seção são referentes ao fechamento da semana – 28/04/2025 a 02/05/2025
          </div>
          <div className="flex gap-1 order-3 sm:order-2 my-2 sm:my-0">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className={`w-2 h-2 rounded-full ${index === 1 ? "bg-white" : "bg-gray-400"}`} />
            ))}
          </div>
          <div className="order-2 sm:order-3">Fonte: CoinMarketCap</div>
        </div>
      </div>

      {/* Export buttons */}
      <ExportButton pageId="market-quotations-page" pageName="Cotações" />
      <ExportAllButton />
    </div>
  )
}
