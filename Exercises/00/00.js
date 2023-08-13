// realize somente os 5 primeiros exercícios da lista, utilizando o
// query params para passar as informações para o exercício.

// 0. Faça um programa (FUP) que escreva na tela "Hello World!"


import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1>')

})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})


