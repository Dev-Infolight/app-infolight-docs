---
sidebar_position: 1
sidebar_label: "Pedidos de venda"
title: "Pedidos de venda"
---

import GuiaPendentes from "@site/static/img/pedidos-de-venda/guia-pendentes.png";
import GuiaEnviados from "@site/static/img/pedidos-de-venda/guia-enviados.png";
import CardPedido from "@site/static/img/pedidos-de-venda/card-pedido.png";
import Totalizador from "@site/static/img/pedidos-de-venda/totalizador.png";
import TotaisPorRegraDeSaida from "@site/static/img/pedidos-de-venda/totais-por-regra-de-saida.png";
import Filtros from "@site/static/img/pedidos-de-venda/filtros.png";
import ItensDoPedidoDeVenda from "@site/static/img/pedidos-de-venda/itens-do-pedido.png";
import Botoes from "@site/static/img/pedidos-de-venda/botoes.png";
import TotalizadorItens from "@site/static/img/pedidos-de-venda/totalizador-itens.png";

# Pedidos de venda

A tela de pedidos de venda tem a função de listar todos os pedidos que foram cadastrados pelo vendedor. 

Projetamos duas guias para esta tela, são elas: 

1. **Guia de pendentes:**

    Lista todos os pedidos que ainda não foram enviados para o Tempus ERP: `rascunhos`, `pendentes de envio`, `duplicados` e `limite excedido`.

1. **Guia de enviados.**

    Lista todos os pedidos que já foram enviados para o Tempus ERP.

As duas guias são apresentadas na imagem abaixo.

<div className="divRow">
    <img
        src={GuiaPendentes}
        alt="Guia de pedidos pendentes"
    />
    <img 
        src={GuiaEnviados}
        alt="Guia de pedidos enviados"
    />
</div>

---

## Entendendo

### Listagem de pedidos

<img 
    className="pb-16"
    src={CardPedido}
    alt="Card do pedido de venda"
/>

A listagem de pedidos nas duas guias é feita no formato de cards, que contém as seguintes informações:

* **Regra de saída do pedido;**
* **Status do pedido;**
* **Número do pedido de origem;**
* **Dados do cliente;**
* **Data de emissão;**
* **Valor total do pedido;**
* **Acompanhamento do status do pedido através da linha do tempo.**

:::info[IMPORTANTE]
A informação do pedido de origem só vai aparecer quando o pedido for uma **cópia** de outro pedido.
:::

---

### Totalizador

<div className="divRow">
    <img 
        src={Totalizador}
        alt="Totalizador"
    />
    <div className="divColumn">
        <p>Localizado na parte inferior das guias, o totalizador irá contabilidar as seguintes informações:</p>
        <ul>
            <li>Quantidade de pedidos;</li>
            <li>Total de clientes atendidos;</li>
            <li>Soma total do valor dos pedidos.</li>
        </ul>
        :::info[INFORMAÇÃO]
        O totalizador é baseado nos pedidos que estão listados na guia, ou seja, se você aplicar algum filtro, os valores apresentados no totalizador serão alterados automaticamente.
        :::
    </div>
</div>
---
<div className="divRow">
    <img 
        className="h-500"
        src={TotaisPorRegraDeSaida}
    />
   <div className="divColumn">
        <b>Totais por regra de saída</b>
        <p>O aplicativo também forcene uma visualização do totalizador por regras de saída. Para visualizar, basta clicar em cima do campo de **Valor Total** e um modal com as informações será apresentado.</p>
   </div>
</div>

---

### Filtros

<img 
    className="pb-16"
    src={Filtros}
    alt="Filtros tela de pedidos de venda"
/>

Os filtros que estão disponíveis nas guias são:

* **Filtro por status do pedido:**

    Este filtro permite exibir os pedidos com um status especifico, por exemplo: pedidos com o status de faturado.

* **Filtro por período:**

    Com este filtro, o usuário pode buscar os pedidos que foram emitidos em um determinado período.

* **Filtro por busca por texto:**

    Permite que o usuário busque um pedido por algo dado relacionado a ele, como por exemplo: número do pedido, código do cliente e etc.


### Sincronizando dados

Ao arrastar para baixo em qualquer guia, o aplicativo irá sincronizar com o Tempus ERP: 

1. **Os pedidos com o status de pendente de envio;**
2. **Os novos clientes e visitas não positivadas que ainda não ainda não haviam sido enviados;**
3. **Os status dos pedidos que já foram enviados.**

---

## Itens do pedido de venda

<div className="divRow">
    <img
        src={ItensDoPedidoDeVenda}
        alt="Itens do pedido de venda"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Ao clicar em cima de algum card de pedido de venda, você será redirecionado para a tela de **itens do pedido de venda**.<br /><br/>Nesta tela você poderá visualizar: </p>
        <ol>
            <li>Todos os produtos do pedido;</li>
            <li>Dados importantes do cabeçalho do pedido, como: Número do pedido ERP, condição de pagamento, tabela de preços e cliente;</li>
            <li>Informações de corte e/ou devolução em cada item.</li>
        </ol>
    </div>
</div>

---

### Botões

<img 
    className="pb-16"
    src={Botoes}
    alt="Funcionalidades da tela de itens do pedido de venda"
/>

O aplicativo oferece alguns recursos para o usuário utilizar em relação ao pedido em questão, são eles:

1. **Botão para gerar um PDF do pedido:**

    Esta funcionalidade gera um arquivo PDF contendo os dados do pedido e permite que o usuário imprima ou compartilhe com quem ele desejar.

2. **Botão para editar o pedido:**

    Ao clicar neste botão, o usuário será redirecionado para a tela de **edição do pedido de venda** e poderá editar qualquer informação, seja do cabeçalho ou itens. 
    
    Ao editar um pedido, é possível salvar as alterações apenas localmente ou já enviar direto para o Tempus ERP.

3. **Botão para deletar o pedido**;

    Este botão permite deletar o pedido de venda em questão do seu dispositivo.

4. **Botão de cópia:** 

    O botão de cópia permite criar um novo pedido de venda contendo os dados do cabeçalho e itens de um pedido de venda que já havia sido enviado para o Tempus ERP.
    
    Esta funcionalidade é especialmente útil quando, por exemplo, um cliente costuma comprar sempre a mesma mercadoria, e para que o vendedor não tenha o trabalho de ficar redigitando o mesmo pedido sempre, ele pode fazer uma copia de algum pedido que ele já tenha feito para o cliente, e com isso ele pode editar os dados desse novo pedido e enviar para o Tempus ERP.

    :::note[INFORMAÇÃO]
    Ao clonar um pedido de venda, ele será cadastrado com o status de `rascunho`, um novo `número do pedido do celular` será gerado e o campo do `número do pedido` será cadastrado como vazio e só será preenchido quando o pedido for enviado para o Tempus ERP.
    :::
---

:::info[É IMPORTANTE SABER]
Existem algumas considerações importantes sobre o uso dos botões:

1. Os botões de `editar` e `excluir` o pedido só serão apresentados quando o pedido ainda não tiver sido enviado para o tempus ERP.
2. O botão de cópia só será apresentado quando você estiver visualizando os itens de um pedido da guia de **enviados** e o parâmetro [MV_PERCOPIA](../parametros.md) esteja configurado com o valor `T`.

:::

---    

### Totalizador

<div className="divRow">
    <img 
        src={TotalizadorItens}
        alt="Totalizador da tela de itens do pedido de venda"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>A tela de itens do pedido de venda também possui um totalizador de informações, nele você pode visualizar:</p>
        <ol>
            <li>**Quantidade de itens do pedido**;</li>
            <li>**Valor total dos itens**;</li>
            <li>**Valor total de desconto que foi concedido nos itens**;</li>
            <li>**Valor total dos impostos**;</li>
            <li>**Total líquido**.</li>
        </ol>

        :::info[IMPORTANTE]
        O valor dos impostos só será apresentado caso as tabelas de `tributação por produto (TLI)` e `tributação de produtos por estado (TLH)` existam na base de dados local do vendedor.
        :::

    </div>
</div>

---

