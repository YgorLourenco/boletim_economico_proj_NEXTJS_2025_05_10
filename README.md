# Boletim Econômico - Dashboard Financeiro

Este projeto é uma aplicação web interativa que funciona como um **Boletim Econômico Resumido**. Ele apresenta indicadores consolidados do relatório **FOCUS do Banco Central**, cotações de mercados internacionais e dados de preços do **Agronegócio Brasileiro**.

A interface foi desenvolvida com foco em **Mobile-First**, garantindo que todas as tabelas e indicadores sejam perfeitamente legíveis em dispositivos móveis e desktops.

## 🚀 Tecnologias Utilizadas

A aplicação foi construída utilizando ferramentas modernas de desenvolvimento web:

* **Framework:** [Next.js 15](https://nextjs.org/) (utilizando App Router).
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para maior segurança e tipagem.
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) para design responsivo e componentes utilitários.
* **Componentes de UI:** [Radix UI](https://www.radix-ui.com/) para acessibilidade e [Lucide React](https://lucide.dev/) para ícones.
* **Exportação de Dados:**
    * `html2canvas`: Para capturar o DOM e converter as páginas em imagens PNG.
    * `jszip`: Para agrupar múltiplas capturas em um único arquivo ZIP.
    * `file-saver`: Para gerenciar o download dos arquivos no navegador.

## ✨ Principais Funcionalidades (Features)

* **Painel FOCUS:** Exibição das expectativas de mercado para IPCA, PIB, Câmbio e Selic (2025/2026), com indicadores visuais de aumento, diminuição ou estabilidade.
* **Mercado de Cotações:** Monitoramento de pares de moedas (BRL, USD, EUR, GBP, CNY, JPY), commodities (Ouro e Petróleo Brent/WTI) e as principais criptomoedas (Bitcoin, Ether, BNB).
* **Agronegócio:** Tabelas detalhadas com preços da arroba do boi gordo (nacional e internacional), além de preços médios das sacas de milho e soja em praças estratégicas.
* **Navegação Fluida:** Sistema de troca de páginas via botões laterais (`ChevronLeft` e `ChevronRight`) que facilitam a alternância entre os temas.
* **Exportação Inteligente:**
    * **Botão Exportar PNG:** Localizado no canto inferior direito, captura e baixa a visualização atual da página.
    * **Botão Exportar Tudo (ZIP):** Localizado no canto inferior esquerdo, automatiza a captura de todas as páginas do boletim e as entrega organizadas em um arquivo `.zip`.

## 🛠️ Como Instalar e Executar Localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### Pré-requisitos
* [Node.js](https://nodejs.org/) (Versão 18.18 ou superior).
* Gerenciador de pacotes (NPM, Yarn ou PNPM).

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [link-do-seu-repositorio]
    cd boletim-economico
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    pnpm dev
    ```

4.  **Acesse a aplicação:**
    Abra o navegador em: [http://localhost:3000](http://localhost:3000)

## 📦 Estrutura do Projeto

* `/app`: Rotas e páginas principais (`/`, `/quotations`, `/agribusiness`).
* `/components`: Componentes compartilhados e lógica de exportação.
* `/components/ui`: Biblioteca de componentes visuais baseada em Radix UI.
* `/hooks`: Hooks personalizados, como detecção de dispositivos móveis.

---
**Nota:** Para exportação em alta qualidade, o sistema utiliza uma escala de renderização de 2x nas capturas de imagem.
