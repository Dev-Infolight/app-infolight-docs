---
sidebar_position: 1
sidebar_label: "Liberação de Preços"
title: "Liberação de Preços"
---

import telaLibercaodePrecos1 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos1.png';
import telaLibercaodePrecos2 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos2.png';
import telaLibercaodePrecos3 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos3.png';
import telaLibercaodePrecos4 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos4.png';
import telaLibercaodePrecos5 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos5.png';
import telaLibercaodePrecos6 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos6.png';
import telaLibercaodePrecos7 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos7.png';
import telaLibercaodePrecos8 from '@site/static/img/telaLiberacaodePrecos/liberacaodeprecos8.png';

# Liberação de Preços

A tela **Liberação de Preços** é **100% online** e faz parte do módulo de **Administração**.  
Nela, o administrador pode **autorizar ou alterar** o preço negociado pelo vendedor em **um ou mais produtos de um pedido**, quando o valor informado está **abaixo do preço de tabela**.

:::info Conexão necessária
Esta tela só funciona com **conexão com a internet**.  
Verifique sua rede antes de continuar.
:::

---

## Informações Gerais da Tela

Na tela, o usuário tem acesso a diversas informações importantes.  
No topo são exibidos:

- **Número do pedido**  
- **Nome do cliente**  
- **Nome do vendedor** responsável  

Além disso, a tela apresenta dados essenciais para análise do administrador:

- **Valor total dos produtos** pelo **preço de tabela** e sua **porcentagem de lucro**  
- **Valor total negociado** e sua **lucratividade**  
- **Diferença total** entre o valor de tabela e o valor negociado, incluindo a **porcentagem da diferença**

<div className="images-grid-2">
  <img src={telaLibercaodePrecos1} alt="Informações gerais da tela Liberação de Preços" />
</div>

---

## Definição Automática de Preços

O administrador pode definir o preço de todos os produtos **de forma automática**, escolhendo entre:

- **Preço de Tabela**  
- **Preço Negociado**

Essa escolha é feita através de *switches* posicionados acima dos cards.  
Ao selecionar uma das opções, **todos os cards** são automaticamente marcados com o **ícone ✅**, indicando aprovação.

<div className="images-grid-2">
  <img src={telaLibercaodePrecos2} alt="Switch de definição de preços por tabela ou negociado" />
</div>

---

## Cards de Produtos

Cada card exibe, no topo:

- Um **ícone de status** (☐ para pendente, ✅ para aprovado)  
- O **nome do produto**  
- A **diferença percentual** entre o preço de tabela e o preço negociado  

Exemplo de formato do título:

```
☐/✅ Nome do produto (diferença em porcetagem entre o valor negociado e de tabela).
```

<div className="images-grid-2">
  <img src={telaLibercaodePrecos3} alt="Card de Produto" />
</div>

Ao **tocar no card**, ele se expande e mostra informações adicionais, como:

- Quantidade  
- Preço negociado  
- Percentual de desconto  
- Valor a faturar  
- Preço de tabela  

Abaixo desses campos há o botão **`Alterar preço autorizado`**.

<div className="images-half">
  <img src={telaLibercaodePrecos4} alt="Card de Produto Expandido" />
</div>

---

## Alterar Preço Autorizado

Ao tocar em **`Alterar preço autorizado`**, é aberto um **modal** que exibe:

- O **nome do item** no topo  
- A **quantidade** logo abaixo  
- Duas abas: **`Preço`** e **`Comissão`**

Na aba **Preço**, o administrador pode:

- Utilizar o **preço negociado**, habilitando o respectivo *switch*  
- Utilizar o **preço de tabela**, habilitando o outro *switch*  
- Ou **digitar manualmente** um valor desejado para autorização  

<div className="images-half">
  <img src={telaLibercaodePrecos5} alt="Aba Preço do modal" />
</div>

Na aba **Comissão**, o administrador pode definir **até três tipos de porcentagem de comissão**.  
A alteração desta aba é **opcional**.

<div className="images-half">
  <img src={telaLibercaodePrecos6} alt="Aba Comissão do modal" />
</div>

---

### Validações do Modal

Algumas validações importantes são aplicadas:

- O **valor autorizado não pode ser menor** que o **valor negociado**.  
- O **valor autorizado não pode exceder X%** (configurado pelo **ERP Tempus**) do **valor de tabela**.  
- As **comissões** também respeitam **limites configurados no ERP Tempus**.

Após definir o preço autorizado e tocar em **`CONFIRMAR`**, o modal é fechado e o card passa a exibir o **ícone ✅**, indicando que foi autorizado.

<div className="images-grid-2">
  <img src={telaLibercaodePrecos7} alt="Card autorizado" />
</div>

---

## Finalizando a Autorização de Preços

Depois que todos os produtos tiverem seus preços definidos, no final da tela, o botão **`Autorizar`** é habilitado.  
Com conexão ativa à internet, ao tocar nele o processo de **liberação de preços** é concluído com sucesso.

<div className="images-half">
  <img src={telaLibercaodePrecos8} alt="Botão Autorizar habilitado" />
</div>

---

## Problemas comuns

:::info 
 Tela apresenta poucas chances de erros, por ser em quase sua totalidade, online.
:::

 1. **Tela Vazia**

    - Sem conexão ativa com a internet.

:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::