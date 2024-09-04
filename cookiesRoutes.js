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

// Ler - GET /cookie/ler
router.get('/ler', (req, res) => {
    const cookieValue = req.cookies['meuCookie'];
    if (cookieValue) {
        res.status(200).json({
            mensagem: `o nome do cookie criado foi meuCookie e valor ${cookieValue}`,
            cod_status: 200
        });
    } else {
        res.status(404).json({
            mensagem: 'cookie não encontrado',
            cod_status: 404
        });
    }
});

// Atualizar - PUT /cookie/atualizar
router.put('/atualizar', (req, res) => {
    const { novoValor } = req.body;
    if (novoValor) {
        res.cookie('meuCookie', novoValor, { httpOnly: true });
        res.status(201).json({
            mensagem: `o novo node do cookie e meuCookie e o novo valor e ${novoValor}`,
            cod_status: 201
        });
    } else {
        res.status(400).json({
            mensagem: 'valor não fornecido',
            cod_status: 400
        });
    }
});

// Excluir - DELETE /cookie/excluir
router.delete('/excluir', (req, res) => {
    res.clearCookie('meuCookie');
    res.status(201).json({
        mensagem: 'cookie excluido com sucesso',
        cod_status: 201
    });
});

module.exports = router;
