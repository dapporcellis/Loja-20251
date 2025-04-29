import conexao from '../config/conexao.js';

const ProdutoSchema = new conexao.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: true },
    imagem: [{ type: String, default: 'semfoto.png' }],
    data_cadastro: { type: Date, default: Date.now }
})

export default conexao.model('Produto', ProdutoSchema);