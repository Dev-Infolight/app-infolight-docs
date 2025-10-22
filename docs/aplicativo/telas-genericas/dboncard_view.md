---
sidebar_position: 4
sidebar_label: "DBONCARD"
title: "DBONCARD"
---

# DBONCARD: Tela genérica de geração de cards online 

DBONCARD é uma chamada que permite gerar cards modulares e configuráveis de acordo com a *query* ou tabela fornecida, 100% online e com botões personalizados.

## Estrutura da chamada `DBONCARD`

A chamada `DBONCARD` é composta por **quatro partes**. A primeira é a própria palavra-chave `DBONCARD`, que inicia a execução da função. Em seguida, entre parênteses, são definidos **três parâmetros adicionais**, sendo os **dois primeiros obrigatórios**.

- O **primeiro parâmetro** é a **query SQL** ou o **nome da tabela** que será utilizada como fonte de dados.
- O **segundo parâmetro** define os **campos que serão exibidos nos cards**, separados por vírgula e envolvidos em **aspas simples** (`' '`). Os campos devem existir na query/table. Esses campos podem conter **atributos de formatação**, como:
  - **Ponto e vírgula** (`;`) — cria uma **quebra de linha** ou separação visual entre os campos no card.
  - **Asteriscos duplos** (`**`) — aplicam **negrito** aos campos, podendo ser usados tanto para campos individuais quanto para grupos de campos.

- O **terceiro parâmetro** é **opcional** e representa a **definição dos botões personalizados** que serão exibidos nos cards. Ele também deve estar envolvido em **aspas simples** (`' '`). Caso não haja necessidade de botões ou ações interativas, esse parâmetro pode ser omitido.

---

## Exemplo de chamada

```dart
dbOnCard(query/table, '*campo1, campo2*; *campo3*, campo4, campo5', 'chamadaBotao')
```

---

## Explicações do exemplo

- Os campos `campo1` e `campo2` estão envolvidos com asteriscos (`*`), aplicando negrito de forma combinada.
- O **ponto e vírgula** (`;`) após `campo2` indica uma **quebra de linha**, separando visualmente os campos seguintes.
- `campo3` está em negrito de forma **individual**, e os demais (`campo4` e `campo5`) são exibidos normalmente.
- `'chamadaBotao'` define o botão personalizado que será executado ao clicar no card. Se omitido, o card não sera clicável.

Você pode combinar essas formatações de forma flexível, criando cards organizados e interativos, de acordo com a necessidade da aplicação.


 ## Problemas comuns

 1. **Tela Vazia**

    - Query ou tabela inexistente.

    - Campos com nomes errados na chamada.

    - Campos não pertencem a query/tabela.
     
 2. **Campo não aparece**
 
    - Campo não pertence a query/tabela.

    - Campo como nome errado na chamada.
 
 3. Campo com nome da coluna da tabela/query

    -  Legenda do campo não estar na tabela `CX1`. 

 4. **Totalizador não contabaliza**

    - O campo que vai ser totalizador deve estar na chamada, e consequentemente no card.

 5. **Clico no card, mas nada acontece**

    - Chamada para botão nomeada de forma errada ou ainda não desenvolvida.

    - Chamada do botão vazia.

    - Alteração feita depois do login.

 ## O que fazer depois das correções? 

1. **Correção/alteração na chamada**

    - Depois de realizar as correções ou alterações na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
2. **Correção/alteração na tabela usada no primeiro parâmetro**

    - Depois de adicionar uma tabela que existe na chamada, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
3. **Correção/alteração na tabela de legendas `CX1`**

    - Insira o campo na tabela `CX1`, incluindo sua legenda correspondente, e role a tela para baixo na guia *Início* da tela inicial.
