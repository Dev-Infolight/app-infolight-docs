---
sidebar_position: 2
sidebar_label: "Painel de vendas"
title: "Painel de vendas"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import local from "@site/static/img/erp/painel-do-cliente/local.png";
import painel from "@site/static/img/erp/painel-de-vendas/painel.png";
import supervisor from "@site/static/img/erp/painel-de-vendas/supervisor.png";
import imprimir from "@site/static/img/erp/painel-de-vendas/imprimir.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Painel de Vendas

A rotina **Painel de Vendas** do sistema Tempus tem como finalidade fornecer uma visão analítica completa das vendas realizadas pela empresa, permitindo o acompanhamento de desempenho comercial, rentabilidade, bonificações e indicadores estratégicos de faturamento.

Por meio desta rotina, é possível analisar:
- Vendas por gerente, supervisor e vendedor
- Produtos vendidos
- Fornecedores
- Custos médios
- Rentabilidade das vendas
- Bonificações
- Trocas
- Faltas de estoque
- Quantidades, pesos e valores vendidos

O painel é uma importante ferramenta de gestão comercial e apoio à tomada de decisões estratégicas.

## Acesso à Rotina

### Caminho:
**Módulo Administrador > Consultas > Faturamento > Painel de Vendas**

## Filtros da Consulta

Ao acessar o painel, será possível configurar diversos filtros para análise das informações.

<div className="imgRow">
    <img 
        src={painel}
        alt="Acesso ao menu"
    />
</div>

### Data
Informe o período desejado para consulta das vendas.

### Tipo de Visualização
Escolha o formato de análise:
- Valor
- Quantidade
- Peso

### Faltas em Estoque
Permite exibir em coluna separada os itens eliminados dos pedidos por falta de estoque.

### Devoluções
Define se as devoluções deverão ser consideradas na análise.

### Bonificação
Permite considerar ou não bonificações no cálculo da rentabilidade.

## Consolidação de Regras de Saída

O sistema permite consolidar múltiplas regras de venda.

### Exemplo:
`501,502`

Essa configuração centraliza:
- Regras de venda
- Regras de bonificação

facilitando uma análise mais organizada e precisa.

## Tipo de Produtos

É possível definir quais categorias de produtos serão exibidas:

- Produto Acabado (PA)
- Produto de Terceiro
- Revenda

Após configurar os filtros:
- Clique no botão de execução da consulta.

## Navegação da Consulta

A análise é realizada de forma hierárquica utilizando a tecla **Enter**.

## Análise por Fornecedor

A primeira visualização será agrupada por fornecedor/fábrica.

Caso existam múltiplos fornecedores:
- O sistema exibirá uma linha para cada fornecedor
- Também haverá uma linha de totalização geral

### ENTER na Linha
Exibe detalhes específicos.

### ENTER na Linha Total
Exibe o consolidado geral.

## Análise por Supervisor e Gerente

Dependendo da estrutura comercial:
- O sistema poderá apresentar níveis de gerente e supervisor

<div className="imgRow">
    <img 
        src={supervisor}
        alt="Acesso ao menu"
    />
</div>

Ao pressionar **Enter**, será possível navegar entre os níveis hierárquicos até chegar aos vendedores.

## Análise por Vendedor

Para visualizar as vendas de um vendedor específico:
- Selecione a linha desejada
- Pressione **Enter**

O sistema exibirá:
- Todas as vendas realizadas pelo vendedor
- Produtos vendidos
- Indicadores financeiros

## Análise por Grupo de Produtos

Caso utilize a linha total:
- O sistema exibirá os grupos de produtos cadastrados

A navegação segue o mesmo padrão:
- **Enter na linha** → Detalhamento específico
- **Enter na linha total** → Consolidação geral

## Análise de Produtos

Ao aprofundar a consulta:
- O sistema exibirá todos os produtos vendidos no período

As informações apresentadas incluem:

### Valor Vendido
Valor total vendido por produto.

### Bonificação
Valor total concedido em bonificações.

### Faltas
Itens eliminados dos pedidos por indisponibilidade de estoque.

### Quantidade Vendida
Quantidade total comercializada.

### Custo Médio de Produção
Calculado automaticamente com base nas movimentações produtivas.

### Preço Médio de Venda
Calculado automaticamente conforme os preços praticados nas vendas.

### Rentabilidade
Percentual de margem/rentabilidade obtida sobre o produto.

## Totalizadores

Ao final da consulta, o sistema apresenta:
- Total vendido no período
- Total de bonificações
- Valores de troca
- Indicadores gerais consolidados

## Impressão e Exportação

A rotina permite:

### Impressão em PDF
Gerar relatórios para análise e apresentação.

### Exportação em CSV
Exportar os dados em formato de planilha para tratamento externo e análises complementares.

<div className="imgRow">
    <img 
        src={imprimir}
        alt="Acesso ao menu"
    />
</div>

## Considerações Gerais

O Painel de Vendas proporciona:
- Controle estratégico das vendas
- Acompanhamento de rentabilidade
- Gestão comercial detalhada
- Monitoramento de bonificações
- Análise de desempenho da equipe
- Controle de margem
- Apoio à tomada de decisões

A utilização frequente dessa rotina permite maior visibilidade operacional e melhor gestão dos resultados comerciais da empresa.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::