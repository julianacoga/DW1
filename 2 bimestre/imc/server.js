const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir qualquer origem
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' permite qualquer origem
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//se vier uma requisição POST para a rota /enviar-mensagem, o servidor irá processar a mensagem recebida, convertê-la para maiúsculas e enviar uma resposta de volta ao cliente.
app.post('/enviar-mensagem', (req, res) => {

    // usar "destructuring" do JavaScript (mais elegante):
    //modo tradicional: capturar os dados do corpo da requisição (req.body) e armazená-los em variáveis separadas para uso posterior.
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let peso = parseFloat(req.body.peso);
    let altura = parseFloat(req.body.altura);

    console.log(`Os dados recebidos foram: (${cpf}, ${nome}, ${peso}, ${altura})`);

    let imc = peso / (altura * altura);
    let classificacao;
    if (imc < 18.5) {
        classificacao = `Abaixo do peso`;
    } else if (imc < 25) {
        classificacao = `Peso normal`;
    } else if (imc < 30) {
        classificacao = `Sobrepeso`;
    } else if (imc < 35) {
        classificacao = `Obesidade 1`;
    } else if (imc < 40) {
        classificacao = `Obesidade 2`;
    } else {
        classificacao = `Obesidade 3`;
    }

    //  Enviar um objeto (pacotinho) de volta para o cliente, contendo a mensagem e o resultado do cálculo.
    
    res.json({        
        imc: imc.toFixed(2),
        classificacao: classificacao
    });
});

const obterIP = () => {
    const interfaces = os.networkInterfaces();
    for (let nomeInterface in interfaces) {
        for (let info of interfaces[nomeInterface]) {
            if (info.family === 'IPv4' && !info.internal) return info.address;
        }
    }
    return 'localhost';
};

const ip = obterIP()

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
})