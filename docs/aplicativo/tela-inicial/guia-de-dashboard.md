---
sidebar_position: 1
sidebar_label: 'Guia "Dashboard"'
title: 'Guia "Dashboard"'
---

import Dashboard100 from "@site/static/img/guia-dashboard/dashboard-100.jpg";
import Dashboard101 from "@site/static/img/guia-dashboard/dashboard-101.jpg";
import MetaDeVendasPorProduto from "@site/static/img/guia-dashboard/metas-vendas-por-produto.jpg";
import MetaDeVendasPorVendedor from "@site/static/img/guia-dashboard/metas-vendas-por-vendedor.jpg"
import AtualizandoDados from "@site/static/img/guia-dashboard/atualizando-dados.jpg";


# Guia do dashboard

No dashboard, o usuário poderá conferir relatórios relevantes para o seu contexto. 

Atualmente, existem dois tipos de dashboard, são eles:

1. **Dashboard para gestores;**
2. **Dashboard para vendedores.**

A escolha sobre qual dashboard será exibido se dá através do campo **X6_DASH** da tabela de **usuários x módulos (AX6)**.

<table>
    <tr>
        <th>X6_DASH</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>100</td>
        <td>Exibe o dashboard para gestores</td>
    </tr>
    <tr>
        <td>101</td>
        <td>Exibe o dashboard para vendedores</td>
    </tr>
</table>

:::tip[DICA]
Você também pode ocultar a guia do dashboard da tela inicial. Para isto, basta cadastrar o **X6_DASH** como uma **string vazia (X6_DASH = "")**.
:::

Durante as seções a seguir, vamos entender o que é exibido em cada dashboard.

---

## Dashboard do gestor

<div className="divRow pb-16">
    <img 
        src={Dashboard100}
    />
    <img 
        src={MetaDeVendasPorVendedor}
    />
</div>

No dashboard do gestor, o usuário pode visualizar os seguintes gráficos:

1. **Faturamento mensal dos últimos 3 meses**;

    :::tip[DICA]
    Para visualizar o valor de faturamento de algum mês, basta clicar e segurar em cima da barrinha azul referênte ao mês.
    :::

3. **Acompanhamento da meta de vendas mensal**;

    :::tip[VISUALIZAR DETALHES DA META DE VENDAS]
    Ao clicar em cima do gráfico de meta de vendas, você será redirecionado para a tela de **Metas de vendas por vendedor**, e poderá acompanhar o progresso de cada um deles.
    :::

---

## Dashboard do vendedor

<div className="divRow pb-16">
    <img 
        src={Dashboard101}
    />
    <img 
        src={MetaDeVendasPorProduto}
    />
</div>

No dashboard para o vendedor, o usuário pode visualizar os seguintes gráficos:

1. **Total de vendas mensais dos últimos 3 meses**;

    :::tip[DICA]
    Para visualizar o total de vendas de algum mês, basta clicar e segurar em cima da barrinha azul referênte ao mês.
    :::

3. **Acompanhamento da meta de vendas mensal**;

    :::tip[VISUALIZAR DETALHES DA META DE VENDAS]
    Ao clicar em cima do gráfico de meta de vendas, você será redirecionado para a tela de **Metas de vendas**, e poderá acompanhar o progresso por produto.
    :::

---

## Atualizando dados do dashboard

<div className="divRow">
    <img 
        src={AtualizandoDados}
        alt="Atualizando informações do dashboard"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Projetamos o dashboard para que o usuário possa utiliza-ló sem o uso de internet, portanto, ao abrir esta tela, o aplicativo estará listando os dados a partir das tabelas de metas e vendas dos meses que estão na base do usuário.</p>
        <p>Para atualizar as informações, arraste para baixo e aguarde o processo ser concluído.</p>
        :::info[IMPORTANTE]
        A atualização de dados requer uma conexão com a internet.
        :::
    </div>
</div>

---