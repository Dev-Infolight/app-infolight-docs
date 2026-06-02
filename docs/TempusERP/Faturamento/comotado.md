--- 
sidebar_position: 2
sidebar_label: "Comotado" 
title: "Comodato"
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


# Controle de Comodato — Cadastro de Produtos

A rotina de **Controle de Comodato** do sistema Tempus permite gerenciar produtos cedidos aos clientes em regime de comodato, garantindo rastreabilidade, controle patrimonial e acompanhamento correto dos bens vinculados.

Para que o sistema consiga controlar corretamente os itens em comodato, é necessário que o produto esteja devidamente configurado no cadastro de produtos.

Esse processo é fundamental para:
- Associar bens aos clientes
- Controlar remessas de comodato
- Gerenciar ativos imobilizados
- Realizar rastreamento patrimonial
- Garantir consistência fiscal e operacional

## Cadastro do Produto

O primeiro passo para utilização do controle de comodato é realizar o cadastro correto do item.

### Caminho da rotina:
**Estoque > Cadastro > Produto**

## Configuração do Produto

Ao incluir um novo produto:

### Descrição
Informe corretamente a descrição do item.

### Grupo e Subgrupo
Associe o produto ao grupo e subgrupo adequados conforme a organização da empresa.

## Tipo do Produto

No campo:
**TIPO**

Selecione obrigatoriamente:
`Imobilizado`

:::info[IMPORTANTE]
O produto precisa estar configurado como **Imobilizado** para que o sistema reconheça o item como participante do controle de comodato.
:::

## Demais Configurações

### Disponível
Defina:
`SIM`

Essa configuração permite que o produto seja utilizado em pedidos e movimentações.

### Ativo
Defina:
`SIM`

Isso garante que o item permaneça habilitado para utilização no sistema.

## Regras Fiscais

### Regra de Entrada

Na regra de entrada:
- Configure como:
`Compra de Ativo Imobilizado`

Essa parametrização indica ao sistema que o item pertence ao patrimônio da empresa.

### Regra de Saída

Na regra de saída:
- Configure como:
`Remessa de Bem para Comodato`

Essa configuração é responsável por:
- Identificar a movimentação como comodato
- Associar o bem ao cadastro do cliente
- Permitir o controle posterior do ativo

## Controle do Comodato

Após a correta configuração:
- O sistema conseguirá identificar o produto como bem de comodato
- O item poderá ser vinculado ao cliente
- Será possível controlar remessas e retornos
- O patrimônio ficará devidamente rastreado

## Considerações Gerais

A correta parametrização dos produtos de comodato proporciona:
- Controle patrimonial eficiente
- Rastreabilidade dos bens
- Segurança operacional
- Melhor gestão de ativos
- Controle de clientes vinculados
- Organização fiscal das remessas

Manter os produtos corretamente configurados é essencial para garantir o funcionamento adequado da rotina de comodato no sistema Tempus.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::