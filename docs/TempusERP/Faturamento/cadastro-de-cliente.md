---
sidebar_position: 6
sidebar_label: "Cadastro de Cliente"
title: "Cadastro de Cliente"
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

# Cadastro de Cliente

A rotina de **Cadastro de Cliente** permite incluir novos clientes no sistema e alterar os dados de clientes já cadastrados, reunindo informações fiscais, comerciais, financeiras e logísticas necessárias para a realização das vendas.

Para acessar a rotina, vá até:

**Cadastro → Cliente**

## Alterando um Cliente Existente

Para alterar um cliente já cadastrado, localize o cliente desejado, selecione o cadastro e clique em **Alterar**.

Preencha ou atualize as informações de acordo com os dados do cliente.

## Informações Fiscais

A situação fiscal deve ser preenchida de acordo com o tipo de pessoa e a inscrição estadual do cliente.

Utilize a configuração correspondente:

- **CNPJ com Inscrição Estadual:** Contribuinte do ICMS
- **CNPJ sem Inscrição Estadual:** Isento de Inscrição Estadual
- **CPF:** Não Contribuinte

Caso o cliente seja isento, informe **ISENTO** em letras maiúsculas no campo correspondente.

Também informe corretamente se o cadastro corresponde a uma **Pessoa Física** ou **Pessoa Jurídica**.

## Informações de Contato

Preencha o máximo de informações disponíveis sobre o cliente.

No campo **Contato**, informe preferencialmente o nome da pessoa responsável com quem a empresa costuma se comunicar.

Essa informação pode ser utilizada, por exemplo, quando houver um título em atraso e for necessário entrar em contato com alguém responsável dentro da empresa do cliente.

## Endereço e Campos Obrigatórios

Preencha corretamente os dados de endereço e as demais informações cadastrais.

:::info
Todos os campos apresentados na cor **azul** são obrigatórios e devem ser preenchidos para permitir a gravação do cadastro.
:::

## Limite de Crédito

No campo **Limite de Crédito**, informe o valor de crédito autorizado para o cliente.

Esse limite funciona de forma semelhante ao limite de um cartão de crédito e será utilizado pelo sistema para controlar a liberação dos pedidos.

O valor poderá ser alterado posteriormente sempre que necessário.

Caso o cliente ultrapasse o limite disponível, seus pedidos poderão ser bloqueados para análise e liberação.

## Risco do Cliente

Configure o risco utilizado para o controle de crédito.

Por exemplo, utilizando o **Risco B**, caso o cliente possua um título com atraso, o sistema poderá bloquear novos pedidos para que seja realizada uma análise antes da liberação da venda.

## Configuração da Rota

Na parte de **Logística**, informe a rota correspondente ao cliente.

Selecione a mesma rota na qual o cliente foi incluído durante a configuração das rotas de entrega.

Essa informação será utilizada posteriormente nos processos de organização das entregas e montagem das cargas.

## Condições de Pagamento

Todo cliente deve possuir pelo menos uma condição de pagamento autorizada.

Na parte inferior do cadastro, localize a seção de **Condições de Pagamento** e inclua as condições que poderão ser utilizadas nas vendas para aquele cliente.

Para incluir várias condições:

1. Inclua a primeira condição de pagamento.
2. Clique em **Novo**.
3. Inclua a próxima condição.
4. Repita o processo para todas as condições autorizadas.

:::warning
Durante a digitação de um pedido, somente serão apresentadas as condições de pagamento previamente autorizadas no cadastro do cliente.
:::

## Incluindo um Novo Cliente

Para cadastrar um novo cliente, clique no botão **Incluir**.

Preencha as informações de acordo com os dados disponíveis, incluindo:

- Tipo de pessoa
- CPF ou CNPJ
- Inscrição Estadual, quando houver
- Situação perante o ICMS
- Dados de contato
- Endereço
- Limite de crédito
- Risco
- Rota
- Condições de pagamento

Preencha o máximo de informações disponíveis e certifique-se de completar todos os campos obrigatórios.

## Salvando o Cadastro

Após preencher todas as informações necessárias e incluir as condições de pagamento autorizadas, clique em **Salvar**.

Confirme novamente a gravação, caso solicitado pelo sistema.

## Resultado do Processo

Ao finalizar o cadastro, o cliente estará disponível para utilização nas demais rotinas do sistema, com suas informações fiscais, financeiras e logísticas configuradas.

O cadastro correto permitirá:

- Realizar pedidos de venda
- Controlar o limite de crédito
- Bloquear pedidos quando necessário
- Utilizar apenas condições de pagamento autorizadas
- Organizar o cliente na rota correta
- Manter os dados fiscais adequados para o faturamento

:::tip
Antes de salvar, confira principalmente a situação fiscal do cliente, o limite de crédito, a rota e as condições de pagamento, pois essas informações interferem diretamente na digitação, liberação e faturamento dos pedidos.
:::