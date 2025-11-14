---
sidebar_position: 1
sidebar_label: "Expedição de NFCe"
title: "Expedição de NFCe"
---

import telaexpedicaod1 from '@site/static/img/telaExpedicao/expedicao1.png';
import telaexpedicaod2 from '@site/static/img/telaExpedicao/expedicao2.png';
import telaexpedicaod3 from '@site/static/img/telaExpedicao/expedicao3.png';
import telaexpedicaod4 from '@site/static/img/telaExpedicao/expedicao4.png';
import telaexpedicaod5 from '@site/static/img/telaExpedicao/expedicao5.png';
import telaexpedicaod6 from '@site/static/img/telaExpedicao/expedicao6.png';
import telaexpedicaod11 from '@site/static/img/telaExpedicao/expedicao11.png';
import telaexpedicaod12 from '@site/static/img/telaExpedicao/expedicao12.png';
import telaexpedicaod13 from '@site/static/img/telaExpedicao/expedicao13.png';
import telaexpedicaod14 from '@site/static/img/telaExpedicao/expedicao14.png';
import telaexpedicaod22 from '@site/static/img/telaExpedicao/expedicao22.png';
import nota1 from '@site/static/img/telaExpedicao/Nota/nota1.png';
import nota2 from '@site/static/img/telaExpedicao/Nota/nota2.png';
import nota3 from '@site/static/img/telaExpedicao/Nota/nota3.png';
import nota4 from '@site/static/img/telaExpedicao/Nota/nota4.png';
import nota5 from '@site/static/img/telaExpedicao/Nota/nota5.png';
import nota6 from '@site/static/img/telaExpedicao/Nota/nota6.png';
import nota7 from '@site/static/img/telaExpedicao/Nota/nota7.png';
import nota8 from '@site/static/img/telaExpedicao/Nota/nota8.png';

# Expedição de NFCe

A tela **Expedição de NFCe** pertence ao módulo de **Expedição**, mas também pode ser alocada no módulo de **Administração**, conforme a necessidade da operação. É uma tela **parcialmente online**. Nela, o usuário pode realizar a **expedição de produtos pertencentes a uma NFCe**.


:::info Conexão necessária
  É uma tela parcialmente **online**. Embora os dados das **notas e produtos** sejam carregados a partir de **tabelas armazenadas na base local**, o aplicativo realiza uma **consulta à API** para verificar se a NFCe ainda está **disponível para expedição** antes de permitir o início do processo.
:::


## Informações da Tela

Ao tocar no card que representa a NFCe, a tela exibe todos os produtos vinculados, que devem passar pelo processo de expedição.

No cabeçalho da tela, no canto superior direito, há o ícone para **cancelar o carregamento da NFCe**.  
Também é exibida a **placa do veículo** onde os produtos serão carregados.

<div className="images-grid-2">
  <img src={telaexpedicaod1} alt="Cabeçalho da tela de produtos" />
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
  <img src={telaexpedicaod2} alt="Card de Produto com Foto" />
  <img src={telaexpedicaod3} alt="Card de Produto sem Foto" />
</div>

Na parte inferior da tela, são exibidos o **número da NFCe**, a **quantidade de produtos já carregados** e uma **barra de progresso** com a porcentagem do carregamento.  
Quando atinge **100%**, o botão **Finalizar NFCe** é habilitado.

<div className="images-grid-2">
  <img src={telaexpedicaod4} alt="Tela sem o botão Finalizar habilitado" />
  <img src={telaexpedicaod5} alt="Tela com o botão Finalizar habilitado" />
</div>

---

## NFCe Selecionada

Ao selecionar uma NFCe, o sistema realiza uma **verificação de disponibilidade** para garantir que ela ainda não esteja em uso.  
Somente após essa validação a NFCe é **vinculada ao usuário** que iniciou o processo.
Mesmo que o aplicativo seja fechado, a NFCe permanece **disponível apenas para o mesmo usuário**, impedindo o acesso de outros até a finalização.

Enquanto houver uma NFCe em andamento, **outras NFCes permanecem ocultas**.

<div className="images-grid">
  <img src={nota1} alt="Card da NFCe selecionada" />
</div>

O usuário tem duas opções: **finalizar** a expedição ou **cancelar**.  
No caso de cancelamento, se a conferência já tiver começado, é necessário **desmarcar todos os produtos** para que o botão de cancelamento volte a ser habilitado.

<div className="images-grid">
  <img src={nota2} alt="Conferência iniciada e botão desabilitado" />
  <img src={nota3} alt="Produtos desmarcados e botão habilitado" />
  <img src={nota4} alt="Modal de confirmação de cancelamento" />
  <img src={nota5} alt="Sem NFCe selecionada" />
</div>

---

## Conferência de Produto

Ao tocar em um card de produto, é aberto um **modal de conferência**, contendo:

- Código do produto  
- Nome  
- Quantidade  
- Unidade de medida  

O tipo de conferência varia conforme o parâmetro de controle `MV_VALCODBAR`.

---

:::info Salvamento do progresso de conferência
O processo de conferência é gravado **internamente em uma tabela local** do aplicativo.  
Caso o usuário feche a tela ou o aplicativo durante a expedição, ao voltar a abrir a **NFCe selecionada**, o sistema **retoma automaticamente o progresso do carregamento** exatamente do ponto em que parou — mantendo os produtos já conferidos marcados e o restante pendente.
:::

### 1. Conferência Simples

Se o parâmetro `MV_VALCODBAR` **não existir**, estiver **vazio** ou com valor `F`, será exibida uma conferência simples, onde o usuário pode apenas confirmar (**Sim**) ou cancelar (**Não**).

<div className="images-grid-2">
  <img src={telaexpedicaod11} alt="Modal Simples de Conferência" />
</div>

---

### 2. Conferência por Código de Barras

Se o parâmetro `MV_VALCODBAR` tiver o valor `S`, o usuário deve **informar apensa o código de barras para validar todo produto, nao importa a quantidade**.  

- Código incorreto → 🔴❗  
- Código correto → ✅  
- Abaixo do campo, é exibido o **total digitado / total esperado**.

<div className="images-grid">
  <img src={telaexpedicaod12} alt="Campo de código vazio" />
  <img src={telaexpedicaod13} alt="Código incorreto" />
  <img src={telaexpedicaod14} alt="Código correto" />
</div>

---

## Finalização da NFCe

Após a conferência de todos os produtos, o botão **Finalizar NFCe** é habilitado. Com conexão ativa à internet, ao tocar nele o processo de expedição é concluído com sucesso. Após a finalização, o aplicativo retorna o usuário para a tela de **Expedição de NFCe**, onde a **nota finalizada** é exibida no topo da lista.

<div className="images-grid">
  <img src={nota6} alt="Tela com botão de finalizar NFCe habilitado" />
  <img src={nota7} alt="Tela com NFCe finalizada no topo" />
</div>

O **card da NFCe finalizada** passa a ser a identificada pela legenda **Nota fiscal finalizada**, exibida no canto superior esquerdo do card.  

<div className="images-grid-2">
  <img src={nota8} alt="Card de NFCe finalizada destacado" />
</div>

---
## Problemas Comuns

:::info 
 Tela apresenta poucas chances de erros, por ser em quase sua totalidade, online.
:::

 1. **Tela não abre**

    - Sem conexão ativa com a internet.

    - NFCe sem Itens.

2. **Produto não solicitar codigo de Barras no processo de conferência**

    - Parâmetro `MV_VALCODBAR` não existe, vázio ou tem valor `F`.

3. **NFCe não aparece**
    
    - Base local desatualizada.

## Como Corrigir

    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::

1. **Correção no parâmetro**

    - Depois de realizar as correções ou alterações no parâmetro `MV_VALCODBAR`, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.

2. **Atualizar base local**

    - Role a tela para baixo.


:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::

