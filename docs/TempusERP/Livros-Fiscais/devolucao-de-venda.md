---
sidebar_position: 1
sidebar_label: "Devolução de Venda"
title: "Devolução de Venda"
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

# Devolução de Venda

A rotina de **Devolução de Venda** permite realizar a devolução total ou parcial de uma nota fiscal de venda, gerando a nota de entrada correspondente e realizando, quando necessário, a compensação dos títulos no Contas a Receber.

O processo é realizado pelo módulo **Livros Fiscais** e permite utilizar os dados da nota fiscal de origem para carregar automaticamente os produtos, quantidades e demais informações necessárias para a devolução.

## Acessando a Devolução de Venda

Para iniciar o processo, acesse:

**Módulo Livros Fiscais → Movimentos → Nota Fiscal Manual de Entrada**

Clique no botão **Incluir**.

Não é necessário preencher informações na primeira aba. Acesse diretamente a aba **Devolução**.

:::info
Dependendo da configuração e da versão do sistema, a aba **Devolução** poderá aparecer como a aba de número **4** ou **5**.
:::

## Informando a Nota Fiscal de Origem

Na aba **Devolução**, informe os dados da nota fiscal de venda que será devolvida:

- Modelo
- Série
- Número da nota fiscal

Para notas fiscais modelo 55, informe:

- **Modelo:** 55
- **Série:** série utilizada na nota de venda
- **Número:** número da nota fiscal de origem

Após informar os dados, o sistema apresentará a pergunta:

**Formulário próprio?**

Caso a própria empresa esteja emitindo a nota de devolução, selecione **Sim**.

O sistema apresentará a numeração da nova nota fiscal.

Não altere a numeração. Apenas confirme utilizando o botão correspondente ou pressionando **F5** no teclado.

## Importando os Itens da Nota

Em seguida, o sistema perguntará:

**Deseja que os itens da nota fiscal sejam inseridos?**

Ao selecionar **Sim**, todos os itens da nota fiscal de venda serão carregados automaticamente.

Ao selecionar **Não**, será necessário incluir os produtos manualmente.

:::info
A pergunta relacionada à regra de devolução poderá depender da configuração do cadastro do produto. Caso o campo **Devolução de Venda**, localizado na **Aba 4 – Fiscal** do cadastro do produto, esteja preenchido, o sistema poderá carregar automaticamente a regra de devolução.
:::

Caso a regra não seja carregada automaticamente, pesquise e selecione a regra de devolução correspondente à operação realizada na nota fiscal de saída.

## Preenchendo os Dados da Devolução

Confira a **Data de Emissão**.

Caso o sistema não preencha automaticamente, informe manualmente a data correspondente.

No campo **Código da Natureza**, clique nos três pontos e selecione a natureza correspondente à **Devolução de Venda**.

No campo **Informações Adicionais**, é possível inserir uma mensagem específica referente à devolução.

Caso nenhuma mensagem seja informada, o sistema poderá gerar automaticamente uma descrição indicando a nota fiscal de origem e sua respectiva data de emissão.

## Configurando o Frete

No campo **Tipo de Frete**, selecione a opção correspondente à devolução.

Caso seja selecionado um tipo de frete que envolva transporte, será necessário informar a transportadora ou o responsável pelo transporte da mercadoria.

Caso não exista frete na operação, selecione:

**Sem Ocorrência de Frete**

Nesse caso, não será necessário preencher as informações de transporte.

## Devolução Total

Caso todos os produtos e todas as quantidades da nota sejam devolvidos, não é necessário realizar alterações nos itens carregados.

Basta manter os produtos e quantidades conforme apresentados pelo sistema.

## Devolução Parcial de Itens

Caso apenas alguns produtos sejam devolvidos, exclua da nota os itens que não fazem parte da devolução.

Para excluir um item:

1. Selecione o produto.
2. Clique no botão **Excluir**.
3. Confirme novamente a exclusão.

O item será removido da nota de devolução.

## Devolução Parcial de Quantidade

Caso apenas parte da quantidade de um produto seja devolvida, selecione o item e clique em **Alterar**.

No campo **Quantidade**, informe somente a quantidade que será devolvida.

Por exemplo, caso tenham sido vendidas **10 unidades**, mas somente **2 unidades** estejam sendo devolvidas, altere a quantidade para **2**.

Após realizar a alteração, clique em **Salvar**.

## Informando a Justificativa

Retorne à aba **Devolução**.

No campo **Código de Justificativa**, clique nos três pontos e selecione uma das justificativas previamente cadastradas no sistema.

Escolha o motivo correspondente à devolução realizada.

## Salvando a Nota de Devolução

Após conferir todas as informações, clique no botão **Salvar**.

O sistema apresentará a pergunta:

**Deseja compensar a nota de origem automaticamente?**

A resposta escolhida definirá como o sistema tratará os títulos relacionados à venda original.

## Compensação Automática da Nota de Origem

Ao selecionar **Sim**, o sistema realizará a compensação financeira da nota de origem.

Em uma **devolução parcial**, poderá ser gerado um pedido de abatimento parcial no Contas a Receber.

Em uma **devolução total**, poderá ser gerado um pedido de baixa do título.

Caso a venda tenha sido realizada por boleto, essas solicitações poderão ser enviadas ao banco na próxima remessa gerada:

- Pedido de abatimento para devoluções parciais
- Pedido de baixa para devoluções totais

:::info
Caso a venda tenha sido parcelada, o sistema poderá perguntar individualmente sobre a compensação de cada parcela. Dessa forma, é possível compensar apenas determinadas parcelas, quando necessário.
:::

## Gerando Crédito para o Cliente

Caso o cliente já tenha quitado o título da venda original, normalmente a compensação automática não será utilizada.

Nesse caso, ao responder **Não** à pergunta sobre compensar a nota de origem, o sistema poderá gerar um crédito para o cliente no **Contas a Receber**.

Esse crédito poderá ser utilizado posteriormente em um novo faturamento, permitindo conceder abatimento em outro boleto ou título do cliente.

## Consultando a Nota de Devolução

Após salvar a nota, ela poderá ser localizada por:

- Número da nota
- Data de recebimento

As notas de devolução ficam identificadas com o tipo de documento:

**NCC – Nota de Crédito de Cliente**

O status da nota também poderá ser identificado visualmente na listagem.

Utilize o botão **Visualizar** para conferir os dados da nota antes da transmissão.

## Conferindo os Títulos Compensados

Quando houver compensação financeira, os títulos poderão ser apresentados com a identificação correspondente.

Ao posicionar o mouse sobre o título, será possível consultar informações como:

- Situação da compensação
- Data
- Valor
- Tipo do lançamento

Confira essas informações antes de prosseguir com a transmissão da nota fiscal.

## Transmitindo a Nota Fiscal

A nota fiscal somente será enviada à **SEFAZ** após a transmissão do XML.

Para realizar a transmissão, clique no botão **NFe XML**.

O sistema abrirá uma tela contendo as notas disponíveis.

É possível localizar a nota por:

- Data
- Número da nota fiscal

As notas marcadas com **S** no campo de envio são as notas selecionadas para transmissão.

Confira as informações e clique no botão **Transmitir**.

O sistema utilizará o certificado digital configurado, enviará a nota fiscal para a SEFAZ e, após a autorização, disponibilizará o **DANFE** para impressão.

## Resultado do Processo

Ao finalizar a devolução de venda, o sistema poderá realizar:

- Geração da nota fiscal de devolução
- Importação automática dos itens da nota de origem
- Devolução total ou parcial dos produtos
- Ajuste das quantidades devolvidas
- Compensação total ou parcial dos títulos
- Geração de crédito para o cliente, quando aplicável
- Solicitação de abatimento ou baixa de boletos
- Transmissão da nota fiscal para a SEFAZ
- Geração do DANFE para impressão

:::tip
Antes de transmitir a nota fiscal, confira os produtos, as quantidades, a regra de devolução, a justificativa e a forma como os títulos da venda original serão tratados.
:::