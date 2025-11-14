---
sidebar_position: 5
sidebar_label: "Análise comercial"
title: "Análise comercial"
---

# Análise comercial

**`ONLINE`**

A análise comercial é um recurso bastante relevante dentro do aplicativo Infolight. Com ele, o usuário tem a possibilidade de configurar a informação e o  tipos do valores a serem exibidos na tela.

O funcionamento deste relatório se dá em conjunto com o uso do grupo de perguntas `FDV_ANACOM`. 

Funciona assim: 

1. O grupo de perguntas informa para o aplicativo os campos que devem ser exibidos no formulário;
2. O aplicativo captura os dados informados pelo usuário nesses campos, e gera o relatório baseado nesses valores e na chamada da tela;

:::tip[DICA]
[Clique aqui](../grupo-de-perguntas.md) para saber mais detalhes sobre os grupos de perguntas.
:::

## Estrutura da chamada

A chamada do relatório de análise comercial é composta por 5 parâmetros. Falaremos sobre eles em detalhes durante as subseções abaixo.

### Primeiro parâmetro

O primeiro parâmetro define qual será informação principal do relatório:

<table>
    <tr>
        <th>Valor</th>
        <th>Informação</th>
    </tr>
    <tr>
        <td>'0'</td>
        <td>Por fornecedor</td>
    </tr>
    <tr>
        <td>'1'</td>
        <td>Por gerente</td>
    </tr>
    <tr>
        <td>'2'</td>
        <td>Por grupo</td>
    </tr>
    <tr>
        <td>'3'</td>
        <td>Por supervisor</td>
    </tr>
    <tr>
        <td>'4'</td>
        <td>Por produto</td>
    </tr>
    <tr>
        <td>'5'</td>
        <td>por vendedor</td>
    </tr>
    <tr>
        <td>'6'</td>
        <td>por clientes</td>
    </tr>
    <tr>
        <td>'7'</td>
        <td>Por rede de clientes</td>
    </tr>
    <tr>
        <td>'8'</td>
        <td>Por estado</td>
    </tr>
    <tr>
        <td>'9'</td>
        <td>por mês</td>
    </tr>
</table>

### Segundo parâmetro:

O segundo parâmetro define como a informação será exibida:

<table>
    <tr>
        <th>Valor</th>
        <th>Tipo da Informação</th>
    </tr>
    <tr>
        <td>'0'</td>
        <td>O valor do terceiro parâmetro é lido: <br/>`T` -> Em valores brutos;<br/>`F` -> Em valores líquidos.</td>
    </tr>
     <tr>
        <td>'1'</td>
        <td>Em peso líquido.</td>
    </tr>
     <tr>
        <td>'2'</td>
        <td>Em quantidade líquida.</td>
    </tr>
     <tr>
        <td>'3'</td>
        <td>Em volume.</td>
    </tr>
</table>

### Quarto parâmetro

O quarto parâmetro define os tipos do materiáis dos produtos a serem consideradados. 

```sql title="Sintaxe:"
'TIPO1, TIPO2, ...'
```

```sql title="Exemplo:"
'PV, RV'
```

:::tip[É VALIDO SABER]
Não existe um limite para a quantidade de tipos que você pode especificar, portanto, fica a seu critério.
:::

### Quinto parâmetro:

O quinto e último parâmetro define as regras de saída que serão consideradas na obtenção dos dados.

```sql title="Sintaxe:"
'REGRA1+REGRA2+REGRA3+...'
```

```sql title="Exemplo:"
'501+502'
```

:::tip[DICA]
Você pode especificar quantas regras de saída quiser, não existe um limite.
:::

### Exemplo de chamada

```
analisecomercial('2','0','T','PA,RV','503+603')
```

Com esta chamada:

1. A informação principal será **por grupo**;
2. O tipo da informação será em **valores brutos**;
3. Apenas os produtos cujo o tipo do material seja PV ou RV serão considerados;
4. Apenas as regras de saída 503 e 603 serão utilizadas.

:::warning[ATENÇÃO]
Todos os parâmetros são obrigatórios. Não informar algum deles pode resultar em comportamentos inesperados pelo aplicativo.
:::

## Problemas comuns


1. **Cadastrei uma chamada, mas ela não funcionou ou não apareceu no menu:**

    Navegue até a [guia de configurações](../tela-inicial/guia-de-configuracoes.md) da tela inicial e atualize as **tabelas de configurações**. Se mesmo assim não funcionar, verifique se cadastrou a chamada corretamente. Por fim, se não obtiver sucesso, entre em contato com o [suporte da Infolight](https://infolight.com.br/#contato).

