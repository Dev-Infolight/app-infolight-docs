---
sidebar_position: 2
sidebar_label: "DBON"
title: "DBON"
---

# DBON: Tela genérica de geração de grid online 


A `DBON` é uma chamada que permite gerar *grid* modular e configurável de acordo com a *query* ou tabela fornecida, 100% *online*. Ela também possibilita definir botões personalizados, permitindo que o parâmetro enviado determine qual tela ou função a linha do *grid* abrirá ao ser tocado.

:::info Conexão necessária
Esta tela só funciona com **conexão com a internet**.  
Verifique sua rede antes de continuar.
:::

## Estrutura da chamada `DBON`

A chamada `DBON` é composta por **três partes**. A primeira é a própria palavra-chave `DBON`, que inicia a execução da função. Em seguida, entre parênteses, são definidos **dois parâmetros adicionais**, sendo somente o **primeiro obrigatório**.

- O **primeiro parâmetro** é a **query SQL** ou o **nome da tabela** que será utilizada como fonte de dados.

- O **segudo parâmetro** é **opcional** e representa a **definição dos botões personalizados** que serão executadas no *grid*. Ele também deve estar envolvido em **aspas simples** (`' '`). Caso não haja necessidade de botões ou ações interativas, esse parâmetro pode ser omitido.

---

## Exemplo de chamada

```dart
dbOn(query/table, 'chamadaBotao')
```

---

## Explicações do exemplo

- `query/table` representa a fonte de dados do *grid* que será gerado, podendo ser uma *query* ou uma tabela. Essa fonte não precisa estar armazenada localmente no aplicativo, pois a `DbOn` opera de forma totalmente *online*.
- `'chamadaBotao'` define o botão personalizado que será executado ao tocar na linha do *grid*. Se omitido, a linha do grid não terá ação ao toque.

Você pode combinar essas formatações de forma flexível, criando *grid* organizado e interativo, de acordo com a necessidade da aplicação.


 ## Problemas comuns

 1. **Tela Vazia**

    - Sem conexão ativa com a internet.

    - *Query* ou tabela inexistente.
 
 2. **Campo com nome da coluna da tabela/query**

    -  Legenda do campo não estar na tabela `CX1`. 

 3. **Clico na linha do grid, mas nada acontece**

    - Chamada para botão nomeada de forma errada ou ainda não desenvolvida.

    - Chamada do botão vazia.

    - Alteração feita depois do login.

 ## Como Corrigir

    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::

1. **Correção/alteração na chamada**

    - Depois de realizar as correções ou alterações na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
2. **Correção/alteração na tabela/query usada no primeiro parâmetro**

    - Depois de adicionar uma tabela/*query* que existe na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
3. **Correção/alteração na tabela de legendas `CX1`**

    - Insira o campo na tabela `CX1`, incluindo sua legenda correspondente, e role a tela para baixo na guia *Início* da tela inicial.

:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::
