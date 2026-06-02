---
sidebar_position: 1
sidebar_label: "Fechamento da Prestação"
title: "Fechamento da Prestação"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import prestacao from "@site/static/img/erp/prestacao/prestacao.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Fechamento da Prestação

A rotina **Fechamento da Prestação** do sistema Tempus tem como finalidade concluir oficialmente o processo de prestação de contas dentro do módulo de **Títulos a Receber**, realizando a baixa financeira definitiva dos recebimentos registrados.

Esse procedimento é responsável por validar pagamentos recebidos, transformar formas de pagamento quando necessário e consolidar financeiramente os títulos vinculados à prestação.

## Finalidade da Rotina

Ao realizar o fechamento:

- Títulos pagos em dinheiro são baixados
- Boletos são confirmados
- Cheques são lançados corretamente
- Promissórias são registradas
- Pagamentos em PIX são processados
- Diferenças financeiras são identificadas
- A prestação é encerrada de forma definitiva

:::info[IMPORTANTE]
Após o fechamento, o processo não poderá ser desfeito, e a prestação será removida da tela operacional.
:::

## Pré-Requisitos

Antes de realizar o fechamento, é necessário:

- Conferir todos os lançamentos
- Validar recebimentos
- Garantir que a prestação esteja corretamente apurada
- Revisar relatórios financeiros
- Confirmar que a prestação esteja em situação de conferência final

## Processo de Fechamento

### Caminho da rotina:
**Títulos a Receber > Fechamento da Prestação**

Ao acessar:

### 1. Seleção da Prestação
- Clique em **Parâmetros**
- Informe o número da prestação desejada


### Exemplo:
`Prestação 3309`

<div className="divRow">
    <img  
        src={prestacao}
        alt="Tela de prestação"
    />
</div>

### 2. Confirmação
Após selecionar:
- Clique em **Fechamento**

O sistema apresentará um resumo completo da operação.

## Resumo Apresentado pelo Sistema

Durante o fechamento, o sistema pode informar:

### Títulos Mantidos em Aberto
Exemplo:
- Boletos apenas confirmados

### Títulos Baixados
Exemplo:
- Duplicatas pagas em dinheiro
- Recebimentos via PIX

### Diferenças Financeiras
Caso haja valores pagos a maior ou a menor:
- Sobras
- Faltas
- Diferenças de centavos

## Transformações Financeiras

O fechamento também realiza automaticamente conversões de forma de pagamento:

### Exemplos:
- Dinheiro convertido em cheque
- Dinheiro convertido em promissória
- Confirmação de boletos
- Baixa de pagamentos à vista

## Pós-Fechamento

Após concluir:

- A prestação recebe data de fechamento
- O usuário responsável é registrado
- O processo torna-se irreversível
- A prestação sai da listagem principal
- Não será mais possível alterar ou desfazer operações

## Conferência Pós-Fechamento

Após fechar a prestação, é necessário seguir para a etapa de **Conferência**, onde ocorre:

- Transporte financeiro dos valores
- Consolidação operacional
- Continuidade dos processos internos

Essa etapa é fundamental para garantir a correta transferência das movimentações para os setores financeiros apropriados.

## Considerações Gerais

A correta execução do fechamento da prestação proporciona:

- Segurança financeira
- Controle definitivo de recebimentos
- Baixa correta de títulos
- Registro formal das operações
- Auditoria confiável
- Integridade contábil
- Organização operacional

Realizar esse processo com atenção evita inconsistências financeiras e assegura maior confiabilidade na gestão de recebíveis.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::