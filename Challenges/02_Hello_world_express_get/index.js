// Imprima Hello world com node e js
// Usando a lib express e metodo GET

// Necessário iniciar um novo projeto Node.js (nom init)
// NEcessário inserir a linha "type": "module" no arquivo package.json


import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' })
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})




