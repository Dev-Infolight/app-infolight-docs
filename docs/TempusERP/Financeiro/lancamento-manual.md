---
sidebar_position: 9
sidebar_label: "Lançamento manual e baixa de títulos a pagar"
title: "Lançamento manual e baixa de títulos a pagar"
---

# Lançamento manual e baixa de títulos a pagar

Esta rotina permite realizar lançamentos manuais de contas a pagar, consultar títulos, efetuar baixas totais ou parciais e emitir relatórios financeiros.

## Quando utilizar um lançamento manual?

Os lançamentos manuais devem ser utilizados **somente para despesas sem nota fiscal**.

> **Importante:** Compras realizadas com nota fiscal não precisam ser lançadas manualmente, pois o título é gerado automaticamente durante o lançamento da nota fiscal.

---

# Incluindo um lançamento manual

Acesse:

**Módulo Financeiro → Títulos a Pagar → Contas a Pagar**

Clique em **Incluir**.

Preencha as seguintes informações:

- **Tipo**
  - Informe como será realizado o pagamento, por exemplo:
    - Dinheiro;
    - Depósito;
    - Recibo;
    - Nota promissória;
    - Duplicata.

- **Fornecedor**
  - Selecione o fornecedor.
  - Caso ele ainda não esteja cadastrado, realize primeiro o cadastro do fornecedor.

- **Natureza Financeira**
  - Informe corretamente a natureza financeira.
  - Lembre-se de selecionar a empresa correta (Unita ou São Marcos), garantindo que a baixa seja contabilizada corretamente.

- **Data de vencimento**
  - Informe o vencimento do título.
  - Caso o vencimento seja em um final de semana ou feriado, o sistema ajustará automaticamente o **vencimento real** para o próximo dia útil.

- **Histórico**
  - Informe uma descrição para facilitar futuras consultas.

- **Valor**

Após preencher:

- Clique em **Novo** para salvar e iniciar outro lançamento;
- Ou clique em **Salvar** para finalizar.

O sistema gerará automaticamente o número do título.

---

# Consultando títulos

Utilize o botão **Parâmetros**.

É possível filtrar por:

- Fornecedor;
- Período;
- Títulos em aberto;
- Títulos baixados;
- Outros filtros disponíveis.

Após definir os filtros, clique em **OK** para visualizar os resultados.

---

# Copiando um lançamento

Caso uma despesa seja recorrente, como aluguel, utilize o botão **Copiar**.

Após copiar:

- Altere a data de vencimento;
- Caso necessário, altere também o valor;
- Salve o novo lançamento.

Assim, não é necessário preencher todas as informações novamente.

> **Importante:** Copie apenas títulos que estejam **em aberto** (bolinha verde). Não copie títulos já baixados, pois eles mantêm o status do título original.

---

# Excluindo um lançamento

Lançamentos manuais podem ser excluídos através do botão **Excluir**.

Entretanto, títulos originados de notas fiscais **não podem ser excluídos** por essa rotina.

Caso tente excluir um título do tipo **NF**, o sistema exibirá uma mensagem informando que a exclusão não é permitida.

Nesses casos, é necessário:

1. Estornar a nota fiscal;
2. Excluir a nota fiscal.

---

# Realizando a baixa de um título

Acesse:

**Módulo Financeiro → Títulos a Pagar → Administração de Contas a Pagar**

Utilize o botão **Parâmetros** para localizar os títulos desejados.

Exemplo:

- Filtrar os títulos vencidos no dia atual;
- Exibir apenas títulos em aberto.

Após localizar o título:

1. Selecione-o;
2. Clique em **Baixar**.

Informe:

- Conta bancária utilizada;
- Data do pagamento (para conciliar com o extrato bancário);
- Histórico (opcional);
- Natureza financeira (caso seja necessário corrigir);
- Juros;
- Multa;
- Desconto.

Clique em **Baixar** para concluir.

---

# Baixa parcial

Caso apenas parte do título tenha sido paga, também é possível realizar uma baixa parcial.

Informe:

- Conta bancária;
- Valor pago.

Exemplo:

- Valor do título: **R$ 240,00**
- Valor pago: **R$ 100,00**

Após realizar a baixa, o título permanecerá com saldo em aberto e ficará identificado como pagamento parcial.

Posteriormente, basta realizar uma nova baixa para quitar o valor restante.

Também é possível dividir um pagamento entre duas contas bancárias diferentes, realizando duas baixas parciais.

---

# Integração com o movimento bancário

Toda baixa realizada gera automaticamente um lançamento na conta corrente correspondente ao banco informado durante o pagamento.

Assim, o movimento bancário permanece conciliado com as baixas realizadas.

---

# Relatórios

A rotina permite emitir diversos relatórios, como:

- Relatório de títulos pagos;
- Relatório por fornecedor;
- Relatório por natureza financeira;
- Relatório por vencimento;
- Relatório por período.

Também estão disponíveis os relatórios do caixa:

- **Movimento**, que apresenta apenas os lançamentos do dia;
- **Extrato Bancário**, que exibe o saldo anterior e todos os lançamentos realizados no período consultado.

---

## Observações

- Utilize lançamentos manuais apenas para despesas sem nota fiscal.
- Compras com nota fiscal geram títulos automaticamente.
- Lançamentos manuais podem ser copiados para facilitar despesas recorrentes.
- Apenas lançamentos manuais podem ser excluídos.
- Títulos originados de notas fiscais devem ser removidos através do estorno da nota.
- A baixa pode ser total ou parcial.
- Toda baixa gera automaticamente movimentação na conta corrente.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::