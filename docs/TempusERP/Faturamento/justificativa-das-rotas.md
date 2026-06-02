--- 
sidebar_position: 3
sidebar_label: "Justificava das Rotas" 
title: "Justificativa das rotas canceladas/retornadas"
--- 
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png"; 
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png"; 
import justificativa from "@site/static/img/erp/justificativa-das-rotas/justificativa.png"; 
import justificativa2 from "@site/static/img/erp/justificativa-das-rotas/justificativa2.png"; 
import justificativa3 from "@site/static/img/erp/justificativa-das-rotas/justificativa3.png"; 
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png"; 
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png"; 
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png"; 
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png"; 
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg"; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

# Justificativa das Rotas Canceladas/Retornadas

A rotina **Justificativa das Rotas** do sistema Tempus tem como finalidade cadastrar e gerenciar os motivos utilizados para registrar cancelamentos, retornos ou alterações operacionais em rotas comerciais e logísticas.

Esse módulo é essencial para padronizar registros, facilitar auditorias internas, melhorar o controle operacional e fornecer maior transparência na análise de ocorrências relacionadas às rotas.

## Tela Inicial

Ao acessar a rotina, o sistema exibirá a listagem de justificativas já cadastradas, permitindo o gerenciamento completo dos registros existentes.

<div className="divRow">
    <img 
        src={justificativa}
        alt="Tela inicial da rotina de justificativa das rotas"
    />
</div>

## Gerenciamento de Justificativas

Nesta rotina, é possível realizar as seguintes operações através dos botões disponíveis no menu superior:
- Inclusão de novas justificativas
- Alteração de registros existentes
- Exclusão de justificativas

<div className="divRow">
    <img 
        src={justificativa2}
        alt="Menu de gerenciamento das justificativas das rotas"
    />
</div>

## Inclusão de Nova Justificativa

Ao selecionar a opção **Incluir**, será exibida a tela de cadastro para preenchimento das informações necessárias.

<div className="divRow">
    <img 
        src={justificativa3}
        alt="Tela de cadastro de nova justificativa de rota"
    />
</div>

### Campos para preenchimento:

**CÓDIGO** – Informe um código sequencial para identificação da justificativa.  
**Exemplo:** `1`, `2`, `3`...

**JUSTIFICATIVA** – Descreva o motivo ou modelo da justificativa.

**STATUS** – Selecione o status correspondente ao motivo cadastrado.

**RESPONSÁVEL** – Defina o responsável vinculado à justificativa.

:::info[IMPORTANTE]
Os campos destacados em azul são obrigatórios e devem ser preenchidos corretamente para que o cadastro seja concluído com sucesso.
:::

## Considerações Gerais

A utilização correta desse cadastro proporciona:
- Padronização dos motivos de cancelamento ou retorno
- Melhor controle operacional
- Facilidade em auditorias e relatórios
- Maior rastreabilidade dos processos logísticos
- Gestão mais eficiente das ocorrências de rota

Manter as justificativas organizadas e atualizadas contribui diretamente para a qualidade da gestão comercial e logística.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::