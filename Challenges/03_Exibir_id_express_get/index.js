// Imprima Hello world com node e js
// Usando a lib express e metodo GET

// Com base no código a seguir: app.get('/api/pessoa/:id', (req, res) => {
// Exiba o id no lugar de hello world

// Necessário iniciar um novo projeto Node.js (nom init)
// NEcessário inserir a linha "type": "module" no arquivo package.json


import express from "express"

const app = express()
const port = 3000

app.get('/api/pessoa/:id', (req, res) => {
    const id = req.params.id

    res.json({ message: `O ID informado foi ${id}` })
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

