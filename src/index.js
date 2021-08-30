require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    'mongodb+srv://novelapp:NovelApi@novelapi.bu5hi.mongodb.net/NovelApi?retryWrites=true&w=majority',
    );

    app.use(express.json());
    app.use(require('./routes'),async (req, res, next) => {
        throw new Error('Ocorreu um erro durante o processanto, entre em contato com o administrador do sistema!');
    });

    app.listen(3000,() => 
    {
        console.log('Conexão OK')
    });