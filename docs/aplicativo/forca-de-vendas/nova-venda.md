---
sidebar_position: 6
sidebar_label: "Nova venda"
title: "Nova venda"
---

import Cabecalho1 from "@site/static/img/nova-venda/cabecalho1.png";
import Cabecalho2 from "@site/static/img/nova-venda/cabecalho2.png";
import CampoRegraDeSaida from "@site/static/img/nova-venda/campo-regra-de-saida.png";
import EscolhendoRegraDeSaida from "@site/static/img/nova-venda/escolhendo-regra-de-saida.png";
import CampoDeCondicaoDePagamento from "@site/static/img/nova-venda/campo-condicao-de-pagamento.png";
import EscolhendoCondicaoDePagamento from "@site/static/img/nova-venda/escolhendo-condicao-de-pagamento.png";
import CampoDeTabelaDePrecos from "@site/static/img/nova-venda/campo-tabela-de-precos.png";
import EscolhendoTabelaDePrecos from "@site/static/img/nova-venda/escolhendo-tabela-de-precos.png";
import ObservacaoDoPedido from "@site/static/img/nova-venda/campo-de-observacao-do-pedido.png";
import InfoCliente from "@site/static/img/nova-venda/info-complementar-cabecalho.png";
import NroPedidoDoCliente from "@site/static/img/nova-venda/nro-pedido-cliente.png";
import PedidoJaRealizado from "@site/static/img/nova-venda/pedido-ja-realizado.png";
import GuiaProdutos from "@site/static/img/nova-venda/guia-de-produtos.png";
import FiltroProdutos1 from "@site/static/img/nova-venda/filtros-produtos-1.png";
import FiltroProdutos2 from "@site/static/img/nova-venda/filtros-produtos-2.png";
import IconeFiltro from "@site/static/img/nova-venda/icone-filtro.svg";
import AdicionarItemAoCarrinho from "@site/static/img/nova-venda/adicionando-item-ao-carrinho.png";
import GuiaDoCarrinho from "@site/static/img/nova-venda/carrinho.png";
import PedidoEmCache from "@site/static/img/nova-venda/pedido-em-cache.png";


# Nova venda

A **criação de pedidos de venda** é um dos recursos mais significativos do aplicativo infolight. Está rotina permite que o vendedor cadastre pedidos de venda para os clientes de sua carteira.

A tela de nova venda é dividida em 3 guias principais: **Cabeçalho**, **Produtos**, **Carinho**. Falaremos sobre elas durante as seções abaixo.

## Cabeçalho

O preenchimento das informações do cabeçalho é o primeiro passo a ser realizado durante o cadastro de um novo pedido de venda. No decorrer desta seção, explicaremos o que significa, o que deve ser cadastrado e também a origem dos dados de cada campo.

As duas imagens a seguir demonstram a guia do cabeçalho:

<div className="divRow">
    <img src={Cabecalho1} alt="Primeira parte do cabeçalho"/>
    <img src={Cabecalho2} alt="Segunda parte do cabeçalho"/>
</div>

---

:::tip[DICA]
Campos marcados com <span className="color-red">*</span> são obrigatórios.
:::

### Regra de saída <span className="color-red">*</span>

<div className="images-grid-rows-2">
    <img src={CampoRegraDeSaida} alt="Campo de regra de saída"/>
    <img src={EscolhendoRegraDeSaida} alt="Lista de regras de saída"/>
</div>

No campo de regra de saída, o vendedor seleciona o tipo do novo pedido de venda, ou seja, define se o pedido vai ser uma venda, troca, bonificação e etc. A regra de saída escolhida será salva no campo **F3_TS** da tabela de **pedidos de venda (TF3)**.

As opcões que serão apresentadas ao vendedor neste campo, serão provenientes de duas tabelas: 

1. **TAE - Cadastro de regras**;
2. **TBE - Regras de saída por vendedor**.

Funciona assim: por padrão, o aplicativo irá listar todas as regras de saída que estão cadastradas TAE (considerando empresa e filial a qual o usuário está logado), e caso a tabela TBE exista na base do vendedor, o aplicativo irá fazer um cruzamento de informações para listar apenas as regras de saída que são associadas ao vendedor em questão. No trecho de código abaixo, você pode conferir exatamente como este processo funciona:

```SQL showLineNumbers title="TBE não existe na base do vendedor:"
SELECT
    AE_CODIGO AS CODIGO,
    AE_DESCRIC AS DESCRICAO,
    AE_GERDUPL
FROM
    TAE$EMPRESA_SELECIONADA
WHERE
    AE_FILIAL = '$FILIAL_SELECIONADA'
    AND UPPER(AE_PALM) = 'S'
ORDER BY
    AE_CODIGO
```
```SQL {7,11} showLineNumbers title="TBE existe na base do vendedor:" 
SELECT
    AE_CODIGO AS CODIGO,
    AE_DESCRIC AS DESCRICAO,
    AE_GERDUPL
FROM
    TAE$EMPRESA_SELECIONADA
    INNER JOIN TBE$EMPRESA_SELECIONADA ON BE_FILIAL = AE_FILIAL AND BE_TS = AE_CODIGO
WHERE
    AE_FILIAL = '$FILIAL_SELECIONADA'
    AND UPPER(AE_PALM) = 'S'
    AND BE_VEND = '$CODIGO_DO_VENDEDOR_LOGADO'
ORDER BY
    AE_CODIGO    
```

---

### Condição de pagamento <span className="color-red">*</span>

<div className="images-grid-rows-2">
    <img src={CampoDeCondicaoDePagamento} alt="Campo de condição de pagamento"/>
    <img src={EscolhendoCondicaoDePagamento} alt="Lista de condições de pagamento"/>
</div>

Este é o campo onde é definido a forma de pagamento escolhida pelo cliente. A tabela de preços selecionada será salva no campo **F3_CONDPAG** da tabela de **pedidos de venda (TF3)**.

A listagem das condições de pagamento é realizada utilizando duas tabelas:

1. **TA5 - Condições de pagamento;**
2. **TB2 - Condições de pagamento do cliente.**

A lógica é assim: A listagem é realizada através da tabela TA5, e se a tabela TB2 existir na base do vendedor, o aplicativo faz uma junção de dados entre essas duas tabelas para puxar apenas as condições de pagamento associadas ao cliente.

```SQL showLineNumbers title="TB2 não existe na base do vendedor:"
SELECT
    A5_CODIGO AS CODIGO,
    A5_DESCRIC AS DESCRICAO
FROM
    TA5$EMPRESA_SELECIONADA
WHERE
    A5_FILIAL = '$FILIAL_SELECIONADA'
ORDER BY
    A5_CODIGO
```

```SQL {6,9,10} showLineNumbers title="TB2 existe na base do vendedor:"
SELECT
    A5_CODIGO AS CODIGO,
    A5_DESCRIC AS DESCRICAO
FROM
    TA5$EMPRESA_SELECIONADA
    INNER JOIN TB2$EMPRESA_SELECIONADA ON B2_FILIAL = A5_FILIAL AND B2_CONDPAG = A5_CODIGO
WHERE
    A5_FILIAL = '$FILIAL_SELECIONADA'
    AND B2_CLIENTE = '$CODIGO_DO_CLIENTE'
    AND B2_LOJA = '$LOJA_DO_CLIENTE'
ORDER BY
    A5_CODIGO
```
:::info[IMPORTANTE]
Ao selecionar uma regra de saída, o aplicativo irá filtrar o campo de **Condições de pagamento** para listar apenas as que são atreladas a **regra de saída** selecionada. A seguinte query é utilizada:

```SQL showLineNumbers title="Buscando condições de pagamento que são atreladas a regra de saída:"
SELECT
    B5_CONDPAG
FROM
    TB5$EMPRESA_SELECIONADA
WHERE
    B5_TS = '$REGRA_DE_SAÍDA_SELECIONADA'
    AND B5_FILIAL = '$FILIAL_SELECIONADA'
```

:::tip[É VALIDO SABER]
Caso a query não retorne dados, o campo de condições de pagamento não será filtrado.
:::

---

### Tabela de preços <span className="color-red">*</span>

<div className="images-grid-rows-2">
    <img src={CampoDeTabelaDePrecos} alt="Campo de tabela de preços"/>
    <img src={EscolhendoCondicaoDePagamento} alt="Lista de tabelas de preço"/>
</div>

A tabela de preços é o campo que vai definir não somente os produtos que vão aparecer na **guia de produtos**, mas também o preço de cada um deles. A tabela de preços selecionada será salva no campo **F3_TABPRC** da tabela de **pedidos de venda (TF3)**.

Para listar as tabelas de preço, o aplicativo utiliza as seguintes tabelas:

1. **TT3 - Tabela de preços**;
2. **TA9 - Tabela de preço dos vendedores.**

A lógica é exatamente a mesma das regras de saída e condições de pagamento. Por padrão, as tabelas de preços da TT3 são listadas, mas quando a TA9 existe, uma associação de dados é realizada. Este comportamento é mostrado nos trechos de código abaixo.

```SQL showLineNumbers title="TA9 não existe na base do vendedor:"
SELECT
    T3_CODIGO AS CODIGO,
    T3_DESCRIC AS DESCRICAO
FROM
    TT3$EMPRESA_SELECIONADA
WHERE
    T3_FILIAL = '$FILIAL_SELECIONADA'
ORDER BY
    T3_CODIGO
```

```SQL {6,9} showLineNumbers title="TA9 existe na base do vendedor:"
SELECT
    T3_CODIGO AS CODIGO,
    T3_DESCRIC AS DESCRICAO
FROM
    TT3$EMPRESA_SELECIONADA
    INNER JOIN TA9$EMPRESA_SELECIONADA ON A9_FILIAL = T3_FILIAL AND T3_CODIGO = A9_TABPRC
WHERE
    T3_FILIAL = '$FILIAL_SELECIONADA'
    AND A9_VEND = '$CODIGO_DO_VENDEDOR'
ORDER BY
    T3_CODIGO
```
:::info[INFORMAÇÃO]
Para evitar que um vendedor adicione produtos de diferentes tabelas de preço ao carrinho, você pode configurar o parâmetro `MV_BLOQTABPRC`:<br/><br />**`T`** -> bloqueia o campo ao adicionar um item ao carrinho;<br/>**`F`**, **`String vazia`** ou **`não cadastrar este campo`** -> permite que o vendedor adicione produtos de diferentes tabelas de preço ao carrinho.
:::

---

### Um detalhe sobre a condição de pagamento e tabela de preços

O aplicativo também permite que os campos de **Condição de pagamento** e **Tabela de preços** já venham preenchidos automaticamente com base no cadastro do cliente.

Se você deseja esse comportamento, no **cadastro do cliente**, informe a condição de pagamento no campo **A1_CONDPAG** e/ou tabela de preços no campo **A1_TABPRC**.

O aplicativo utiliza a seguinte query para obter essas informações:

```SQL showLineNumbers title="Obtendo tabela de preços de condição de pagamento do cliente:"
SELECT
    A1_CONDPAG,
    A1_TABPRC
FROM 
    TA1$EMPRESA_SELECIONADA
WHERE
    A1_FILIAL = '$FILIAL_SELECIONADA' 
    AND A1_CODIGO = '$CODIGO_DO_CLIENTE' 
    AND A1_LOJA = '$LOJA_DO_CLIENTE' 
    AND A1_VEND = '$CODIGO_DO_VENDEDOR'
```

:::info[IMPORTANTE]
Os campos de condição de pagamento e tabela de preços só serão preenchidos automaticamente se a `condição de pagamento` e/ou `tabela de preços` que foi inserida no cadastro do cliente aparecer na lista de tabelas de preço e condições de pagamento da tela.
:::

---

### Número do pedido do cliente

<img
    src={NroPedidoDoCliente}
    alt="Campo do número do pedido do cliente"
/>

---

### Observação 

No campo de observação, o usuário pode escrever alguma mensagem relacionada ao pedido em questão. O texto digitado será salvo no campo **F3_HIST** da tabela de **Pedidos de venda (TF3)**. Abaixo está uma imagem do campo de observação: 

<img
    className="pb-16"
    src={ObservacaoDoPedido}
    alt="Obvervação do pedido"
/>

---

### Informações complementares

Além do formulário, a guia do cabeçalho também exibe informações relevantes para o vendedor:

<img 
    src={InfoCliente}
    alt="Informações sobre o cliente"
/>

1. **Observação do cliente:**
   
   Consiste basicamente em uma mensagem para que o vendedor relembre de algum detalhe importante sobre o cliente, por exemplo: identificar que o cliente é mal pagador. Esta mensagem pode ser cadastrada no campo de **observação do cliente (A1_OBS)** na **tabela de Clientes (TA1)**.

2. **Comodatos do cliente:**

    Os comodatos são os equipamentos foram emprestados pela a empresa para o cliente para que ele possa vender os produtos em seu negócio.

    ```SQL showLineNumbers title="Query utilizada para puxar os comodatos do cliente:"
    SELECT
        B1_CODPROD,
        IFNULL(A7_DESCRIC, 'Sem Informação') AS A7_DESCRIC,
        IFNULL(B1_QTDE, 1) AS B1_QTDE,
        IFNULL(B1_CODPAT, 0) AS B1_CODPAT
    FROM
        TB1$EMPRESA_SELECIONADA
        LEFT JOIN TA7$EMPRESA_SELECIONADA ON A7_FILIAL = B1_FILIAL AND A7_CODIGO = B1_CODPROD
    WHERE
        B1_FILIAL = '$FILIAL_SELECIONADA'
        AND B1_CODCLI = '$CODIGO_DO_CLIENTE'
        AND B1_LOJCLI = '$LOJA_DO_CLIENTE'
    ```

---

## Produtos

### Listagem

<img 
    className="h-500"
    src={GuiaProdutos}
    alt="Guia com os produtos da tabela de preços selecionada"
/>

A guia de **Produtos** tem a função de listar todos os produtos da tabela de preços que foi selecionada durante o preenchimento do **cabeçalho** e permitir que o usuário selecione algum produto e adicione ao carrino.

A listagem de produtos é feita em formato de cards contendo as seguintes informações: 

1. **Foto do produto (Se ela existir)**;
2. **Código do produto**;
3. **Nome do produto**;
4. **Preço do produto**;
6. **Primeira unidade de medida**;
7. **Segunda unidade de medida**;
8. **Estoque disponivel**.

:::info[IMPORTANTE]
O aplicativo não exibe o **estoque** e a **segunda unidade de medida** simultaneamente no card, você terá que decidir qual a informação é mais relevante para o seu contexto.<br/><br/>Configure o parâmetro `MV_ESTNEGMOB`:<br />**`T`**, **`String vazia`**, **`Não cadastrar este parâmetro`** -> Exibe a segunda unidade de medida<br/>**`F`** -> Exibe o estoque disponível.
:::

---

### Filtros

<img 
    src={FiltroProdutos1}
    alt="Filtros dos produtos"
/>

Para facilitar a busca por produtos ou grupos de produtos, o aplicativo fornece os seguintes filtros:

1. **Campo de busca por texto:**

    Este filtro permite que o vendedor busque os produtos por `código (A7_CODIGO)` ou `nome (A7_DESCRIC)`.

2. **Botão "Todos:"**

    Exibe todos os produtos da tabela de preços selecionada.

3. **Botão "Produto foco:"**

    Retorna os produtos da tabela de preços selecionada que fazem parte do foco de vendas da empresa.

4. **Botão "Mais comprados:"**

    Retorna os produtos da tabela de preços selecionada que são mais comprados pelo cliente.

5. **Botão Último pedido:**

    Retorna os produtos do último pedido digitado pelo vendedor no aplicativo.

6. **Botão de filtro:**

    Ao clicar em <IconeFiltro className="iconFilter"/>, um modal será aberto, e nele, o vendedor poderá filtrar os produtos por marca, grupo e subgrupo. Este modal pode ser visualizado na imagen abaixo:

    <img 
        src={FiltroProdutos2}
        alt="Filtro por marca, grupo e subgrupo."
    />

### Adicionando item ao carrinho

<img 
    className="h-500"
    src={AdicionarItemAoCarrinho}
    alt="Tela para adicionar um item ao carrinho"
/>

Para adicionar um item ao carrinho, clique em cima do card do produto, e no modal que será aberto, preencha os dados solicitados, e por fim, clique no botão **Confirmar**. 

Para facilitar a compreensão, foram projetadas duas guias para este modal, são elas: 

1. **Guia de valores:**

    Na guia de valores, o vendedor pode definir o preço e a quantidade da primeira unidade medida (1 e 3), preço e quantidade da segunda unidade de medida (2 e 4) e o desconto que será aplicado (5).

2. **Guia de impostos:**

    Basedo nos valores que o vendedor digitou na guia de **Valores**, o aplicativo irá cálcular automaticamente os seguintes impostos: `IPI`, `ICMS ST` e o `FCP ST`.

:::info[Parâmetros]
Existem alguns parâmetros que você pode considerar para utilizar nesta tela, [clique aqui](../parametros.md) para conferir.
:::

---

## Carrinho

<img 
    className="h-500"
    src={GuiaDoCarrinho}
    alt="guia do carrinho"
/>

A guia do carrinho possui basicamente um resumo do pedido. Nela, o vendedor terá os seguinte recursos:

1. **Listagem dos produtos do pedido:**

    o vendedor poderá visualizar os produtos que ele digitou, incluindo as quantidades, valores, descontos e impostos de cada um deles.

2. **Editar um item do carrinho:**

    O vendedor pode clicar em cima do card do produto e editar as quantidades e valores que foram anteriormente digitadas.

3. **Salvar o pedido como rascunho:**

    Nem sempre o vendedor terá acesso a internet em todos os locais que ele visitar. Pensando nisto, o aplicativo permite que o vendedor digite um pedido sem internet, salve locamente em seu dispositivo, e posteriormente, com o uso de internet, sincronize este pedido com o **Tempus ERP**.

    Para utilizar este recurso, marque a opção **`Salvar como rascunho`** e clique em **`Confirmar Pedido`**.

4. **Enviar pedido para o Tempus ERP:**

    Para enviar o pedido, certifique-se de que está conectado a internet e clique no botão **`Confirmar pedido`**.

    :::info[É IMPORTANTE SABER]
    Ao clicar no botão de confirmar o pedido, caso você não tenha marcado para salvar como rascunho e não esteja conectado a internet, o pedido será salvo locamente com o status de `Pendente de envio` e a partir da tela de [pedido de venda](./pedidos_de_venda.md), você poderá sincronizar este pedido com o Tempus ERP.
    :::

#### Onde o pedido será salvo ?

Ao fim da digitação de um novo pedido de venda, os dados do **cabeçalho** serão salvos na tabela de **pedidos venda (TF3)** e os itens do carrinho serão salvos na tabela de **itens do pedido de venda (TF4)**.

---

## Informação de pedido já realizado

<div className="divRow">
    <img 
        src={PedidoJaRealizado}
        alt="Informação de pedido já realizado para o cliente"
    />
    <div className="divColumn">
       <div>
            <b>Entendendo</b>
            <p>Ao abrir a tela de **novo pedido**, caso você já tenha feito um pedido para o cliente em questão, um modal informativo será apresentado.</p>
       </div>
       <div>
            <b>Como funciona ?</b>
            <p>Caso o parâmetro `MV_DIASULTPED` esteja configurado, o aplicativo irá verificar se o vendedor fez algum pedido para o cliente durante o período cadastrado, caso contrário, será verificado se o vendedor já digitou um pedido para o cliente na data atual.</p>
       </div>
    </div>
</div>

---

## Fechei o pedido sem querer, e agora ?

<div className="divRow">
    <img 
        src={PedidoEmCache}
        alt="Pedido em cache"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Não se preocupe, durante a digitação de um novo pedido de venda, o aplicativo vai salvando as informações em cache para caso você feche a tela sem querer ou o seu celular descarregue, você não perda os dados do pedido.</p>
        <p>Ao reabrir o aplicativo, o modal que está sendo mostrado na foto ao lado será apresentado e você poderá continuar a digitação do pedido de onde parou.</p>   
    </div>
    
</div>

---

