const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Formulário Recebido')
})

app.listen(8080, () => {
    console.log('Server')
})