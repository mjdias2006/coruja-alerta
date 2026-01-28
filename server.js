const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de Teste
app.get('/', (req, res) => {
    res.send('API Coruja Alerta Online 🦉');
});

// Rota de Contato (Simulação)
app.post('/api/contact', (req, res) => {
    const { nome, email, mensagem } = req.body;

    // AQUI VOCÊ INTEGRARIA COM UM SERVIÇO DE EMAIL REAL DEPOIS
    console.log(`Novo Lead da Coruja: ${nome} (${email}) diz: ${mensagem}`);

    res.status(200).json({ success: true, message: 'Mensagem recebida pela Coruja!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
