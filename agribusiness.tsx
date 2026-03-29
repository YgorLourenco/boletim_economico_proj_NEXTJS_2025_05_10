"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import ExportButton from "./components/export-button"
import ExportAllButton from "./components/export-all-button"

export default function Agribusiness() {
  const router = useRouter()

  const handlePreviousPage = () => {
    router.push("/quotations")
  }

  return (
    <div id="agribusiness-page" className="bg-teal-800 min-h-screen p-3 sm:p-4 md:p-8 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h2 className="text-lime-400 text-3xl sm:text-4xl font-bold">Agronegócio</h2>
          <div className="bg-white text-teal-500 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold">
            Mercados Internacionais
          </div>
        </div>

        {/* Tables Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4 relative">
          {/* Table 1 - Preço da arroba do boi gordo */}
          <div className="bg-teal-700/50 rounded-lg p-3 sm:p-4 border border-lime-400/30">
            <div className="text-white text-sm font-semibold mb-2">Tabela 1</div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <svg viewBox="0 0 100 100" className="text-lime-400">
                  <path d="M20,70 L80,70" stroke="currentColor" strokeWidth="4" />
                  <path
                    d="M25,50 C25,50 35,30 50,30 C65,30 75,50 75,50"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle cx="35" cy="45" r="3" fill="currentColor" />
                  <circle cx="65" cy="45" r="3" fill="currentColor" />
                  <path d="M30,70 L30,80" stroke="currentColor" strokeWidth="4" />
                  <path d="M70,70 L70,80" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
              <h3 className="text-lime-400 text-lg sm:text-xl font-bold">
                Preço da arroba
                <br className="sm:hidden" /> do boi gordo
              </h3>
            </div>

            <div className="overflow-x-auto -mx-3 px-3">
              <table className="w-full min-w-[400px] text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-teal-600">
                    <th className="py-2 pr-2 font-medium text-lime-300">Praça</th>
                    <th className="py-2 px-2 font-medium text-lime-300">
                      À vista
                      <br />
                      <span className="text-[10px] sm:text-xs opacity-80">(R$/a)</span>
                    </th>
                    <th className="py-2 px-2 font-medium text-lime-300">
                      30 dias
                      <br />
                      <span className="text-[10px] sm:text-xs opacity-80">(R$/a)</span>
                    </th>
                    <th className="py-2 pl-2 font-medium text-lime-300">
                      Variação
                      <br />
                      Semanal
                      <br />
                      <span className="text-[10px] sm:text-xs opacity-80">(30 dias)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">SP Barretos</td>
                    <td className="py-2 px-2">318,00</td>
                    <td className="py-2 px-2">325,00</td>
                    <td className="py-2 pl-2 text-red-400">-2,15%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">SP Araçatuba</td>
                    <td className="py-2 px-2">318,00</td>
                    <td className="py-2 px-2">325,00</td>
                    <td className="py-2 pl-2 text-red-400">-2,15%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">MG Triângulo</td>
                    <td className="py-2 px-2">305,00</td>
                    <td className="py-2 px-2">310,00</td>
                    <td className="py-2 pl-2 text-red-400">-1,61%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">GO Goiânia</td>
                    <td className="py-2 px-2">305,00</td>
                    <td className="py-2 px-2">312,00</td>
                    <td className="py-2 pl-2 text-red-400">-2,24%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">GO Reg. Sul</td>
                    <td className="py-2 px-2">308,00</td>
                    <td className="py-2 px-2">312,00</td>
                    <td className="py-2 pl-2 text-red-400">-1,28%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">TO Sul</td>
                    <td className="py-2 px-2">298,00</td>
                    <td className="py-2 px-2">298,00</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">TO Norte</td>
                    <td className="py-2 px-2">298,00</td>
                    <td className="py-2 px-2">300,00</td>
                    <td className="py-2 pl-2 text-red-400">-0,67%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2 - Preço da arroba do boi gordo internacional */}
          <div className="bg-teal-700/50 rounded-lg p-3 sm:p-4 border border-lime-400/30">
            <div className="text-white text-sm font-semibold mb-2">Tabela 2</div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <svg viewBox="0 0 100 100" className="text-lime-400">
                  <path d="M20,70 L80,70" stroke="currentColor" strokeWidth="4" />
                  <path
                    d="M25,50 C25,50 35,30 50,30 C65,30 75,50 75,50"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle cx="35" cy="45" r="3" fill="currentColor" />
                  <circle cx="65" cy="45" r="3" fill="currentColor" />
                  <path d="M30,70 L30,80" stroke="currentColor" strokeWidth="4" />
                  <path d="M70,70 L70,80" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
              <h3 className="text-lime-400 text-lg sm:text-xl font-bold">
                Preço da arroba do
                <br className="sm:hidden" /> boi gordo internacional
              </h3>
            </div>

            <div className="overflow-x-auto -mx-3 px-3">
              <table className="w-full min-w-[400px] text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-teal-600">
                    <th className="py-2 pr-2 font-medium text-lime-300">País</th>
                    <th className="py-2 px-2 font-medium text-lime-300">US$</th>
                    <th className="py-2 pl-2 font-medium text-lime-300">Variação Semanal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">Brasil</td>
                    <td className="py-2 px-2">52,95</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">Argentina</td>
                    <td className="py-2 px-2">61,20</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">Uruguai</td>
                    <td className="py-2 px-2">59,25</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">Paraguai</td>
                    <td className="py-2 px-2">49,50</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">Austrália</td>
                    <td className="py-2 px-2">62,55</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">Irlanda</td>
                    <td className="py-2 px-2">82,20</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">Estados Unidos</td>
                    <td className="py-2 px-2">97,95</td>
                    <td className="py-2 pl-2">0,00%</td>
                  </tr>
                </tbody>
              </table>
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
          <button className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg text-teal-600 flex items-center justify-center">
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Tables Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Table 3 - Preços médios da saca de milho */}
          <div className="bg-teal-700/50 rounded-lg p-3 sm:p-4 border border-lime-400/30">
            <div className="text-white text-sm font-semibold mb-2">Tabela 3</div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <svg viewBox="0 0 100 100" className="text-lime-400">
                  <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="3" />
                  <path d="M40,30 L60,30" stroke="currentColor" strokeWidth="3" />
                  <path d="M35,40 L65,40" stroke="currentColor" strokeWidth="3" />
                  <path d="M30,50 L70,50" stroke="currentColor" strokeWidth="3" />
                  <path d="M35,60 L65,60" stroke="currentColor" strokeWidth="3" />
                  <path d="M40,70 L60,70" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-lime-400 text-lg sm:text-xl font-bold">
                Preços médios
                <br className="sm:hidden" /> da saca de milho
              </h3>
            </div>

            <div className="overflow-x-auto -mx-3 px-3">
              <table className="w-full min-w-[400px] text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-teal-600">
                    <th className="py-2 pr-2 font-medium text-lime-300">Praça</th>
                    <th className="py-2 px-2 font-medium text-lime-300">
                      Compra
                      <br />
                      <span className="text-[10px] sm:text-xs opacity-80">(R$/Saca)</span>
                    </th>
                    <th className="py-2 px-2 font-medium text-lime-300">
                      Venda
                      <br />
                      <span className="text-[10px] sm:text-xs opacity-80">(R$/Saca)</span>
                    </th>
                    <th className="py-2 pl-2 font-medium text-lime-300">
                      Variação
                      <br />
                      Semanal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">SP São Paulo</td>
                    <td className="py-2 px-2">79,97</td>
                    <td className="py-2 px-2">81,75</td>
                    <td className="py-2 pl-2 text-red-400">-2,18%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">SP Campinas</td>
                    <td className="py-2 px-2">79,97</td>
                    <td className="py-2 px-2">81,75</td>
                    <td className="py-2 pl-2 text-red-400">-2,18%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">SP Sorocaba</td>
                    <td className="py-2 px-2">77,70</td>
                    <td className="py-2 px-2">82,68</td>
                    <td className="py-2 pl-2 text-red-400">-6,03%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">GO Itumbiara</td>
                    <td className="py-2 px-2">71,00</td>
                    <td className="py-2 px-2">78,00</td>
                    <td className="py-2 pl-2 text-red-400">-8,97%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">MG Uberlândia</td>
                    <td className="py-2 px-2">73,50</td>
                    <td className="py-2 px-2">74,50</td>
                    <td className="py-2 pl-2 text-red-400">-1,34%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 4 - Preços médios da saca de soja */}
          <div className="bg-teal-700/50 rounded-lg p-3 sm:p-4 border border-lime-400/30">
            <div className="text-white text-sm font-semibold mb-2">Tabela 4</div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <svg viewBox="0 0 100 100" className="text-lime-400">
                  <path d="M30,80 L70,80" stroke="currentColor" strokeWidth="3" />
                  <path d="M40,80 C40,60 30,50 30,30" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M60,80 C60,60 70,50 70,30" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M30,30 C40,20 60,20 70,30" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M40,50 L60,50" stroke="currentColor" strokeWidth="3" />
                  <path d="M35,40 L65,40" stroke="currentColor" strokeWidth="3" />
                  <path d="M35,60 L65,60" stroke="currentColor" strokeWidth="3" />
                  <path d="M40,70 L60,70" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-lime-400 text-lg sm:text-xl font-bold">
                Preços médios
                <br className="sm:hidden" /> da saca de soja
              </h3>
            </div>

            <div className="overflow-x-auto -mx-3 px-3">
              <table className="w-full min-w-[400px] text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-teal-600">
                    <th className="py-2 pr-2 font-medium text-lime-300">Praça</th>
                    <th className="py-2 px-2 font-medium text-lime-300">
                      Compra
                      <br />
                      <span className="text-[10px] sm:text-xs opacity-80">(R$/Saca)</span>
                    </th>
                    <th className="py-2 px-2 font-medium text-lime-300">
                      Venda
                      <br />
                      <span className="text-[10px] sm:text-xs opacity-80">(R$/Saca)</span>
                    </th>
                    <th className="py-2 pl-2 font-medium text-lime-300">
                      Variação
                      <br />
                      Semanal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">DF Brasília</td>
                    <td className="py-2 px-2">114,50</td>
                    <td className="py-2 px-2">115,50</td>
                    <td className="py-2 pl-2 text-red-400">-0,86%</td>
                  </tr>
                  <tr className="border-b border-teal-600/30">
                    <td className="py-2 pr-2">SP Santos</td>
                    <td className="py-2 px-2">131,00</td>
                    <td className="py-2 px-2">133,50</td>
                    <td className="py-2 pl-2 text-red-400">-1,87%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">MG Uberlândia</td>
                    <td className="py-2 px-2">117,00</td>
                    <td className="py-2 px-2">118,00</td>
                    <td className="py-2 pl-2 text-red-400">-0,85%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-sm gap-2">
          <div className="text-center sm:text-left order-1">
            Tabelas: Informativo Pecuário Semanal da Revista Boi & Companhia - 05/05/2025
          </div>
          <div className="flex gap-1 order-3 sm:order-2 my-2 sm:my-0">
            {[0, 1, 2].map((index) => (
              <div key={index} className={`w-2 h-2 rounded-full ${index === 2 ? "bg-white" : "bg-gray-400"}`} />
            ))}
          </div>
          <div className="order-2 sm:order-3">Fonte: Scot Consultoria</div>
        </div>
      </div>

      {/* Export buttons */}
      <ExportButton pageId="agribusiness-page" pageName="Agronegócio" />
      <ExportAllButton />
    </div>
  )
}
