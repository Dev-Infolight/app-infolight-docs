---
sidebar_position: 6
sidebar_label: "Nova venda"
title: "Nova venda"
---

import Cabecalho1 from "@site/static/img/cabecalho1.png";
import Cabecalho2 from "@site/static/img/cabecalho2.png";
import CampoRegraDeSaida from "@site/static/img/campo-regra-de-saida.png";
import EscolhendoRegraDeSaida from "@site/static/img/escolhendo-regra-de-saida.png";

# Nova venda

A **criação de pedidos de venda** é um dos recursos mais significativos do aplicativo infolight. Está rotina permite que o vendedor cadastre pedidos de venda para os clientes de sua carteira.

A tela de nova venda é dividida em 3 guias principais: **Cabeçalho**, **Produtos**, **Carinho**. Falaremos sobre elas durante as seções abaixo.

## Cabeçalho

O preenchimento das informações do cabeçalho é o primeiro passo a ser realizado durante o cadastro de um novo pedido de venda. As duas imagens a seguir demonstram a guia do cabeçalho.

<div className="divRow">
    <img src={Cabecalho1} alt="Primeira parte do cabeçalho"/>
    <img src={Cabecalho2} alt="Segunda parte do cabeçalho"/>
</div>

### Entendendo os campos do cabeçalho

#### Regra de saída <span className="color-red">*</span>

<div className="images-grid-rows-2">
    <img src={CampoRegraDeSaida} alt="Campo de regra de saída"/>
    <img src={EscolhendoRegraDeSaida} alt="Lista de regras de saída"/>
</div>

No campo de regra de saída, o vendedor seleciona o tipo do novo pedido de venda, ou seja, define se o pedido vai ser uma venda, troca, bonificação e etc. 

As opcões que serão apresentadas ao vendedor neste campo, serão provenientes de duas tabelas: 

1. **TAE - Cadastro de regras**;
2. **TBE - Regras de saída por vendedor**.

Funciona assim: por padrão, o aplicativo irá listar todas as regras de saída que estão cadastradas TAE (considerando empresa e filial a qual o usuário está logado), e caso a tabela TBE exista na base do vendedor, o aplicativo irá fazer uma cruzamento de informações para listar apenas as regras de saída que são associadas ao vendedor em questão. No trecho de código abaixo, você pode conferir exatamente como este processo funciona:

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

```
```SQL showLineNumbers title="TBE existe na base do vendedor:"
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
```

Ao selecionar uma regra de saída, o aplicativo irá filtrar o campo de **Condições de pagamento** para listar apenas as que são atreladas a regra de saída em selecionada. A seguinte query é utilizada:

```SQL showLineNumbers title="Buscando condições de pagamento que são atreladas a regra de saída"
SELECT
    B5_CONDPAG
FROM
    TB5${EMPRESA_SELECIONADA}
WHERE
    B5_TS = '$REGRA_DE_SAÍDA_SELECIONADA'
    AND B5_FILIAL = '$FILIAL_SELECIONADA'
```

As condições de pagamento que forem retornadas no resultado desta query serão listadas.


#### Condição de pagamento

Este é o campo onde é definido a forma de pagamento escolhida pelo cliente.



#### Tabela de preços


## Produtos

## Carrinho

## Mas afinal, como funciona o cadastro ?
