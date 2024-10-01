const express = require('express');
const path = require('path');
const fs = require('fs'); // Certifique-se de ter isso importado

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Rota para a página do formulário
app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

// Rota para processar o formulário
app.post('/submit', (req, res) => {
    const { name, email, mensagem } = req.body;
    const a = `username: ${name}, email: ${email}, mensagem: ${mensagem}`;

    fs.writeFile(path.join(__dirname, 'data.txt'), a, err => {
        if (err) {
            console.error(err);
            return res.send('Erro ao salvar os dados.');
        }
        res.send('Dados salvos com sucesso!');
    });
});

// Middleware para tratamento de erros 404
app.use((req, res) => {
    res.status(404).send('Página não encontrada - ERRO 404');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
