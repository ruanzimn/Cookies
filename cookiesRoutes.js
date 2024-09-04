// src/routes/cookieRoutes.js

const express = require('express');
const router = express.Router();

// Criar - POST /cookie/criar
router.post('/criar', (req, res) => {
    res.cookie('meuCookie', 'valorInicial', { httpOnly: true });
    res.status(201).json({
        mensagem: 'cookie criado com sucesso',
        cod_status: 201
    });
});

