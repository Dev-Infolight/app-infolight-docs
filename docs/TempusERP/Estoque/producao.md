---
sidebar_position: 2
sidebar_label: "Produção"
title: "Produção"
---

import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import flex from "@site/static/img/erp/painel-flex/flex.png";
import rotina from "@site/static/img/erp/painel-flex/rotina.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Simulação e Apontamento de Produção

A rotina de **Cálculo MRP e Apontamento de Produção** do sistema Tempus permite simular uma produção com base na ficha técnica dos produtos, calcular automaticamente os componentes necessários e, posteriormente, realizar o apontamento da produção.

Esse processo permite:
- Testar e validar fichas técnicas
- Calcular a necessidade de matérias-primas
- Gerar ordens de produção
- Ajustar o consumo real dos componentes
- Informar custos de produção
- Dar baixa automática nas matérias-primas
- Alimentar o estoque dos produtos produzidos
- Consultar os custos das ordens de produção

## Simulação da Produção

Para iniciar uma simulação, acesse:

**Produção > Cálculo MRP**

Na tela de cálculo, a produção pode ser gerada de diferentes formas:
- Por meta de vendas
- Por pedidos de venda em aberto
- Por ordem de produção previamente agendada
- Manualmente, produto por produto

Também é possível configurar a simulação considerando:
- Estoque zero para todos os componentes
- Estoque zero apenas para produtos intermediários (PI) e semiacabados

## Simulação Manual de um Produto

Para realizar uma simulação manual:

- Pressione **F3**
- Localize o produto desejado
- Informe a quantidade que deseja produzir
- Pressione **Enter**
- Clique no botão de execução

O sistema calculará automaticamente todos os componentes necessários conforme as proporções definidas na ficha técnica.

### Exemplo

Para produzir:
`20 kg de massa`

O sistema apresentará automaticamente:
- Matérias-primas necessárias
- Quantidades previstas
- Proporções definidas na ficha técnica

:::info
Nesse momento, o sistema está apenas realizando o cálculo da necessidade dos componentes. A movimentação efetiva do estoque ocorrerá somente durante o **apontamento da produção**.
:::

## Impressão da Necessidade de Produção

Após realizar o cálculo, é possível imprimir a simulação.

O relatório apresentará:
- Produto que será produzido
- Quantidade planejada
- Componentes necessários
- Quantidades previstas para cada componente

## Geração da Ordem de Produção

Após conferir a simulação:
- Clique no botão **Salvar**
- Informe a data da produção

É possível:
- Utilizar a data atual
- Informar uma data retroativa

Após confirmar, o sistema gerará a ordem de produção.

Em seguida, será possível escolher se deseja limpar a tela para realizar uma nova simulação.

## Apontamento da Produção

Após gerar a ordem, será necessário realizar o apontamento.

### Caminho:
**Produção > Apontar Ordem de Produção**

Localize a ordem desejada:
- Pela data
- Pela ordem de produção

Em seguida:
- Selecione a ordem
- Clique em **Apontar**

:::info[IMPORTANTE]
É no momento do apontamento que o sistema realiza a movimentação efetiva do estoque.
:::

## Ajuste do Consumo Real

Durante o apontamento, é possível informar a quantidade realmente utilizada de cada componente.

### Exemplo

Quantidade prevista:
`13,5 kg de farinha`

Quantidade realmente utilizada:
`13,6 kg de farinha`

Nesse caso, basta alterar a quantidade antes de confirmar o apontamento.

O mesmo pode ser feito para qualquer componente:
- Aumentar a quantidade utilizada
- Diminuir a quantidade utilizada
- Zerar um componente que não foi utilizado

Esses ajustes permitem registrar a produção conforme o consumo real ocorrido.

## Ajuste da Quantidade Produzida

Também é possível alterar o rendimento final da produção.

### Exemplo

Quantidade prevista:
`20 kg`

Quantidade efetivamente produzida:
`20,2 kg`

Caso o rendimento seja maior ou menor que o previsto, informe a quantidade real produzida antes de concluir o apontamento.

## Custos de Produção

Na aba de **Custos de Produção**, é possível acrescentar custos adicionais relacionados ao processo produtivo.

### Exemplos:
- Mão de obra
- Utilização de máquinas
- Outros custos relacionados à produção

### Exemplo

Custo total de mão de obra:
`R$ 150,00`

O sistema utilizará essa informação para calcular o impacto do custo sobre os produtos produzidos.

Caso não seja necessário informar custos adicionais, basta manter os valores sem alteração.

## Confirmação da Produção

Após conferir:
- Componentes utilizados
- Quantidades consumidas
- Quantidade produzida
- Custos adicionais

Clique no botão de confirmação.

O sistema solicitará a confirmação da ordem selecionada.

Após confirmar:
- O apontamento será realizado
- As matérias-primas serão baixadas do estoque
- O produto produzido será adicionado ao estoque

## Movimentação do Estoque

O apontamento realiza duas movimentações principais.

### Baixa das Matérias-Primas

O sistema retira do estoque as quantidades efetivamente utilizadas na produção.

### Exemplo:
`13,5 kg de farinha`

Após o apontamento, essa quantidade será registrada como saída no movimento de estoque da matéria-prima.

### Entrada do Produto Produzido

Ao mesmo tempo, o sistema realiza a entrada da quantidade produzida.

### Exemplo:
`20 kg de base`

Essa quantidade será adicionada ao estoque do produto intermediário.

## Produção em Etapas

Alguns processos produtivos possuem mais de uma etapa.

### Exemplo:
1. Produção da base
2. Utilização da base para produção do produto final
3. Embalagem do produto para venda

Nesse cenário, a primeira produção gera um **Produto Intermediário (PI)**.

Depois, esse produto intermediário será utilizado como componente da produção do produto final.

## Produção do Produto Final

Para produzir o item que será comercializado, acesse novamente:

**Produção > Cálculo MRP**

Selecione o produto final e informe a quantidade desejada.

### Exemplo

Para produzir:
`50 unidades do produto final`

O sistema poderá calcular a necessidade de:
- `20 kg` do produto intermediário
- `50 unidades` de embalagem

Essas quantidades serão calculadas automaticamente conforme a ficha técnica do produto final.

## Geração e Apontamento da Segunda Produção

Após conferir os componentes:
- Salve a ordem de produção
- Confirme a data
- Acesse **Apontar Ordem de Produção**
- Localize a nova ordem
- Realize os ajustes necessários
- Informe custos adicionais, caso existam
- Confirme o apontamento

Após a confirmação:
- O produto intermediário será baixado do estoque
- As embalagens serão consumidas
- O produto final será adicionado ao estoque

### Exemplo

O sistema poderá:
- Baixar `20 kg` da base
- Baixar `50 embalagens`
- Adicionar `50 unidades` do produto final ao estoque

## Relatório de Produção

Após finalizar as produções, é possível consultar as ordens realizadas.

A consulta pode ser feita por:
- Data
- Período de produção

O relatório permite visualizar:
- Ordens de produção realizadas
- Produtos produzidos
- Quantidades
- Custo unitário do produto intermediário
- Custo unitário do produto final

## Considerações Gerais

O processo de produção no sistema segue, de forma geral, o seguinte fluxo:

1. Cadastro e configuração da ficha técnica
2. Simulação no Cálculo MRP
3. Geração da ordem de produção
4. Apontamento da produção
5. Ajuste do consumo real dos componentes
6. Baixa das matérias-primas
7. Entrada do produto produzido no estoque
8. Consulta dos custos e relatórios de produção

:::info[IMPORTANTE]
A **simulação** calcula o que será necessário para produzir. O **apontamento** confirma o que realmente foi utilizado e realiza as movimentações de estoque.
:::

Os custos adicionais utilizados na formação do preço de venda, como percentuais de comissão e frete, podem ser configurados posteriormente no **Painel de Formação de Preço de Venda**.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::