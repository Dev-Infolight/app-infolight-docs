---
sidebar_position: 1
sidebar_label: "Painel do Cliente"
title: "Painel do Cliente"
---
import pagina from "@site/static/img/erp/painel-do-cliente/pagina.png";
import ZoomableImage from "@site/src/components/ZoomableImage";


# Painel do Cliente

A rotina **Painel do Cliente** do sistema Tempus, localizada no módulo de faturamento, tem como finalidade permitir uma análise detalhada do comportamento de compra dos clientes, bem como o desempenho das vendas realizadas.

## Filtros Iniciais (Tela de Pesquisa)

**DATA** – Informe o período desejado (ex.: data de emissão) para extração dos dados.

**VENDEDOR** – Filtro opcional utilizado para análise das vendas de um colaborador específico.

**REGRAS** – Definição das regras de venda e bonificação. Recomenda-se a utilização de uma regra centralizada.

**INDICADORES DE ANÁLISE** – Permite visualizar os resultados com base em:
- Preço Médio
- Falta
- Valor
- Quantidade
- Peso

**RENTABILIDADE** – Define se a bonificação será considerada ou não nos cálculos.

<div className="divRow">
    <ZoomableImage 
        src={pagina}
        alt="Painel cliente"
    />
</div>

## Visualização dos Resultados

Após configurar os filtros desejados, clique em **Sim** ou **Executar** para processar a consulta.

O sistema apresentará uma listagem de clientes contendo:
- Valor total adquirido
- Percentual de representatividade (%) no faturamento

## Indicadores do Painel (Grade Inferior)

**TOTAL DE CLIENTES ATIVOS** – Quantidade total de clientes cadastrados na base.

**CLIENTES POSITIVADOS** – Clientes que realizaram compras no período informado.

**CLIENTES NÃO POSITIVADOS** – Clientes que não efetuaram compras durante o período selecionado.

**SITUAÇÃO FINANCEIRA** – Exibe:
- Títulos a vencer
- Quantidade de clientes com débitos
- Total de inadimplentes

## Detalhamento de Produtos e Financeiro

**ENTER (Ver Produtos)** – Com um cliente selecionado, pressione **Enter** para visualizar todos os produtos adquiridos, incluindo suas respectivas quantidades.

**F3 (Posição Financeira)** – Pressione **F3** para consultar detalhadamente a situação financeira do cliente selecionado, incluindo títulos, prazos e pendências.

## Considerações Gerais

Diferente do **Painel de Vendas**, que possui foco no desempenho do vendedor, o **Painel do Cliente** é voltado à análise do comportamento de compra do cliente, permitindo uma visão estratégica sobre consumo, relacionamento comercial e situação financeira.

## Vídeo Tutorial: Passo a Passo

Se preferir acompanhar o processo de forma visual, assista ao tutorial abaixo:

<div className="video-container">
    <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/Jjuq-ITjUc8"
        title="Painel do Cliente - Infolight"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</div>

:::tip
Por fim, caso ainda tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::