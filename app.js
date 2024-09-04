

const express = require('express');
const cookieParser = require('cookie-parser');
const cookieRoutes = require('./cookiesRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(cookieParser());
app.use(express.json());

// Roteamento
app.use('/cookie', cookieRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
