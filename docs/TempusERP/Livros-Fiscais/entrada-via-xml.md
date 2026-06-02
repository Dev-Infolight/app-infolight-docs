---
sidebar_position: 4
sidebar_label: "Entrada via XML"
title: "Entrada via XML"
---
import ConexaoComOServidor from "@site/static/img/conexao-com-o-servidor/conexao-com-o-servidor.png";
import Login2 from "@site/static/img/conexao-com-o-servidor/login2.png";
import inclusao from "@site/static/img/erp/notas-de-servico/inclusao.png";
import cadastro from "@site/static/img/erp/notas-de-servico/cadastro_servico.png";
import cadastroFornecedor from "@site/static/img/erp/notas-de-servico/cadastro_fornecedor.png";
import inclusao_fiscal from "@site/static/img/erp/notas-de-servico/inclusao_fiscal.png";
import ConfiguracoesLogin from "@site/static/img/conexao-com-o-servidor/configuracoes-login.png";
import ListagemDeConexoes1 from "@site/static/img/conexao-com-o-servidor/gerenciar-conexoes-1.png";
import AdicionarConexao from "@site/static/img/conexao-com-o-servidor/add-nova-conexao.png";
import RemocaoDeConexao from "@site/static/img/conexao-com-o-servidor/removendo-conexao.png";
import CheckIcon from "@site/static/img/conexao-com-o-servidor/check.svg";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# Entrada de Nota Fiscal via XML

A rotina **Recebimento de XML** do sistema Tempus permite realizar a entrada de notas fiscais eletrônicas de forma automatizada, utilizando o arquivo XML da NF-e.

Esse processo facilita:
- Cadastro automático de produtos
- Importação de dados fiscais
- Lançamento financeiro
- Controle de estoque
- Parametrização tributária
- Redução de erros manuais

A correta importação do XML garante maior agilidade e segurança no lançamento das notas fiscais de entrada.

## Pré-Requisitos

Antes de iniciar o processo, é necessário possuir:
- A nota fiscal eletrônica
- O arquivo XML correspondente

:::info[IMPORTANTE]
Sem o arquivo XML, não será possível realizar o recebimento automático da nota.
:::

## Download do XML

Caso o XML não esteja disponível:

### Procedimento:
- Copie a chave da NF-e
- Acesse o portal da SEFAZ
- Consulte a nota fiscal
- Vá em:
`Download do Documento`

Será necessário utilizar o certificado digital da empresa para realizar o download.

Após baixar:
- O XML ficará normalmente na pasta de downloads

## Organização do Arquivo XML

O sistema realiza leitura dos arquivos diretamente pelo disco `C:`.

### Procedimento:
- Copie o XML baixado
- Cole em uma pasta localizada no:
`Disco C:`

### Exemplo:
`C:\XML`

## Caminho da Rotina

### Acesso:
**Livros Fiscais > Movimento > Recebimento XML**

## Importação do XML

Ao acessar a rotina:
- Clique nos **três pontos**
- Localize a pasta onde o XML foi salvo
- Selecione o arquivo
- Clique em **Abrir**

O sistema realizará a leitura automática da nota.

## Associação dos Produtos

Após carregar o XML, o sistema exibirá os produtos da nota.

## Produto Já Cadastrado

Caso o produto já exista:
- Pressione **F3** no campo de código
- Localize o produto correspondente
- Selecione o cadastro correto

## Produto Novo

Caso o produto ainda não exista:
- Dê **duplo clique** sobre o item

O sistema realizará um pré-cadastro automático.

Depois disso:
- Utilize a opção **Alterar**
- Complete as informações necessárias

## Configuração do Produto

Durante o cadastro, preencha:

### Grupo e Subgrupo
Associe corretamente o produto à estrutura da empresa.

### Unidade de Medida
Confirme se a unidade utilizada existe no sistema.

Caso não exista:
- Utilize uma unidade já cadastrada

### Exemplo:
O fornecedor utiliza:
`UND`

Mas o sistema utiliza:
`UN`

## Embalagem

Informe a apresentação do produto.

### Exemplos:
- Caixa com 6 unidades
- Fardo com 12 unidades

Essas informações auxiliam os vendedores na identificação comercial do item.

## Demais Configurações

### Código do Fornecedor
Informe o código correspondente.

### Ativo
Defina:
`SIM`

### Disponível para Venda
Defina:
`SIM`

### Envia para o Celular
Defina:
`SIM`

### Fraciona
Defina:
`NÃO`

Quando o produto for comercializado apenas em embalagem fechada.

## Regras Fiscais

### Regra de Entrada
Configure conforme a tributação de compra do fornecedor.

### Regra de Saída
Configure conforme a tributação utilizada na venda do produto.

:::info
Sempre valide:
- Tributação
- Substituição tributária
- CFOP
- CST

antes de concluir o cadastro.
:::

## PIS e COFINS

### Entrada
Utilize:
`CST Entrada 99`

### Saída
Utilize:
`CST Saída 49`

## Aba Fiscal / Pesos

Na aba correspondente:
- Informe peso bruto
- Informe peso líquido

Essas informações são utilizadas na emissão das notas fiscais e controle logístico.

## Salvamento do Produto

Após preencher todas as informações:
- Clique em **Salvar**
- O sistema vinculará o item automaticamente ao XML

Repita o processo para todos os produtos novos da nota.

## Conferência da Nota

Após finalizar os produtos:

### Verifique:
- Data de entrada
- Condição de pagamento
- Quantidades
- Valores
- Financeiro
- Produtos lançados

## Financeiro

Na grade financeira:
- Confirme se a nota é:
  - À vista
  - A prazo
- Confira vencimentos e parcelas

## Finalização

Após a conferência:
- Clique em **Validar**
- Clique em **Gravar**

O sistema poderá apresentar avisos relacionados a:
- Peso
- Divergência cadastral
- Informações fiscais

Após concluir:
- A nota estará lançada na fiscal
- Disponível para visualização e conferência

## Considerações Gerais

A entrada de nota via XML proporciona:
- Agilidade operacional
- Redução de erros manuais
- Padronização cadastral
- Melhor controle fiscal
- Integração automática de estoque
- Organização financeira
- Segurança tributária

Manter produtos e regras fiscais corretamente configurados é essencial para garantir consistência nos lançamentos e evitar divergências fiscais.


<div className="video-container">
  <iframe
    width="100%"
    height="450"
    src="https://www.youtube.com/embed/hqly6q-VNvc?list=PL7PBAYDQP4i1YkyjjbwlHsFHYcO9NBhiS"
    title="Entrada via XML - Infolight"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>
:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::