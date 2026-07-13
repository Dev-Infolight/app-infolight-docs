---
sidebar_position: 8
sidebar_label: "Devolução de Compra"
title: "Devolução de Compra"
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

# Devolução de Compra

A rotina de **Devolução de Compra** permite realizar a devolução total ou parcial de mercadorias para um fornecedor, utilizando como base uma nota fiscal de compra já lançada no sistema.

A devolução pode ser realizada pelo módulo **Faturamento** ou pelo módulo **Livros Fiscais**.

## Acessando a Devolução de Compra

Caso o processo seja realizado pelo módulo **Faturamento**, acesse:

**Movimento → Faturamento → Devolução de Mercadoria / Devolução de Compra**

Antes de iniciar o processo, é necessário que a **nota fiscal de compra já tenha sido lançada no sistema**.

No campo **Número**, clique nos **três pontinhos** e pesquise pelo número da nota fiscal que será utilizada para a devolução.

## Preenchendo os Dados da Devolução

No campo **Natureza**, selecione a natureza correspondente à **Devolução de Compra**.

Em seguida, informe o **Tipo de Frete**.

Caso exista uma operação com frete, selecione o tipo correspondente. O sistema abrirá uma segunda aba com os dados do transportador, onde deverá ser selecionado o veículo responsável pelo transporte da mercadoria.

No campo **Mensagem de Devolução**, é possível adicionar alguma informação referente à operação.

Caso nenhuma mensagem seja preenchida, o sistema gera automaticamente uma mensagem informando se a operação corresponde a uma **devolução parcial** ou **devolução total** da nota fiscal de origem.

## Carregando os Itens da Nota

Clique no botão **Carregar** e selecione o tipo de devolução:

- **Devolução Total** – O sistema carrega automaticamente todos os itens da nota com a coluna **Quantidade a Devolver** preenchida.
- **Devolução Parcial** – O sistema carrega todos os itens da nota com a coluna **Quantidade a Devolver** zerada.

Na devolução parcial, informe manualmente a quantidade apenas dos produtos que serão devolvidos e pressione **Enter**.

## Definindo a Regra de Devolução

No campo **Regra**, o sistema pode carregar automaticamente a regra cadastrada no produto.

Para isso, no **Cadastro do Produto**, na aba **Fiscal**, o campo **Regra de Devolução de Compra** deve estar preenchido.

Caso a regra não seja carregada automaticamente, pressione **F3** no teclado e selecione a regra correspondente à operação, como:

- Devolução de compra tributada;
- Devolução de compra com substituição tributária;
- Devolução de compra de uso e consumo.

A regra deve ser selecionada de acordo com o lançamento da nota fiscal de entrada.

Após informar a quantidade e a regra, o sistema calcula automaticamente o valor dos produtos que serão devolvidos.

## Devolução de Valores e Impostos

Na parte inferior esquerda da tela existe a opção **Devolução de Valores e Impostos**.

Essa opção **não deve ser marcada** quando estiver ocorrendo a devolução de quantidade física de mercadoria para o fornecedor.

Ela deve ser utilizada quando a devolução envolver apenas um **valor** ou **imposto**, sem a devolução da quantidade da mercadoria.

Por exemplo, caso uma nota tenha sido emitida com um valor incorreto e seja necessário devolver apenas o valor correspondente, essa opção poderá ser utilizada.

## Definindo a Base da Devolução

Na parte superior da tela, selecione como a devolução deverá ser realizada.

É possível realizar a devolução:

- De acordo com o **documento de entrada** lançado no sistema;
- De acordo com a **regra de saída** selecionada no campo **Regra**.

Selecione a opção correspondente à operação que será realizada.

## Gerando a Nota de Devolução

Após preencher todas as informações, o sistema apresentará uma caixa com a numeração da nota fiscal.

Não altere a numeração. Apenas confirme utilizando o botão disponível na tela ou pressione **F5** no teclado.

Em seguida, o sistema perguntará:

**Deseja transmitir o XML?**

Ao selecionar **Sim**, o sistema:

- Localiza o certificado digital;
- Transmite a nota fiscal para a **SEFAZ**;
- Abre o **DANFE** para impressão.

Caso queira realizar uma conferência antes da transmissão, selecione **Não**.

O sistema informará o número da nota fiscal gerada, permitindo que ela seja consultada antes do envio.

## Consultando a Nota Fiscal

Para consultar a nota gerada, acesse:

**Consultas → Consulta Nota Fiscal de Saída**

A consulta pode ser realizada pelo **número da nota** ou pela **data de emissão**.

Após localizar a nota, clique no botão **Visualizar** e confira:

- Produto;
- CFOP;
- Quantidade;
- Valor;
- Tributação.

Também é possível conferir a mensagem automática gerada pelo sistema, informando que a devolução é referente à nota fiscal de origem, juntamente com seu número e data de emissão.

## Transmitindo a Nota Fiscal

Caso a nota não tenha sido transmitida durante a geração, acesse:

**Movimento → Faturamento → Notas Fiscais Eletrônicas em XML / NFe XML**

Informe o número da nota fiscal no campo inicial e repita o mesmo número no campo final.

Clique em **OK**.

O sistema irá localizar o certificado digital, transmitir a nota para a **SEFAZ** e abrir o **DANFE** para impressão.

Após a transmissão e autorização da nota fiscal, o processo de **Devolução de Compra** estará finalizado.

### Vídeo Tutorial: Passo a Passo

Se preferir acompanhar o processo de forma visual, assista ao tutorial abaixo:

<div className="video-container">
    <iframe
        width="100%"
        height="450"
        src="LINK_DO_VIDEO"
        title="Devolução de Compra - Infolight"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
    </iframe>
</div>

:::tip
Por fim, caso ainda tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::