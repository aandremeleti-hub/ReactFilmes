export const ModalMovie = () => {

    if (!open) return null // se open for false, não renderiza nada (modal "não existe" na tela)

    return (
        <div className="modal-overlay" onClick={close}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation}//e é o evento de clique - stopPropagation impede que o clique no conteúdo feche o modal
            >                                  
                <button className="modal-close">x</button>
                <h2>{filme?.nome}</h2>
                <img src={filme?.image} alt={filme?.nome || "Filme"} />
                <p>{filme?.descricao}</p>
            </div>
        </div>
    )
}