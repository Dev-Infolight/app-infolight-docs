---
sidebar_position: 2
sidebar_label: "Liberação de NFCe avulsa"
title: "Liberação de NFCe avulsa"
---


import notaAvulso1 from '@site/static/img/telaLiberacaoNotaAvulso/notaAvulso1.png';
import notaAvulso2 from '@site/static/img/telaLiberacaoNotaAvulso/notaAvulso2.png';
import notaAvulso3 from '@site/static/img/telaLiberacaoNotaAvulso/notaAvulso3.png';
import notaAvulso4 from '@site/static/img/telaLiberacaoNotaAvulso/notaAvulso4.png';
import notaAvulso5 from '@site/static/img/telaLiberacaoNotaAvulso/notaAvulso5.png';

# Liberação de NFC-e Avulsa

A tela **Liberação de NFC-e Avulsa** pertence ao módulo de **Portaria**, é **100% online** e exibe todas as notas que estão aptas para liberação após passarem pela etapa de **Expedição de NFC-e**.

:::info Conexão necessária
Esta tela só funciona com **conexão com a internet**.  
Verifique sua rede antes de continuar.
:::

---

## Cards de Notas

Cada nota é exibida em um **card**, cujo título apresenta o **modelo**, **série** e **número fiscal**, acompanhado do **peso total** da nota. Logo abaixo, são exibidos o **nome do cliente**, o **nome do vendedor** e a **placa do veículo**.

```
Modelo - serie - Numero   Peso 
Cliente
Vendedor
Placa
```

<div className="images-grid-2">
  <img src={notaAvulso1} alt="Card de Nota" />
</div>

---

## Liberando Nota


Ao tocar no card, é aberto um **modal de confirmação**. Ao confirmar em **Sim**, a nota é **liberada com sucesso**.

<div className="images-grid-2">
  <img src={notaAvulso2} alt="Modal de confirmação" />
  <img src={notaAvulso3} alt="Modal de Sucesso" />
</div>

Após a liberação, o aplicativo retorna o usuário para a tela de **Liberação de NFCe avulsa**.

<div className="images-grid-2">
  <img src={notaAvulso4} alt="tela de Liberação NFCe avulsa" />
</div>

O card da NFCe liberada passa a ser identificada pela legenda **NFCe LIBERADA**, exibida no canto superior esquerdo do card.


<div className="images-grid-2">
  <img src={notaAvulso5} alt="Card de NFCe Liberada" />

</div>

---

## Problemas Comuns

:::info 
 Tela apresenta poucas chances de erros, por ser em quase sua totalidade, online.
:::

1. **Tela não abre**

    - Sem conexão ativa com a internet.

    - Sem notas.

    - Tela desatualizada.

2. **Nota especifica nao aparece**
    
    - Ainda não passou pela expedição.
    
    - Tela desatualizada.

## Como Corrigir

1. **Expedição de Nota**

    - Solicite a conclusão da expedicão da nota, só depois retorne para a tela.

2. **Atualizar a Tela**

    - Role a tela para baixo.

:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::
