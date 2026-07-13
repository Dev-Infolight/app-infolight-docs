---
sidebar_position: 3
sidebar_label: "Inventário de Estoque"
title: "Inventário de Estoque"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import flex from "@site/static/img/erp/painel-flex/flex.png";
import rotina from "@site/static/img/erp/painel-flex/rotina.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Inventário de Estoque

A rotina de **Inventário de Estoque** do sistema Tempus é utilizada para realizar a contagem física dos produtos e ajustar o saldo registrado no sistema de acordo com a quantidade encontrada no estoque.

O inventário pode ser realizado para todos os produtos ou separadamente por grupos, como **produtos acabados**, **matéria-prima** e **uso e consumo**. Durante o processo, é possível realizar até três contagens para conferência antes de aplicar os ajustes no estoque.

## Configuração do Inventário

Antes de iniciar um novo inventário, acesse as configurações da rotina e verifique se as opções necessárias para lançamento estão marcadas.

Também é recomendado habilitar a opção que permite **gravar o inventário durante a contagem**.

Essa configuração permite salvar os produtos que já foram contados e continuar o processo posteriormente, evitando a perda das informações caso não seja possível concluir toda a contagem de uma única vez.

:::info[IMPORTANTE]
Habilite a opção que permite gravar o inventário durante a contagem. Dessa forma, as quantidades já informadas poderão ser salvas antes da conclusão completa do inventário.
:::

## Criação de um Novo Inventário

Clique em **Novo Inventário** para iniciar o processo.

Preencha as informações solicitadas, como:

- Responsável pela primeira contagem;
- Responsável pela segunda contagem;
- Responsável pela terceira contagem;
- Responsável pela solicitação;
- Descrição do inventário.

Na descrição, utilize uma identificação que facilite a localização posterior, como a data ou o tipo de inventário realizado.

## Tipo de Contagem

Defina qual unidade será utilizada durante a contagem dos produtos.

O sistema permite realizar o inventário utilizando a **Unidade 1** ou a **Unidade 2**.

Caso as duas unidades sejam iguais, utilize a primeira unidade.

Quando o produto possuir unidades diferentes, como **caixa** e **unidade**, selecione a unidade correspondente à forma utilizada durante a contagem física.

## Filtros do Inventário

O inventário pode ser realizado para todos os produtos ou utilizando filtros específicos.

É possível, por exemplo, realizar inventários separados para:

- Produtos acabados;
- Matéria-prima;
- Uso e consumo;
- Outros grupos disponíveis no sistema.

Para realizar uma contagem específica, marque a opção de filtro e selecione o grupo desejado.

Caso queira realizar o inventário de todos os produtos, não aplique nenhum filtro.

:::info[SUGESTÃO]
Realizar inventários separados por tipo de produto pode facilitar a organização e a conferência da contagem.
:::

## Gravação do Inventário

Após preencher as informações e definir os filtros, clique no botão de **Salvar**, representado pelo ícone de disquete.

O sistema registrará os produtos correspondentes aos filtros selecionados e o inventário será exibido na lateral da tela.

A situação do inventário poderá ser identificada pela cor do indicador apresentado ao lado do registro.

Caso tenha dúvidas sobre o significado das cores, utilize o botão **Legenda** disponível na rotina.

## Início da Contagem

Para iniciar a contagem, dê dois cliques sobre o inventário localizado na lateral da tela.

Após carregar as informações, clique na opção para **Iniciar a Contagem do Inventário**.

Nesse momento, o sistema bloqueará a movimentação dos produtos incluídos no inventário.

:::warning[ATENÇÃO]
Enquanto a contagem estiver em andamento, os produtos envolvidos no inventário ficarão bloqueados para movimentações, como vendas e produção.
:::

Após iniciar a contagem, o indicador do inventário será alterado para representar o novo status.

## Digitação das Contagens

Após finalizar a contagem física dos produtos, clique no botão de **Editar os Itens** para liberar a digitação das quantidades.

O sistema disponibilizará três colunas de contagem:

- Primeira contagem;
- Segunda contagem;
- Terceira contagem.

Informe em cada coluna a quantidade física encontrada para o produto.

As três contagens permitem confirmar a quantidade real existente no estoque antes da aplicação do ajuste.

Quando a primeira e a segunda contagem forem iguais, ao confirmar a segunda quantidade o sistema poderá repetir automaticamente o mesmo valor na terceira contagem.

Preencha as quantidades dos produtos que foram contados e confira os valores antes de continuar.

## Salvando a Contagem

Após preencher as quantidades, clique novamente no botão de **Salvar**.

O sistema gravará os itens que foram preenchidos.

Caso ainda existam produtos sem contagem, o sistema poderá apresentar um aviso durante o encerramento.

Se os produtos necessários já tiverem sido contados e conferidos, o processo poderá continuar.

## Conferência dos Custos

Antes de encerrar o inventário, verifique a coluna de **Custo** dos produtos.

Os itens que serão ajustados precisam possuir um custo informado para que o sistema consiga concluir corretamente o processo.

:::warning[ATENÇÃO]
Produtos sem custo podem impedir a conclusão e aplicação do inventário. Antes de finalizar, confira se os itens contados possuem seus respectivos custos preenchidos.
:::

Caso algum produto esteja sem custo, informe o valor correspondente antes de tentar concluir novamente o inventário.

## Encerramento do Inventário

Após concluir e salvar as contagens, utilize a opção para **Encerrar o Inventário**.

O sistema poderá informar que existem produtos sem contagem.

Caso tenha certeza de que os produtos necessários já foram conferidos, confirme o encerramento.

:::warning[ATENÇÃO]
Após o encerramento do inventário, as informações não poderão mais ser editadas. Confira cuidadosamente as quantidades antes de finalizar.
:::

## Aplicação do Inventário na Empresa de Controle

Na empresa de **Controle**, os ajustes do inventário são realizados por meio de **Movimentos Internos**.

Após encerrar o inventário, selecione a opção correspondente aos movimentos internos e clique em **Aplicar**.

O sistema realizará os ajustes necessários para que o saldo do estoque corresponda às quantidades informadas durante a contagem.

Por exemplo, caso o sistema possua uma quantidade diferente da encontrada fisicamente, será realizada uma movimentação de ajuste para que o estoque final fique igual ao valor informado no inventário.

## Inventário na Empresa Fiscal

Quando o inventário for realizado na empresa **Fiscal**, os ajustes precisam ser realizados por meio de documentos fiscais.

Nesse caso, os ajustes podem envolver:

- Nota fiscal de entrada com operação de outras entradas;
- Nota fiscal de saída com operação de outras saídas.

Esses documentos devem ser realizados utilizando o próprio CNPJ da empresa, conforme a configuração fiscal necessária.

:::info[IMPORTANTE]
O processo de aplicação do inventário é diferente entre a empresa de Controle e a empresa Fiscal. Na Controle, o ajuste é realizado por movimentos internos. Na Fiscal, os ajustes devem ser realizados por meio dos documentos fiscais correspondentes.
:::

## Conferência do Ajuste no Estoque

Após aplicar o inventário, consulte o estoque do produto ajustado.

Na movimentação do item, será possível visualizar o lançamento realizado pelo sistema para corrigir o saldo.

O sistema realizará uma movimentação de ajuste, deixando o estoque com a quantidade informada e confirmada durante o inventário.

:::tip
Por fim, caso ainda tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::