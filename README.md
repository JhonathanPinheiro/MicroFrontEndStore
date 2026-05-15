# MicroFrontEndStore

Projeto desenvolvido por mim para estudar **arquitetura de
microfrontends utilizando React e Webpack Module Federation**.

A ideia deste repositório é demonstrar, de forma prática, como uma
aplicação pode ser dividida em múltiplos microfrontends independentes
que se integram em uma aplicação principal.

## Objetivo do projeto

Este projeto foi criado como **estudo prático de arquitetura de
microfrontends**, explorando conceitos como:

-   separação de responsabilidades entre aplicações
-   carregamento de microfrontends via **Module Federation**
-   compartilhamento de estado entre aplicações
-   comunicação entre microfrontends
-   organização de um repositório com múltiplas aplicações frontend

A aplicação simula uma **pequena loja**, onde cada domínio é
representado por um microfrontend.

## Arquitetura

O projeto é dividido nas seguintes aplicações:

-   `shell` --- aplicação principal responsável por integrar os
    microfrontends
-   `auth-mfe` --- responsável pela autenticação do usuário
-   `products-mfe` --- catálogo de produtos
-   `cart-mfe` --- carrinho de compras
-   `profile-mfe` --- perfil do usuário

Cada microfrontend pode rodar de forma independente e é consumido pelo
**shell** através do **Webpack Module Federation**.

A comunicação entre os microfrontends acontece através de:

-   **zustand** para estado global compartilhado
-   um **eventBus simples** para disparo de eventos (ex: adicionar
    produto ao carrinho)

## Funcionalidades da demo

A aplicação demonstra um fluxo simples de loja:

-   login de usuário
-   exibição de catálogo de produtos
-   adição de produtos ao carrinho via eventos
-   atualização do carrinho entre microfrontends
-   perfil exibindo dados do usuário logado

O foco do projeto é **arquitetura e integração entre microfrontends**,
não regras de negócio complexas.

## Estrutura do repositório

    shell/           aplicação principal
    auth-mfe/        microfrontend de autenticação
    products-mfe/    microfrontend de produtos
    cart-mfe/        microfrontend de carrinho
    profile-mfe/     microfrontend de perfil

Cada aplicação possui seu próprio **webpack config, dependências e
servidor de desenvolvimento**.

## Tecnologias utilizadas

-   React
-   Webpack
-   Webpack Module Federation
-   Webpack Dev Server
-   Babel
-   Zustand
-   HTML Webpack Plugin

## Como executar o projeto

Cada aplicação deve ser executada separadamente.

Abra terminais diferentes para cada microfrontend.

### Shell

``` bash
cd shell
pnpm install
pnpm start
```

### Auth MFE

``` bash
cd auth-mfe
pnpm install
pnpm start
```

### Products MFE

``` bash
cd products-mfe
pnpm install
pnpm start
```

### Cart MFE

``` bash
cd cart-mfe
pnpm install
pnpm start
```

### Profile MFE

``` bash
cd profile-mfe
pnpm install
pnpm start
```

## Endpoints locais

Após iniciar os serviços:

-   Shell: http://localhost:3000
-   Products MFE: http://localhost:3001
-   Auth MFE: http://localhost:3002
-   Cart MFE: http://localhost:3003
-   Profile MFE: http://localhost:3004

A aplicação deve ser acessada através do **Shell**.

## Observações

Este projeto é uma **prova de conceito para estudo de microfrontends**.

Ele não possui:

-   autenticação real
-   integração com API
-   persistência de dados

Esses pontos podem ser adicionados futuramente como evolução do projeto.

## Possíveis melhorias

Algumas evoluções possíveis para este projeto:

-   integração com APIs reais
-   persistência do carrinho
-   autenticação com JWT
-   compartilhamento de design system
-   versionamento independente de microfrontends
-   deploy em múltiplos domínios
