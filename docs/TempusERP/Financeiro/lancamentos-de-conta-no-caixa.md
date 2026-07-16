---
sidebar_position: 8
sidebar_label: "Lançamento de contas no caixa"
title: "Lançamento de contas no caixa"
---

# Lançamento de contas no caixa

Esta rotina permite realizar lançamentos de entradas, saídas, estornos, transferências entre contas e consultas no caixa, através do módulo **Financeiro**.

## Acessando a rotina

Acesse:

**Módulo Financeiro → Movimento Bancário → Conta Corrente**

Ao abrir a rotina, a tela será exibida em branco.

## Pesquisando lançamentos

O botão **Parâmetros** está disponível para realizar consultas.

Nele é possível filtrar:

- Período desejado;
- Conta ou caixa que será exibido na tela.

Após definir os filtros, clique em **OK** para visualizar os lançamentos.

---

# Lançando uma entrada no caixa

Clique no botão **Incluir**.

Preencha as seguintes informações:

- **Data do lançamento**
  - Utilize a data em que o PIX ou depósito realmente ocorreu para que o lançamento seja conciliado corretamente com o extrato bancário.

- **Tipo**
  - Para PIX ou depósito, utilize o tipo correspondente à entrada.

- **Natureza Financeira**
  - Exemplo: **Receita com vendas**.

- **Banco**
  - Informe o banco onde o cliente realizou o pagamento.

- **Movimento**
  - Selecione **Crédito** (entrada).

- **Valor**

- **Histórico**
  - Informe uma descrição que permita identificar posteriormente o lançamento, como:
    - PIX;
    - Depósito;
    - Recebimento de cliente.

Após preencher os dados:

- Clique em **Novo** para salvar e iniciar outro lançamento;
- Ou clique em **Salvar** para concluir.

---

# Lançando uma saída no caixa

Quando ocorrer um pagamento diretamente pelo caixa, como tarifas bancárias ou outras despesas, clique em **Incluir**.

Preencha:

- Data do lançamento;
- Tipo da saída (dinheiro, recibo, vale, etc.);
- Natureza financeira.

É possível pesquisar a natureza pela descrição.

Exemplo:

- Tarifa bancária;
- Despesas diversas.

Informe ainda:

- Banco de onde o valor será debitado;
- Movimento **Débito**;
- Valor da despesa.

Após preencher:

- Clique em **Salvar**.

---

# Consultando lançamentos

Utilize o botão **Parâmetros**.

Informe:

- Período;
- Banco.

Clique em **OK**.

O sistema exibirá todos os lançamentos encontrados.

Exemplo:

- Entrada referente ao PIX lançado;
- Saída referente à tarifa bancária.

---

# Estornando um lançamento

Caso um lançamento tenha sido realizado incorretamente, ele **não pode ser excluído**.

O procedimento correto é utilizar o botão **Estornar**.

Ao realizar o estorno:

- o sistema cria automaticamente um lançamento contrário;
- o lançamento é registrado na data em que o estorno foi realizado.

Exemplo:

Se um lançamento foi feito ontem e o estorno ocorreu hoje, o movimento inverso será registrado na data de hoje, anulando o lançamento anterior.

---

# Transferindo valores entre contas

Para transferir dinheiro de um caixa para outro ou entre bancos, utilize o botão **Transferir**.

Informe:

- Conta de origem;
- Conta de destino;
- Natureza financeira da saída;
- Valor da transferência;
- Histórico (opcional).

Exemplo:

- Pagamento fornecedor;
- Transferência entre bancos.

Clique em **Transferir**.

O sistema realizará automaticamente:

- uma saída na conta de origem;
- uma entrada na conta de destino.

Assim, não é necessário realizar dois lançamentos separados.

---

# Pesquisando no extrato

A rotina também possui a opção **Extrato**.

Nela é possível:

- selecionar o banco;
- pesquisar palavras presentes no histórico dos lançamentos.

Exemplos de pesquisa:

- `forne`
- `teste`
- `tarifa`

Sempre que localizar a palavra informada, o sistema destacará o lançamento correspondente em amarelo, facilitando sua localização.

---

## Observações

- Utilize sempre a data real do recebimento ou pagamento para facilitar a conciliação bancária.
- PIX e depósitos devem ser registrados como crédito.
- Pagamentos e despesas devem ser registrados como débito.
- Lançamentos não podem ser excluídos, apenas estornados.
- Transferências entre contas devem ser feitas exclusivamente pela rotina **Transferir**.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::