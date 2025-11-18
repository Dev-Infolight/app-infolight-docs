---
sidebar_position: 7
sidebar_label: "Grupo de perguntas"
title: "Grupo de perguntas"
---

# Grupo de perguntas

Os grupos de perguntas definem os campos que vão aparecer no formulário dos relatórios de [análise comercial](./telas-genericas/analise_comercial.md) e [painel de vendas](./telas-genericas/painel-de-vendas.md).

## Onde cadastrar ?

As perguntas devem ser cadastradas na tabela de **`perguntas (CXE)`**. Abaixo você pode conferir a descrição de cada campo.

<table>
    <tr>
        <th>Campo</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>XE_GRUPO</td>
        <td>Define em qual relatório o campo vai aparecer.<br/>**`FDV_ANACOM`** -> Análise comercial<br/>**`FDV_PV`** -> Painel de vendas</td>
    </tr>
     <tr>
        <td>XE_ORDEM</td>
        <td>Campo que define a posição que a pergunta aperecerá no formulário.</td>
    </tr>
    <tr>
        <td>XE_PERGUNT</td>
        <td>É o texto que aparecerá acima do campo. O valor cadastrado aqui também será apresentado na mensagem de campo de preenchimento obrigatório, ex: o campo "periodo 1" é obrigatório.</td>
    </tr>
    <tr>
        <td>XE_DEFAULT</td>
        <td>É o valor padrão do campo que será utilizado quando o usuário não informar nenhum valor para o mesmo.</td>
    </tr>
    <tr>
        <td>XE_CONSPAD</td>
        <td>Abre uma tela de listagem de dados que interpreta o conteudo de uma chamada [DBCAD](./telas-genericas/dbcad_view.md) ou [DBON](./telas-genericas/dbon_view.md). **Importante**: informe apenas o conteúdo da chamada.<br/><b>❌ XE_CONSPAD="dbcad(TA1)"</b><br/><b>✅ XE_CONSPAD="TA1"</b></td>
    </tr>
    <tr>
        <td>XE_RETCONS</td>
        <td>Usado em conjunto com o campo **XE_CONSPAD**, Define a coluna que fornecerá o valor que será atribuido ao input quando o usuário selecionar alguma linha na tela de listagem. Por exemplo, suponha que o valor cadastrado foi `A1_NOME`. Quando o usuário selecionar alguma linha e clicar em confirmar, o aplicativo irá atribuir o valor desse campo ao input.</td>
    </tr>
    <tr>
        <td>XE_CONTROL</td>
        <td>Define o tipo do campo a ser renderizado no formulário.<br/>**`D`** -> Campo de data única.<br/>**`P`** -> Campo de data em período.<br/>**`E`** -> Campo de texto.<br/>**`K`** -> Campo de checkbox.<br /><br />**Importante**: O campo de texto só vai aparecer quando você definir o `XE_CONTROL = 'E'` e configurar o `XE_CONSPAD` E `XE_RETCONS`.</td>
    </tr>
    <tr>
        <td>XE_OBRIG</td>
        <td>Define se o campo será obrigatório ou não.<br/>**`T`** -> Obrigatório<br/>**`F`** -> Não obrigatório.</td>
    </tr>
</table>

## Problemas comuns

1. **Cadastrei uma nova pergunta mas ela não aparece no aplicativo:**

    A partir da tela inicial, navegue até a guia de configurações e atualize as tabelas de configuração do sistema. Após isso, verifique se a pergunta está aparecendo no relatório a qual foi cadastrada. Se o problema persistir, no **Tempus ERP** verifique se cadastrou corretamente. Se mesmo assim você não obtiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).