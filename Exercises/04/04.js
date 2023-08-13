// realize somente os 5 primeiros exercícios da lista, utilizando o
// query params para passar as informações para o exercício.

// 4. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. 
//A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.


import express from "express"

const app = express()
const port = 3000

app.get('/api/converterCpF', (req, res) => {
    const cel = req.query.cel

    const formHtml = `
        <form method="GET">
            <p>
            Insira a temperatura em graus Celsius:  <input type="text" placeholder="°C" name="cel" />
            <input type="submit" value="Converter Fahrenheit " />
            </p>
        </form>`


    if ( !parseFloat(cel) ) {
        res.send(formHtml)
    
    } else {
        const resultado = (9 * cel + 160 ) / 5
        res.send(`Resultado: ${resultado.toFixed(1)} °F \n\n` + formHtml)
    }
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
    
})

