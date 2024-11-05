# PTAS

# Middleware e Desenvolvimento de Sistemas

## Introdução

Este projeto tem como objetivo demonstrar a utilização de middleware na criação de um sistema utilizando Node.js e Express.js. O código é organizado de forma modular, facilitando a visualização e a manutenção do sistema, incluindo as rotas, controladores e middlewares.

## Conceito de Middleware

Middleware é uma camada de software que atua como intermediária, permitindo a comunicação e integração entre diferentes sistemas ou componentes de uma única aplicação. Nas aplicações web, o middleware desempenha um papel fundamental ao gerenciar as operações realizadas entre o recebimento de uma requisição e o envio da resposta, centralizando funcionalidades que podem ser aplicadas em diversas rotas.

### Funcionalidades do Middleware

* **Autenticação e autorização**: Resguarda determinadas rotas, garantindo que apenas usuários autorizados possam acessá-las.
* **Registro de logs e monitoramento**: Captura informações sobre as requisições, facilitando a análise de uso e a resolução de problemas.
* **Cache e otimização de desempenho**: Armazena dados temporariamente para acelerar o acesso a informações frequentemente requisitadas.
* **Segurança e proteção contra ataques**: Implementa medidas que protegem a aplicação contra vulnerabilidades, como Cross-Site Scripting (XSS) e injeção de SQL.
* **Integração com sistemas externos**: Facilita a comunicação com APIs e serviços de terceiros.

### Exemplos de Middleware em Node.js

* **Express.js**: Um dos frameworks mais populares, que oferece uma estrutura robusta para a criação de middlewares.
* **Koa.js**: Uma alternativa minimalista ao Express, valorizada por sua flexibilidade e simplicidade.
* **Hapi**: Um framework que enfatiza segurança e modularidade, permitindo a configuração de middlewares voltados à validação e proteção.

## Implementação do Sistema

O sistema utiliza uma estrutura modular para organizar rotas, controladores e middlewares. A seguir, está a organização dessa estrutura:

### Estrutura do Sistema

* **Rotas (`routes`)**: Define os principais endpoints, incluindo a rota inicial e a rota de itens.
* **Controladores (`controllers`)**: Contém a lógica responsável pela manipulação dos dados.
* **Middlewares (`middlewares`)**: Oferece funcionalidades intermediárias, como o registro das requisições.

### Rotas do Sistema

* **`/`**: Rota inicial que retorna uma mensagem de boas-vindas ao usuário.
* **`/items`**: Rota destinada a operações de listagem (GET), criação, atualização e exclusão de itens (apenas a operação GET é obrigatória).

### Controladores

O arquivo `itemsController.js` implementa a lógica das operações relacionadas aos itens, centralizando a manipulação dos dados para a rota `/items`.

### Middlewares

O sistema inclui um middleware para registro de logs, que captura detalhes de cada requisição no console, como o método HTTP utilizado e a URL acessada. Este middleware é aplicado na rota `/items`, permitindo o monitoramento do acesso.

## Exemplo de Código

### Arquivo `routes/items.js`

```javascript
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const loggingMiddleware = require('../middlewares/loggingMiddleware');

router.get('/', loggingMiddleware, itemsController.listItems);

module.exports = router;
```

### Arquivo `controllers/itemsController.js`

```javascript
const items = []; // Array para simular uma lista de itens

const listItems = (req, res) => {
  res.json(items);
};

module.exports = { listItems };
```

### Arquivo `middlewares/loggingMiddleware.js`

```javascript
const loggingMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
  next();
};

module.exports = loggingMiddleware;
```

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Instale as dependências necessárias executando `npm install`.
3. Inicie o servidor com o comando `node app.js`.
4. Acesse o sistema em `http://localhost:3000` para visualizar a rota de boas-vindas e em `http://localhost:3000/items` para acessar a rota de itens.

## Considerações Finais

Este projeto serve como um exemplo básico do uso de middleware em um sistema Node.js. A estrutura modularizada proporciona facilidade na manutenção e na expansão do sistema, permitindo a adição de novas funcionalidades sem comprometer a organização do código. O uso de middleware para registro de logs é apenas um dos exemplos que mostram o potencial de personalização e controle que esses componentes oferecem no desenvolvimento de aplicações robustas.

## Referências

- Node.js. (2022). [Node.js Documentation](https://nodejs.org/en/docs/).
- Express.js. (2022). [Express.js Documentation](https://expressjs.com/).
- Koa.js. (2022). [Koa.js Documentation](https://koajs.com/).
- Hapi. (2022). [Hapi Documentation](https://hapi.dev/).
