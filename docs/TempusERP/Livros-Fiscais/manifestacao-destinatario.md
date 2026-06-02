---
sidebar_position: 5
sidebar_label: "Manifestação do destinatário"
title: "Manifestação do destinatário"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import inclusao from "@site/static/img/erp/notas-de-servico/inclusao.png";
import cadastro from "@site/static/img/erp/notas-de-servico/cadastro_servico.png";
import cadastroFornecedor from "@site/static/img/erp/notas-de-servico/cadastro_fornecedor.png";
import inclusao_fiscal from "@site/static/img/erp/notas-de-servico/inclusao_fiscal.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manifestação do Destinatário

A rotina **Manifestação do Destinatário** do sistema Tempus permite consultar diretamente na SEFAZ todas as notas fiscais emitidas contra o CNPJ da empresa, além de realizar as manifestações fiscais obrigatórias relacionadas a essas operações.

Essa rotina auxilia no:
- Controle de notas emitidas contra a empresa
- Monitoramento fiscal
- Ciência das operações
- Identificação de notas indevidas
- Download automático de XML
- Controle de lançamentos fiscais

A manifestação do destinatário é uma importante ferramenta de segurança fiscal e validação das operações realizadas pela empresa.

## Caminho da Rotina

### Acesso:
**Livros Fiscais > Movimento > Manifestação do Destinatário**

## Consulta das Notas

Ao acessar a rotina, será possível realizar consultas das notas fiscais emitidas para o CNPJ da empresa.

O sistema permite consultar:

- Últimos 3 meses
- A partir da última consulta realizada
- Por número específico de consulta

## Realizando a Consulta

### Procedimento:
- Selecione o período desejado
- Clique em:
`Consultar`

O sistema enviará uma solicitação para a SEFAZ.

Após o processamento:
- A SEFAZ retornará as notas encontradas
- O sistema exibirá as informações na tela

## Resultado da Consulta

Após a consulta:
- O sistema poderá informar notas novas
- Também exibirá notas cujo XML já foi baixado anteriormente

### Exemplo:
- 3 notas novas encontradas
- 26 notas já baixadas

## Tela de Manifestação

Na segunda aba da rotina:
`Realizar Manifestação`

serão exibidas todas as notas consultadas.

Também é possível:
- Filtrar por período
- Localizar notas específicas
- Consultar status das manifestações

## Tipos de Manifestação

Na lateral esquerda da tela:
- Existe uma caixa de seleção para marcar as notas desejadas

Após selecionar a nota, será possível escolher uma das opções:

### Ciência da Operação
Confirma que a empresa possui conhecimento da emissão da nota fiscal.

### Confirmação da Operação
Confirma que a operação realmente ocorreu.

### Desconhecimento da Operação
Indica que a empresa não reconhece a operação informada.

### Operação Não Realizada
Indica que a operação não foi efetivamente concluída.

## Justificativa da Operação Não Realizada

Caso seja selecionada a opção:
`Operação Não Realizada`

será obrigatório informar:
- A justificativa correspondente

Após preencher:
- Clique em:
`Manifestar`

## Atualização do Status

Após concluir a manifestação:
- O sistema atualizará automaticamente o status da nota

### Exemplo:
De:
`Sem Manifestação`

Para:
- Ciência da Operação
- Confirmada
- Desconhecida
- Operação Não Realizada

## Controle de Lançamentos

A rotina também informa:
- Quais notas ainda não foram lançadas
- Quais notas já possuem entrada realizada

### Status:
- `Pendente` → Nota ainda não lançada
- `OK` → Nota já lançada no sistema

## Impressão da Consulta

A tela de manifestação pode ser impressa para:
- Conferência
- Auditoria
- Controle interno
- Arquivamento fiscal

## Considerações Gerais

A Manifestação do Destinatário proporciona:
- Maior segurança fiscal
- Controle das NF-es emitidas contra a empresa
- Identificação de operações indevidas
- Download automático de XML
- Controle de pendências fiscais
- Melhor rastreabilidade tributária

A utilização frequente dessa rotina é altamente recomendada para garantir conformidade fiscal e acompanhamento correto das operações emitidas no CNPJ da empresa.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::