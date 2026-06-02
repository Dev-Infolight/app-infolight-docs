---
sidebar_position: 6
sidebar_label: "Notas de serviço"
title: "Notas de serviço"
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



# Lançamento de Nota Fiscal de Serviço

A rotina **Lançamento de Nota Fiscal de Serviço** do sistema Tempus permite registrar manualmente notas fiscais referentes à prestação de serviços, garantindo o correto controle fiscal, financeiro e contábil da operação.

Esse processo é utilizado para:
- Registrar despesas com serviços
- Controlar fornecedores prestadores de serviço
- Integrar movimentações financeiras
- Realizar lançamentos fiscais corretamente
- Manter o histórico operacional organizado

Antes de realizar o lançamento da nota, é necessário que:
- O serviço esteja previamente cadastrado
- O fornecedor esteja devidamente registrado no sistema

## Cadastro de Serviços

### Caminho da rotina:
**Módulo Estoque > Cadastro > Produto**

Os serviços são cadastrados dentro do cadastro de produtos.

Ao acessar:
- Pesquise se o serviço já existe
- Caso exista um modelo semelhante, utilize a opção **Copiar**
- Caso não exista, utilize **Incluir**

<div className="divRow">
    <img 
        src={inclusao}
        alt="inclusao da nota"
    />
</div>

## Inclusão de Novo Serviço

Ao criar um novo serviço:

### Código do Serviço
Utilize a sequência definida pela empresa.

### Exemplo:
- `8001`
- `8002`
- `8003`

### Descrição
Informe a descrição correspondente ao serviço prestado.

Após isso:
- Verifique os demais parâmetros
- Ajuste as informações necessárias
- Salve o cadastro

<div className="divRow">
    <img 
        src={cadastro}
        alt="cadastrando um novo serviço"
    />
</div>

## Cadastro de Fornecedor

Antes do lançamento da nota:
- Verifique se o fornecedor já está cadastrado

Caso não esteja:
### Caminho:
**Cadastro > Fornecedor**

<div className="divRow">
    <img 
        src={cadastroFornecedor}
        alt="cadastrando um novo fornecedor"
    />
</div>


Realize a inclusão normalmente para permitir o lançamento fiscal da nota.

## Entrada da Nota de Serviço

O lançamento pode ser realizado:
- Pelo módulo **Estoque**
- Ou pelo módulo **Fiscal**

### Caminho:
**Movimento > Entrada Manual**

## Inclusão da Nota

Ao acessar:
- Clique em **Incluir**
- Selecione **Operação Normal**

## Preenchimento dos Dados da Nota

### Fornecedor
Selecione o fornecedor correspondente à nota fiscal.

### Série
Utilize:
`99` para notas de serviço.

Caso a nota possua outra série:
- Utilize a série informada no documento
- Se não houver, utilize:
`Série 1`

### Número da Nota
Informe o número presente na nota fiscal.

### Data de Emissão
Preencha conforme a data do documento.

### Tipo de Documento
Utilize:
`NFS` — Nota Fiscal de Serviço

### Data de Recebimento
Informe a data em que a nota entrará no movimento do sistema.

### Frete
Informe caso exista cobrança de frete vinculada ao serviço.

## Inclusão do Serviço na Nota

Na grade inferior:
- Clique em **Incluir**
- Selecione o serviço correspondente

### Preencha:
- Quantidade
- Valor do serviço

### Exemplo:
`1 prestação de serviço no valor de R$ 1.500,00`

## Regra Fiscal de Entrada

A regra fiscal normalmente será carregada automaticamente conforme o cadastro do serviço.

Mesmo assim:
- Verifique as informações fiscais
- Ajuste manualmente caso necessário

<div className="divRow">
    <img 
        src={inclusao_fiscal}
        alt="inclusao da nota fiscal"
    />
</div>


## Aba Fiscal

Na aba:
**Fiscal**

Confirme novamente o:
- CFOP
- Regras fiscais
- Tributação aplicada

Após a conferência:
- Clique em **Salvar**

## Confirmação Financeira

Após salvar a nota:
- O sistema abrirá a tela financeira

Nessa etapa:
- Configure o financeiro conforme o boleto recebido
- Ou informe pagamento à vista
- Confirme os vencimentos
- Finalize clicando em **Confirmar**

Após isso, a nota fiscal de serviço estará devidamente lançada no sistema.

## Funcionalidades Pós-Lançamento

Após concluir o lançamento, é possível:

### Visualizar
Consultar os dados da nota registrada.

### Imprimir
Gerar impressão da nota lançada.

### Alterar
Corrigir informações caso necessário.

### Estornar
Desfazer o lançamento da nota.

### Excluir
Remover completamente o registro do sistema.

## Considerações Gerais

A correta utilização dessa rotina proporciona:
- Controle fiscal adequado
- Organização financeira
- Gestão de fornecedores
- Histórico de serviços prestados
- Segurança operacional
- Integração contábil
- Maior confiabilidade nos lançamentos fiscais

Manter serviços e fornecedores corretamente cadastrados é fundamental para garantir consistência e eficiência no processo de entrada de notas fiscais de serviço.


<div className="video-container">
  <iframe 
    width="100%" 
    height="450" 
    src="https://www.youtube.com/embed/dHsGRduIhDE" 
    title="Lançamento de Nota Fiscal de Serviço - Infolight" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
  </iframe>
</div>

:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::