const Pessoas = require('../models/modelNovelAPI');
const Crypto = require('../controllers/cripto');

module.exports = {
    async listarID(req,res){

    try{        
        const pessoa = await Pessoas.findById(req.params.id)
        pessoa.nome = Crypto.DeCriptografar('',pessoa.nome);
        pessoa.email = Crypto.DeCriptografar('',pessoa.email);
        pessoa.endereco = Crypto.DeCriptografar('',pessoa.endereco);
        pessoa.cidade = Crypto.DeCriptografar('',pessoa.cidade);
        pessoa.uf = Crypto.DeCriptografar('',pessoa.uf);
        pessoa.telefone = Crypto.DeCriptografar('',pessoa.telefone);

        return res.json(pessoa);
    }catch
        {
        return res.json('{Erro: Id não encontrado!}');
        }
    },

    async listarCidade(req,res){
        try{
            const varCidade = Crypto.Criptografar('',req.params.cidade);
            const pessoa = await Pessoas.find({cidade:varCidade});
            pessoa.forEach(element => {
            element.nome = Crypto.DeCriptografar('',element.nome);
            element.email = Crypto.DeCriptografar('',element.email);
            element.endereco = Crypto.DeCriptografar('',element.endereco);
            element.cidade = Crypto.DeCriptografar('',element.cidade);
            element.uf = Crypto.DeCriptografar('',element.uf);
            element.telefone = Crypto.DeCriptografar('',element.telefone);
            });
            return res.json(pessoa);
        }
        catch
        {
            return res.json('{Erro: Não foi encontrado registros que atendam a condição!}');
        }
    },

    async listarEmail(req,res){
        const varEmail = Crypto.Criptografar('',req.params.email);
        try{
            const pessoa = await Pessoas.find({email:varEmail})
            pessoa.forEach(element => {
                element.nome = Crypto.DeCriptografar('',element.nome);
                element.email = Crypto.DeCriptografar('',element.email);
                element.endereco = Crypto.DeCriptografar('',element.endereco);
                element.cidade = Crypto.DeCriptografar('',element.cidade);
                element.uf = Crypto.DeCriptografar('',element.uf);
                element.telefone = Crypto.DeCriptografar('',element.telefone);
            });
            return res.json(pessoa);
        }
        catch
        {
            return res.json('{Erro: Não foi encontrado registros que atendam a condição!}');
        }
    },

    async incluir(req,res){
        try{
            const pessoa = req.body;
            pessoa.nome = Crypto.Criptografar('',pessoa.nome);
            pessoa.email = Crypto.Criptografar('',pessoa.email);
            pessoa.endereco = Crypto.Criptografar('',pessoa.endereco);
            pessoa.cidade = Crypto.Criptografar('',pessoa.cidade);
            pessoa.uf = Crypto.Criptografar('',pessoa.uf);
            pessoa.telefone = Crypto.Criptografar('',pessoa.telefone);
            const PessoaCryto = await Pessoas.create(pessoa);  
            return res.json('{Mensagem: Incluído com sucesso!}');
        }
        catch{
            return res.json('{Erro: Ocorreu um erro durante a inclusão, contate o administrador do sistema!}');
        }
    },

    async excluir(req,res){
        try{
            const pessoa = await Pessoas.findById(req.params.id);
            const resultado = await Pessoas.deleteOne(pessoa);

            return res.json('{Mensagem: Excluído com sucesso!}');
        }catch{
            return res.json('{Erro: Ocorreu um erro durante a exclusão, contate o administrador do sistema!}');
        }
    }
};