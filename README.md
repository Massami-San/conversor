# Conversor de Moedas

Aplicação web simples para converter valores entre moedas. A interface permite escolher a moeda de origem e a de destino, informar um valor e visualizar o resultado formatado.

## Moedas disponíveis

- Real brasileiro (BRL)
- Dólar americano (USD)
- Euro (EUR)
- Libra esterlina (GBP)
- Iene japonês (JPY)
- Peso argentino (ARS)
- Bitcoin (BTC)

## Como executar

Não é necessário instalar dependências ou configurar um servidor. Clone ou baixe este repositório e abra `index.html` em um navegador.

## Como funciona

A conversão usa taxas fixas definidas em `Script.js`, tendo o real brasileiro como referência. As cotações são valores de demonstração e **não são atualizadas em tempo real**. Para uso financeiro, confira as taxas atuais em uma fonte confiável.

## Tecnologias

- HTML
- CSS
- JavaScript

## Estrutura do projeto

- `index.html`: estrutura da interface e seletores de moedas.
- `Style.css`: estilos da aplicação.
- `Script.js`: configurações das moedas, formatação e cálculo da conversão.
- `Assets/`: imagens usadas para representar moedas e a seta de conversão.
