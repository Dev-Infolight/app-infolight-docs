---
sidebar_position: 2
sidebar_label: "Expedir orçamento"
title: "Expedir orçamento"
---

import telaexpedicaod1 from '@site/static/img/telaExpedicao/expedicao1.png';
import telaexpedicaod2 from '@site/static/img/telaExpedicao/expedicao2.png';
import telaexpedicaod3 from '@site/static/img/telaExpedicao/expedicao3.png';
import telaexpedicaod4 from '@site/static/img/telaExpedicao/expedicao4.png';
import telaexpedicaod5 from '@site/static/img/telaExpedicao/expedicao5.png';
import telaexpedicaod6 from '@site/static/img/telaExpedicao/expedicao6.png';
import telaexpedicaod7 from '@site/static/img/telaExpedicao/expedicao7.png';
import telaexpedicaod8 from '@site/static/img/telaExpedicao/expedicao8.png';
import telaexpedicaod9 from '@site/static/img/telaExpedicao/expedicao9.png';
import telaexpedicaod10 from '@site/static/img/telaExpedicao/expedicao10.png';
import telaexpedicaod11 from '@site/static/img/telaExpedicao/expedicao11.png';
import telaexpedicaod12 from '@site/static/img/telaExpedicao/expedicao12.png';
import telaexpedicaod13 from '@site/static/img/telaExpedicao/expedicao13.png';
import telaexpedicaod14 from '@site/static/img/telaExpedicao/expedicao14.png';
import telaexpedicaod15 from '@site/static/img/telaExpedicao/expedicao15.png';
import telaexpedicaod16 from '@site/static/img/telaExpedicao/expedicao16.png';
import telaexpedicaod17 from '@site/static/img/telaExpedicao/expedicao17.png';
import telaexpedicaod18 from '@site/static/img/telaExpedicao/expedicao18.png';
import telaexpedicaod19 from '@site/static/img/telaExpedicao/expedicao19.png';
import telaexpedicaod20 from '@site/static/img/telaExpedicao/expedicao20.png';
import telaexpedicaod22 from '@site/static/img/telaExpedicao/expedicao22.png';
import telaexpedicaod23 from '@site/static/img/telaExpedicao/expedicao23.png';
import ZoomableImage from "@site/src/components/ZoomableImage";

# Expedição de Orçamento

A tela **Expedição de Orçamento** pertence ao módulo de **Expedição** e é **100% online**. Nela, o usuário pode realizar a expedição de produtos pertencentes a um ou mais pedidos feitos no balcão de vendas.  


:::info Conexão necessária
Esta tela só funciona com **conexão com a internet**.  
Verifique sua rede antes de continuar.
:::

---

## Informações da Tela

Ao tocar no card que representa o orçamento, a tela exibe todos os produtos vinculados, que devem passar pelo processo de expedição.

No cabeçalho da tela, no canto superior direito, há o ícone para **cancelar o carregamento da carga**.  
Também é exibida a **placa do veículo** onde os produtos serão carregados.

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaod1} alt="Cabeçalho da tela de produtos" />
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
  <ZoomableImage src={telaexpedicaod2} alt="Card de Produto com Foto" />
  <ZoomableImage src={telaexpedicaod3} alt="Card de Produto sem Foto" />
</div>

Na parte inferior da tela, são exibidos o **número da carga**, a **quantidade de produtos já carregados** e uma **barra de progresso** com a porcentagem do carregamento.  
Quando atinge **100%**, o botão **Finalizar Carga** é habilitado.

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaod4} alt="Tela sem o botão Finalizar habilitado" />
  <ZoomableImage src={telaexpedicaod5} alt="Tela com o botão Finalizar habilitado" />
</div>

---

## Carga Selecionada

Ao selecionar uma carga, o sistema realiza uma **verificação de disponibilidade** para garantir que ela ainda não esteja em uso.  
Somente após essa validação a carga é **vinculada ao usuário** que iniciou o processo.
Mesmo que o aplicativo seja fechado, a carga permanece **disponível apenas para o mesmo usuário**, impedindo o acesso de outros até a finalização.

Enquanto houver uma carga em andamento, **outras cargas permanecem ocultas**.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaod6} alt="Card da carga selecionada" />
</div>

O usuário tem duas opções: **finalizar** a expedição ou **cancelar**.  
No caso de cancelamento, se a conferência já tiver começado, é necessário **desmarcar todos os produtos** para que o botão de cancelamento volte a ser habilitado.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaod7} alt="Conferência iniciada e botão desabilitado" />
  <ZoomableImage src={telaexpedicaod8} alt="Produtos desmarcados e botão habilitado" />
  <ZoomableImage src={telaexpedicaod9} alt="Modal de confirmação de cancelamento" />
  <ZoomableImage src={telaexpedicaod10} alt="Sem carga selecionada" />
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

### 1. Conferência Simples

Se o parâmetro `MV_VALCODBAR` **não existir**, estiver **vazio** ou com valor `F`, será exibida uma conferência simples, onde o usuário pode apenas confirmar (**Sim**) ou cancelar (**Não**).

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaod11} alt="Modal Simples de Conferência" />
</div>

---

### 2. Conferência por Código de Barras

Se o parâmetro `MV_VALCODBAR` tiver o valor `S` e os campos `CBWMS` e `CBWMS2` estiverem **vazios**, o usuário deve **informar apensa o código de barras para validar todo produto, nao importa a quantidade**.  

- Código incorreto → 🔴❗  
- Código correto → ✅  
- Abaixo do campo, é exibido o **total digitado / total esperado**.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaod12} alt="Campo de código vazio" />
  <ZoomableImage src={telaexpedicaod13} alt="Código incorreto" />
  <ZoomableImage src={telaexpedicaod14} alt="Código correto" />
</div>

---

### 3. Conferência por Bipagem

Se `CBWMS` e `CBWMS2` estiverem preenchidos, a conferência é feita por **bipagem**, podendo ser por **unidade cheia** ou **fracionada**.  
O modal exibe as unidades de medida, a quantidade e um **círculo de progresso** indicando o total de bips restantes.  

<div className="images-grid">
  <ZoomableImage src={telaexpedicaod15} alt="Modal de conferência por unidade de medida" />
</div>

Quando o progresso atinge mais de **50%**, o botão **Concluir Carregamento do Item** é habilitado.  
Se o usuário confirmar antes de completar 100%, um novo modal de confirmação é exibido.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaod16} alt="Modal de código vazio" />
  <ZoomableImage src={telaexpedicaod17} alt="Modal de confirmação de divergência" />
</div>

Se o usuário tocar em sim, o item é verificado, mas recebe a advertência `ITEM COM DIVERGÊNCIA`.

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaod18} alt="Item com divergência" />
</div>

Por outro lado, **quando o usuário realiza a bipagem completa de todos os itens (100%)**, o produto é automaticamente marcado como **verificado** e **sem nenhuma advertência**, exibindo o **ícone ✅** no card do item.

---

### 4. Conferência com Pesagem

Se `CBWMS` e `CBWMS2` estiverem preenchidos e o campo `PESAGEM` tiver valor `S`, será exibido um campo adicional para informar o **peso do produto** após a leitura do código de barras.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaod19} alt="Modal com campo de pesagem" />
</div>

Após concluída a conferência, o card exibe a mensagem **PESO CONFERIDO**, com o valor informado em quilogramas.

<div className="images-grid-2">
  <ZoomableImage src={telaexpedicaod20} alt="Produto com peso conferido" />
</div>

---

## Finalização da Carga

Após a conferência de todos os produtos, o botão **Finalizar Carga** é habilitado. Com conexão ativa à internet, ao tocar nele o processo de expedição é concluído com sucesso. Após a finalização, o aplicativo retorna o usuário à tela de **Expedição**, onde a **nota finalizada** deixa de ser exibida na lista.

<div className="images-grid">
  <ZoomableImage src={telaexpedicaod22} alt="Tela com botão de finalizar Carga habilitado" />
  <ZoomableImage src={telaexpedicaod23} alt="Retorno a tela de expedição" />
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

4. **Produto não pede peso no processo de conferência**

    - O campo de `PESAGEM` do produto não está vindo com o valor `S` .

## Como Corrigir

    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::

1. **Correção no parâmetro**

    - Depois de realizar as correções ou alterações no parâmetro `MV_VALCODBAR`, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.


:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::
