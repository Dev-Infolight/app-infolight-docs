---
sidebar_position: 1
sidebar_label: "Ficha técnica"
title: "Ficha técnica"
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

# Ficha Técnica de Produção

A rotina **Ficha Técnica** do sistema Tempus é utilizada para controlar a composição dos produtos fabricados, permitindo definir matérias-primas, componentes utilizados e itens opcionais no processo produtivo.

Essa rotina é fundamental para:
- Controle de formulação
- Gestão de matérias-primas
- Controle de produção
- Substituição de componentes
- Flexibilidade operacional
- Padronização produtiva

## Estrutura das Empresas

O sistema possui fichas técnicas separadas para:
- Controle
- Fiscal

:::info[IMPORTANTE]
As alterações devem ser realizadas nas duas empresas, pois as formulações são independentes.
:::

Mesmo que os produtos sejam semelhantes:
- As quantidades utilizadas podem ser diferentes
- As composições podem variar
- As estruturas produtivas são separadas

## Caminho da Rotina

### Acesso:
**Controle Geral > Estoque/Custo > Cadastro > Ficha Técnica**

## Localização dos Produtos

Ao acessar a rotina:
- Utilize a ordenação alfabética, caso necessário
- Localize o produto desejado

## Visualização em Árvore

A opção:
**Árvore**

permite visualizar toda a estrutura de composição do produto.

### Exemplo:
Produto:
`Amaciante`

O sistema exibirá:
- Tampa utilizada
- Embalagem
- Matérias-primas
- Componentes vinculados

## Alteração de Componentes

Ao localizar o componente desejado:
- Clique em **Alterar**

Na primeira aba:
- Será exibido tudo que o produto utiliza em sua composição

## Substituição Opcional de Componentes

Caso deseje manter o componente atual e adicionar uma alternativa:

### Procedimento:
- Vá até a aba:
`Opcional`
- Utilize:
`Construir Componente Vinculado`
- Selecione:
  - Componente atual
  - Novo componente opcional

### Exemplo:
- Tampa atual: Código 72
- Nova tampa: Código X

O sistema passará a entender que:
- Caso não exista estoque do componente principal
- Poderá ser utilizado o componente opcional

## Funcionamento na Produção

Durante a produção:
- Se o componente principal estiver sem estoque
- O sistema exibirá os componentes opcionais disponíveis

Nesse momento:
- Utilize `F3`
- Selecione o componente substituto desejado

## Substituição Definitiva

Caso não deseje manter o componente antigo:

### Procedimento:
- Utilize a opção **Excluir**
- Remova o componente atual
- Inclua o novo componente diretamente na ficha técnica

## Cadastro de Novos Produtos

Sempre que houver:
- Novo produto acabado
- Nova matéria-prima
- Novo componente de produção

Será necessário:
- Atualizar a ficha técnica correspondente

## Procedimento Recomendado

### Para substituição definitiva:
- Excluir componente antigo
- Inserir novo componente

### Para utilização simultânea:
- Manter componente atual
- Adicionar novo item como opcional

## Produção com Componentes Opcionais

Quando houver componentes opcionais cadastrados:
- O sistema permitirá selecionar qual item utilizar durante a produção

Isso proporciona:
- Flexibilidade operacional
- Continuidade produtiva
- Melhor aproveitamento de estoque

## Considerações Gerais

A correta manutenção das fichas técnicas proporciona:
- Controle preciso da produção
- Gestão eficiente de matérias-primas
- Flexibilidade operacional
- Melhor controle de custos
- Continuidade produtiva
- Redução de falhas na fabricação

Manter as fichas técnicas atualizadas é essencial para garantir consistência nos processos produtivos e correta apuração de custos.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::