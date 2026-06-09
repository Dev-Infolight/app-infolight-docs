---
sidebar_position: 1
sidebar_label: "Emissão de pedido e compra"
title: "Emissão de Pedido de Compra"
---

import pedido1 from "@site/static/img/erp/emissao-de-pedido/pedido1.png";
import pedido2 from "@site/static/img/erp/emissao-de-pedido/pedido2.png";
import ZoomableImage from "@site/src/components/ZoomableImage";


# Emissão de Pedido de Compra

Esta rotina serve para formalizar as solicitações de mercadorias junto aos fornecedores no sistema Infolight. O Pedido de Compra é uma etapa fundamental para o controle de estoque futuro e planejamento financeiro, permitindo registrar preços negociados, condições de pagamento e até pagamentos antecipados, garantindo que a entrada da nota fiscal posterior seja conferida com precisão.

### Passo a Passo do Processo

Cabeçalho e Dados do Fornecedor
`Incluir Novo:` Clique no botão Incluir para abrir o formulário de pedido.

`Fornecedor:` Selecione o fornecedor desejado na lista de busca.

`Condições:` Defina a Condição de Pagamento acordada.

`Pagamento Antecipado:` Se houver um adiantamento financeiro ao fornecedor, informe o valor no campo Vlr. Pagamento antecipado. Isso facilitará a baixa do título quando a mercadoria chegar.



`Frete e Observações:` Preencha o tipo de frete e utilize o campo de mensagem para observações que devem constar no documento impresso.


<div className="divRow">
    <ZoomableImage 
        src={pedido1}
        alt="Entrada de serviço"
    />
</div>




###  Adição de Produtos

`Selecionar Itens:` Clique em Incluir na área de itens para buscar os produtos.

`Quantidade e Preço:` Informe a Quantidade solicitada e o Valor Unitário negociado para cada produto.

`Salvar:` Após inserir todos os itens, clique em Salvar. Se houver pagamento antecipado, confirme o ajuste financeiro que será exibido.

<div className="divRow">
    <ZoomableImage 
        src={pedido2}
        alt="Entrada de serviço"
    />
</div>

### Monitoramento e Status (Legendas)

Após salvar, o pedido será listado com cores que indicam sua situação atual:

`Azul (Digitado):` O pedido está aberto e aguardando a entrega.

`Verde (Atendido Parcialmente):` Apenas uma parte dos produtos foi entregue e vinculada a uma nota fiscal.

`Vermelho (Atendido):` Todos os itens já foram recebidos e a nota fiscal foi lançada no sistema.

`Cinza (Cancelado):` O pedido foi anulado e não gerará entradas.

:::info[SUGESTÃO]
Você pode gerar um PDF ou imprimir o pedido para enviar diretamente ao fornecedor.
:::


### Vídeo Tutorial: Passo a Passo
Se você preferir acompanhar o processo visualmente, assista ao tutorial abaixo que demonstra desde o cadastro do serviço até a finalização da nota:


<div className="video-container">
  <iframe 
    width="100%" 
    height="450" 
    src="https://www.youtube.com/embed/vJUP9Zb0mEU" 
    title="Lançamento de Nota Fiscal Manual - Infolight" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
  </iframe>
</div>


---

:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::