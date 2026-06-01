---
sidebar_label: "Conta de energia"
title: "Conta de energia"
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

# Lançamento de Nota Fiscal de Energia

A rotina **Nota Fiscal Manual de Entrada** do sistema Tempus permite realizar o lançamento manual de contas de energia elétrica no módulo de **Livros Fiscais**, garantindo o correto registro fiscal, financeiro e tributário da despesa.

Esse processo é utilizado para registrar:
- Contas de energia elétrica
- Créditos de ICMS
- Créditos de PIS e COFINS (quando aplicável)
- Controle financeiro da obrigação
- Integração contábil e fiscal

A parametrização correta da nota é fundamental para assegurar conformidade tributária e correta apuração fiscal da empresa.

## Inclusão da Nota de Energia

### Caminho da rotina:
**Livros Fiscais > Movimento > Nota Fiscal Manual de Entrada**

Ao acessar a rotina:
- Clique em **Incluir**
- Selecione a opção **Operação Normal**

## Preenchimento dos Dados Principais

### Fornecedor
Informe o fornecedor responsável pela conta de energia.

### Modelo
Utilize o modelo:
`06`

### Série
Informe a série presente na conta de energia.

### Número da Nota
Digite o número correspondente à fatura de energia.

### Forma de Pagamento
Preencha conforme a condição apresentada na conta.

### Tipo do Documento
Utilize:
`NFR`

## Aba de Valores

Na aba de valores, informe:

### Valor Total da Nota
Valor total da conta de energia.

### Valor Total dos Produtos
Repita o valor total da conta.

### Base de ICMS
Informe a base de cálculo do ICMS destacada na fatura.

### Valor do ICMS
Preencha conforme demonstrado na conta de energia.

### Outras Despesas
Caso existam cobranças adicionais, informe no campo correspondente.

## PIS e COFINS

Caso a empresa possua tributação compatível com crédito de PIS e COFINS, será necessário preencher as informações fiscais.

### Base de PIS e COFINS

A base será:
`Valor Total da Nota - Valor do ICMS`

## Diferença por Regime Tributário

### Lucro Presumido

Para empresas do **Lucro Presumido**:
- Não há aproveitamento de crédito de PIS e COFINS
- Utilizar:
`CST de Entrada 98`

### Lucro Real

Para empresas do **Lucro Real**:
- Há aproveitamento de crédito de PIS e COFINS
- Utilizar:
`CST de Entrada 50`

Além disso:
- Informar alíquotas de PIS e COFINS
- Calcular os respectivos valores
- Preencher os campos fiscais correspondentes

## Aba Fiscal

Na aba:
**Fiscal**

Procure e selecione uma regra semelhante a:
- Compra de Energia
- Aquisição de Energia
- Entrada de Energia

Após isso:
- Informe o CST de entrada correspondente
- Confirme os parâmetros fiscais

## Salvamento da Nota

Após preencher:
- ICMS
- PIS
- COFINS
- Outras despesas (se houver)
- Dados fiscais

Clique em **Salvar**.

## Confirmação Financeira

Após salvar, o sistema abrirá a tela financeira.

### Nessa etapa:
- Confirme o financeiro
- Informe o vencimento conforme a conta de energia
- Preencha o centro de resultado, caso necessário
- Clique em **Confirmar**

Após essa etapa, a nota estará devidamente lançada no sistema.

## Considerações Gerais

O lançamento correto da nota de energia proporciona:
- Controle fiscal adequado
- Aproveitamento correto de créditos tributários
- Organização financeira
- Integração contábil
- Conformidade tributária
- Melhor gestão de despesas operacionais

:::info[IMPORTANTE]
A principal diferença no lançamento ocorre conforme o regime tributário da empresa:

**Lucro Presumido**
- CST 98
- Sem crédito de PIS e COFINS

**Lucro Real**
- CST 50
- Com crédito de PIS e COFINS
- Necessário preencher bases, alíquotas e valores
:::

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::