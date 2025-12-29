import { useEffect, useState } from "react"
import axios from 'axios'
import { ModalMovie } from "../modals/modalMovie/modalMovie"
import './main.css'
import { ModalCadastro } from "../modals/modalCadastro/modalCadastro"

export const Main = () => {

    const [filmes, setFilmes] = useState([])//filmes → variável que guarda o array vindo do backend
    //setFilmes → função que atualiza essa variável
    //[] → valor inicial (array vazio)

    const [open, setOpen] = useState(false)// controla se o modal está aberto

    const [filmeSelecionado, setfilmeSelecionado] = useState(null)// guarda o filme clicado

    const [openCadastro, setOpenCadastro] = useState(false)

    const openModal = (filme) => {// função que abre o modal - 'filme' é o filme clicado
        setfilmeSelecionado(filme)// atualiza o filme selecionado que será o filme clicado
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    const abrirCadastro = () => {
        setOpenCadastro(true)
    }

    const fecharCadastro = () => {
        setOpenCadastro(false)
    }

    useEffect(() => {
        axios.get("http://localhost:8081")
            .then((res) => {
                setFilmes(res.data)
            })
    })
    return (
        <main className="content-main-cards">
            <h1>Nossos filmes</h1>
            <div className="container-cards">
                {filmes.map((filme, index) => (//expressão JS dentro do JSX para usar a variável filmes que vem do backend
                    //map → para cada filme dentro do array filmes, faça o seguinte:
                    <div key={index}
                        className="card"
                        onClick={() => openModal(filme)}>
                        <h2>{filme.nome}</h2>
                        <img src={filme.image} alt={filme.nome} />
                        <button className="btn-primary">Saiba mais</button>
                    </div>
                ))}
            </div>

            <div className="btn-signup-container">
                <button className="btn-primary" onClick={abrirCadastro}>
                    Cadastrar filme
                </button>
            </div>

            <ModalMovie
                open={open}
                close={closeModal}
                filme={filmeSelecionado} />
            <ModalCadastro
                open={openCadastro}
                close={fecharCadastro} />
        </main>

    )
}