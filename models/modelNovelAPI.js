const mongoose = require('mongoose');
const schemaUser = new mongoose.Schema({
    nome: String,
    email: String,
    endereco: String,
    cidade: String,
    uf: String,
    telefone: String,
    status: {
        type: Boolean,
        default: true,
    },
    date_criacao: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('tb_Pessoas',schemaUser);