---
sidebar_position: 3
sidebar_label: "Nota fiscal manual"
title: "Entrada de nota fiscal manual"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import nfs1 from "@site/static/img/erp/nota-de-serviço/nfs1.png";
import nfs2 from "@site/static/img/erp/nota-de-serviço/nfs2.png";
import Entrega3 from "@site/static/img/erp/entregas/entregas3.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Esta rotina tem como objetivo orientar o usuário no processo de lançamento manual de Notas Fiscais de Entrada no sistema Infolight.

O lançamento manual é um procedimento de contingência ou ajuste, utilizado principalmente quando a nota fiscal apresenta divergências de valores ou quantidades em relação ao que foi processado automaticamente pelo sistema. Além disso, garante que o estoque e o financeiro reflitam com precisão as mercadorias recebidas, permitindo a correção pontual de itens e custos unitários conforme o documento físico ou digital.

### 1: Acesso ao Sistema

Para iniciar o processo, o usuário deve estar logado no sistema e seguir o caminho de menus abaixo:

No menu principal, localize e clique no módulo Controle Geral.

Selecione a opção Livros Fiscais.

Navegue pelo caminho: Movimentos > Nota Fiscal Manual de Entrada.

### 2: Passo a Passo do Lançamento

<div className="divRow">
    <img 
        src={nfs2}
        alt="Entrada de serviço"
    />
</div>


Cabeçalho e Identificação
Ao abrir a tela de Nota Fiscal Manual de Entrada, o primeiro passo é iniciar um novo registro:

`Iniciar Registro:` Clique no botão Incluir e selecione a opção Operação Normal para habilitar os campos de preenchimento.

`Seleção do Fornecedor:` Utilize a busca para localizar o fornecedor emissor da nota. É fundamental que o fornecedor já esteja previamente cadastrado no sistema.

`Dados da Nota:` Insira a Série e o Número da Nota Fiscal conforme consta no documento original.

`Condições Comerciais:` Defina a Condição de Pagamento (ex: À vista, Boleto 30 dias) e o Tipo de Frete aplicável à operação.



### 3: Inclusão de Itens e Precificação
Nesta etapa, o usuário deve detalhar os produtos que compõem a nota fiscal:

`Localizar Produto:` Clique em Incluir Item e pesquise o produto no banco de dados.

`Quantidades e Valores:` 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Insira a Quantidade exata recebida.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informe o Valor Unitário do item. O sistema calculará o valor total automaticamente.

`Repetição:` Repita o processo para todos os itens listados na nota fiscal física.


### 4: Finalização e Ajuste Financeiro
Após conferir se todos os itens e valores batem com o total da nota:

`Gravar Dados:` Clique no botão Salvar para registrar os itens na nota.

`Ajuste Financeiro:` O sistema abrirá uma tela de ajuste para confirmar as datas de Vencimento e os valores que serão lançados no Contas a Pagar.

`Confirmação Final:` Após salvar o ajuste financeiro, a nota aparecerá na listagem de notas lançadas, confirmando que o processo foi concluído com sucesso.


### Vídeo Tutorial: Passo a Passo
Se você preferir acompanhar o processo visualmente, assista ao tutorial abaixo que demonstra desde o cadastro do serviço até a finalização da nota:



<div className="video-container">
  <iframe 
    width="100%" 
    height="450" 
    src="https://www.youtube.com/embed/WLaO1jwBie8&list=PL7PBAYDQP4i1YkyjjbwlHsFHYcO9NBhiS&index=18" 
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