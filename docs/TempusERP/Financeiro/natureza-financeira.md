---
sidebar_position: 13
sidebar_label: "Recodificação de Naturezas Financeiras"
title: "Recodificação de Naturezas Financeiras"
---

# Recodificação de Naturezas Financeiras

A rotina de **Recodificação de Naturezas Financeiras** é utilizada para alterar o código de uma natureza financeira e atualizar automaticamente todas as movimentações já existentes no sistema.

## Como informar o novo código

1. Acesse:

   **Módulo Financeiro → Cadastro → Natureza Financeira**

2. Localize a natureza financeira desejada.

3. Selecione o registro e clique em **Alterar**.

4. Não altere o campo **Código** atual.

5. No campo **Novo Código**, informe o código que será utilizado.

> O novo código deve estar disponível e não pode ser utilizado por outra natureza financeira.

### Exemplo

Uma natureza financeira está cadastrada como:

- **203.01**

E deverá passar para o grupo:

- **204**

Verifique os códigos já utilizados no grupo **204** e escolha um código livre, por exemplo:

- **204.33**

Informe o novo código e clique em **Salvar**.

Mantenha a opção **Exibir nos relatórios** marcada, caso a natureza deva continuar aparecendo nos relatórios financeiros.

Repita o procedimento para todas as naturezas que precisar recodificar.

---

# Executando a recodificação

Após salvar todas as alterações:

1. Acesse:

   **Financeiro → Miscelânea → Recodificar Natureza**

2. Clique em **Sim** para iniciar o processo.

O sistema irá:

- Localizar as naturezas que possuem um **Novo Código** informado;
- Atualizar automaticamente todas as referências existentes;
- Alterar os códigos em todas as tabelas financeiras do sistema.

São atualizadas movimentações como:

- Contas a Pagar;
- Contas a Receber;
- Movimento de Caixa;
- Títulos Pagos;
- Títulos em Aberto;
- Demais lançamentos financeiros relacionados.

> Dependendo da quantidade de registros, o processamento pode levar alguns minutos.

---

# Conferindo o resultado

Após a conclusão:

1. Pressione **F5** para atualizar a tela.
2. Pesquise a natureza financeira pelo novo código.

No exemplo:

- Código anterior: **203.01**
- Novo código: **204.33**

A natureza passará a ser exibida normalmente no novo grupo, e todos os relatórios e movimentações utilizarão automaticamente o novo código.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::