---
sidebar_position: 7
sidebar_label: "Contas a Receber"
title: "Contas a Receber"
---

# Contas a Receber

A rotina de **Contas a Receber** é utilizada para realizar lançamentos manuais de títulos de clientes, permitindo incluir débitos, créditos e duplicatas que não foram geradas automaticamente pelo faturamento do sistema.

## Caminho

**Módulo Financeiro → Títulos a Receber → Contas a Receber**

## Inclusão de títulos manuais

1. Acesse a rotina **Contas a Receber**.
2. Clique em **Incluir**.
3. O sistema preencherá automaticamente o **prefixo** do lançamento.
4. Selecione o tipo do lançamento:
   - **Débito**: utilizado para lançar um título a receber do cliente.
   - **Crédito (MCC)**: utilizado para lançar um crédito que poderá ser abatido em títulos futuros do cliente.
5. Selecione o **cliente**.
6. Informe:
   - Data de emissão;
   - Data de vencimento;
   - Valor;
   - Histórico do lançamento.

> **Exemplo:** Caso seja um título antigo que não foi lançado no sistema, informe um histórico como **"Título antigo do cliente"**.

## Vencimento

Ao informar a data de vencimento:

- O sistema calcula automaticamente o vencimento real.
- Caso a data informada seja em um final de semana, o vencimento será ajustado automaticamente para o próximo dia útil.

## Natureza Financeira

No campo **Natureza Financeira**, clique nos **três pontos (...)** e selecione a natureza correspondente ao lançamento.

Exemplos:

- Recebimento em dinheiro;
- Recebimento em depósito;
- Recebimento em boleto.

## Forma de Pagamento

Informe a forma de pagamento que será utilizada pelo cliente, como:

- Duplicata (boleto);
- PIX;
- Dinheiro;
- Demais formas cadastradas no sistema.

## Botões disponíveis

### Novo

Salva o lançamento atual e abre uma nova tela para realizar outro lançamento.

### Salvar

Salva o lançamento e encerra a inclusão.

## Multa e juros

Na segunda aba da rotina é possível configurar encargos para títulos vencidos.

Caso necessário, informe:

- Percentual de multa;
- Percentual de juros;
- Forma de cálculo dos juros:
  - Ao dia;
  - Ao mês;
  - Ao ano.

Caso não utilize multa ou juros, basta deixar esses campos em branco.

## Campos obrigatórios

Todos os campos destacados em **azul** são obrigatórios e precisam estar preenchidos antes de salvar o lançamento.

## Consulta de títulos

Após salvar, o título ficará disponível na rotina **Administração de Contas a Receber**.

Para localizar um título:

1. Clique em **Parâmetros**.
2. Informe o número do título, caso conheça.
3. Caso não saiba o número, utilize os filtros disponíveis.

É possível pesquisar por:

- Período de vencimento;
- Cliente;
- Outros filtros disponíveis na tela.

## Situação dos títulos

Também é possível filtrar a consulta por situação:

- Apenas títulos em aberto;
- Apenas títulos baixados;
- Todos os títulos.

## Identificação dos lançamentos manuais

Todos os títulos incluídos manualmente recebem o prefixo **MA1**, facilitando sua identificação durante consultas e relatórios.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::