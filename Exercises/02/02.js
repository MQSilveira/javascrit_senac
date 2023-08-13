// realize somente os 5 primeiros exercícios da lista, utilizando o
// query params para passar as informações para o exercício.

// 2. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.;


import express from "express"

const app = express()
const port = 3000

app.get('/api/hora_trabalhada', (req, res) => {
    const valorHora = req.query.valorHora
    const qtdHoras = req.query.qtdHoras

    if ( !parseFloat(valorHora) || !parseFloat(qtdHoras) ) {
        res.end('Informe todos os parametros')
    
    } else {
        const resultado = parseFloat(valorHora) * parseFloat(qtdHoras)
        res.end(`O trabalhador deverá receber ao final do mês R$${resultado.toFixed(2)}`)
    }
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
    
})



