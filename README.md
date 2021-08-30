# NovelAPI
Desafio Back-end Node.JS MongoDB
Projeto API REst com Node.js e MongoDB

Objetivo: Criar API para intermediar funções de Banco de dados entre Front end  e Back end.

Banco de Dados utilizado:  MongoDB, hospedado na nuvem em https://cloud.mongodb.com/
String de conexão: mongodb+srv://novelapp:NovelApi@novelapi.bu5hi.mongodb.net/NovelApi?retryWrites=true&w=majority
•	Tabela: tb_Pessoas
id: identificador único
nome: string
email: string
endereco: string
cidade: string
telefone: string
data_criacao: date
status: boolean

•	Métodos:
o	ListarID: Parâmetro ID
o	ListarCidade: Parâmetro cidade
o	ListarEmail: Parâmetro telefone
o	Incluir: Inclui campos da tabela
o	Editar: Parâmetro ID | Edita dados da pessoa
o	Excluir: Parâmetro ID |Exclui registro da tabela
•	Criptografia: Utilizado algoritmo “aes256” com chave “Novel-API”
•	Testes realizados pelo aplicativo Insomnia
