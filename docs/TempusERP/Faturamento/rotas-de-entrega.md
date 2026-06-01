---
sidebar_label: "Rotas de Entrega"
title: "Cadastros de Rotas de entrega"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import Entrega from "@site/static/img/erp/entregas/entrega1.png";
import Entrega2 from "@site/static/img/erp/entregas/entregas2.png";
import Entrega3 from "@site/static/img/erp/entregas/entregas3.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




# Cadastros de Rotas de Entrega

A rotina **Cadastro de Rotas de Entrega** do sistema Tempus tem como finalidade organizar, planejar e controlar as rotas utilizadas para a distribuição de mercadorias.

Por meio deste módulo, é possível:
- Definir rotas de entrega por região, cidade ou área comercial
- Associar clientes específicos a cada rota
- Planejar cronogramas de entrega semanais
- Otimizar deslocamentos logísticos
- Melhorar o controle operacional das distribuições

A correta configuração das rotas garante maior eficiência logística, redução de custos operacionais e melhor organização no processo de entregas.

## Tela Inicial

Ao acessar a rotina, o sistema exibirá uma listagem com todas as rotas de entrega previamente cadastradas.

<div className="divRow">
    <img 
        src={Entrega}
        alt="Tela inicial da rotina de cadastro de rotas de entrega"
    />
</div>

Nesta tela, é possível:
- Incluir novas rotas
- Alterar rotas existentes
- Excluir registros
- Visualizar informações detalhadas

<div className="divRow">
    <img 
        src={Entrega2}
        alt="Tela de gerenciamento de rotas de entrega"
    />
</div>

## Inclusão de Nova Rota

Ao clicar na opção **Incluir**, o sistema abrirá a tela de cadastro para registro de uma nova rota de entrega.

<div className="divRow">
    <img 
        src={Entrega3}
        alt="Tela de inclusão de nova rota de entrega"
    />
</div>

### Campos obrigatórios:

**CÓD. ROTA** – Código identificador da rota, conforme padrão definido pela empresa.

**DESCRIÇÃO** – Nome ou descrição da rota, devendo ser preenchido em caixa alta.

**REGIÃO** – Região vinculada à rota, selecionada a partir do cadastro de regiões previamente configurado.

## Funcionalidades da Rotina

### Alteração de Dados

Utilize a opção **Alterar** para modificar informações de uma rota já cadastrada.  
Após realizar as alterações necessárias, clique em **Salvar**.

### Exclusão de Rotas

Selecione a opção **Excluir** para remover uma rota do sistema.

### Visualização

Ao utilizar a opção **Visualizar**, será possível consultar os dados da rota sem permissão para edição.

## Planejamento Semanal

A rotina permite utilizar abas correspondentes da **1ª à 4ª semana**, possibilitando um melhor planejamento logístico e organização das entregas ao longo do mês.

## Vinculação de Clientes

Na grade inferior da rotina, é possível visualizar e gerenciar os clientes vinculados a cada rota cadastrada.

## Salvamento do Cadastro

Após revisar todas as informações:
- Clique em **Salvar**
- A rota ficará disponível para utilização em processos operacionais do sistema

## Considerações Gerais

Manter o cadastro de rotas corretamente estruturado proporciona:
- Melhor controle logístico
- Otimização das entregas
- Redução de deslocamentos desnecessários
- Organização regional de clientes
- Planejamento comercial mais eficiente
- Apoio estratégico à distribuição

Uma gestão adequada das rotas contribui diretamente para a produtividade operacional e qualidade do atendimento ao cliente.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::