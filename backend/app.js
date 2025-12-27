const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const port = 8081

let filmes = [{
    nome: "Matrix",
    image: "https://m.media-amazon.com/images/M/MV5BZGM1NDM3MTAtMmI0ZC00ZDAwLWEwY2EtNDdhYjZmMjJkNzM0XkEyXkFqcGc@._V1_.jpg",
    descricao: "Filme de ficção científica onde a realidade é uma simulação controlada por máquinas."
},
{
    nome: "Busca Implacável",
    image: "https://br.web.img3.acsta.net/medias/nmedia/18/90/59/41/20103765.jpg",
    descricao: "Busca Implacável (2008) acompanha Bryan Mills (Liam Neeson), um ex-agente da CIA que utiliza suas habilidades letais para resgatar sua filha, Kim, sequestrada por traficantes em Paris. Após a adolescente desobedecer e viajar, Mills rastreia os criminosos em uma corrida contra o tempo antes que ela seja vendida. "
},
{
    nome: "Stillwater",
    image: "https://play-lh.googleusercontent.com/4s-L02TtsR3kQ8TqEQAx_5zP21l1-2XSHMwNeT1Jd84pVdpsEAOiC1ufCajf7F__wgq_LdL0s32vysZ0Xw",
    descricao: "Stillwater: Em Busca da Verdade é um drama policial que segue a jornada de Bill Baker (Matt Damon), um trabalhador de plataforma petrolífera do Oklahoma, que viaja para Marselha, na França, para tentar provar a inocência de sua filha, Allison (Abigail Breslin), presa por um assassinato do qual ela afirma não ter cometido."
},
{
    nome: "Didi Quer Ser Criança",
    image: "https://m.media-amazon.com/images/M/MV5BZTE4NDc1NjgtYTFjZC00YjFlLWE5OWQtOTBkYmY5Mjk5ZDdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    descricao: "Didi Quer Ser Criança (2004) acompanha Didi (Renato Aragão), funcionário de uma fábrica de doces tradicional em crise, que deseja voltar a ser criança para entender o gosto infantil e salvar o negócio. Após consumir balas mágicas, ele troca de idade com seu amigo Felipinho, virando criança enquanto Felipinho assume a vida adulta. "
}
]

app.get("/", (req, res) => {
    res.json(filmes)
})

app.post("/cadastrar", (req, res) => {
    const novoFilme = req.body
    filmes.push(novoFilme)
    res.json("Filme cadastrado com sucesso")
})

app.put("/alterar/:id", (req, res) => {
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