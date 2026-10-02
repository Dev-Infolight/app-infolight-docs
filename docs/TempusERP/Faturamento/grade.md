---
sidebar_position: 7
sidebar_label: "Grade de Produtos"
title: "Grade de Produtos"
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

# Grade de Produtos

A rotina de **Grade de Produtos** permite trabalhar com produtos que possuem variações, como **cor, tamanho, sabor, embalagem ou voltagem**.

Cada combinação de características é cadastrada como um produto próprio, com seu respectivo código, preço e estoque. A grade facilita principalmente o lançamento de várias combinações de um mesmo produto no pedido de venda. :contentReference.

## Como funciona

A grade é composta por três partes:

- **Tabelas de grade:** possuem as variações utilizadas, como cores e tamanhos.
- **Produto de referência:** representa o modelo principal do produto e concentra os dados fiscais e comerciais.
- **Itens da grade:** são os produtos criados automaticamente para cada combinação entre as variações.

Por exemplo, uma referência **Camisa Polo Piquet** pode gerar:

- Camisa Polo Piquet Azul P
- Camisa Polo Piquet Azul M
- Camisa Polo Piquet Preto P
- Camisa Polo Piquet Preto M

Cada combinação possui estoque e código próprios. :contentReference.

## Tabelas de grade

Acesse:

**Cadastros → Tabelas de grade**

Cadastre uma tabela para cada tipo de variação que será utilizada.

### Campos

| Campo | Descrição |
|---|---|
| **Código da tabela** | Identifica a tabela, como `COR` ou `TAM`. |
| **Descrição da tabela** | Nome apresentado na matriz, como Cores ou Tamanhos. |
| **Código do item** | Código utilizado nos produtos gerados. |
| **Descrição do item** | Descrição da variação, como Azul, Preto, P, M ou G. |
| **Ordem** | Define a posição da variação na matriz. |

Exemplo:

| Tabela | Itens |
|---|---|
| **COR** | AZ - Azul / PR - Preto / BR - Branco |
| **TAM** | PP / P / M / G / GG |

Os códigos devem ser planejados antes da geração, pois o código final do produto é formado pela combinação do código da referência com os códigos das variações e não pode ultrapassar 15 caracteres. :contentReference.

## Cadastrar o produto de referência

Acesse:

**Cadastros → Produtos**

Cadastre o produto normalmente e informe os dados fiscais e comerciais necessários.

Na guia **Grade**, configure:

- **Grade:** selecione **Referência**.
- **Tabela das linhas:** informe a tabela que será utilizada nas linhas da matriz.
- **Tabela das colunas:** informe a tabela que será utilizada nas colunas da matriz.

É necessário informar pelo menos uma tabela. Quando forem utilizadas linhas e colunas, elas devem ser tabelas diferentes. :contentReference.

> **Importante:** o produto de referência não é vendido e não possui estoque. Ele serve para gerar e abrir a matriz da grade.

## Gerar a grade

Depois de cadastrar a referência:

1. Acesse a lista de **Produtos**.
2. Localize o produto configurado como **Referência**.
3. Selecione o produto.
4. Clique em **Gerar grade**.
5. Confira a quantidade de combinações que serão criadas.
6. Confirme a geração.

O sistema combina automaticamente o código da referência com os códigos das linhas e colunas.

Exemplo:

```text
00123 + AZ + M = 00123AZM