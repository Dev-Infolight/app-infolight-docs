---
sidebar_position: 2
sidebar_label: "Remessa e Retorno"
title: "Remessa e Retorno"
---
import remessa from "@site/static/img/erp/remessa/remessa.png";
import ZoomableImage from "@site/src/components/ZoomableImage";

# Geração de Remessa de Boletos Bancários

A rotina **Geração de Remessa de Boletos** do sistema Tempus tem como finalidade registrar junto às instituições bancárias os boletos emitidos pela empresa.

Esse processo é indispensável para que o banco receba, processe e valide os boletos gerados no sistema, permitindo que os clientes possam efetuar o pagamento normalmente.

## Importância da Remessa Bancária

Ao emitir boletos no sistema, eles **não são automaticamente registrados no banco**.

### Isso significa que:

- O boleto existe apenas internamente no sistema
- O banco não possui conhecimento sobre sua emissão
- O cliente não conseguirá realizar o pagamento até que o boleto seja registrado
- O registro ocorre exclusivamente através da geração e envio do arquivo de remessa

:::info[IMPORTANTE]
Sem a geração e envio da remessa, os boletos emitidos não terão validade operacional junto à instituição bancária.
:::

## Frequência Recomendada

O ideal é que a remessa seja gerada **diariamente**, garantindo que todos os boletos emitidos no dia sejam rapidamente registrados.

### Exemplo:
Se a empresa emite boletos pelos bancos:
- Sicoob
- Bradesco
- Itaú

Será necessário gerar remessa individual para cada banco utilizado.

## Processo de Geração

Ao acessar a rotina:

<div className="divRow">
    <ZoomableImage 
        src={remessa}
        alt="Acesso a rotina"
    />
</div>


### Preencha os seguintes dados:

**DATA INICIAL / DATA FINAL** – Informe o período correspondente aos boletos emitidos que deverão ser enviados ao banco.

### Exemplo:
`15/09/2025 até 19/09/2025`

O sistema buscará todos os boletos emitidos dentro desse intervalo.

## Controle Operacional

Caso a remessa não seja gerada diariamente, é fundamental manter um controle rigoroso dos períodos já processados.

### Exemplo:
- Geração semanal
- Geração a cada dois dias

O importante é garantir que nenhum boleto emitido fique sem registro bancário.

## Caminho de Gravação do Arquivo

Na primeira utilização:
- Será necessário configurar o diretório/pasta onde os arquivos de remessa serão salvos

Após essa configuração:
- O sistema memoriza o caminho automaticamente
- As próximas remessas serão gravadas diretamente no local configurado

## Finalização

Após definir:
- Banco
- Período
- Caminho de gravação

Clique em **Gerar** para criar o arquivo de remessa.

Esse arquivo deverá então ser enviado ao banco correspondente para processamento.

## Considerações Gerais

A correta geração da remessa proporciona:
- Registro bancário dos boletos
- Liberação de pagamento para clientes
- Controle financeiro mais seguro
- Redução de falhas operacionais
- Melhor integração bancária
- Maior conformidade no processo de cobrança

A ausência desse processo pode gerar atrasos financeiros, dificuldades de pagamento e inconsistências na carteira de cobrança.

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::