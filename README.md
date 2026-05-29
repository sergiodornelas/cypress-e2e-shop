#  Projeto – EBAC SHOP

Projeto de automação de testes E2E **EBAC SHOP**, uma loja virtual de e-commerce criada para uso didático, cobrindo o fluxo das funcionalidades de login, cadastro e carrinho de compras.  

O projeto utiliza **Cypress** e **TypeScript**, seguindo uma arquitetura modular com **Custom Commands**, **tipagem de ambiente**, geração de dados dinâmicos via **Faker.js** e relatórios HTML via **Mochawesome**.

**Aplicação:** [Loja EBAC](http://lojaebac.ebaconline.art.br/)

---
##  ➫ Tecnologias Utilizadas

| Tecnologia | Descrição |
| -------------------------------------- | ----------------------------------------------------- |
| **[Cypress](https://www.cypress.io/)** | Framework de automação de testes end-to-end. |
| **[TypeScript](https://www.typescriptlang.org/)** | Linguagem de programação. |
| **[Node.js](https://nodejs.org/)** | Ambiente de execução JavaScript, que serve como base para rodar o ecossistema do Cypress e gerenciar dependências. |
| **[Faker.js](https://fakerjs.dev/)** | Biblioteca utilizada para geração automática de dados fictícios e dinâmicos para testes. |
| **[Mochawesome](https://www.npmjs.com/package/mochawesome)** | Gerador de relatórios que transforma os resultados dos testes em dashboards visuais e interativos em HTML. |

---

### ➫ Pré-requisitos
---

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Incluído na instalação do Node.js).
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/) (Recomendado).
- [Google Chrome](https://www.google.com/chrome/)

---
###  ➫ Instalação e Configuração

| Etapa | Descrição | Comando |
| :------------------------------------------- | :--------------------------------- | :------------------------------------------------------------------------ |
| **Clonar o repositório** | Dowload local do projeto. | `git clone https://github.com/sergiodornelas/cypress-e2e-shop.git` |
| **Acessar diretório** | Acessa a pasta do projeto. | `cd cypress-e2e-shop` |
| **Instalar dependências** | Instala Cypress, TypeScript, Faker e demais pacotes. | `npm install` |
| **Configurar credenciais** | Cria o arquivo de ambiente local | Copiar. `cypress.env.example.json` → `cypress.env.json` e preencher `USER` |


---


## ➫ Execução dos Testes

| Modo | Descrição | Comando |
| :---------------------------- | :----------------------------------- | :--------------------------------------------------------- |
| **Modo Assistido (Interface)** | Inicia a interface gráfica para executar testes visualmente. | `npx cypress open` |
| **Headless (terminal)** | Executa os testes no terminal em segundo plano. | `npx cypress run` |
| **Executar um teste específico** | Aponta o arquivo que será executado. | `npx cypress run --spec "cypress/e2e/login/login.cy.ts"` |
| **Modo interativo via linha de comando** | Executa com browser visível. | `npx cypress run --browser chrome --headed` |

Após execução em modo headless, o relatório HTML do Mochawesome é gerado em `cypress/results`.

---

## ➫ Estrutura do Projeto

```bash
cypress-e2e-shop
├── casosDeTeste
│   └── Casos de teste - EBAC SHOP.pdf
├── cypress
│   ├── e2e
│   │   ├── cadastro
│   │   │   └── cadastro.cy.ts
│   │   ├── carrinho
│   │   │   └── carrinho.cy.ts
│   │   └── login
│   │       └── login.cy.ts
│   └── support
│       ├── commands
│       │   ├── cadastroCommands.ts
│       │   ├── carrinhoCommands.ts
│       │   └── loginCommands.ts
│       ├── types
│       │   ├── cadastro.d.ts
│       │   ├── carrinho.d.ts
│       │   ├── env.d.ts
│       │   └── login.d.ts
│       ├── commands.ts
│       └── e2e.ts
├── .gitignore
├── cypress.config.ts
├── cypress.env.example.json
├── package.json
├── package-lock.json
└── tsconfig.json
```
##  ➫ Estrutura dos diretórios e arquivos

| Diretório / Arquivo | Descrição |
| ----------------------------------- | -------------------------------------------------------- |
| `cypress/e2e` | Suítes de testes (login, cadastro, carrinho). |
| `cypress/support/commands` | Custom Commands.  |
| `cypress/support/types` | Declarações TypeScript.  |
| `cypress.env.json` | Credenciais e variáveis sensíveis (não versionado). |
| `cypress.env.example.json` | Modelo para adição das variáveis de ambiente. |
| `cypress/results` | Relatórios de teste. |
| `cypress/fixtures`| Massa de dados estática.|
| `casosDeTeste` | Documentação dos casos de teste (PDF). |

---

##  Tecnologias Utilizadas

| Tecnologia | Descrição |
| -------------------------------------- | ----------------------------------------------------- |
| **[Cypress](https://www.cypress.io/)** | Framework de automação de testes end-to-end. |
| **[TypeScript](https://www.typescriptlang.org/)** | Linguagem de programação. |
| **[Node.js](https://nodejs.org/)** | Ambiente de execução JavaScript, que serve como base para rodar o ecossistema do Cypress e gerenciar dependências. |
| **[Faker.js](https://fakerjs.dev/)** | Biblioteca utilizada para geração automática de dados fictícios e dinâmicos para testes. |
| **[Mochawesome](https://www.npmjs.com/package/mochawesome)** | Gerador de relatórios que transforma os resultados dos testes em dashboards visuais e interativos em HTML. |




##  Arquitetura de Testes

O projeto adota uma arquitetura modular, escalável e de alta manutenibilidade, estruturada com separação clara de responsabilidades:

* **Custom Commands** → Abstraem e encapsulam interações repetíveis da interface (como preenchimento de formulários, fluxos de autenticação e logout), promovendo o reuso de código e simplificando a escrita dos cenários.
* **TypeScript Definitions (`.d.ts`)** → Garantem a tipagem estática global dos comandos customizados e das variáveis de ambiente (`Cypress.env`).


---

## Suítes de teste

### Funcionalidade – Criar Conta de Usuário (`cadastro.cy.ts`)

- CT001: Deve criar uma nova conta com dados válidos. 
- CT002: Deve bloquear cadastro com e-mail já registrado.
- CT003:Deve exibir erro ao tentar cadastrar com formulário vazio  .
- CT004:Deve exibir erro quando a senha não é informada.  
- CT005: Deve exibir erro quando o e-mail não é informado.

### Funcionalidade – Login (`login.cy.ts`)

- CT001: Deve autenticar o usuário com credenciais válidas.  
- CT002: Deve bloquear login com e-mail e senha inválidos.  
- CT003:Deve exibir erro de campo obrigatório ao enviar credenciais vazias.  
- CT004: Deve rejeitar login com e-mail válido e senha incorreta.  
- CT005: Deve rejeitar login com e-mail inválido e senha válida.  
- CT006: Deve preservar o usuário digitado após falha de login.  
- CT007: Deve manter o campo senha mascarado (`type="password"`)  
- CT008: Deve realizar logout com sucesso após login válido. 

### Funcionalidade – Carrinho de Compras (`carrinho.cy.ts`)

- Em desenvolvimento.  

---







