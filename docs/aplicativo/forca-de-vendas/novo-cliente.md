---
sidebar_position: 3
sidebar_label: "Novo cliente"
title: "Novo cliente"
---

import novoscliente1 from '@site/static/img/novoCliente/novos-clientes1.png';
import novoscliente2 from '@site/static/img/novoCliente/novos-clientes2.png';
import novoscliente3 from '@site/static/img/novoCliente/novos-clientes3.png';
import novoscliente4 from '@site/static/img/novoCliente/novos-clientes4.png';
import novoscliente5 from '@site/static/img/novoCliente/novos-clientes5.png';
import novoscliente6 from '@site/static/img/novoCliente/novos-clientes6.png';
import novoscliente7 from '@site/static/img/novoCliente/novos-clientes7.png';
import novoscliente8 from '@site/static/img/novoCliente/novos-clientes8.png';
import novoscliente9 from '@site/static/img/novoCliente/novos-clientes9.png';


# Novo cliente

A tela *Novo Cliente* permite o cadastro tanto offline como online de pessoa Jurídica(CNPJ) ou de Pessoa Física(CPF).


:::info IMPORTANTE
Sem conexão com a internet, o cadastro feito fica pedente. Para enviar basta rolar a tela para baixo na guia *Início* da tela inicial..
:::

## Cadastrar um cliente

Va na tela de *Novo Cliente* ou na tela de *Clientes* e toque no icone demostrado na tela abaixo: 


<div className="images-grid-2">
    <img src={novoscliente1} alt="Exemplo na tela Novo Cliente" />
    <img src={novoscliente2} alt="Exemplo na tela Clientes"/>
</div>


Ambas as opções levam para a tela de cadastro, que é composta por quatro guias:

1. **Cadastro de Informações**
2. **Endereço**
3. **Complemento do Endereço**
4. **Informações de Contato**

<div className="images-grid">
    <img src={novoscliente3} alt="Guia Cadastro de Informações" />
    <img src={novoscliente4} alt="Guia Endereço" />
    <img src={novoscliente5} alt="Guia Complemento do Endereço" />
    <img src={novoscliente6} alt="Guia Informações de Contato" />
</div>


Na guia Cadastro de Informações, escolha entre *Pessoa Jurídica* ou *Pessoa Física* e preencha os campos obrigatórios para o cadastro, sinalizados com `*` de cor vermelha. Os campos obrigatórios incluem:

- CNPJ/CPF, Razão Social, Nome Fantasia, CEP, Bairro, Cód. Município, Município, Estado(Sigla), Rota, Tipo Logradouro, Logradouro, Número, Tel1 e Email.

Se você estiver conectado à internet, ao cadastrar um CNPJ válido, é provável que quase todos os dados obrigatórios sejam preenchidos automaticamente, exceto a **Rota**. Para esse campo, será disponibilizada uma lista com as opções disponíveis na guia **Endereço**.

Caso falte mais algum dado, ao tentar concluir o cadastro, a tela informará quais campos ainda precisam ser preenchidos.

Para o cadastro de *Pessoa Física*, tanto **offline** quanto **online**, o preenchimento dos dados deve ser feito manualmente. Não há preenchimento automático para essa opção.


## Depois do Cadastro

<div className="images-grid-2">
    <img src={novoscliente7} alt="Guia Pendentes" />
    <img src={novoscliente9} alt="Guia Enviados" />
</div>

- Se o cadastro foi feito **offline**, após a restauração da conexão com a internet, será necessário rolar a tela para baixo na guia **Início** da tela principal ou na guia **Pendentes** da tela de *Novos Clientes*. Só então, a aprovação ficará pedente no ERP Tempus. 
- Se o cadastro foi realizado **online**, a aprovação do novo cliente ficará a pedente no ERP Tempus.


## Problemas comuns

 1. **Cliente Cadastrado com internet, mas continua na guia de pedentes**
        <div className="images-grid-2">
            <img src={novoscliente8} alt="Cliente com Duplicidade" />
        </div>

    - Cliente com cadastro duplicado, pois já foi registrado anteriormente no ERP.


## Como Corrigir
 
    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::

1. **Cliente na guia pedentes com status de Duplicidade**

    - Entre no ERP Tempus e aprove o novo cliente. Em seguida, role a tela para baixo na guia *Início* da tela inicial.
    
:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::