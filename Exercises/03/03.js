// realize somente os 5 primeiros exercícios da lista, utilizando o
// query params para passar as informações para o exercício.

// 3. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;


import express from "express"

const app = express()
const port = 3000

app.get('/api/media', (req, res) => {
    const p1 = req.query.p1
    const p2 = req.query.p2
    const p3 = req.query.p3
    const p4 = req.query.p4
    const p5 = req.query.p5

    const formHtml = `
        <form method="GET">
            <p>
            <input type="text" placeholder="Insira o 1º valor" name="p1" /><br>
            <input type="text" placeholder="Insira o 2º valor" name="p2" /><br>
            <input type="text" placeholder="Insira o 3º valor" name="p3" /><br>
            <input type="text" placeholder="Insira o 4º valor" name="p4" /><br>
            <input type="text" placeholder="Insira o 5º valor" name="p5" /><br>
            </p>
            <input type="submit" value="Calcular Média" />
        </form>`


    if ( !parseFloat(p1) || !parseFloat(p2) || !parseFloat(p3) || !parseFloat(p4) || !parseFloat(p5) ) {
        res.send('Informe todos os parametros\n\n' + formHtml)
    
    } else {
        const resultado = (parseFloat(p1) + parseFloat(p2) + parseFloat(p3) + parseFloat(p4) + parseFloat(p5)) / 5
        res.send(`Média calculada: ${resultado.toFixed(2)} \n\n` + formHtml)
    }
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
    
})

