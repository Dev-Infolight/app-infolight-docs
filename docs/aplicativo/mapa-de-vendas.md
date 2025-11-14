---
sidebar_position: 10
sidebar_label: "Mapa de vendas"
title: "Mapa de vendas"
---

import MapaPedidos from "@site/static/img/mapa-de-vendas/Mapa-dos-pedidos.jpg";
import Legenda from "@site/static/img/mapa-de-vendas/Legenda-do-mapa.jpg";
import Zoom from "@site/static/img/mapa-de-vendas/Zoom-do-mapa.jpg";
import PedidosSuspeitos from "@site/static/img/mapa-de-vendas/Pedidos-suspeitos.jpg";
import DetalhesPedido from "@site/static/img/mapa-de-vendas/Detalhes-do-pedido.jpg";
import FiltroPorVendedor from "@site/static/img/mapa-de-vendas/Filtragem-por-vendedor.jpg";
import FiltroPorPeriodo from "@site/static/img/mapa-de-vendas/Filtragem-por-periodo.jpg";
import MapaEmTelaCheia from "@site/static/img/mapa-de-vendas/Visualizacao-em-tela-cheia.jpg";


# Mapa de vendas

<div className="divRow pb-16">
    <img 
        src={MapaPedidos}
    />
    <div className="divColumn">
        <p>Um recurso bem interessante do aplicativo infolight é o **Mapa de vendas**. Esta tela permite que o usuário:</p>
        <ul>
            <li>Visualize o **local** de todos os `pedidos de venda` e `visitas não positivadas` que foram digitadas por ele;</li>
            <li>Visualize informações relevantes, como: `Quantidade de pedidos exibidos`, `Quantidade de visitas não positivadas`, `Valor total de pedidos, trocas e bonificações`, `Valor do ticket médio naquele período`, e por fim, o `periodo referente aos dados que estão sendo exibidos na tela`;</li>
            <li>**Filtre** os dados por `período` e também por `vendedor`;</li>
            <li>Detecte possíveis vendedors que não visitaram o cliente para a realização do pedido (pedidos suspeitos).</li>
        </ul>
    </div>
</div>

:::info[É IMPORTANTE SABER]
    A `filtragem de pedidos por vendedor` e a `detecção de pedidos suspeitos` são recursos exclusivos para usuários do modulo **gestor**.
:::

Durante as seções abaixo, explicaremos como utilizar cada funcionalidade desta tela.

---

## Seções

### Legenda

<img
    className="h-500 object-fit-contain"
    src={Legenda}
/>

#### Entendendo

A legenda do mapa foi projetada para que o usuário entenda o que significa cada informação apresentada no mapa. O processo para visualizar a legenda é muito simples, basta clicar no botão que está destacado na imagem 1 e o modal com as informações será apresentado (imagem 2).

---

### Zoom

<div className="divRow">
    <img 
        className="h-500"
        src={Zoom}
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Outro recurso que pode ser útil é a possibilidade aproximar ou distanciar a visualização do mapa. Para aproximar, clique no botão `+`, para distanciar, clique no botão `-`.</p>
        :::tip[DICA]
        O mapa também permite que você aplique o zoom fazendo movimento de pinça com os dedos.
        :::
    </div>
</div>

---

### Vizualizar em tela cheia

<img 
    className="h-500 object-fit-contain"
    src={MapaEmTelaCheia}
/>

#### Entendendo

Pensando nos usuários que possuem celulares com telas pequenas ou que desejam visualizar o mapa de uma forma mais limpa, também oferecemos uma função para esconder o resumo de informações e visualizar o mapa em tela cheia. Basta clicar no botão que está destacado na imagem 1.

---

### Detalhes do pedido

<img 
    className="h-500 object-fit-contain"
    src={DetalhesPedido}
/>

#### Entendendo

Visualizar apenas os marcadores no mapa, não é uma informação que vai ajudar o vendedor, porquê ele vai se deparar com um mar de marcadores e não conseguir descobrir a qual pedido aquele marcador se refere. Pensando nisso, a tela do mapa permite que ao clicar em cima de um marcador, o vendedor consiga visualizar as informações daquele pedido ou visita não positivada.

---

### Filtragem de dados por período

<img 
    className="h-500 object-fit-contain"
    src={FiltroPorPeriodo}
/>

#### Entendendo

Ao abrir a tela do mapa, o padrão é que apenas os pedidos e visitas não positivadas que foram digitadas naquele mesmo dia, sejam exibidos, porém, você pode visualizar os dados de qualquer período que desejar. Para isto, basta clicar no ícone que está destacado na imagem 1, selecionar o período, e por fim, clicar em `OK`.

:::tip[DICA]
Para escolher um período onde a **data inicial é igual a data final**, clique duas vezes em cima do dia, e depois clique em `OK`.
:::

---

### Filtragem de dados por vendedor

<img 
    className="h-500 object-fit-contain"
    src={FiltroPorVendedor}
/>

#### Entedendo

Para visualizar os dados relacionados a vendedores específicos, clique no ícone destacado na imagem 1, selecione os vendedores a qual você deseja visualizar as informações e clique no botão `Filtrar` (imagem 2).

:::info[INFORMAÇÃO]
Filtro exclusivo para usuários do módulo de gestor.

:::tip
Ao filtrar os dados por vendedor, o aplicativo irá exibir todos os pedidos, visitas não positivadas e 0 endereço da casa do vendedor no mapa.
:::

---

### Detecção de pedidos suspeitos

<img 
    className="h-500 object-fit-contain"
    src={PedidosSuspeitos}
/>

#### Entendendo

Esta funcionalidade foi desenvolvida para ajudar os gestores a identificar possíveis vendedores que dizem que visitaram o cliente, mas, na verdade, estavam fazendo o pedido de casa. 

Baseado nos dados que estão na tela, o aplicativo verifica todos os pedidos que o vendedor fez em uma mesma data, para clientes diferentes, em localizações parecidas.

Para utilizar essa rotina, clique no ícone destacado na imagem 1, selecione os vendedores a qual quer analisar, e clique em `Mostrar no mapa`. Com os vendedores selecionados, um modal que agrupa os pedidos suspeitos de cada vendedor será apresentado. Ao clicar em cima de um pedido suspeito, o aplicativo irá traçar uma linha, entre a casa do vendedor, o endereço do cliente e o local onde ele fez o pedido. Com essa informação é possível determinar se o vendedor está realmente visitando os clientes.

:::info[IMPORTANTE]

Recurso exclusivo para gestores.

:::warning[ATENÇÃO]
A localização apresentada no mapa, nem sempre é 100% precisa, portanto, leve isto em consideração antes de sair tirando conclusões precipitadas.

O termo "Pedidos suspeitos" não significa diretamente que o vendedor está fazendo coisas erradas. Cabe ao usuário analisar onde o vendedor mora, o endereço do cliente e o local onde ele fez o pedido para averiguar se o vendedor está certo ou errado.
:::

---
