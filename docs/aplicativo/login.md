---
sidebar_position: 3
sidebar_label: "Login"
title: "Login"
---

import Login1 from "@site/static/img/login/login1.png";
import Login2 from "@site/static/img/login/login2-editado.png";
import FluxogramaLoginComInternet from "@site/static/img/login/fluxograma-de-login.png";
import FluxogramaLoginSemInternet from "@site/static/img/login/fluxograma-login-offline.png";

# Login

O login se refere ao processo no qual o usuário informa as suas credenciais e tenta acessar o aplicativo. Existem duas telas de login:

## Tela de primeiro login

<div className="divRow">
    <img 
        src={Login1}
        alt="Tela de primeiro Login"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>É a tela de login padrão do sistema. Ela sempre será apresentada quando: O usuário estiver logando pela primeira vez ou quando ele fizer um cadastro de uma nova conexão ou alternar entre as conexões já existentes.</p>
    </div>
</div>

## Tela de segundo login

<div className="divRow">
    <img 
        src={Login2}
        alt="Tela de primeiro Login"
    />
    <div className="divColumn">
        <b>Entendendo</b>
        <p>A tela de segundo login será apresentada quando o usuário já tiver realizado `login e logout` pelo menos uma vez no aplicativo. Projetamos esta tela com o objetivo de facilitar e também oferecer recursos que podem ser úteis durante o processo de login.</p>
        <b>Recursos que esta tela fornece:</b>
        <ol>
            <li>Visualizar as informações da conexão que está ativa no momento.</li>
            <li>Possibilidade de fazer login apenas informando a senha.</li>
            <li>Entrar com outra conta (outro usuário).</li>
            <li className="pb-16">Acessar as configurações de login, tendo a possibilidade de efetuar uma limpeza de base, cadastrar uma nova conexão e alternar entre as conexões cadastradas.</li>
            :::info[INFORMAÇÃO]
            `Limpeza de base` é o processo no qual todos os dados das tabelas referentes ao usuário, empresa e módulo anteriormente logado, serão apagados.
            :::
        </ol>
    </div>
</div>

## Como funciona o processo de login:

### Login com internet

<img 
    src={FluxogramaLoginComInternet}
    alt="Fluxograma login com internet"
/>

### Login sem internet

<img 
    src={FluxogramaLoginSemInternet}
    alt="Fluxograma login com internet"
/>

