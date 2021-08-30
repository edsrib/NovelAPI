const User = require('../models/modelNovelAPI');
const Crypto = require('../controllers/cripto');

module.exports = {
    async editarPessoa(req,res)
    {
        try{
            const pessoa = req.body;
            const pessoaBanco = await User.findById(pessoa.id);
    
            pessoaBanco.set({
                nome: Crypto.Criptografar('', pessoa.nome),
                email: Crypto.Criptografar('',pessoa.email),
                endereco: Crypto.Criptografar('',pessoa.endereco),
                cidade: Crypto.Criptografar('',pessoa.cidade),
                uf: Crypto.Criptografar('',pessoa.uf),
                telefone: Crypto.Criptografar('',pessoa.telefone),
                status:true,
                date_criacao: new Date,
                });
            await pessoaBanco.save();
            return res.json('{Mensagem: Alterado com sucesso!}');
        }catch{
            return res.json('{Erro: Ocorreu um erro durante a exclusão, contate o administrador do sistema!}');
        }
    }
};