---
sidebar_position: 4
sidebar_label: "Menus de usuários"
title: "Menus de usuário"
---

import MenuDeUsuario1 from '@site/static/img/menus-de-usuario/menu-de-usuario1.png';
import MenuDeUsuario2 from '@site/static/img/menus-de-usuario/menu-de-usuario2.png';

# Menus de usuário

São basicamente as **`opções do menu`** que serão apresentadas para o usuário após ele fazer login e/ou acessar a tela de relatórios do sistema. Com este recurso, podemos definir exatamente quais as **`telas`** e **`relatórios`** que serão apresentados para cada **`empresa, grupo de usuário e módulo do sistema`**. As imagens a seguir demonstram alguns exemplos de menus de usuário:

<div className="divRow">
    <img src={MenuDeUsuario1} alt="Exemplo de menu de usuário 1"/>
    <img src={MenuDeUsuario2} alt="Exemplo de menu de usuário 2"/>
</div>

## Onde configurar ?

No **Tempus ERP**, as opções de menu devem ser cadastradas na tabela de **`menus de usuário (CXQ)`**. A tabela abaixo explica o que você deve cadastrar em cada campo:

<table>
    <tr>
        <th>Campo</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>XQ_MODULO</td>
        <td>Sigla do módulo a qual esta opção de menu será destinada.</td>
    </tr>
        <tr>
        <td>XQ_GRUPO</td>
        <td>Sigla do grupo a qual esta opção de menu será destinada.</td>
    </tr>
        <tr>
        <td>XQ_CODIGO</td>
        <td>Código da opção.</td>
    </tr>
        <tr>
        <td>XQ_OPCAO</td>
        <td>Nome do menu.</td>
    </tr>
    <tr>
        <td>XQ_DESCRIC</td>
        <td>Nome do menu que vai aparecer no app.</td>
    </tr>
    <tr>
        <td>XQ_CHAMADA</td>
        <td>Define a **`tela`** ou **`submenu`** que será aberto ao clicar nesta opção.</td>
    </tr>
    <tr>
        <td>XQ_STATUS</td>
        <td>Define se esta opção estará habilitada ou não no app. Use **`H`** para **habilitar** ou **`D`** para **Desabilitar**.</td>
    </tr>
</table>


## Chamadas

O ponto chave dos **`menus de usuários`** são as **`chamadas`**, são com elas que definimos quais serão as telas ou submenus que serão abertos ao clicar na opção. Existem 3 tipos de chamadas, são elas:

1. **Chamadas convencionais:**

    São chamadas que, por padrão, sempre vão abrir telas específicas e com comportamentos não configuráveis, ou seja, sempre vão abrir telas sem modificar o funcionamento das mesmas.

2. **Chamadas para menus em árvore:**

    São chamadas onde o campo **`XQ_CHAMADA`** é vazio, e que no lugar de abrirem uma tela específica, listam os submenus de uma opção de menu. Esta listagem de submenus é feita com base no campo **`XQ_CODIGO`** da opção, por exemplo, ao clicar em cima de uma opção cujo o código é **`"05"`**, o aplicativo irá listar todos os menus que são filhos desta opção, como por exemplo: **`"05.01"`** e **`"05.02"`**. Este comportamento também se repete ao clicar em um submenu que possua submenus filhos.

3. **Chamadas para telas personalizáveis:**

    São chamadas que além de definirem qual tela será aberta, também definem as informações que serão exibidas. Existem 4 chamadas personalizáveis no aplicativo: **DBCAD**, **DBON**, **DBCARD** e **DBONCARD**. Os detalhes destas chamadas estão na seção [Telas genéricas](./telas-genericas/dbcad_view.md).

## Relação de chamadas

<table>
    <tr>
        <th>Chamada</th>
        <th>Descrição</th>
        <th>Tipo</th>
    </tr>
    <tr>
        <td>frmPedidos</td>
        <td>Abre a tela de **`pedidos de venda`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>dbPed(TA1)</td>
        <td>Abre a tela de **`Clientes`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>novocli()</td>
        <td>Abre a tela de **`Cadastro de clientes`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>dbCardEXPCarga</td>
        <td>Abre a tela de **`Expedição de carga`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>dbCardEXPNFC</td>
        <td>Abre a tela de **`Expedição de NFCe`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>dbCardPORCarga</td>
        <td>Abre a tela de **`Abre a tela de liberação de veículo de carga`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>dbCardPORNFC</td>
        <td>Abre a tela de **`Liberação de NFCe avulsa`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>catalogo()</td>
        <td>Abre a tela de **`Catálogo de produtos`**.</td>
        <td>Convencional</td>
    </tr>
    <tr>
        <td>[dbcad](./telas-genericas/dbcad_view.md)</td>
        <td>Abre a tela que interpreta as chamadas **`dbcad`**.</td>
        <td>Personalizável</td>
    </tr>
    <tr>
        <td>[dbon](./telas-genericas/dbon_view.md)</td>
        <td>Abre a tela que interpreta as chamadas **`dbon`**.</td>
        <td>Personalizável</td>
    </tr>
    <tr>
        <td>[dbOnCard](./telas-genericas/dboncard_view.md)</td>
        <td>Abre a tela que interpreta as chamadas **`dbOnCard`**.</td>
        <td>Personalizável</td>
    </tr>
    <tr>
        <td>[dbCard](./telas-genericas/dbcard_view.md)</td>
        <td>Abre a tela que interpreta as chamadas **`dbCard`**.</td>
        <td>Personalizável</td>
    </tr>
    <tr>
        <td>[Análise Comercial](./analise_comercial.md)</td>
        <td>Configura os dados do body da requisição para gerar o relatório de **`Análise comercial`**.</td>
        <td>Personalizável</td>
    </tr>
    <tr>
        <td>[Painel de Vendas](./painel-de-vendas.md)</td>
        <td>Configura os dados da requisição para gerar o relatório do **`Painel de vendas`**.</td>
        <td>Personalizável</td>
    </tr>
    <tr>
        <td>Chamada vazia (XQ_CHAMADA = "")</td>
        <td>Abre a tela de relatórios, listando todos os submenus da opção selecionada.</td>
        <td>Personalizável</td>
    </tr>
</table>

## Problemas comuns

1. **Cadastrei ou atualizei os dados de uma opção de menu, mas não apareceu no aplicativo:**

    A partir da tela inicial, navegue até a guia **`Configurações`** e **`atualize as tabelas de configuração`**. Caso você não obtenha sucesso, verifique se cadastrou ou atualizou a opção do menu corretamente `(considerando módulo, empresa e grupo do usuário logado)` e **`atualize as tabelas de configuração novamente`**. Se o problema persistir, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
