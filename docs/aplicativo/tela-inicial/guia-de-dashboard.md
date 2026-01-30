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
import Dashboard000 from "@site/static/img/dashboard-000/dashboard-000.png";
import ClientesPorStatus from "@site/static/img/dashboard-000/Clientes-por-status.png";
import BuscandoDados from "@site/static/img/dashboard-000/Buscando-dados.png";
import RupturaItensCriticos from "@site/static/img/dashboard-000/Ruptura-em-itens-criticos.png";

# Guia do dashboard

No dashboard, o usuário poderá conferir relatórios relevantes para o seu contexto. 

A escolha sobre qual dashboard será exibido se dá através do campo **X6_DASH** da tabela de **usuários x módulos (AX6)**.

<table>
    <thead>
        <tr>
            <th>X6_DASH</th>
            <th>Descrição</th>
            <th>Tipo de Funcionamento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>100</td>
            <td>Exibe o dashboard para gestores</td>
            <td>Funciona sem internet, mas, para atualizar os dados, uma conexão com a internet se faz necessária.</td>
        </tr>
        <tr>
            <td>101</td>
            <td>Exibe o dashboard para vendedores</td>
            <td>Funciona sem internet, mas, para atualizar os dados, uma conexão com a internet se faz necessária.</td>
        </tr>
        <tr>
            <td>000</td>
            <td>Exibe o dashboard de gestão a vista.</td>
            <td>Funciona apenas com internet.</td>
        </tr>
    </tbody>
</table>

:::tip[DICA]
Você também pode ocultar a guia do dashboard da tela inicial. Para isto, basta cadastrar o **X6_DASH** como uma **string vazia (X6_DASH = "")** e atualizar as **tabelas de configuração** na [guia de configurações](./guia-de-configuracoes.md#dados).
:::

Durante as seções a seguir, vamos entender o que é exibido em cada dashboard.

---

## **Dashboards sem internet:**

### 100: Dashboard do gestor

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

### 101: Dashboard do vendedor

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

### Atualizando dados do dashboard

<div className="divRow">
    <img 
        src={AtualizandoDados}
        alt="Atualizando informações do dashboard"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Os dashboards do gestor e do vendedor foram projetados para que o usuário possa utilizá-los sem o uso de internet, portanto, ao abrir esta tela, o aplicativo estará listando os dados a partir das tabelas de metas e vendas dos meses que estão na base do usuário.</p>
        <p>Para atualizar as informações, arraste para baixo e aguarde o processo ser concluído.</p>
        :::info[IMPORTANTE]
        A atualização de dados requer uma conexão com a internet.
        :::
    </div>
</div>

---

## **Dashboards com internet:**

### 000: Dashboard gestão a vista

Este dashboard foi projetado para a **diretória da empresa**. Com ele, o usuário poderá visualizar informações extremamente relevantes sobre o setor financeiro da empresa em um determinado período.

<div className="divRow pb-16">
    <img
        src={Dashboard000}
        alt="dashboard gestão a vista"
        className="h-500"
    />
    <div className="divColumn">
        <b>Com este dashboard, o usuário terá a possibilidade de:</b>
        <ul>
            <li>Visualizar o valor do faturamento da empresa em um determinado período, e identificar se o mesmo foi maior ou menor do que o ano ou mês anterior;</li>
            <li>Visualizar a quantidade de pedidos de venda que foram cadastrados naquele período, e conferir quantos já estão em separação;</li>
            <li>Visualizar a quantidade de novos clientes daquele período, e dentre eles, conferir a porcentagem de novos, pendentes e inativados;</li>
            <li>Visualizar a quantidade de itens critícos em ruptura;</li>
            <li>Verificar a porcentagem de vendas por cada segmento venda e status dos pedidos.</li>
        </ul>
    </div>
</div>

#### Ao abrir o dashboard, qual o período será considerado para exibir os dados ? 

Ao abrir o dashboard, o aplicativo irá considerar o período começando do primeiro dia do mês, até o dia atual.

Exemplo considerando o dia atual como dia 30/01/2026:

- Primeiro dia do mês: 01/01/2026
- Dia atual: 30/01/2026

Neste cenário, o período a ser utilizado será: de 01/01/2026 a 30/01/2026.

#### Como faço para mudar o período ? 

Para buscar os dados de outro período:

- Clique no ícone de calendário que está localizado no canto superior direito da tela;
- No modal que será aberto, selecione as datas e o período de comparação de dados desejado;
- Clique no botão "OK".

Após a realização dos passos apresentados acima, o dashboard será recarregado para apresentar os dados referentes as datas e o período de comparação de dados que foi selecionado.

:::info[DÚVIDAS COMUNS]
1. **O que é o período de comparação de dados ?**

    O período de comparação de dados consiste basicamente na forma como o valor do faturamento será comparado a período anterior. Existem dois tipos de comparação:

    1. **Anual (padrão):** Compara o valor do faturamento referênte ao período com o valor do faturamento do mesmo período no ano anterior.
    2. **Mensal:** Compara o valor do faturamento referênte ao período com o valor do faturamento do mesmo período no mês anterior. 
            
2. **Ao sair do dashboard, o período anteriormente buscado, permanecerá salvo ?**

    Ao abrir o dashboard, caso o dia em que você buscou os dados pela última vez seja igual ao dia atual, o período será mantido, caso contrário, o dashboard exibirá os dados começando do dia 01 até o dia de hoje do mês atual. 

    Vamos entender melhor, para o exemplo, considere:
    
    - Dia atual como o dia 30/01/2026;
    - Dia que você acessou o dashboard e buscou os dados pela última vez: 30/01/2026;
    - Período buscado como: Do dia 01/01/2026 até 10/01/2026.
    
    No exemplo acima, o usuário buscou os dados pela última vez no dia 30/01 e está acessando o dashboard ainda no dia 30/01, portanto, o período anteriormente buscado será mantido ao abrir o dashboard novamente (de 01/01/2026 até 10/01/2026).

3. **Como faço para buscar por um período onde a data inicial é igual a data final ?**

    Para isto, basta clicar duas vezes em cima do dia desejado, e em sequência, clicar no botão "OK".
:::

Na imagem abaixo você pode conferir o processo para buscar os dados:

<img
    src={BuscandoDados}
    alt="Buscando dados"
    className="h-500 object-fit-contain"
/>

#### Clientes por status

Ao clicar no card das informações dos clientes, você será redirecionado para uma nota tela. Nesta, você poderá:

1. Visualizar todos os clientes em questão;
2. Filtrar a lista de clientes com base no status (todos, novos, pendentes e inativos);
3. Visualizar um gráfico de pizza com a porcentagem de clientes baseada nos status.

:::tip[DICA]
Você pode ocultar o gráfico de pizza clicando no ícone que representa um olho que fica localizado no canto superior direito da tela.
:::

Na imagem abaixo, você pode conferir todos os detalhes desta tela:

<img
    src={ClientesPorStatus}
    alt="Clientes por status"
    className="h-500 object-fit-contain"
/>

#### Ruptura em itens críticos

Clicando no card dos itens criticos em ruptura, uma nova tela será aberta, e nela você poderá:

1. Visualizar todos os itens que estão em ruptura, com foto, quantidade e valor de cada um deles;
2. Filtrar os dados com base no tipo dos itens: bebidas, rações e etc;
3. Visualizar um totalizador com a quantidade de itens e o somatório total.

A imagem abaixo demonstra esta tela em detalhes:

<img
    src={RupturaItensCriticos}
    alt="Ruptura em itens criticos"
    className="h-500 object-fit-contain"
/>

### Atualizando dados do dashboard

<div className="divRow">
    <video
        src="/videos/updating.mp4"
        preload="none"
        autoPlay
        loop
        muted
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Para atualizar os dados do dashboard, basta arrastar o dedo para baixo e esperar o processo ser concluído. Este processo requer uma conexão com a internet.</p>
        :::info[INFORMAÇÃO]
        O aplicativo sempre irá considerar o último período de dados que foi buscado, ou seja, se você buscou os dados do dia 01/01 a 10/01, ao atualizar o aplicativo irá buscar por novos dados nesse mesmo período.
        :::
    </div>
</div>

---

