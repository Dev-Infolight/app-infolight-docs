---
sidebar_position: 4
sidebar_label: "Formação de Preço"
title: "Formação de Preço"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import flex from "@site/static/img/erp/painel-flex/flex.png";
import rotina from "@site/static/img/erp/painel-flex/rotina.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Formação de Preço

A rotina de **Formação de Preço** permite calcular o preço de venda dos produtos a partir do seu custo, adicionando percentuais relacionados às despesas de entrada, despesas de saída, comissões e margem de lucro.

Com essa rotina, é possível simular o preço de venda, realizar ajustes manuais e gravar os valores calculados diretamente em uma tabela de preços.

## Acessando a Formação de Preço

Para acessar a rotina, vá até:

**Módulo Estoque → Internos → Formação de Preço**

A tela será aberta inicialmente sem produtos carregados.

Para carregar os produtos, clique com o **botão direito do mouse** sobre a tela.

O sistema permite carregar os itens de diferentes formas, como:

- Produtos de uma tabela de preços
- Produtos por tipo
- Produtos por grupo

Por exemplo, para trabalhar com produtos de produção, é possível selecionar o tipo **Produtos Acabados**.

## Informações Apresentadas

Após carregar os produtos, o sistema apresentará as informações disponíveis para cada item.

Entre elas:

- Estoque
- Último custo
- Preço de compra
- Incidência de ICMS
- Custos adicionais
- Custo de aquisição
- Percentuais incidentes sobre a saída
- Margem de lucro
- Preço de venda sugerido

:::info
Para produtos de produção, o custo será obtido a partir das produções realizadas. Caso o produto ainda não possua uma produção ou movimentação que gere custo, algumas informações poderão aparecer sem valor.
:::

Para produtos de revenda, o sistema também poderá apresentar o **preço de compra**. Já para produtos de produção, esse valor poderá utilizar como referência o próprio custo calculado.

## Custos de Entrada

Na parte inicial da formação de preço, são informados os valores e percentuais que incidem sobre a entrada ou aquisição do produto.

Por exemplo, caso exista um custo de frete de **5%**, informe o percentual no campo correspondente e pressione **Enter**.

O sistema atualizará automaticamente o **Custo de Aquisição**.

Também é possível adicionar outras despesas extras relacionadas ao produto.

Por exemplo:

- Frete
- Despesas adicionais
- Outros custos de aquisição

Sempre que um percentual for informado e confirmado com **Enter**, o sistema recalculará automaticamente os valores.

## Custos de Saída

Após a coluna de **Custo de Aquisição**, podem ser informados os percentuais relacionados à saída e à venda do produto.

Por exemplo, é possível adicionar:

- Comissão
- Outras despesas de venda
- Margem de lucro

Caso seja informada uma comissão de **3%**, o sistema utilizará esse percentual na composição do preço de venda.

Da mesma forma, ao informar uma margem de lucro, como **30%**, o sistema calculará automaticamente o preço de venda sugerido.

## Ajustando o Preço de Venda

Após realizar todos os cálculos, o sistema apresentará um novo preço de venda.

Esse valor poderá ser alterado manualmente.

Por exemplo, caso o sistema sugira o valor de **R$ 2,59**, é possível ajustar o preço para **R$ 2,60**.

Ao alterar manualmente o preço e pressionar **Enter**, o sistema recalculará automaticamente o percentual de margem correspondente ao novo valor informado.

## Identificação dos Produtos Alterados

Sempre que um produto for alterado e confirmado com **Enter**, o sistema apresentará um **asterisco (\*)** na primeira coluna da grade.

Esse asterisco identifica os itens que tiveram alguma alteração.

Dessa forma, no momento da gravação, é possível escolher salvar somente os produtos que foram modificados.

## Gravando os Preços na Tabela

Após finalizar os cálculos e ajustes, clique no botão de **Salvar**, representado pelo ícone de disquete.

O sistema permitirá definir:

- Se serão gravados apenas os itens marcados
- Em qual tabela de preços os valores serão gravados
- Qual coluna será utilizada como referência

Caso queira salvar somente os produtos que possuem o asterisco, marque a opção para gravar apenas os itens alterados.

Em seguida, selecione a tabela de preços desejada e utilize a coluna **Novo Preço**, que contém o resultado dos cálculos realizados.

Confirme a gravação.

## Conferindo a Tabela de Preços

Após salvar, os valores poderão ser consultados diretamente na tabela de preços.

Acesse:

**Módulo Faturamento → Cadastro → Tabela**

Localize a tabela utilizada durante a gravação.

Os produtos calculados na rotina de Formação de Preço estarão cadastrados com os novos valores definidos.

## Resultado do Processo

Ao finalizar o processo, o sistema terá realizado:

- Carregamento dos produtos para análise
- Identificação do custo atual
- Inclusão de despesas de entrada
- Inclusão de despesas de saída
- Aplicação de comissões
- Definição da margem de lucro
- Cálculo do preço de venda sugerido
- Ajuste manual do preço, quando necessário
- Recálculo automático da margem
- Gravação dos preços na tabela selecionada

:::tip
Antes de gravar os valores, confira os percentuais utilizados na composição do preço e utilize a opção de gravar apenas os itens marcados quando não quiser alterar todos os produtos carregados na tela.
:::