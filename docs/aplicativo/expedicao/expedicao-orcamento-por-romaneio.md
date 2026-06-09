---
sidebar_position: 1
sidebar_label: "Expedição de orçamento por romaneio"
title: "Expedição de orçamento por romaneio"
---

import telaexpedicaodeorcamentoporromaneio1 from '@site/static/img/telaExpedicao/expedicao1.png';
import telaexpedicaodeorcamentoporromaneio2 from '@site/static/img/telaExpedicao/expedicao2.png';
import telaexpedicaodeorcamentoporromaneio3 from '@site/static/img/telaExpedicao/expedicao3.png';
import telaexpedicaodeorcamentoporromaneio4 from '@site/static/img/telaExpedicao/expedicao4.png';
import telaexpedicaodeorcamentoporromaneio5 from '@site/static/img/telaExpedicao/expedicao5.png';
import telaexpedicaodeorcamentoporromaneio6 from '@site/static/img/telaExpedicao/expedicao6.png';
import telaexpedicaodeorcamentoporromaneio7 from '@site/static/img/telaExpedicao/expedicao7.png';
import telaexpedicaodeorcamentoporromaneio8 from '@site/static/img/telaExpedicao/expedicao8.png';
import telaexpedicaodeorcamentoporromaneio9 from '@site/static/img/telaExpedicao/expedicao9.png';
import telaexpedicaodeorcamentoporromaneio10 from '@site/static/img/telaExpedicao/expedicao10.png';
import telaexpedicaodeorcamentoporromaneio11 from '@site/static/img/telaExpedicao/expedicao11.png';
import telaexpedicaodeorcamentoporromaneio12 from '@site/static/img/telaExpedicao/expedicao12.png';
import telaexpedicaodeorcamentoporromaneio13 from '@site/static/img/telaExpedicao/expedicao13.png';
import telaexpedicaodeorcamentoporromaneio14 from '@site/static/img/telaExpedicao/expedicao14.png';
import telaexpedicaodeorcamentoporromaneio15 from '@site/static/img/telaExpedicao/expedicao15.png';
import telaexpedicaodeorcamentoporromaneio16 from '@site/static/img/telaExpedicao/expedicao16.png';
import telaexpedicaodeorcamentoporromaneio17 from '@site/static/img/telaExpedicao/expedicao17.png';
import telaexpedicaodeorcamentoporromaneio18 from '@site/static/img/telaExpedicao/expedicao18.png';
import telaexpedicaodeorcamentoporromaneio21 from '@site/static/img/telaExpedicao/expedicao21.png';
import telaexpedicaodeorcamentoporromaneio22 from '@site/static/img/telaExpedicao/expedicao22.png';
import telaexpedicaodeorcamentoporromaneio23 from '@site/static/img/telaExpedicao/expedicao23.png';
import ZoomableImage from "@site/src/components/ZoomableImage";

# Expedição de Orçamento por Romaneio

A tela **Expedição de Orçamento por Romaneio** pertence ao módulo de **Expedição** e é **100% online**. Nela, o usuário pode realizar a expedição de produtos pertencentes a um ou mais pedidos aptos para faturamento. Como é uma tela de **Romaneio**, os produtos podem ser alterados durante a expedição. Por esse motivo, a tela está **adaptada para atualizações antes do término do processo**.

:::info Conexão necessária
Esta tela só funciona com **conexão com a internet**.  
Verifique sua rede antes de continuar.
:::

---

## Informações da Tela

Ao tocar no card que representa o romaneio, a tela exibe todos os produtos vinculados, que devem passar pelo processo de expedição.

No cabeçalho da tela, no canto superior direito, há o ícone para **cancelar o carregamento da carga**.  
Também é exibida a **placa do veículo** onde os produtos serão carregados.

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio1} alt="Cabeçalho da tela de produtos" />
</div>

O conteúdo da tela é composto por **cards**, cada um representando um produto.  
Cada card exibe a **foto** (se disponível), **código**, **nome**, **quantidade**, **unidade de medida** e, no canto direito, um **ícone de status de conferência**:  
☐ para pendente e ✅ para confirmado.

**Exemplo de card:**

```
Foto(Opcional) - Código do produto - Nome do produto ☐/✅ 
Quantidade - Unidade de medida.
```

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio2} alt="Card de Produto com Foto" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio3} alt="Card de Produto sem Foto" />
</div>

Na parte inferior da tela, são exibidos o **número da carga**, a **quantidade de produtos já carregados** e uma **barra de progresso** com a porcentagem do carregamento.  
Quando atinge **100%**, o botão **Finalizar Carga** é habilitado.

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio4} alt="Tela sem o botão Finalizar habilitado" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio5} alt="Tela com o botão Finalizar habilitado" />
</div>

---

## Carga Selecionada


Ao selecionar uma carga, o sistema realiza uma **verificação de disponibilidade** para garantir que ela ainda não esteja em uso.  
Somente após essa validação a carga é **vinculada ao usuário** que iniciou o processo.
Mesmo que o aplicativo seja fechado, a carga permanece **disponível apenas para o mesmo usuário**, impedindo o acesso de outros até que a expedição seja finalizada.  

Enquanto houver uma carga em andamento, **as demais cargas permanecem ocultas**, sendo exibidas novamente apenas após a finalização ou cancelamento do carregamento atual.

Durante o processo, o **progresso de conferência é salvo automaticamente em uma tabela interna**, permitindo que o usuário retome exatamente do ponto em que parou, mesmo após sair do aplicativo.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio6} alt="Card da carga selecionada" />
</div>

No caso de cancelamento, se a conferência já tiver começado, é necessário **desmarcar todos os produtos** para que o botão de cancelamento volte a ser habilitado.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio7} alt="Conferência iniciada e botão desabilitado" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio8} alt="Produtos desmarcados e botão habilitado" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio9} alt="Modal de confirmação de cancelamento" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio10} alt="Sem carga selecionada" />
</div>

---

## Conferência de Produto

Ao tocar em um card de produto, é aberto um **modal de conferência**, contendo:

- Foto (se disponível) na conferência de bipagem e pesagem
- Código do produto  
- Nome  
- Quantidade  
- Unidade de medida  

O tipo de conferência varia conforme os campos do produtos e o parâmetro de controle `MV_VALCODBAR`.

---

:::info Salvamento do progresso de conferência
O processo de conferência é gravado **internamente em uma tabela local** do aplicativo.  
Caso o usuário feche a tela ou o aplicativo durante a expedição, ao voltar a abrir a **carga selecionada**, o sistema **retoma automaticamente o progresso do carregamento** exatamente do ponto em que parou — mantendo os produtos já conferidos marcados e o restante pendente.
:::

### 1. Conferência Simples

Se o parâmetro `MV_VALCODBAR` **não existir**, estiver **vazio** ou com valor `F`, será exibida uma conferência simples, onde o usuário pode apenas confirmar (**Sim**) ou cancelar (**Não**).

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio11} alt="Modal Simples de Conferência" />
</div>

---

### 2. Conferência por Código de Barras

Se o parâmetro `MV_VALCODBAR` tiver o valor `S` e os campos `CBWMS` e `CBWMS2` estiverem **vazios**, o usuário deve **informar apensa o código de barras para validar todo produto, nao importa a quantidade**.  

- Código incorreto → 🔴❗  
- Código correto → ✅  
- Abaixo do campo, é exibido o **total digitado / total esperado**.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio12} alt="Campo de código vazio" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio13} alt="Código incorreto" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio14} alt="Código correto" />
</div>

---

### 3. Conferência por Bipagem

Se `CBWMS` e `CBWMS2` estiverem preenchidos, a conferência é feita por **bipagem**, podendo ser por **unidade cheia** ou **fracionada**.  
O modal exibe as unidades de medida, a quantidade e um **círculo de progresso** indicando o total de bips restantes.  

<div className="images-grid">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio15} alt="Modal de conferência por unidade de medida" />
</div>

Quando o progresso atinge mais de **50%**, o botão **Concluir Carregamento do Item** é habilitado.  
Se o usuário confirmar antes de completar 100%, um novo modal de confirmação é exibido.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio16} alt="Modal de código vazio" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio17} alt="Modal de confirmação de divergência" />
</div>

Se o usuário tocar em sim, o item é verificado, mas recebe a advertência `ITEM COM DIVERGÊNCIA`.

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio18} alt="Item com divergência" />
</div>

Por outro lado, **quando o usuário realiza a bipagem completa de todos os itens (100%)**, o produto é automaticamente marcado como **verificado** e **sem nenhuma advertência**.

---

## Atualização de Produtos durante o Carregamento

Como esta é uma tela de **Romaneio**, os produtos podem ser alterados durante o processo de expedição.  
Itens que permanecerem inalterados e já verificados **mantêm o status de conferência**, enquanto **novos produtos ou quantidades alteradas** aparecerão **sem o ícone ✅**.

Para atualizar a lista, basta **arrastar a tela para baixo**  ou tocar em **Finalizar Carga**.  

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio21} alt="Atualizando tela" />
</div>

O aplicativo verificará se há alterações e as exibirá automaticamente.


---

## Finalização da Carga

Após a conferência de todos os produtos, o botão **Finalizar Carga** é habilitado. Com conexão ativa à internet, ao tocar nele o processo de expedição é concluído com sucesso. Após a finalização, o aplicativo retorna o usuário à tela de **Expedição**, onde a **nota finalizada** deixa de ser exibida na lista.  


<div className="images-grid">
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio22} alt="Tela com botão de finalizar Carga habilitado" />
  <ZoomableImage src={telaexpedicaodeorcamentoporromaneio23} alt="Retorno a tela de expedição" />
</div>

---
## Problemas Comuns

:::info 
 Tela apresenta poucas chances de erros, por ser em quase sua totalidade, online.
:::

 1. **Tela não abre**

    - Sem conexão ativa com a internet.

    - Carga sem Itens.

2. **Produto não solicitar codigo de Barras no processo de conferência**

    - Parâmetro `MV_VALCODBAR` não existe, vázio ou tem valor `F`.

3.  **Produto com processo de conferência por bipagem so solicita codigo de barras**

 - Os campos`CBWMS` e`CBWMS2` do produto estão vazios.



## Como Corrigir

    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::

1. **Correção no parâmetro**

    - Depois de realizar as correções ou alterações no parâmetro `MV_VALCODBAR`, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.


:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::
