---
sidebar_label: "Cadastro de ST"
title: "Cadastro de ST"
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


## Cadastro de ST (Substituição Tributária)

A rotina **Cadastro de ST** do sistema Tempus tem como finalidade configurar corretamente as regras de **Substituição Tributária (ST)** por estado, produto e segmento comercial.

Esse módulo é essencial para garantir que o cálculo fiscal das operações seja realizado conforme a legislação vigente de cada unidade federativa, permitindo maior segurança tributária, conformidade fiscal e eficiência operacional.

Por meio desta rotina, é possível:
- Configurar ST por estado (UF)
- Definir CSTs específicos
- Informar modalidades de cálculo
- Registrar percentuais de MVA
- Configurar pautas fiscais
- Inserir FCP e reduções de ST
- Parametrizar CFOPs de entrada e saída
- Replicar configurações para múltiplos estados

## Configuração Inicial

Ao acessar a rotina de **Cadastro de ST** no módulo de **Livros Fiscais**, será necessário cadastrar as informações tributárias conforme a operação desejada.

### Dados principais:

**UF (Estado)** – Selecione o estado para o qual a tributação será configurada.

**Mensagens Fiscais** – Caso existam observações específicas, como:
- Redução de ST
- FCP-ST
- Outras mensagens fiscais obrigatórias

Essas informações devem ser preenchidas nos campos correspondentes.

## Cadastro por Tipo de Comércio

A rotina permite configurar regras distintas conforme o segmento comercial.

### Exemplo:
- Varejista
- Atacadista
- Distribuidor

Isso possibilita que diferentes regras tributárias sejam aplicadas conforme a natureza da operação.

## Preenchimento dos Campos Tributários

### Código do Produto
Informe o produto correspondente à tributação.

### CST
Selecione o código fiscal adequado, como:
- CST 10
- CST 30
- CST 60

**Observação:**  
Na maioria das operações com ST, o CST mais comum é o **10**.

### Modalidade de Cálculo

Defina como a ST será calculada:

**Valor Agregado (MVA)** – Modalidade mais comum, utilizando percentual de margem.

**Pauta Fiscal** – Quando a tributação utiliza valores tabelados definidos pelo estado.

### MVA
Caso utilize cálculo por valor agregado, informe o percentual correspondente.

### Pauta / FCP
Se houver:
- Pauta de ST
- Percentual de FCP
- Outros encargos fiscais

Todos devem ser preenchidos nos respectivos campos.

## Configuração de CFOP

### CFOP Interestadual
Normalmente Para operações fora do estado o CFOP mais utilizado:

`6401`

## Salvamento e Manutenção

Após preencher todos os dados:
- Clique em **Salvar**
- O cadastro ficará disponível na listagem principal

Caso seja necessário:
- Utilize **Alterar** para modificar registros existentes

## Replicação para Outros Estados

Se a mesma regra tributária se aplicar para diversas UFs:

- Cadastre o primeiro estado
- Utilize a função **Copiar**
- Altere apenas a UF
- Repita o processo para todos os estados atendidos

Essa funcionalidade reduz retrabalho e padroniza configurações fiscais.

## Considerações Gerais

A correta parametrização do Cadastro de ST proporciona:
- Conformidade fiscal
- Segurança tributária
- Redução de erros em emissão fiscal
- Padronização tributária entre estados
- Agilidade operacional
- Melhor gestão de produtos sujeitos à substituição tributária

Manter essas informações atualizadas é fundamental para garantir operações fiscais corretas e evitar inconsistências tributárias.

:::info[IMPORTANTE]
Sempre utilize os percentuais, pautas e regras fiscais fornecidos pelo setor contábil ou legislação vigente de cada estado.
:::

<div className="video-container">
  <iframe 
    width="100%" 
    height="450" 
    src="https://www.youtube.com/embed/FiuCsiFLdxQ?list=PL7PBAYDQP4i1YkyjjbwlHsFHYcO9NBhiS"
    title="Cadastro de ST" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
</div>


:::tip
Por fim, caso tenha dúvidas ou não consiga concluir o processo, entre em contato com o suporte da Infolight.
:::