---
sidebar_position: 6
sidebar_label: "Painel de vendas"
title: "Painel de vendas"
---

import paineldevendas1 from '@site/static/img/telaPaineldeVendas/paineldeVendas1.png';
import paineldevendas2 from '@site/static/img/telaPaineldeVendas/paineldeVendas2.png';
import paineldevendas3 from '@site/static/img/telaPaineldeVendas/paineldeVendas3.png';

# Painel de Vendas

A tela **Painel de Vendas** permite gerar relatórios de vendas em formato de **grid**, gerado por **categorias** e **períodos**. Ela é **parcialmente online**, pois a geração dos relatórios exige **conexão ativa com a internet**.

O funcionamento desse relatório está diretamente ligado ao grupo de perguntas **`FDV_PV`**.

:::info Conexão necessária
Esta tela só funciona com **conexão com a internet**.  
Verifique sua rede antes de continuar.
:::

---
## Estrutura da chamada de Painel de Vendas


Para gerar o relatório a chamada utlizada é a `pv`, que é composta por **um parametro**. O `pv`, responsavel por inicia a execução da função e e m seguida, entre parênteses e aspas simples, é definidos o tipo da categória.

Para gerar o relatório, a chamada utilizada é **`pv`**, que recebe **um único parâmetro**.  
O `pv` é responsável por iniciar a execução da função e, em seguida, entre **parênteses** e **aspas simples**, é definido o **tipo da categoria** que será exibida no relatório.

---
### Exemplo de chamada

```dart
pv('número da catergoria')
```
---

### Categórias

<table>
    <tr>
        <th>Valor da catergoria</th>
        <th>Informação</th>
    </tr>
    <tr>
        <td>'1'</td>
        <td>Por fornecedor</td>
    </tr>
    <tr>
        <td>'2'</td>
        <td>Por gerente</td>
    </tr>
    <tr>
        <td>'3'</td>
        <td>Por supervisor</td>
    </tr>
    <tr>
        <td>'4'</td>
        <td>por vendedor</td>
    </tr>
        <tr>
        <td>'5'</td>
        <td>por fornecedor do vendedor</td>
    </tr>
    <tr>
        <td>'6'</td>
        <td>Por categoria</td>
    </tr>
    <tr>
        <td>'7'</td>
        <td>Por sub-categoria</td>
    </tr>
    <tr>
        <td>'8'</td>
        <td>Por produto</td>
    </tr>
    <tr>
        <td>'9'</td>
        <td>Por clientes</td>
    </tr>
        <tr>
        <td>'10'</td>
        <td>Por produtos do cliente</td>
    </tr>
</table>


## Gerar relatório

Depois de selecionar a **categoria cadastrada** e definir o **período**, ao tocar em **Gerar relatório**, o **grid do relatório** é exibido na tela.


<div className="images-grid">
  <img src={paineldevendas1} alt="Aba Dados" />
  <img src={paineldevendas2} alt="Aba Endereço" />
  <img src={paineldevendas3} alt="Aba Administrativa/Financeira" />
</div>

## Problemas comuns

 1. **Categoria ausente**

    - Categoria não cadastrada no Menu de Usuário.


## Como Corrigir
 
    :::info
    Se você tiver limpado a base de dados ou ainda não estiver logado, pode desconsiderar os passos abaixo. Basta fazer as alterações necessárias e, ao fazer o login novamente, as correções/alterações entrarão em vigor.
    :::

1. **Correção/alteração no menu de usuário**

    - Depois de realizar as correções ou alterações no menu de usuário, acesse a guia *Configuração* da tela inicial e clique em **Atualizar configurações**.
    
:::tip
    Por fim, se não tiver sucesso, entre em contato com o suporte da [Infolight](https://infolight.com.br/#contato).
:::