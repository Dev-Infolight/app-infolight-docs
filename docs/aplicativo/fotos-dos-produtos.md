---
sidebar_position: 6
sidebar_label: "Fotos dos produtos"
title: "Fotos dos produtos"
---

# Fotos dos produtos

As *fotos dos produtos* são uma funcionalidade importante oferecida pelo app Infolight, especialmente útil para que os vendedores possam identificar com mais agilidade os produtos e suas características.

Embora opcionais, as fotos ajudam a enriquecer a experiência de uso. Caso o link das fotos não seja disponibilizado no parâmetro, o aplicativo funcionará normalmente sem as fotos, já que o caminho dos arquivos das fotos são armazenadas em uma tabela interna, podendo ser a posterior atualizadas. 

## Cadastro de Fotos dos Produtos

Para cadastrar as fotos corretamente, siga os passos abaixo:

1. **Renomeie cada imagem** com o **código do produto correspondente**.  
   *Exemplo:* `12345.png`, `67890.jpg`, etc.

2. Utilize, preferencialmente, os formatos de imagem: `.png`, `.jpg` ou `.jpeg`.

3. Armazene todas as fotos em **uma pasta nomeada com o CNPJ da empresa**, utilizando **apenas números** (sem pontos, barras ou traços).  
   *Exemplo:* `12345678000199`

4. Envie essa pasta para o serviço de armazenamento em nuvem **Dropbox**.

5. Após o upload, **copie o link da pasta gerado** pelo Dropbox e **substitua o final do link**:
   - De: `...dl=0`
   - Para: `...raw=1`

6. Verifique se o link gerado no *Dropbox* está funcionando. Para isso pegue o link gerado já com substituição do `...dl=0` para  `...raw=1`, jogue no navegador e veja se baixa um arquivo zipado contendo todas fotos armazenadas na pasta. Caso sim, está tudo ok. Caso contrário, o link pode estar errado ou alguma configuração do *Dropbox* não permite o download.

7. O link gerado com a alteção no final da url deve ser cadastrados em parametros, na variavel `MV_URLFOTOS`.

## Baixar fotos dos produtos

Geralmente, as fotos são baixadas automaticamente na etapa final do login. Caso isso não ocorra, essa etapa é simplesmente ignorada. O app consegue funcionar perfeitamente sem as fotos.

Durante o uso do app, caso as fotos sejam posteriormente cadastradas, é possível baixá-las manualmente através da guia *Configuração* da tela inicial, na opção **Atualizar fotos dos produtos**. Essa funcionalidade pode ser usada tanto para o primeiro download das imagens quanto para atualizações, caso alguma foto seja substituída ou alterada. Veremos um exemplo disso no próximo tópico. 

## Atualizar Fotos dos Produtos

Para atualizar a fotos de um produto, siga os passos abaixo:

1. Acesse a pasta do **Dropbox** onde estão as fotos dos produtos e apague uma ou mais delas.

2. Adicione uma ou mais fotos, nomeando cada uma com o código do produto ao qual se refere.

3. Va na guia *Configuração* da tela inicial e clice em **Atualizar Fotos dos Produtos**.

## Problemas comuns

1. **As fotos dos produtos não aparecem**

    - Parâmetro `MV_URLFOTOS` não cadastrado ou com link errado.

    - Fotos renomeados de forma errada.

    - Fotos em formatos diferentes dos sugeridos(`.png`, `.jpg` ou `.jpeg`).

2. **A foto de um produto em específico não aparece**
    
    - Foto não cadastrada na pasta.
    
    - Foto renomeada de forma errada, possivilmente sem o código do produto correto.
    
    - Alteração feita depois do login.

3. **Foto de um produto errada**
    
    - Foto renomeada com código de outro produto não correspondente.

## O que fazer depois das correções? 

1. **Correção/alteração no link**

    - Depois de criar um novo link, substitua o link antigo pela nova URL na variável `MV_URLFOTOS`, em Parâmetros. Não se esqueça de substituir o `...dl=0` para  `...raw=1` no final da url e de fazer o teste de download no navegador. Em seguida, clique em **Atualizar Fotos dos produtos**, na guia *configuração* da tela inicial — se já estiver logado. Caso contrário, as fotos serão baixadas automaticamente no próximo login.
    
2. **Correção/alteração de Fotos**

    - Depois de adicionar uma ou mais fotos ou renomeá-las com o código correto do produto, clique em **Atualizar Fotos dos produtos**, na guia *configuração* da tela inicial, caso já esteja logado. Caso contrário, as fotos serão baixadas automaticamente no próximo login.
    