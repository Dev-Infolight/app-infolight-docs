---
sidebar_position: 1
sidebar_label: "Venda Balcão"
title: "Faturamento da Venda Balcão"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import justificativa from "@site/static/img/erp/justificativa-das-rotas/justificativa.png";
import justificativa2 from "@site/static/img/erp/justificativa-das-rotas/justificativa2.png";
import justificativa3 from "@site/static/img/erp/justificativa-das-rotas/justificativa3.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Faturamento da Venda Balcão

A rotina de **Venda Balcão** do sistema Tempus é utilizada para realizar vendas diretamente no estabelecimento, permitindo registrar os produtos vendidos, definir as formas de pagamento e controlar as movimentações de estoque e financeiro.

O processo pode envolver a criação de um **orçamento** em uma empresa e sua posterior finalização no ambiente responsável pelo faturamento. Após a emissão, é importante concluir corretamente a operação na empresa responsável pelo controle interno, garantindo a baixa do estoque e a geração do financeiro.

## Abertura do Caixa

Antes de iniciar as vendas, realize a **abertura do caixa** no módulo **Loja**.

Ao abrir o caixa, o sistema realiza verificações importantes, como:

- Estoque disponível dos produtos;
- Pedidos em aberto;
- Produtos reservados para pedidos;
- Quantidades disponíveis para novas vendas.

Mesmo quando o usuário trabalhar apenas com a digitação de orçamentos, é recomendado realizar a abertura do caixa.

:::info[IMPORTANTE]
O caixa deve estar aberto para que determinadas operações da rotina de Venda Balcão sejam realizadas corretamente.
:::

## Inclusão da Venda Balcão

Na rotina de **Venda Balcão**, clique em **Incluir** para iniciar uma nova venda.

Informe o **cliente** responsável pela compra. Caso necessário, também é possível adicionar uma observação para identificação do pedido.

Para adicionar um produto, pressione **F3** e localize o item desejado.

Após selecionar o produto:

- Confira a tabela de preços utilizada;
- Altere a tabela, caso seja necessário;
- Informe a quantidade desejada;
- Pressione **Enter** para confirmar.

O sistema atualizará automaticamente o valor total da venda.

Para adicionar outros produtos, continue incluindo os itens necessários na grade.

## Forma de Pagamento

Acesse a aba **Pagamento** e informe a forma de pagamento combinada com o cliente.

O pagamento poderá ser registrado conforme as opções disponíveis no sistema, como:

- Dinheiro;
- Pix;
- Cartão;
- Depósito;
- Outras formas de pagamento cadastradas.

Após conferir os produtos e a forma de pagamento, conclua a operação salvando-a como **Orçamento**.

O sistema permitirá realizar a impressão do orçamento em uma impressora térmica ou convencional, conforme a configuração utilizada.

## Importação do Orçamento

No ambiente responsável pelo faturamento, acesse novamente a rotina de **Venda Balcão**.

Para localizar o orçamento anteriormente digitado:

- Pressione **F6**; ou
- Clique no botão **Orçamento**.

Informe o número do orçamento e confirme.

O sistema carregará automaticamente os produtos e as informações registradas anteriormente.

Antes de finalizar a venda, confira novamente a forma de pagamento. Caso o cliente tenha alterado a forma de pagamento, atualize a informação antes de concluir.

## Finalização da Venda

Após conferir os produtos e a forma de pagamento, finalize a venda.

Quando houver emissão de documento fiscal, o sistema realizará o processo conforme as configurações da empresa.

:::info[IMPORTANTE]
A máquina responsável pela emissão do documento fiscal deve possuir o certificado digital corretamente instalado e configurado.
:::

Após a finalização, o documento fiscal poderá ser entregue ao cliente.

## Finalização na Empresa de Controle

Após concluir o faturamento, retorne à empresa responsável pelo **controle de estoque e financeiro**.

Localize o orçamento correspondente e confira novamente as informações da venda.

Caso a forma de pagamento tenha sido alterada durante o faturamento, faça a mesma alteração para manter os registros iguais.

Em seguida, conclua a operação utilizando a opção configurada para o lançamento interno.

Nesse momento, o sistema realizará:

- A baixa dos produtos no estoque;
- A geração do financeiro;
- O registro interno da venda.

:::warning[ATENÇÃO]
Não deixe de finalizar a operação na empresa responsável pelo controle interno. Caso contrário, o estoque e o financeiro poderão apresentar divergências.
:::

## Lançamentos do Caixa

Caso seja necessário realizar uma retirada de dinheiro durante o dia, utilize a rotina de **Lançamento do Caixa**.

Clique em **Incluir** e informe:

- O tipo de movimentação, como **Sangria** ou **Retirada**;
- O valor;
- O responsável ou destinatário;
- A natureza ou motivo da movimentação.

Após preencher as informações, salve o lançamento.

O valor será registrado como uma saída do caixa.

## Resumo do Caixa

A rotina **Resumo do Caixa** permite acompanhar as entradas e saídas realizadas durante o período.

Nessa tela, é possível visualizar:

- Valores recebidos;
- Valores retirados;
- Movimentações por forma de pagamento;
- Total disponível no caixa.

Utilize essas informações para conferir se o valor físico disponível corresponde ao valor apresentado pelo sistema.

Também é possível imprimir uma prévia das movimentações para auxiliar na conferência.

## Fechamento do Caixa

Após finalizar todas as vendas e movimentações do dia, realize o **Fechamento do Caixa**.

Utilize o mesmo botão responsável pela abertura do caixa e selecione a opção de fechamento.

O sistema apresentará um resumo contendo:

- Valores recebidos;
- Valores retirados;
- Movimentações realizadas;
- Produtos vendidos durante o período.

Confira as informações e finalize o fechamento.

:::warning[ATENÇÃO]
O caixa deve ser fechado diariamente para evitar o acúmulo de movimentações de diferentes períodos e facilitar a conferência dos valores.
:::

Após o fechamento, o relatório poderá ser impresso e utilizado junto à conferência financeira do período.

:::tip
Por fim, caso ainda tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::