---
sidebar_position: 3
sidebar_label: 'Guia "Configurações"'
title: 'Guia de "configurações"'
---

import configuracao1 from '@site/static/img/telaInicialConfiguracoes/configuracoes1.png';
import configuracao2 from '@site/static/img/telaInicialConfiguracoes/configuracoes2.png';
import configuracao3 from '@site/static/img/telaInicialConfiguracoes/configuracoes3.png';
import configuracao4 from '@site/static/img/telaInicialConfiguracoes/configuracoes4.png';
import configuracao5 from '@site/static/img/telaInicialConfiguracoes/configuracoes5.png';
import configuracao6 from '@site/static/img/telaInicialConfiguracoes/configuracoes6.png';
import configuracao7 from '@site/static/img/telaInicialConfiguracoes/configuracoes7.png';
import configuracao8 from '@site/static/img/telaInicialConfiguracoes/configuracoes8.png';
import configuracao9 from '@site/static/img/telaInicialConfiguracoes/configuracoes9.png';
import configuracao10 from '@site/static/img/telaInicialConfiguracoes/configuracoes10.png';
import configuracao11 from '@site/static/img/telaInicialConfiguracoes/configuracoes11.png';
import configuracao12 from '@site/static/img/telaInicialConfiguracoes/configuracoes12.png';
import configuracao13 from '@site/static/img/telaInicialConfiguracoes/configuracoes13.png';
import configuracao14 from '@site/static/img/telaInicialConfiguracoes/configuracoes14.png';


# Guia de configurações

Na **tela de Configuração**, o usuário encontra diversas funções que permitem **personalizar o sistema**, **corrigir eventuais inconsistências**, **garantir o bom funcionamento do aplicativo** e **gerenciar configurações e informações do sistema**.

A interface é organizada em **três seções principais**:  
1. **Personalização**  
2. **Dados**  
3. **Sistema**

Como ilustrado nas imagens abaixo:

<div className="images-half">
    <img src={configuracao1} alt="Primeira parte da guia Configurações" />
    <img src={configuracao2} alt="Segunda parte da guia Configurações"/>
</div>


## Seções

### Personalização

Na seção **Personalização**, o usuário pode acessar seu **perfil** e **modificar o tema** do aplicativo.

#### Visualizar Perfil
Na tela de visualizar perfil, é possível visualizar informações como **código do usuário**, **cargo** e **limite de transmissão**.  
Além disso, o usuário pode **adicionar uma foto de perfil** e **alterar a senha**.

<div className="images-half">
  <img src={configuracao3} alt="Tela de Perfil do Usuário" />
  <img src={configuracao4} alt="Adcionar Foto no perfil" />
  <img src={configuracao5} alt="Alterar Senha" />

</div>

#### Alterar tema
Em **Alterar Tema**, o usuário pode escolher entre três opções:
- **Automático** — segue o tema configurado no dispositivo (claro ou escuro).  
- **Claro** — exibe o aplicativo com fundo claro.  
- **Escuro** — exibe o aplicativo com fundo escuro.

<div className="images-half">
  <img src={configuracao6} alt="Tela de Personalização de Tema" />
</div>


### Dados

:::info
As funções da seção **Dados** requerem conexão com a internet para serem executadas corretamente.  
Sem acesso à rede, não é possível realizar operações como **atualizar configurações**, **baixar a base de dados**, **atualizar fotos dos produtos** ou **reenviar pedidos**.
:::

A seção **Dados** reúne um conjunto de funções voltadas à **atualização, manutenção e sincronização** do aplicativo.  
Essas funções permitem **corrigir eventuais erros**, **manter o sistema atualizado** e **dar suporte técnico** em situações específicas, como o envio da base de dados ou o reenvio de pedidos.

---

#### Principais funções

- **Atualizar configurações** — Atualiza as tabelas de configuração que contêm as principais regras e parâmetros de controle do aplicativo.  
- **Baixar base de dados** — Gera um arquivo do banco de dados local, que pode ser compartilhado com o suporte para análise ou utilizado como **backup**.  
- **Atualizar fotos dos produtos** — Permite baixar ou atualizar as imagens dos produtos. Embora o aplicativo funcione sem fotos, esse recurso melhora a personalização e a experiência visual.

<div className="images-half">
  <img src={configuracao7} alt="Atualizar fotos dos produtos" />
</div>

- **Reenviar pedidos** — Possibilita o envio novamente de pedidos que não foram transmitidos devido à falta de conexão ou erro de comunicação.  
  É possível, inclusive, selecionar o **período de reenvio**.

<div className="images-half">
  <img src={configuracao8} alt="Escolhendo o período" />
  <img src={configuracao9} alt="Tela de confirmação" />
  <img src={configuracao10} alt="Mensagem de sucesso" />
</div>


### Sistema

A seção **Sistema** reúne funções relacionadas à **troca de empresa ou módulo**, além de recursos voltados à **análise de erros** e **informações técnicas** do aplicativo.

---

#### Principais funções

- **Acessar outra empresa** — Permite ao usuário trocar a empresa em uso, caso esteja disponível.  
  Essa troca pode ser feita a qualquer momento, sem necessidade de reiniciar o aplicativo.

<div className="images-half">
  <img src={configuracao11} alt="Tela Acessar outra Empresa" />
</div>

- **Acessar outro módulo** — Permite alternar entre os módulos disponíveis, como **Força de Vendas**, **Expedição** e **Administração**, conforme as permissões do usuário.

<div className="images-half">
  <img src={configuracao12} alt="Tela Acessar outro Módulo" />
</div>

- **Logs de erros** — Exibe o histórico de erros registrados pelo aplicativo.  
  O usuário pode visualizar os logs e compartilhá-los com o suporte técnico para análise e correção de eventuais falhas.

<div className="images-half">
  <img src={configuracao13} alt="Tela de Logs de Erros" />
</div>

- **Sobre** — Apresenta informações técnicas sobre o aplicativo, como **versão instalada**, **nome da conecao**, **servidor** e **porta de conexão**.

<div className="images-half">
  <img src={configuracao14} alt="Tela Sobre" />
</div>

