---
sidebar_position: 2
sidebar_label: "Clientes"
title: "Clientes"
---
import telaCliente1 from '@site/static/img/telaCliente/telaCliente1.png';
import telaCliente2 from '@site/static/img/telaCliente/telaCliente2.png';
import telaCliente3 from '@site/static/img/telaCliente/telaCliente3.png';
import telaCliente4 from '@site/static/img/telaCliente/telaCliente4.png';
import telaCliente5 from '@site/static/img/telaCliente/telaCliente5.png';
import telaCliente6 from '@site/static/img/telaCliente/telaCliente6.png';
import telaCliente7 from '@site/static/img/telaCliente/telaCliente7.png';
import telaCliente8 from '@site/static/img/telaCliente/telaCliente8.png';
import telaCliente9 from '@site/static/img/telaCliente/telaCliente9.png';
import telaCliente10 from '@site/static/img/telaCliente/telaCliente10.png';
import telaCliente11 from '@site/static/img/telaCliente/telaCliente11.png';
import telaCliente12 from '@site/static/img/telaCliente/telaCliente12.png';
import telaCliente13 from '@site/static/img/telaCliente/telaCliente13.png';
import telaCliente14 from '@site/static/img/telaCliente/telaCliente14.png';
import telaCliente15 from '@site/static/img/telaCliente/telaCliente15.png';
import telaCliente16 from '@site/static/img/telaCliente/telaCliente16.png';
import telaCliente17 from '@site/static/img/telaCliente/telaCliente17.png';
import telaCliente18 from '@site/static/img/telaCliente/telaCliente18.png';
import telaCliente19 from '@site/static/img/telaCliente/telaCliente19.png';



# Cliente

A tela **Cliente** exibe todos os clientes ativos em formato de `card`.  O aplicativo pode ser utilizado **offline**, porém é necessário **sincronizar a base de dados local periodicamente** para manter o acesso completo às funções do menu do cliente.

A sincronização deve ocorrer:

- **A cada 24 horas**, caso o usuário esteja *online*;  
- **A cada 36 horas**, caso o usuário permaneça *offline* durante esse período.

Cada **card** representa um cliente ativo e apresenta **ícones indicativos** com a **quantidade correspondente** de atividades relacionadas, como **pedidos**, **vendas não positivadas** e **vendas vencidas**.  

O usuário também pode **expandir o card** para visualizar informações adicionais do cliente e acessar as **funções disponíveis no menu Cliente**.

## Filtros

A tela **Cliente** oferece diferentes formas de filtragem e pesquisa para facilitar a localização de Clientes.  

#### Filtro por status
Na parte superior da tela, há um conjunto de filtros rápidos que permitem classificar os clientes de acordo com o **status de atendimento**, como:  
**Atendidos**, **Não atendidos** e **Inadimplentes**.

<div className="images-grid-2">
  <img src={telaCliente1} alt="Filtro por status" />
</div>


#### Filtro avançado
O usuário também pode realizar uma **seleção de cards** por meio do filtro avançado, digitando um ou mais parâmetros de busca.  
É possível preencher campos como **código do cliente**, **nome**, **nome fantasia** e **cidade**.  

Para acessar o filtro, basta tocar no **penúltimo ícone** localizado no canto superior direito da tela.

<div className="images-grid">
  <img src={telaCliente2} alt="Seleção por Filtro" />
</div>


#### Busca por campos
Para efetuar uma busca direta, toque no **ícone de lupa (🔍)**, o **último ícone** no canto superior direito.  
Nesse modo, o usuário pode realizar uma **busca genérica** em todos os campos ou limitar a pesquisa a um campo específico — por exemplo, buscar clientes de uma determinada **cidade**.

<div className="images-grid-2">
  <img src={telaCliente3} alt="Busca por Campos" />
</div>


## Card


Cada cliente é representado por um **card**. No **canto superior esquerdo**, estão os ícones indicativos com suas respectivas quantidades:  
- **Pedidos** (🤝)  
- **Vendas não positivadas** (👎)  
- **Vendas vencidas** (<span style={{ color: 'red'}}>$</span>)

O cabeçalho do card apresenta, na seguinte ordem: **código do cliente**, **número da loja** e **razão social**.  Logo abaixo, exibe-se o **nome fantasia**. O car fica no formato:



```
Codigo de cliente - Loja - Razão Social
Nome Fatansia
```

<div className="images-grid-2">
  <img src={telaCliente4} alt="Card do cliente" />
</div>

O usuário pode **expandir o card** clicando sobre ele.  
Ao expandir, são exibidas informações adicionais do cliente, incluindo: tipo de pessoa, data da última compra, cidade/UF e os contatos. No seguinte formato:


```
Tipo de pessoa
Data da última compra 
Cidade/UF
Contatos
"O que deseja fazer?"
```

<div className="images-grid-2">
  <img src={telaCliente5} alt="Card expandido" />
</div>

No final do card expandido, está disponível o botão Menu **`O que deseja fazer?`**. Ao tocar nesse botão, o usuário acessa um **modal** com as principais funções do módulo **Força de Vendas**.


## Menu `O que deseja fazer?`

<div className="images-grid">
  <img src={telaCliente6} alt="Menu Cliente" />
</div>

Ao clicar no menu **`O que deseja fazer?`**, o usuário tem acesso às seguintes funções:

- **Dados Cadastrais**  
- **Nova Venda**  
- **Como Chegar**  
- **Visitas Não Positivadas**  
- **Títulos em Aberto**  
- **Últimas Compras**  
- **Check-in / Check-out** *(em desenvolvimento)*

---

### Dados Cadastrais do Cliente

Nesta seção, o usuário encontra **três abas** com informações do cliente: **Dados**, **Endereço** e **Administrativo/Financeiro**.

<div className="images-grid">
  <img src={telaCliente7} alt="Aba Dados" />
  <img src={telaCliente8} alt="Aba Endereço" />
  <img src={telaCliente9} alt="Aba Administrativa/Financeira" />
</div>

---

### Nova Venda

A função **Nova Venda** é detalhada na documentação de [Pedidos de Venda](pedidos_de_venda.md).  
Caso o cliente possua **títulos vencidos**, será exibido um **modal de confirmação** perguntando se o usuário deseja prosseguir.

:::info
Caso o cliente possua **pendência financeira** e o parâmetro `MV_PCLIATRASMOB` esteja definido como `F`,  o botão de nova venda ficará **desabilitado**. Consulte a documentação de [Parâmetros](../parametros.md) para mais detalhes.
:::

---

### Como Chegar

Se o cliente tiver as coordenadas **latitude e longitude** ou **endereço** cadastrados, ao tocar em **Como Chegar** o usuário será redirecionado para o **Google Maps**, com a rota traçada da sua localização atual até o cliente. 
são mais precisas para localizar. Caso o cliente possua **títulos vencidos**, será exibido um **modal de confirmação** perguntando se o usuário deseja prosseguir.

:::info
  Caso cadastro do cliente tenha coordenadas geográficas (latitude e longitude), a localização é mais precisa. E em caso de **endereço incorreto** ou **dados desatualizados**, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::

---

### Visitas Não Positivadas

A função **Visitas Não Positivadas** permite registrar visitas em que **não houve venda**, informando uma **justificativa**. Os registros podem ser feitos *online* ou *offline* e ficam disponíveis no histórico do cliente.

Para registrar uma nova visita, toque no **ícone de (+)** no canto superior direito.

<div className="images-grid">
  <img src={telaCliente10} alt="Tela de Visitas Não Positivadas" />
</div>

Na tela de **Cadastro de Visita Não Positivada**, o usuário deve selecionar **uma ou mais justificativas** da lista padrão ou inserir manualmente. Também é possível **inativar o cliente** a partir dessa tela.

<div className="images-grid">
  <img src={telaCliente11} alt="Tela Cadastro de Visitas Não Positivadas" />
  <img src={telaCliente12} alt="Lista de Justificativas Padrão" />
</div>

Se o usuário estiver **sem conexão**, o cadastro ficará **pendente** e poderá ser **editado ou excluído**. Os registros pendentes são enviados automaticamente quando o aplicativo sincronizar ou reconectar-se à internet.

<div className="images-grid">
  <img src={telaCliente13} alt="Visitas Não Positivadas Pendentes" />
</div>

---

### Títulos em Aberto

A tela **Títulos em Aberto** exibe os títulos do cliente em formato de `card`, com a **data de vencimento**. Títulos vencidos a legenda e a data são destacados em **vermelho**.

A tela inclui uma **busca genérica** (pesquisa por todos os campos) ou permite filtrar por campo específico. Toque no **ícone de lupa (🔍)** no canto superior direito para acessar a busca.

No rodapé da tela são exibidos:
- **Data da última sincronização**  
- **Quantidade total de títulos**  
- **Valor somado de todos os títulos**

<div className="images-grid">
  <img src={telaCliente14} alt="Tela Títulos em Aberto" />
</div>

Ao tocar em um card, ele se **expande** e mostra o botão **Mais detalhes?**, que abre um modal com as informações completas do título.

<div className="images-grid">
  <img src={telaCliente15} alt="Card expandido - Títulos em Aberto" />
  <img src={telaCliente16} alt="Modal - Mais detalhes do título" />
</div>

---


### Últimos Pedidos

A função **Últimos Pedidos** abre a tela **Pedidos de Venda** do cliente, exibindo tanto os pedidos **pendentes** quanto os **enviados**.

<div className="images-grid">
  <img src={telaCliente17} alt="Tela Pedidos de Venda - Pendentes" />
  <img src={telaCliente18} alt="Tela Pedidos de Venda - Enviados" />
</div>

:::info
Em breve será publicada uma documentação completa desta tela.
:::

---

### Check-in / Check-out

Funcionalidade **em desenvolvimento**.

## Problemas comuns

 1. **Clico em `O que desejo fazer?` e um modal abre informado que a base esta desatualizada**

<div className="images-grid">
  <img src={telaCliente19} alt="Base desatualizada" />
</div>

  - Sem sincronizar a base local por 24 horas, mesmo **online** ou 36 **offline**

2. **Não encontro cliente depois de sincronizar**

  - Cliente foi inativado em alguma visita negativada ou pelo ERP.

3. **Botão de Nova Venda desabilitado**.

  - Cliente com titulos vencidos e com o paramentro `MV_PCLIATRASMOB` com o valor `F`.


## Como Corrigir
 
    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::


1. **Base desatualizada**

    - Role a tela para baixo na guia *Início* da tela inicial.
    
2. **Cliente sumiu depois da sincronização**

    - Entre no ERP Tempus e verifique se o cliente foi inativado. Caso sim, ative novamente e role a tela para baixo na guia *Início* da tela inicial.

3. **Ativar novamente o botão Nova Venda**

  - Entre no ERP Tempus e troque o valor da variavel `MV_PCLIATRASMOB` de `F` para `T`, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.

    :::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::