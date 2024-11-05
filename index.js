const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items');

// Middleware para analisar o corpo das requisições
app.use(express.json());

// Usando as rotas de itens
app.use('/items', itemsRoutes);

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de gerenciamento de itens!');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
