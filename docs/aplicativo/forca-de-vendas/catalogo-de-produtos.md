---
sidebar_position: 4
sidebar_label: "Catálogo de produtos"
title: "Catálogo de produtos"
---

import ListagemDeProdutos from "@site/static/img/catalogo-de-produtos/listagem-de-produtos.jpg";
import DetalhesProduto from "@site/static/img/catalogo-de-produtos/detalhes-produto.jpg";
import FiltroPorFoto from "@site/static/img/catalogo-de-produtos/filtro-por-foto.jpg";
import FiltroPorMarcaGrupoSubgrupo from "@site/static/img/catalogo-de-produtos/filtro-por-marca-grupo-subgrupo.jpg";
import FitroDeBuscaPorTexto from "@site/static/img/catalogo-de-produtos/Filtro por busca de texto.jpg";
import ImpressaoCatalogo from "@site/static/img/catalogo-de-produtos/impressao-do-catalogo.jpg";

# Catálogo de produtos

A tela do catálogo de produtos foi projetada para que o usuário tenha a possibilidade de visualizar e compartilhar as informações de todos os produtos da empresa. No decorrer desta página, vamos apresentar o seu funcionamento em detalhes.

## Listagem de produtos

### De onde vem os dados ? 

Esta tela foi desenvolvida para ser utilizada sem o uso de internet, portanto, a obtenção de dados ocorre por meio de uma query que é executada no banco de dados local do usuário. No trecho de código abaixo você pode visualizar esta query.

```SQL showLineNumbers title="query catálogo de produtos"
 SELECT
    DISTINCT A7_CODIGO,
    A7_DESCRIC,
    A7_MARCA,
    A7_GRUPO,
    A7_MESTRE,
    TFP.CAMINHO,
    A7_EAN,
    A7_NCM,
    A7_MULTI,
    A7_PESAGEM,
    A7_PESO,
    A7_UM,
    A7_SEGUM,
    CASE
        WHEN IFNULL(E5_QTATUAL, 0) - IFNULL(E5_QTRESER,0) - IFNULL(E5_QTEMPEN,0) < 0 THEN 0
        ELSE IFNULL(E5_QTATUAL, 0) - IFNULL(E5_QTRESER,0) - IFNULL(E5_QTEMPEN,0)
    END AS QT_DISP
FROM
    TA7$EMPRESA_SELECIONADA
    INNER JOIN TT4$EMPRESA_SELECIONADA ON T4_CODPROD = A7_CODIGO AND T4_FILIAL = A7_FILIAL
    LEFT JOIN TFP ON PRODUTO = A7_CODIGO AND FILIAL = A7_FILIAL
    LEFT JOIN TE5$EMPRESA_SELECIONADA ON E5_FILIAL = A7_FILIAL AND E5_PROD = A7_CODIGO AND E5_ALMOX = A7_ALMOX
WHERE
    A7_FILIAL = '$FILIAL_SELECIONADA'
    AND IFNULL(A7_ATIVO, 'S') <> 'N' 
    AND IFNULL(A7_DISP, 'S') <> 'N'
    AND IFNULL(A7_PALM, 'S') <> 'N'
    AND IFNULL(T4_ATIVO, 'N') = 'S'
    AND (TFP.EMPRESA = '$EMPRESA_SELECIONADA' OR TFP.EMPRESA IS NULL)
ORDER BY
    $MV_APPORDERPROD
```

:::info[INFORMAÇÃO]
    Existem dois detalhes importantes sobre esta query:
        1. A ordenação de dados é feita com base no valor do parâmetro `MV_APPORDERPROD`. Se o parâmetro não estiver cadastrado, o campo `A7_DESCRIC` será utilizado por padrão.
        2. A tabela `TFP` é interna do aplicativo, ela é utilizada para salvar o caminho das fotos dos produtos.
:::

---

### Tipos de visualização

Agora que entendemos a origem dos dados, vamos falar sobre como estes são apresentados na tela. Preparamos dois tipos de visualização, são eles:

1. **Visualização em lista:** Mais compacto, lista os produtos em formato de card, um abaixo do outro;

2. **Visualização em grade:** Ocupando mais espaço, lista os produtos em 2 colunas.

Idenpendentemente do tipo de visualização escolhido, o aplicativo sempre irá exibir as seguintes informações no card do produto:

1. **Foto do produto (se existir);**
2. **Código do produto;**
3. **Nome do produto;**
4. **Primeira e segunda unidade de medida**;
5. **Estoque disponível;**
6. **Quantidade multípla.**

As imagens abaixo demonstram os dois tipos de vizualização que foram citados acima.

<img 
    className="h-500"
    src={ListagemDeProdutos}
    alt="Listagem de produtos"
/>

---


### Detalhes do produto

<img 
    className="h-500 pb-16"
    src={DetalhesProduto}
    alt="Detalhes do produto"
/>

Clicando em cima do card do produto, uma tela com os detalhes do produto em questão será aberta. As seguintes informações serão listadas:

1. **Foto do produto (se existir);**
2. **Código e nome do produto;**
3. **Código de barras (A7_EAN)**;
4. **NCM**;
5. **Unidade de venda;**
6. **Multíplo de venda;**
7. **Peso pela primeira unidade de medida (A7_UM);**
8. **Estoque disponível;**
9. **Listagem de tabelas de preços do produto.**

:::info[INFORMAÇÃO]
1. As tabelas de preços ativas (quantidade mínima = 0) serão destacadas em azul;
2. Ao clicar em cima da foto, você pode visualizar a foto do produto em tela cheia. Este recurso funciona apenas para produtos com foto.
:::

---

## Filtros

### Por foto

Este filtro permite que o usuário altere a visualização dos produtos com base na foto, tendo a possibilidade de:

1. **Exibir todos os produtos;**
2. **Exibir apenas os produtos com foto;**
3. **Exibir apenas os produtos sem foto.**

Para utilizar, clique no icone destacado na imagem 1, e selecione o filtro desejado (imagem 2).

<img 
    className="h-500"
    src={FiltroPorFoto}
    alt="Filtrando os produtos por foto"
/>

---

### Por texto

Você também pode buscar o produto desejado escrevendo no campo de busca. A busca funciona por correspondência, ou seja, você não precisa digitar o texto completo, se exitir alguma informação no produto que se encaixe no que foi digitado, o produto será exibido na tela. Outro ponto importante, é que a busca não é case-sensitive, ou seja, você pode usar letras maiúsculas ou minúsculas que não vai fazer diferença no resultado.

Abaixo está um exemplo de busca por um produto cujo o nome contenha a palavra "51 ice".

<img 
    className="h-500"
    src={FitroDeBuscaPorTexto}
    alt="Filtrando os produtos texto"
/>

---

### Por marca, grupo e subgrupo

Este filtro é útil quando o usuário deseja visualizar apenas os produtos de uma marca, grupo e/ou subgrupo específico. Para utilizar, basta clicar no ícone que está destacado na imagem 1, e selecionar o filtro desejado no modal que será aberto na tela.

:::info[SOBRE O FILTRO POR MARCA]
O filtro por marca só será apresentado quando o tipo da empresa for **comércio**, ou seja, quando o valor do campo **X1_TPATIV = '2'** na tabela de **Cadastro de empresas (AX1)**.
:::

A imagem abaixo demonstra como utilizar o filtro:

<img 
    className="object-fit-contain"
    src={FiltroPorMarcaGrupoSubgrupo}
    alt="Filtrando os produtos por marca, grupo e subgrupo"
/>

---

## Impressão do catálogo

O aplicativo Infolight também fornece uma funcionalidade para gerar um PDF do catálogo de produtos. Funciona da seguinte maneira: Basicamente, os produtos que estão sendo exibidos na tela no momento, serão os produtos que serão exibidos na impressão, ou seja, você tem a possibilidade de imprimir o catálogo completo, ou com apenas os produtos que você desejar. Todos os filtros aplicados na tela são considerados na geração do PDF.

:::warning[ATENÇÃO]
Esta rotina é bastante pesada, portanto, recomendamos fortemente que você filtre os dados antes de gerar o PDF. A impressão de um catálogo com muitos produtos pode gerar travamentos e até mesmo crashar o aplicativo se o seu celular não for muito potente. 

Caso a empresa seleciona for um comércio, o aplicativo exige pelo menos um filtro para gerar o PDF.
:::

A imagem abaixo mostra como gerar o PDF do catálogo:

<img 
    className="object-fit-contain"
    src={ImpressaoCatalogo}
    alt="Imprimindo o catálogo de produtos"
/>

---