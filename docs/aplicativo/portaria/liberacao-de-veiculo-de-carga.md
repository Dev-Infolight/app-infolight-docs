---
sidebar_position: 1
sidebar_label: "Liberação de veículo de carga"
title: "Liberação de veículo de carga"
---

import liberacaoDeVeiculo1 from '@site/static/img/telaLiberacaodeVeiculo/liberacaodeveiculo1.png';
import liberacaoDeVeiculo2 from '@site/static/img/telaLiberacaodeVeiculo/liberacaodeveiculo2.png';
import liberacaoDeVeiculo3 from '@site/static/img/telaLiberacaodeVeiculo/liberacaodeveiculo3.png';
import liberacaoDeVeiculo4 from '@site/static/img/telaLiberacaodeVeiculo/liberacaodeveiculo4.png';
import liberacaoDeVeiculo5 from '@site/static/img/telaLiberacaodeVeiculo/liberacaodeveiculo5.png';
import liberacaoDeVeiculo6 from '@site/static/img/telaLiberacaodeVeiculo/liberacaodeveiculo6.png';

# Liberação de Veículo de Carga

A tela **Liberação de Veículo de Carga** pertence ao módulo de **Portaria**, é **100% online** e exibe todas as veículos que estão para entrega.

:::info Conexão necessária
Esta tela só funciona com **conexão com a internet**.  
Verifique sua rede antes de continuar.
:::

---

## Cards de Veículo de Carga 

Cada Veículo de carga é exibida em um **card**, cujo título apresenta o **número da carga** e o **local**. Logo abaixo, são exibidos o **placa**, o **veículo**, **número de documentos** e o **peso bruto**.

```
Número da Carga - Local 
Placa - Veículo
Nro. Docs. - Peso Bruno
```

<div className="images-grid-2">
  <img src={liberacaoDeVeiculo1} alt="Card de Nota" />
</div>

---

## Liberando Veículo de Carga

Ao tocar no **card do veículo de carga**, é exibido um modal onde o usuário pode visualizar o **nome do motorista** e informar o **ajudante** (opcional) e a **quilometragem**.

<div className="images-grid">
  <img src={liberacaoDeVeiculo2} alt="Modal para confirmar as informações do Veículo de Carga" />
</div>

A tela possui três validações importantes:

1. **Quilometragem é obrigatória**.  
2. **A quilometragem não pode exceder o limite permitido**, conforme configurado no **ERP Tempus**.  
3. **A quilometragem não pode ser inferior à última quilometragem de saída registrada**.

Se o usuário digitar um valor **inferior ao permitido**, ao tocar no botão **Liberar Veículo**, um modal de erro exibirá o erro e qual foi a **última quilometragem de saída**.

<div className="images-grid-2">
  <img src={liberacaoDeVeiculo3} alt="Modal de erro" />
</div>

Quando a quilometragem informada está correta, ao confirmar, o aplicativo apresenta um **modal de sucesso**, concluindo a liberação do veículo.

<div className="images-grid-2">
  <img src={liberacaoDeVeiculo4} alt="Modal de erro" />
</div>

Após a liberação, o aplicativo retorna o usuário para a tela de **Liberação de veículo de Carga**.

<div className="images-grid-2">
  <img src={liberacaoDeVeiculo5} alt="tela de Liberação de veículo de Carga" />
</div>

O card do veículo de carga que foi liberada passa a ser identificada pela legenda **CARGA LIBERADA**, exibida no canto superior esquerdo do card.

<div className="images-grid-2">
  <img src={liberacaoDeVeiculo6} alt="Card de veículo de carga Liberada" />
</div>

---

## Problemas Comuns

:::info 
 Tela apresenta poucas chances de erros, por ser em quase sua totalidade, online.
:::

1. **Tela não abre**

    - Sem conexão ativa com a internet.

    - Sem Veículos.

## Como Corrigir

1. **Atualizar a Tela**

    - Role a tela para baixo.

:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::