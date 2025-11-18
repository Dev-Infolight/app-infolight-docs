---
sidebar_position: 1
sidebar_label: "DBCAD"
title: "DBCAD"
---

# DBCAD: Tela genérica de geração de cards 

A `DBCAD` funciona de forma *offline*, utilizando queries ou tabelas já armazenadas na base local do aplicativo para criar cards modulares e configuráveis.

## Estrutura da chamada `DBCAD`

A chamada `DBCAD` é composta por **duas partes**. A primeira é a própria palavra-chave `DBCAD`, que inicia a execução da função. Em seguida, entre parênteses, e definido a **query SQL** ou o **nome da tabela** que será utilizada como fonte de dados, esse parâmetro é obrigatário.

---

## Exemplo de chamada

```dart
dbCad(query/table)
```

---

## Explicações do exemplo

- `query/table` representa a fonte de dados do *grid* que será gerado, podendo ser uma *query* ou uma tabela. Essa fonte  precisa estar armazenada localmente no aplicativo, pois a `DbCad` opera de forma totalmente *offline*.


 ## Problemas comuns

 1. **Tela Vazia**

    - *Query* ou tabela inexistente.

 
 2. **Campo com nome da coluna da tabela/query**

    -  Legenda do campo não estar na tabela `CX1`. 


## Como Corrigir

    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::

1. **Correção/alteração na chamada**

    - Depois de realizar as correções ou alterações na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
2. **Correção/alteração na tabela usada no primeiro parâmetro**

    - Depois de adicionar uma tabela que existe na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
3. **Correção/alteração na query usada no primeiro parâmetro**

    - Insira a *query* na tabela `CX4`, e role a tela para baixo na guia *Início* da tela inicial.

4. **Correção/alteração na tabela de legendas `CX1`**

    - Insira o campo na tabela `CX1`, incluindo sua legenda correspondente, e role a tela para baixo na guia *Início* da tela inicial.

:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::