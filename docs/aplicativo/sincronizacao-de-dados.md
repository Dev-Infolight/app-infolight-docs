---
sidebar_position: 1
sidebar_label: "Sincronização de dados"
title: "Sincronização de dados"
---

# Sincronização de dados

A sincronização de dados pode ser considerada como um dos recursos mais importantes do aplicativo Infolight. Ela é a responsavel por entrar em contato com o Tempus ERP e baixar os dados necessários para o usuário. Existem dois tipos de sincronização: **`sincronização inicial`** e **`sincronização incremental`**, ambas serão descritas nos tópicos abaixo.

:::info[NOTA]
A sincronização de dados requer conexão com a internet e uma [conexão com o servidor](./conexao-com-o-servidor.md).
:::

## Sincronização inicial

Durante este processo, o app irá baixar todos os dados das `tabelas do módulo e empresa a qual o usuário está logado`, `tabelas de configuração do sistema` e `fotos dos produtos da empresa (caso o parâmetro MV_URLFOTOS esteja configurado)`, e salvar no dispositivo do usuário.

## Sincronização incremental

É o processo em que aplicativo entra em contato com o Tempus ERP e **atualiza** os dados que já estão armazenados no dispositivo do usuário. Este processo também é baseado na `empresa`, `módulo` e `usuário logado`.

## Como o aplicativo decide o tipo de sincronização a ser realizado ?

O aplicativo decide o tipo de sincronização a ser realizado com base no usuário que está logando no momento, funciona assim: Se for a primeira vez que você estiver logando com aquele usuário, o aplicativo irá fazer `sincronização inicial`. Caso contrário, será realizado uma `sincronização incremental`. 

Ao arrastar para baixo a partir da [guia "início"](./tela-inicial/guia-de-inicio.md), o aplicativo sempre realizará uma `sincronização incremental`.

:::info[IMPORTANTE]
O aplicativo sempre mantém os dados de apenas um usuário por vez, isto é, se você logar com um usuário, deslogar, e depois logar com outro usuário, os dados do primeiro usuário serão deletados para que os dados do segundo usuário sejam baixados. 
:::
