---
sidebar_position: 3
sidebar_label: "DBCARD"
title: "DBCARD"
---

# DBCARD: Tela genérica de geração de cards 

A DBCARD funciona de forma offline, utilizando queries ou tabelas já presentes na base do aplicativo para criar cards modulares e botões personalizados.

## Estrutura da chamada `DBCARD`

A chamada `DBCARD` é composta por **quatro partes**. A primeira é a própria palavra-chave `DBCARD`, que inicia a execução da função. Em seguida, entre parênteses, são definidos **três parâmetros adicionais**, sendo os **dois primeiros obrigatórios**.

- O **primeiro parâmetro** é a **query SQL** ou o **nome da tabela** que será utilizada como fonte de dados.
- O **segundo parâmetro** define os **campos que serão exibidos nos cards**, separados por vírgula e envolvidos em **aspas simples** (`' '`). Os campos devem existir na query/table. Esses campos podem conter **atributos de formatação**, como:
  - **Ponto e vírgula** (`;`) — cria uma **quebra de linha** ou separação visual entre os campos no card.
  - **Asteriscos duplos** (`**`) — aplicam **negrito** aos campos, podendo ser usados tanto para campos individuais quanto para grupos de campos.

- O **terceiro parâmetro** é **opcional** e representa a **definição dos botões personalizados** que serão exibidos nos cards. Ele também deve estar envolvido em **aspas simples** (`''`). Caso não haja necessidade de botões ou ações interativas, esse parâmetro pode ser omitido.

---

## Exemplo de chamada

```dart
dbCard(query/table, '*campo1, campo2*; *campo3*, campo4, campo5', 'chamadaBotao')
```

---

## Explicações do exemplo

- Os campos `campo1` e `campo2` estão envolvidos com asteriscos (`*`), aplicando negrito de forma combinada.
- O **ponto e vírgula** (`;`) após `campo2` indica uma **quebra de linha**, separando visualmente os campos seguintes.
- `campo3` está em negrito de forma **individual**, e os demais (`campo4` e `campo5`) são exibidos normalmente.
- `'chamadaBotao'` define o botão personalizado que será executado ao clicar no card. Se omitido, o card nao será clicável.

Você pode combinar essas formatações de forma flexível, criando cards organizados e interativos, de acordo com a necessidade da aplicação.


 ## Problemas comuns

 1. **Tela Vazia**

    - Query ou tabela inexistente.

    - Campos com nomes errados na chamada.

    - Campos nao pertencem a query/tabela.

 2. **Campo não aparece**
 
    - Campo da chamada nao pertence a query/tabela.

    - Campo como nome errado na chamada.
 
 3. **Campo com nome da coluna da tabela/query**

    -  Legenda do campo não estar na tabela `CX1`. 

 4. **Totalizador não contabaliza**

    - Quando uma tabela é utilizada como primeiro parâmetro, o totalizador não é exibido.

    - O campo que vai ser totalizador deve estar na chamada.

    - O campo não estar no `X4_TOTFLDS` da tabela `CX4`.

 5. **Clico no card, mas nada acontece**

    - Chamada para botão nomeada de forma errada ou ainda nao desenvolvida.

    - Chamada do botão vazia.

    - Alteração feita depois do login.



## O que fazer depois das correções? 

1. **Correção/alteração na chamada**

    - Depois de realizar as correções ou alterações na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.

2. **Correção/alteração na tabela usada no primeiro parâmetro**

    - Depois de adicionar uma tabela existe na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
3. **Correção/alteração na query usada no primeiro parâmetro**

    - Insira a query na tabela `CX4`, e role a tela para baixo na guia *Início* da tela inicial.

4. **Correção/alteração do totalizador da query**

    - Insira o campos na `X4_TOTFLDS` da correspondente query na tabela `CX4`, e role a tela para baixo na guia *Início* da tela inicial.

5. **Correção/alteração na tabela de legendas `CX1`**

    - Insira o campo na tabela `CX1`, incluindo sua legenda correspondente, e role a tela para baixo na guia *Início* da tela inicial.