// realize somente os 5 primeiros exercícios da lista, utilizando o
// query params para passar as informações para o exercício.

// 1. FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;


import express from "express"

const app = express()
const port = 3000

app.get('/api/soma', (req, res) => {
    const n1 = req.query.n1
    const n2 = req.query.n2

    if (!parseInt(n1)|| !parseInt(n2)) {
        res.end('Insira os dois valores para efetuar a soma')
        return
    }

    res.end(`${n1} + ${n2} = ${parseInt(n1) + parseInt(n2)}`)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
