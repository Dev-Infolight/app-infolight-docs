---
sidebar_position: 3
sidebar_label: "Painel Flex"
title: "Painel Flex"
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

# Consulta de Flex

A rotina **Consulta de Flex** do sistema Tempus tem como finalidade analisar as diferenças entre o valor de tabela dos produtos e o valor efetivamente negociado nas vendas realizadas.

Esse processo permite acompanhar:
- Flex concedido pelos vendedores
- Diferenças positivas e negativas de negociação
- Impacto financeiro das vendas
- Análise por vendedor
- Análise por cliente
- Análise por produto
- Histórico detalhado das vendas finalizadas

A ferramenta auxilia diretamente no controle comercial e no acompanhamento da política de preços da empresa.

## Acesso à Rotina

A consulta de flex é realizada diretamente pelo sistema interno, não sendo acessada pelo aplicativo.

### Caminho da rotina:
**Controle > Módulo Administrador > Consulta > Faturamento > Flex**

## Filtros da Consulta

Ao acessar a rotina:
- Informe o período desejado para análise
- Clique no botão de execução da consulta

O sistema exibirá os resultados agrupados inicialmente por vendedor.

## Análise Geral

Para visualizar o total geral:
- Posicione na última linha da listagem
- Pressione **Enter**

O sistema apresentará a apuração consolidada do período.

## Análise por Vendedor

Caso deseje analisar um vendedor específico:
- Selecione o vendedor desejado
- Pressione **Enter**

O sistema exibirá os clientes atendidos por aquele vendedor dentro do período informado.

## Interpretação dos Valores

Na consulta, serão apresentados:

### Valor de Tabela
Representa quanto a venda seria caso os produtos fossem faturados exatamente pelo preço padrão da tabela.

### Valor Negociado
Representa o valor efetivamente vendido após negociações comerciais.

## Exemplo de Flex

### Flex Negativo
- Valor de tabela: `R$ 2.247,48`
- Valor negociado: `R$ 2.243,84`

Resultado:
- Flex menor de `R$ 3,64`

### Flex Positivo
- Valor de tabela: `R$ 3.382,58`
- Valor negociado: `R$ 3.394,58`

Resultado:
- Flex maior de `R$ 12,00`


## Apuração do Resultado

O sistema realiza automaticamente:
- Soma dos valores positivos
- Subtração dos valores negativos
- Apuração final do saldo de flex

O resultado consolidado será exibido ao final da consulta.

## Análise por Cliente

Para detalhar um cliente específico:
- Selecione o cliente desejado
- Pressione **Enter**

O sistema exibirá:
- Notas fiscais
- Vendas finalizadas
- Movimentações internas relacionadas ao cliente

## Análise por Produto

Ao acessar os detalhes da venda:
- Pressione novamente **Enter**

O sistema apresentará:
- Produtos envolvidos
- Flex aplicado em cada item
- Diferença positiva ou negativa
- Total da apuração por produto


## Considerações Gerais

A rotina de Flex proporciona:
- Controle das negociações comerciais
- Auditoria de preços praticados
- Monitoramento de concessões comerciais
- Acompanhamento do desempenho dos vendedores
- Gestão estratégica de margem
- Transparência nas negociações

A análise frequente do flex ajuda a empresa a manter maior controle sobre descontos, negociações e rentabilidade das vendas.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::