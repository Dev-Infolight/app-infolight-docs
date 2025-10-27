---
sidebar_position: 5
sidebar_label: "Parâmetros"
title: "Parâmetros"
---

# Parâmetros

Podemos definir os **`parâmetros`** como configurações personalizadas que podem ser aplicadas dentro do sistema.
Tal recurso, nos permite modificar e adaptar o comportamento do aplicativo as necessidades do cliente, como por exemplo: **ocultar/exibir** informações em qualquer tela, **travar/limitar/parametrizar** o funcionamento de rotinas e etc. 

## Tipos de parâmetros

- **Parâmetros globais:** Uma vez definidos, são aplicados a todos os usuários que utilizarem as rotinas atreladas ao parâmetro em questão.

- **Parâmetros com escopo de usuário**: São parâmetros atrelados a um usuário em especifico.

## Onde configurar ?

Os **parâmetros globais** devem ser cadastrados na `tabela de parâmetros do sistema (CXC)`. Com relação aos **parâmetros com escopo de usuário**, são configurados na `tabela de Gerentes/Supervisores/Vendedores (TA3)`.

## Relação de parâmetros

<table>
    <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Escopo</th>
    </tr>
    <tr>
        <td>MV_2UNMOB</td>
        <td>No modal de adicionar/editar um item no carrinho de um novo pedido de venda, `Habilita/desabilita` o campo de segunda unidade de medida. Use **`T`** para **habilitar** e **`F`** para **desabilitar**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_PCLIATRASMOB</td>
        <td>Define se o vendedor poderá fazer novos pedidos de venda para um **`cliente que possui títulos vencidos`**. Use **`F`** para **desabilitar** 
        o botão **`Nova venda`** no menu do cliente, ou use **`T`** para **habilitar**. </td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_VALCODBAR</td>
        <td>Nas telas de **`expedição de carga`**, **`Expedição de orçamento`** e **`expedição de carga(romaneio)`** , `habilita/desabilita` o modal de validação de carregamento por bipagem de códido de barras. Use **`T`** para **habilitar**, ou utilize **`F`**, **`String vazia`** ou **`simplesmente não cadastre este parâmetro`** para **desabilitar**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_URLFOTOS</td>
        <td>Define o **`link do Dropbox para o download das fotos dos produtos da empresa`**. Se cadastrado, o app irá baixar todas as fotos dos produtos que são provenientes do link informado, e salvá-las localmente no dispositivo do usuário. **Importante**: O link informado deve ter o final `raw=1` e fornecer um arquivo `.zip` ao utilizá-lo.</td>
        <td>Global</td> 
    </tr>
    <tr>
        <td>MV_FATPERMAX</td>
        <td>Define a **`porcentagem máxima de acréscimo que o vendedor por atribuir ao preço de tabela de um produto`**. Se quiser definir este limite, **`informe um valor entre 0 e 100`**, caso não queira, **`insira um valor vazio`** ou simplesmente **`não cadastre este parâmetro`**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_EXIBERAZAO</td>
        <td>Na tela de **`pedidos de venda`**, define se será exibido **`apenas o nome fantasia (A1_NREDUZ)`** ou **`a combinaçào do nome fantasia e a razão social (A1_NREDUZ - A1_NOME)`** do cliente no card do pedido. Use **`T`** para exibir a **`combinação do nome fantasia e razão social`**, ou utilize **`F`** ou **`simplesmente não cadastre este parâmetro`** para exibir apenas a **`razão social do cliente`** no card.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_APPORDERPROD</td>
        <td>Nas telas de **`catálogo de produtos`** e **`nova venda`**, define os campos de ordenação dos produtos na query. Se informado, os campos que forem cadastrados nesse parâmetro serão utilizados no **`order by`** da query. Quando não cadastrado, o campo **`A7_DESCRIC`** será utilizado por padrão.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_HORAINIFDV e MV_HORAFINFDV</td>
        <td>Define o **`intervalo de horário que um vendedor pode enviar novos pedidos de venda pelo aplicativo`**, onde **`MV_HORAINIFDV`** é o horário inicial e  **`MV_HORAFINFDV`** o horário final. Os parâmetros devem ser cadastrados no formato **`hh:mm:ss`**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_ESTNEGMOB</td>
        <td>Utilizado nas **`telas de criar/editar pedidos de venda`**, Se cadastrado como **`F`**, exibe o **`estoque disponível`** no card do produto e também **`habilita a validação de estoque insuficiente ao adicionar/editar itens no carrinho`**. Caso o valor deste parâmetro seja **`T`**, **`String vazia`** ou ele **`não for cadastrado`**, **`a segunda unidade de medida será exibida`** no card do produto e a **`validação do estoque será retirada`**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_BLOQTABPRC</td>
        <td>Utilizado nas **`telas de criar/editar pedidos de venda`**, o objetivo deste parâmetro é **`impedir que o vendedor adicione produtos de diferentes tabelas de preço ao carrinho`**. Se cadastrado como **`T`** e o **`usuário já tiver adicionado algum item ao carrindo`**, o campo de tabela de preços do cabeçalho é bloqueado e o vendedor só poderá mudar a tabela de preços quando o carrinho estiver vazio. Caso opte por não ter este bloqueio, cadastre este parâmetro como **`F`**, **`String vazia`** ou simplesmente **`não cadastre este parâmetro`**. </td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_USAROTEIRO</td>
        <td>Na tela de **`clientes`**, `habilita/desabilita` a **roteirazação**. Para **habilitar**, cadastre como **`T`** ou **`S`** e no configudor do **Tempus ERP**, suba as seguintes tabelas **`TD1, TD2, TD3, TD4, TD5 e TD6`**. Ao cadastrar este parâmetro como **`F`**, a roteirização será **desabilitada**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_PERCOPIA</td>
        <td>Na tela de **`Itens do pedido de venda`**, `habilita/desabilita` o botão para fazer uma copia de um pedido de venda. Use **`F`** ou **`N`** para **desabilitar**. Para **habilitar**, use **`T`** ou simplesmente **`não cadastre este parâmetro`**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_ICMSEST</td>
        <td>Utilizado no **`cálculo dos impostos`** de um pedido de venda, este parâmetro fornece a **`aliquota do ICMS`** de todos os estados brasileiros.</td>
        <td>Global</td>
    </tr>
     <tr>
        <td>MV_USALOCALIZA</td>
        <td>Parâmetro utilizado para capturar a **`localização do usuário ao cadastrar pedidos de vendas e visitas não positivadas`**. Use **`T`** para **habilitar** e **`F`** para **desabilitar**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>MV_DIASULTPED</td>
        <td>Parâmetro utilizado para verificar se o vendedor já vendeu para um determinado cliente em um certo período, por exemplo, se o valor do parâmetro for **`25`**, **`o app irá verificar se o vendedor cadastrou algum pedido de venda para o cliente no intervalo de hoje á 25 dias atrás`**. Quando este parâmetro não é cadastrado, ou for uma **`String vazia`**, **`o aplicativo verifica se o vendedor já fez algum pedido para o cliente naquele mesmo dia`**.</td>
        <td>Global</td>
    </tr>
    <tr>
        <td>A3_EMPTE5</td>
        <td>Este parâmetro define a **`empresa a qual o vendedor irá visualizar o estoque`** no aplicativo. Não cadastrar este parâmetro, significa dizer que o vendedor terá acesso apenas ao **`estoque da empresa a qual ele está logado`**.</td>
        <td>Usuário</td>
    </tr>
    <tr>
        <td>A3_DESCMAX</td>
        <td>Este parâmetro define a **`porcentagem máxima de desconto`** que um vendedor poderá aplicar a um produto durante o cadastro de um novo pedido de venda. Para definir, informe um valor entre **`0 e 100`**. Caso este parâmetro não seja cadastrado, o desconto máximo será considerado como **`0%`**, isto é, o vendedor não poderá aplicar nenhum desconto. **Importante**: Existe uma `hierarquia` com relação ao valor do desconto máximo, funciona assim: **`Se existir desconto máximo na tabela de preços (T4_DESCMAX), o app irá considerar o desconto máximo da tabela de preços`**. **`Caso não exista desconto máximo na tabela de preços, mas exista no cadastro do produto, o app irá considerar o desconto máximo do produto (A7_DESCMAX)`**. **`Por fim, caso não exista desconto máximo na tabela de preços e no produto, o app irá considerar o desconto máximo atrelado ao vendedor (A3_DESCMAX)`**.</td>
        <td>Usuário</td>
    </tr>
    <tr>
        <td>A3_APPEDPR</td>
        <td>Este parâmetro `habilita/desabilita` o **`campo de preço da primeira unidade de medida`** no modal de `adicionar/editar` um item no carrinho de um novo pedido de venda. Use **`S`** para **habilitar** ou use **`N`**, ou **`String vazia`** para **desabilitar**. **Importante:** Se este parâmetro não estiver configurado para o vendedor, o campo de preço estará habilitado por padrão.</td>
        <td>Usuário</td>
    </tr>
    <tr>
        <td>A3_LIBDESC</td>
        <td>Este parâmetro `habilita/desabilita` o **`campo de desconto`** no modal de `adicionar/editar` um item no carrinho de um novo pedido de venda. Use **`S`** para **habilitar** ou use **`N`**, ou **`String vazia`** para **desabilitar**. **Importante:** Se este parâmetro não estiver configurado para o vendedor, o campo de desconto estará habilitado por padrão.</td>
        <td>Usuário</td>
    </tr>
    <tr>
        <td>A3_PERCLI</td>
        <td>Este parâmetro `habilita/desabilita` o **`checkbox`** para **`inativar um cliente durante o cadastro de uma visita não positivada`**. Use **`S`** para **habilitar** ou utilize **`N`**, **`String vazia`** ou **`simplesmente não cadastre este parâmetro`** para **desabilitar**.</td>
        <td>Usuário</td>
    </tr>
</table>

## Problemas comuns

1. **Cadastrei um novo parâmetro, mas ele não funcionou no aplicativo:** 

    Ao cadastrar um novo parâmetro de [escopo global](#tipos-de-parâmetros), a partir da tela inicial, navegue até a guia de **configurações** do sistema e atualize as **tabelas de configuração**. Se o novo parâmetro for de [escopo de usuário](#tipos-de-parâmetros), na tela inicial, arraste para baixo para atualizar.

    Ao realizar algum dos passos que foram descritos acima, o parâmetro deve passar a funcionar sem problemas no aplicativo.

    Se mesmo após realizar os passos apresentados acima, o parâmetro continuar não funcionando, no **Tempus ERP**, verifique se o cadastro do parâmetro foi feito corretamente e sem erros de digitação. Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).