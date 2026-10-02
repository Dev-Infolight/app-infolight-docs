---
sidebar_position: 5
sidebar_label: "Venda Externa (Pedidos de Venda)"
title: "Venda Externa (Pedidos de Venda)"
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

# Venda Externa (Pedidos de Venda)

A rotina de **Venda Externa (Pedidos de Venda)** permite realizar todo o processo relacionado aos pedidos enviados pelos vendedores, desde o recebimento e análise dos pedidos na **Controle Geral** até a montagem da carga, emissão dos documentos fiscais, baixa do estoque e geração do financeiro.

Os pedidos realizados pelos vendedores são enviados ao sistema e ficam disponíveis para análise, liberação e faturamento. O processo é realizado entre as empresas **Controle Geral** e **Fiscal**, garantindo o correto controle das vendas, estoque, financeiro e emissão dos documentos fiscais.

Para visualizar os pedidos, acesse:

**Módulo Faturamento → Vendas → Vendas Externas → Pedido de Venda**

Na tela de pedidos, utilize o botão de consulta para carregar os pedidos disponíveis.

É possível filtrar por:

- Número inicial e final do pedido
- Cliente
- Vendedor

Caso queira visualizar todos os pedidos disponíveis, mantenha os filtros sem preenchimento e confirme a consulta.

O sistema apresentará os pedidos na tela e permitirá identificar possíveis bloqueios relacionados a:

- Crédito
- Estoque
- Preço

## Digitação Manual de um Pedido

Caso seja necessário cadastrar um pedido diretamente no sistema, clique em **Incluir**.

Informe o cliente e selecione a **condição de pagamento**.

:::info
Serão apresentadas apenas as condições de pagamento autorizadas no cadastro do cliente. Caso seja necessário utilizar uma condição que não esteja disponível, primeiro será necessário acessar o cadastro do cliente e autorizá-la.
:::

Também é possível preencher mensagens que serão apresentadas na nota fiscal.

Caso deseje alterar a quantidade e a espécie você poderá preencher os campos: **quantidade** e **espécie** na aba administrativa da tela de cabeçalho.
O campos **Espécie** receberá a descrição.
Ex: 'Volumes', 'Kg', 'Unidade', etc...

Para informações de uso exclusivamente interno, utilize o campo de **observação interna**, pois seu conteúdo não será impresso na nota fiscal.

## Configuração da Venda

Na **Aba 2**, informe a tabela de preços utilizada na venda, como:

- Tabela à vista
- Tabela a prazo

Em seguida, informe o tipo de frete correspondente à operação.

Entre as opções disponíveis, podem existir situações como:

- Transporte realizado por veículo próprio da empresa
- Transporte realizado pelo próprio cliente
- Transporte realizado por terceiros
- Retirada pelo cliente
- Operação sem frete

## Inclusão dos Produtos

Clique em **Incluir** e pesquise os produtos que serão adicionados ao pedido.

Durante a inclusão, é possível visualizar informações como a disponibilidade de estoque.

Informe:

- Produto
- Quantidade
- Valor de venda

O valor será carregado automaticamente conforme a tabela de preços selecionada. Caso seja necessário, o valor poderá ser alterado.

O campo de **Regra de Saída** será preenchido automaticamente conforme o cadastro do produto.

Normalmente, esse campo somente deverá ser alterado em situações específicas, como:

- Bonificação
- Pedido sem emissão de nota fiscal

Nos pedidos enviados pelos vendedores, é importante verificar a regra utilizada, pois ela permitirá identificar se o pedido deverá ou não ser enviado para a empresa fiscal.

Após incluir todos os produtos, clique em **Salvar**.

## Bloqueio de Crédito

Caso o cliente esteja sem limite de crédito disponível, o pedido poderá ficar bloqueado.

Nesse caso, será necessário realizar a liberação do crédito para permitir o faturamento.

Posteriormente, recomenda-se atualizar o limite de crédito no cadastro do cliente para evitar novos bloqueios, quando aplicável.

Quando o pedido estiver liberado e pronto para faturamento, ele será apresentado na situação correspondente na tela.

## Montagem de Romaneio

Após liberar os pedidos que serão enviados juntos, acesse:

**Faturamento → Movimentos → pré-carga**

Selecione os pedidos que farão parte do mesmo romaneio.

Para selecionar vários pedidos, mantenha pressionada a tecla **Ctrl** e clique nos pedidos desejados.

Em seguida:

1. Clique em **Seleciona**
2. Clique em **Romaneio**

O sistema permitirá definir a forma de organização do romaneio de separação, como:

- Por grupo de produtos
- Por almoxarifado
- Por cidade

Também será possível informar:

- Veículo
- Rota


Após a confirmação, o sistema irá gerar um romaneio.

:::warning
Anote o número do romaneio gerado, pois ele será utilizado para importar a carga na empresa Fiscal.
:::

## Importação da Carga na Empresa Fiscal

Após gerar o romaneio na **Controle Geral**, acesse a empresa **Fiscal**.

Vá até:

**Faturamento → Movimento → Pré-Carga → Importar**

Informe o número do romaneio gerado anteriormente e confirme a importação.

O sistema importará somente os pedidos configurados para emissão de nota fiscal.

:::info
Caso uma carga possua vários pedidos e apenas alguns estejam configurados para emissão fiscal, somente esses pedidos serão importados para a empresa Fiscal. Os demais permanecerão apenas na Controle Geral para baixa de estoque e geração do financeiro.
:::

## Preparação da Nota Fiscal

Na empresa Fiscal, acesse:

**Faturamento → Movimento → Faturamento → Preparação de Nota**

No primeiro acesso, verifique se os parâmetros da tela estão configurados corretamente. Após a configuração inicial, o sistema manterá as informações para os próximos faturamentos.

Selecione o romaneio desejado e clique em **Gerar Nota**.

Na primeira emissão, poderá ser necessário ajustar a numeração da nota fiscal para continuar a sequência utilizada anteriormente pela empresa.

Nas próximas emissões, basta confirmar a numeração apresentada pelo sistema.

Quando o sistema perguntar se deseja juntar pedidos do mesmo cliente em uma única nota, selecione a opção correspondente ao processo utilizado pela empresa.

Informe também:

- Motorista
- Veículo, caso seja necessário alterar
- Data de saída da mercadoria

:::info
A data de saída deve corresponder à data em que a mercadoria realmente será enviada. Essa informação influencia o início da contagem dos prazos financeiros.
:::

Após confirmar, a carga será gerada.

## Transmissão da Nota Fiscal

Após gerar a carga, acesse:

**Faturamento → Vendas → Logística → Acompanhamento de Carga**

A carga será apresentada no lado esquerdo da tela.

Utilize o botão correspondente para transmitir a nota fiscal para a **SEFAZ**.

Após a autorização, será possível imprimir ou salvar os documentos fiscais gerados.

## Emissão de Boletos

Caso a venda possua boleto, utilize a opção de impressão e selecione **Boleto**.

Escolha o banco correspondente à cobrança e gere o documento.

O boleto poderá ser:

- Impresso
- Salvo para envio ao cliente

Os demais documentos fiscais também poderão ser impressos ou salvos conforme a necessidade.

## Emissão do MDF-e

Caso seja necessário emitir um **MDF-e**, acesse a aba correspondente no acompanhamento da carga.

Após a autorização da nota fiscal, o botão de geração do MDF-e ficará disponível.

Clique no botão e confira todas as informações apresentadas.

Verifique principalmente:

- Motorista
- CPF do motorista
- Veículo
- Informações da carga

Caso alguma informação esteja ausente, realize o preenchimento antes de gerar o documento.

Na primeira emissão, poderá ser necessário ajustar a numeração para continuar a sequência do último MDF-e emitido no sistema anterior.

Depois disso, confirme a geração e realize a impressão do documento.

## Finalização na Controle Geral

Após concluir todo o processo na empresa Fiscal, retorne para a empresa **Controle Geral**.

É necessário realizar o faturamento também na Controle Geral para:

- Baixar o estoque
- Gerar o financeiro
- Manter as informações internas atualizadas

Acesse novamente:

**Faturamento → Movimento → Faturamento → Preparação de Nota**

Selecione a carga e gere o faturamento.

Utilize a mesma data de saída informada na empresa Fiscal para manter os financeiros das duas empresas consistentes.

:::warning
Na Controle Geral, o processo não será enviado para a SEFAZ. O objetivo é realizar a movimentação interna, incluindo a baixa do estoque e a geração do financeiro.
:::

## Impressão dos Romaneios de Entrega

Após finalizar o faturamento, acesse:

**Faturamento → Vendas → Logística → Acompanhamento de Carga**

Nessa tela, é possível imprimir os documentos utilizados na entrega e na prestação de contas.

O romaneio pode apresentar informações como:

- Nome do cliente
- Produtos que serão entregues
- Valores
- Forma de pagamento
- Documentos que deverão retornar assinados
- Total que deverá ser prestado conta

Dependendo da forma de pagamento, também poderão ser utilizados documentos como:

- Promissórias
- Comprovantes
- Pedidos assinados

## Impressão do Pedido Simplificado

Caso seja necessário imprimir apenas o pedido para acompanhamento da entrega, utilize:

**Extrato → Pedido de Venda Simplificado**

O documento poderá apresentar informações como:

- Nome do cliente
- Referência de endereço, quando cadastrada
- Observações de entrega
- Data
- Forma de pagamento
- Campo para assinatura

## Resultado do Processo

Ao finalizar corretamente todas as etapas, o processo terá realizado:

- Recebimento dos pedidos dos vendedores
- Análise e liberação dos pedidos
- Montagem da carga
- Geração do romaneio
- Importação dos pedidos fiscais
- Emissão e transmissão das notas fiscais
- Emissão de boletos, quando necessário
- Emissão do MDF-e, quando necessário
- Impressão dos documentos de entrega
- Baixa do estoque na Controle Geral
- Geração do financeiro

:::tip
Sempre finalize o processo tanto na empresa Fiscal quanto na Controle Geral. A empresa Fiscal é responsável pela emissão dos documentos fiscais, enquanto a Controle Geral realiza a baixa do estoque e a geração do financeiro.
:::