// realize somente os 5 primeiros exercícios da lista, utilizando o
// query params para passar as informações para o exercício.

// 5. FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);


import express from "express"

const app = express()
const port = 3000

app.get('/api/converterMilpKm', (req, res) => {
    const milhas = req.query.milhas

    const formHtml = `
        <form method="GET">
            <p>
            Insira a distancia em Milhas:  <input type="text" name="milhas" />
            <input type="submit" value="Converter Km " />
            </p>
        </form>`


    if ( !parseFloat(milhas) ) {
        res.send(formHtml)
    
    } else {
        const resultado = milhas * 1.60934
        res.send(`Resultado: ${resultado.toFixed(1)}km \n\n` + formHtml)
    }
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
    
})

