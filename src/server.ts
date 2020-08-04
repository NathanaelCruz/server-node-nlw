import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {nome: "Nathanael", age: 26},
        {nome: "Samara", age: 20}
    ]
    return response.json(users)
})

app.listen(3330);

