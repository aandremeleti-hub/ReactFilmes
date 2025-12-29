import './modalCadastro.css'

export const ModalCadastro = ({open, close}) => {
    if (!open) return null

    return(
        <div className="modal-overlay" onClick={close}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={close}>X</button>
                <h2>Cadastrar filme</h2>
                <p>Aqui vai o formulário de cadastro</p>
            </div>
        </div>
    )
}
