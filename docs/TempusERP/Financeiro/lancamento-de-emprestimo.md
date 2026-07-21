---
sidebar_position: 11
sidebar_label: "Lançamento de empréstimo"
title: "Lançamento de empréstimo"
---

# Lançamento de empréstimo

A rotina de lançamento de empréstimos permite cadastrar contratos de financiamento e gerar automaticamente todas as parcelas no contas a pagar.

## Acessando a rotina

Acesse:

**Módulo Financeiro → Títulos a Pagar → Lançamento de Empréstimo**

## Preenchendo os dados do contrato

Preencha todas as informações conforme o contrato firmado com a instituição financeira.

> **Importante:** Todos os campos destacados em azul são obrigatórios. Ao posicionar o mouse sobre um campo, o sistema exibe uma descrição explicando sua finalidade.

Informe:

- Número do contrato;
- Valor total do empréstimo;
- Primeiro vencimento;
- Prazo do financiamento.

### Primeiro vencimento

Caso exista período de carência, informe a data em que será paga a primeira parcela após esse período.

Se não houver carência, informe o vencimento do primeiro boleto normalmente.

### Carência

Caso o contrato possua carência, informe:

- Quantidade de parcelas de carência;
- Primeiro vencimento após a carência.

O sistema utilizará essas informações para montar corretamente o cronograma de pagamentos.

## Cadastrando a financeira

A instituição financeira deve estar cadastrada como fornecedor.

Acesse o cadastro de fornecedores e, ao cadastrar o banco, selecione o tipo:

- **Financeira**

Somente fornecedores cadastrados como **Financeira** estarão disponíveis para seleção nesta rotina.

Após o cadastro, selecione a financeira no campo correspondente.

## Demais informações

Preencha também:

- Tipo do título: **Empréstimo**;
- Histórico (ex.: Empréstimo Veículo);
- Data do crédito;
- Natureza financeira relacionada ao pagamento do empréstimo;
- Banco onde o valor será creditado;
- Prefixo para identificação do contrato.

## Simulando as parcelas

Após preencher os dados do contrato, clique em **Simular**.

O sistema apresentará:

- Quantidade de parcelas;
- Valor de cada parcela;
- Datas de vencimento.

## Alterando parcelas

Caso seja necessário, é possível alterar manualmente:

- Data de vencimento;
- Valor da parcela.

Basta dar duplo clique sobre o campo desejado.

> O valor total das parcelas deve permanecer igual ao valor calculado pelo sistema.

### Exemplo de carência

Caso seja informado um período de carência de cinco parcelas, o sistema deixará esse período sem pagamentos e iniciará os vencimentos apenas a partir da sexta parcela.

## Gerando o empréstimo

Após conferir todas as informações:

1. Clique em **Gerar**.
2. Aguarde o processamento.

O sistema criará automaticamente todas as parcelas do financiamento no contas a pagar.

Exemplo:

- 160 parcelas.

## Consultando as parcelas

As parcelas poderão ser consultadas em:

**Títulos a Pagar → Contas a Pagar**

Os lançamentos serão identificados pelo tipo:

- **Empréstimo**

## Alterando parcelas

Após a geração do contrato, ainda é possível alterar:

- Valor;
- Data de vencimento;
- Percentual de multa;
- Percentual de juros.

Depois das alterações, basta salvar o registro.

## Pagando as parcelas

Quando chegar o vencimento de uma parcela:

1. Acesse **Administração de Contas a Pagar**.
2. Localize a parcela.
3. Clique em **Baixar**.

Informe:

- Banco utilizado para o pagamento;
- Data do pagamento;
- Demais informações necessárias para a baixa.

Cada parcela pode ser paga por um banco diferente.

Exemplo:

- Primeira parcela paga pelo **Itaú**;
- Segunda parcela paga pelo **Sicredi**.

O sistema registrará corretamente o banco utilizado em cada pagamento.

:::tip
Sempre confira os dados do contrato antes de gerar as parcelas. Após a geração, alterações são possíveis, mas o ideal é que o cronograma já esteja conforme o contrato firmado com a instituição financeira.
:::

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::