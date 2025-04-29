import conexao from '../config/conexao.js';

const UsuarioSchema = new conexao.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    foto: { type: String, default: 'semfoto.png' },
    admin: { type: Boolean, default: false },
    data_cadastro: { type: Date, default: Date.now }
})

export default conexao.model('Usuario', UsuarioSchema);