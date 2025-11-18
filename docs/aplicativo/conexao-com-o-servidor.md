---
sidebar_position: 2
sidebar_label: "Conexão com o servidor"
title: "Conexão com o servidor"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Conexão com o servidor

Configurar a **conexão com o servidor**, é o primeiro passo a ser realizado pelo usuário ao instalar o aplicativo. Tal configuração, é de extrema importância, porquê será a partir desta etapa que o aplicativo saberá o servidor (`API`) a qual ele deverá utilizar para obter e atualizar os dados. 

:::info[IMPORTANTE]
A conexão com o servidor requer uma conexão com a internet, de preferência, uma rede Wi-Fi.
:::


Ao cadastrar uma conexão com o servidor, o aplicativo irá criar um banco de dados `sqlite3`, baixar a `logo da empresa` que corresponde a conexão informada e por fim, `criar/povoar` as seguintes tabelas:

<table>
    <tr>
        <th>Tabela</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>ATA</td>
        <td>Tabelas - Máster</td>
    </tr>
     <tr>
        <td>ATB</td>
        <td>Tabelas - Detalhe</td>
    </tr>
    <tr>
        <td>AX1</td>
        <td>Cadastro de empresas</td>
    </tr>
    <tr>
        <td>AX2</td>
        <td>Módulos</td>
    </tr>
    <tr>
        <td>AX3</td>
        <td>Perfis de Usuários</td>
    </tr>
     <tr>
        <td>AX4</td>
        <td>Usuários</td>
    </tr>
    <tr>
        <td>AX5</td>
        <td>Usuários X Empresas</td>
    </tr>
    <tr>
        <td>AX6</td>
        <td>Usuários x Módulos</td>
    </tr>
    
</table>

:::note[É importante saber]
Por questões de segurança de dados, o aplicativo não faz o download dos dados da tabela `AX4`, ele apenas cria a tabela internamente. Isso ocorre para não expor a senha dos demais usuários do sistema.
:::

## Configurando conexão com o servidor

O processo de conexão com o servidor é realizado na `tela de apresentação do aplicativo`.

<div className="divRow">
    <img src={ConexaoComOServidor} alt="Tela de conexão com o servidor"/>
    <div className="divColumn">
        <b>Passo a passo para fazer a conexão com o servidor:</b>
        <ol className="divColumn">
            <li>No campo do **`nome da conexão`**, informe o nome(sem acentos e pontos) da empresa a qual você faz parte. Baseado no nome que o usuário informar, o aplicativo preencherá automaticamente o `link` e a `porta` de acesso.</li>
            <li>Clique no botão **`Salvar`**.</li>
        
        </ol>
    </div>
</div>


## Múltiplas conexões com servidores

O aplicativo também fornece suporte a multiplas conexões com o servidor. Este recurso é especialmente util quando o usuário trabalha em mais de uma empresa e fica alternando entre ambas com muita frequência.

A configuração de múltiplas conexões é realizada na tela de `Gerenciamento de conexões`, tela esta que pode ser acessada através da [tela de login](./login.md), para isso, clique no botão `Configurações do login` e no modal que será aberto, clique em `Gerenciar conexões`. Este passo a passo é mostrado nas imagens abaixo.

<div className="divRow pb-16">
    <img 
        src={Login2}
        alt="Tela de login"
    />
    <img 
        src={ConfiguracoesLogin}
        alt="Configurações do login"
    />
</div>

:::info[IMPORTANTE]
O gerenciamento de conexões só ficará acessivel ao fazer login pelo menos uma vez no aplicativo. 
:::warning[ATENÇÃO]
Ao limpar o cache, o aplicativo perderá a informação de logins já realizados e você só poderá acessar a tela de `gerenciamento de conexões` quando logar e deslogar novamente.
:::

### Entendendo a tela de gerênciamento de conexões

<Tabs className="fw-600">
    <TabItem value="list" label="Listagem de conexões">
        <div className="divRow">
            <img
                src={ListagemDeConexoes1}
                alt="listagem de conexões"
                className="h-500"
            />
            <div className="divColumn">
                <div>
                    <b>Como funciona ?</b>
                    <p>Ao abrir esta tela, o aplicativo irá listar todas as **conexões** que o usuário cadastrou no aplicativo. A listagem é feita em formato de cards compactos, uma abaixo da outro. </p>
                </div>
                <div>
                    <b>Como indentificar a conexão ativa ?</b>
                    <p>A conexão ativa será identificada por marcador (icone de ✅) que estará localizado no canto direito do card.</p>
                    :::tip[DICA]
                    A conexão ativa também é exibida na `tela de login` e nas `configurações de login`.
                    :::
                </div>
                <div>
                    <b>Alternando entre conexões</b>
                    <p>Para alternar entre as conexões, dentre as conexões listadas, selecione alguma e em seguida clique no botão **`Confirmar`**.</p>
                </div>
            </div>
        </div>
    </TabItem>
    <TabItem value="add" label="Adicionando uma conexão">
        <div className="divRow">
            <img
                src={AdicionarConexao}
                alt="Adicionando uma nova conexão"
                className="h-500"
            />
            <div className="divColumn">
                <div>
                    <b>Como funciona ?</b>
                    <p>Para cadastrar uma nova **conexão**, no canto superior direito da tela, clique no botão `+ Adicionar`. No modal de cadastro, digite o `nome da empresa` a qual faz parte (sem pontos e acentos), espere o app puxar as informações do servidor, e depois clique em `Salvar`.</p>
                    :::info[IMPORTANTE]
                    O cadastro de uma nova conexão requer `conexão com a internet` e também que o `servidor em questão esteja ativo`.
                    :::
                </div>
                <div>
                    <b>Selecionando a conexão cadastrada</b>
                    <p>Ao cadastrar uma nova conexão, ela será automaticamente listada na tela. Selecione a conexão cadastrada e clique em `Confirmar`.</p>
                </div>
            </div>
        </div>
    </TabItem>
    <TabItem value="remove" label="Removendo uma conexão">
       <div className="divRow">
            <img
                src={RemocaoDeConexao}
                alt="Removendo uma conexão"
                className="h-500"
            />
            <div className="divColumn">
                <div>
                    <b>Como funciona ?</b>
                    <p>Para remover uma conexão, `aperte e segure` em cima do card da conexão e clique em `Excluir  conexão`.</p>
                    :::danger[CUIDADO]
                    Ao remover uma conexão, o banco de dados que está atrelado a conexão também é removido, ou seja, você tiver algum dado importante que ainda não foi sincronizado, ele será apagado. Portanto, resolva todas as pendências no aplicativo e somente depois faça a exclusão. 
                    :::
                    :::info[IMPORTANTE]
                    Só é permitido apagar os dados de uma conexão que não está ativa no momento.
                    :::
                </div>
            </div>
        </div>
    </TabItem>
</Tabs>


