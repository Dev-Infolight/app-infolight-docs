---
sidebar_position: 2
sidebar_label: 'Guia "Início"'
title: 'Guia "Início"'
---

import GuiaInicio from "@site/static/img/guia-inicio/guia-inicio.jpg";
import SincronizacaoAtrasada from "@site/static/img/guia-inicio/sincronizacao-atrasada.jpg";
import AtualizandoDados from "@site/static/img/guia-inicio/atualizando-dados.jpg";
import VendasDiaMes from "@site/static/img/guia-inicio/vendas-dia-mes.jpg";
import DiagramaTotalDeVendasDia from "@site/static/img/guia-inicio/total-de-vendas-dia.png";
import PedidoEmCache from "@site/static/img/pedido-em-cache.png";
import InformacaoNovaVersao from "@site/static/img/guia-inicio/verificacao-de-versao.jpg";
import TotaisDeVendaMascarados from "@site/static/img/guia-inicio/totais-com-valor-mascarado.png";
import TotaisDeVendasOcultados from "@site/static/img/guia-inicio/totais-ocultados.png";

# Guia "Início"

A **guia de início** é o ponto de partida para acessar a grande maioria dos recursos do aplicativo. A partir dela, o usuário terá a possibilidade de: 

1. **Sair da aplicação (logout);**
2. **Visualizar o quanto vendeu no dia e no mês;**
3. **Mascarar os valores das vendas do dia e do mês**
4. **Visualizar o nome da empresa selecionada;**
5. **Ver a data e hora de quando sincronizou os dados pela última vez;**
6. **Conferir o número da versão do app;**
8. **Visualizar o seu nome de usuário;**
7. **Visualizar os menus a qual ele tem acesso.**

Você pode visualizar esta tela na imagem abaixo:

<img 
    className="pb-16"
    src={GuiaInicio}
    alt="Explicação da guia de ínicio"
/>

:::info[INFORMAÇÃO]
O usuário será redirecionado para esta tela sempre que fizer login, ou abrir o aplicativo já estando logado.
:::

---

## Listagem de menus de usuário

A listagem de menus de usuário é realizada de maneira offline, de modo que, ao abrir a tela da guia inicial, o aplicativo executa uma busca local na **tabela de menus de usuário (CXQ)** para procurar todas as opções de menu que são associados ao usuário.

A seguinte query é executada:

```SQL showLineNumbers title="Query para listar os menus de usuário"
SELECT
    *
FROM  
    CXQ$EMPRESA_SELECIONADA
WHERE
    XQ_GRUPO = '$GRUPO_DO_USUARIO'
    AND XQ_MODULO = '$SIGLA_DO_MODULO_SELECIONADO'
    AND XQ_STATUS = 'H'
    AND LENGTH(XQ_CODIGO) = 2
```

---

## Total de vendas

<img 
    src={VendasDiaMes}
    alt="Vendas do dia e dos meses"
/>

### Vendas do dia

Para cálcular o total de vendas do dia, primeiro, o aplicativo decide se este processo será feito de forma online ou offline. O diagrama abaixo demonstra como funciona o processo de decisão.

<img 
    className="pb-16"
    src={DiagramaTotalDeVendasDia}
    alt="Lógica para obtenção de vendas do dia"
/>

##### Obtendo vendas do dia online

Caso o aplicativo decida que as vendas do dia devem ser puxadas de forma online, a informação será obtida diretamente do servidor da empresa através do endpoint `/getResPedidosDia`.

##### Obtendo vendas do dia offline

Para obter o total de vendas offline, o aplicativo irá somar o valor de todos os pedidos de venda que foram emitidos no dia atual e que já estão salvos na base local do vendedor. 

A seguinte query será executada:

```SQL showLineNumbers title="query para calcular o total de vendas do dia"
SELECT
    IFNULL(SUM(IFNULL(F3_VLPED, 0)), 0) AS TOTAL
FROM
    TF3$EMPRESA_SELECIONADA
WHERE 
    F3_FILIAL = '$FILIAL_SELECIONADA'
    AND F3_VEND1 = '$CODIGO_DO_VENDEDOR'
    AND F3_LIBOK NOT IN ('0', '1', '3', '9')
    AND F3_DTEMISS = CURRENT_DATE
```
:::info[IMPORTANTE]
Os pedidos de venda com os status listados abaixo não são considerados no cálculo:
1. Rascunho;
2. Pendente de envio;
3. Limite Excedido;
4. Pedido duplicado.
:::

:::tip[DICA]
Ao clicar em cima do total das vendas do dia, você será redirecionado para a tela do [mapa de vendas](../mapa-de-vendas.md).
:::

### Vendas dos meses

Já em relação ao total de vendas do mês, o aplicativo sempre realiza este cálculo de forma offline, executando uma query na tabela interna de vendas dos meses (XF100$EMPRESA_SELECIONADA):

```SQL showLineNumbers title="Query que recupera o total de vendas do mês"
SELECT
    XF1_VLLIQ AS VLR_LIQ
FROM
    XF100$EMPRESA_SELECIONADA
WHERE
    XF1_FILIAL = '$FILIAL_SELECIONADA'
    AND XF1_ANOMES = '$ANO-$MES'
```

:::info[IMPORTANTE]
Os dados que alimentam a tabela de vendas dos meses no aplicativo são provenientes do endpoint `/MinhasVendas`.
:::

:::tip[DICA]
Ao clicar em cima do total de vendas do mês, você será redirecionado para a tela de [vendas dos meses](../vendas-do-mes.md)
:::

### Ocultando totais de vendas

Nem sempre a exibição dos totais de vendas faz sentido com relação ao módulo que você está acessando no momento, com isso em mente, projetamos uma maneira para que o usuário possa esconder essa informação. 

Para utilizar este recurso:

1. Acesse a **tabela de usuários x módulos (AX6)**;
2. Procure o registro referente ao **grupo do usuário** e **módulo selecionado**;
3. Altere o valor do campo **X6_DASH para vazio (X6_DASH = "")**;
4. Navegue até a guia de configurações e [**atualize as tabelas de configuração**](./guia-de-configuracoes.md#dados).

Após a realização dos passos citados acima, se os totais de venda não sumirem da guia inicial, feche o aplicativo e abra novamente. 

A imagem a seguir demonstra o visual com os totais ocultados:

<img
    className="pb-16"
    src={TotaisDeVendasOcultados}
    alt="Totais de vendas ocultados"
/>

:::warning[CUIDADO]
Ao esconder os totais de venda, a [guia do dashboard](./guia-de-dashboard.md) também será ocultada.
:::

---

### Mascarando valores das vendas

As vezes o usuário deseja que os totais de venda continuem aparecendo na tela, mas, com os valores mascarados. Para isso, bastar clicar no ícone que está localizado ao lado do botão de logout. Clique uma vez para ocultar e clique novamente para mostrar os valores.

<img 
    src={TotaisDeVendaMascarados}
    alt="Totais com valor mascarado"
/>

---

## Sincronização de dados

<img 
    className="h-500 pb-16"
    src={AtualizandoDados}
    alt="Sincronizando os dados com o servidor"
/>

Ao arrastar para baixo na guia inicial, o aplicativo irá realizar os seguintes procedimentos:

#### Para qualquer módulo:

1. Criar novas tabelas e/ou campos (casos existam);
2. Atualizar os dados relacionados as tabelas do módulo a qual o usuário está logado.

#### Para vendedores:

1. Enviar os pedidos de venda, novos clientes e visitas não positivadas que estão pendentes;
2. Atualizar os status dos clientes e pedidos já enviados;
3. Atualizar os valores das vendas do dia e do mês.
3. Baixar a logo da sua empresa (caso ela exista).

#### Para gestores:

1. Atualizar os valores das vendas do dia e do mês.

:::info[É IMPORTANTE SABER]

Ao passar mais de um dia sem sincronizar os dados, a data da última vez que você sincronizou será destacada em laranja:

<img 
    src={SincronizacaoAtrasada}
    alt="Sincronização atrasada"
/>

Recomendamos que você sincronize os dados do aplicativo diariamente, porquê, caso você passe muito tempo sem sincronizar, algumas rotinas do aplicativo se tornarão indisponíveis enquanto uma nova sincronização de dados não for realizada. 

É valido lembrar que o proceso de sincronização de dados necessita de uma conexão com a internet para funcionar.

:::

---

## Verificação da versão do aplicativo

<div className="divRow">
    <img 
        src={InformacaoNovaVersao}
        alt="Nova versão disponível"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Ao abrir o aplicativo já estando logado, caso a versão que o usuário estiver utilizando esteja desatualizada, um modal informativo será aberto e o usuário terá que atualizar para prosseguir com o uso normal do aplicativo.</p>
        :::info[INFORMAÇÃO]
        A atualização é obrigatória, portanto, se o usuário não atualizar, o aplicativo se tornará inutilizável.
        :::
    </div>
</div>

---

## Informação de pedido não finalizado

<div className="divRow">
    <img 
        src={PedidoEmCache}
        alt="Pedido pendente de finalização"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>Caso o usuário comece a digitar um novo pedido de venda, mas, por algum motivo ele não o finalize, na proxima vez que o usuário abrir o aplicativo, um modal informando que o usuário não finalizou o último pedido será apresentado, e o usuário poderá excluir ou continuar o pedido de onde parou.</p>
    </div>
</div>

---

## Verificação de usuário inativo

Ao abrir o aplicativo já estando logado, caso o usuário esteja inativo, todos os seus dados serão apagados e ele será redirecionado para a tela de [conexão com o servidor](../conexao-com-o-servidor.md).

---