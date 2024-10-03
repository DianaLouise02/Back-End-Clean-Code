require('dotenv').config(); // Arquivo => .env
const express = require('express');

const app = express(); // Iniciando o servidor

app.use(express.json()); // Resposta via JSON
// process.env ? PORT : 3000

sequelize.authenticate()
    .then(() => {
        ;
        console.log("Conexão com o banco de dados deu certo")
    })
    .catch(err => {
        console.error("Erro ao conectar no banco: ", err)
    });

const PORT = process.env.PORT || 3000;
// Listen -> Ouvir
//Ouvindo na possível ou na porta 3000
app.listen(PORT, () => {
    console.log('--------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('--------------------------');
});