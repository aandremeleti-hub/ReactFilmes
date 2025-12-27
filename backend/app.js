const express = require ('express')
const cors = require('cors')
const app = express ()

app.use(express.json())
app.use(cors())

const port = 8081

let filmes = [{
nome:"Matrix",
    image: "https://m.media-amazon.com/images/M/MV5BZGM1NDM3MTAtMmI0ZC00ZDAwLWEwY2EtNDdhYjZmMjJkNzM0XkEyXkFqcGc@._V1_.jpg",
    descricao: "Filme de ficção científica onde a realidade é uma simulação controlada por máquinas."
}]

app.get("/", (req, res) => {
    res.json(filmes)
})

app.post("/cadastrar", (req, res) => {
    const novoFilme = req.body
    filmes.push(novoFilme)
    res.json("Filme cadastrado com sucesso")
})

app.put("/alterar/:id", (req,res) => {
    const id = req.params.id
    filmes[id] = req.body
    res.json("Filme alterado com sucesso")
})

app.delete("/deletar/:id", (req, res) => {
    const id = req.params.id
    filmes.splice(id, 1)
    res.json("Filme deletado com sucesso")
})
    
app.listen(port, () => {
    console.log(`Servidor rodanho em http://localhost:${port}`)
})