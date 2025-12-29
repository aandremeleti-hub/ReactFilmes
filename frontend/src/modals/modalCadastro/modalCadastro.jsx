import './modalCadastro.css'

export const ModalCadastro = ({
    open,
    close,
    nome,
    setNome,
    image,
    setImage,
    descricao,
    setDescricao
}) => {

    if (!open) return null

    return (
        <div className="modal-overlay" onClick={close}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={close}>X</button>
                <h2>Cadastrar filme</h2>
                <form className='modal-form'>
                    <input
                        className='input-modal-form'
                        type="text"
                        placeholder='Nome do filme'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        className='input-modal-form'
                        type="text"
                        placeholder='URL da imagem'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <textarea
                        className='textarea-modal-form'
                        placeholder='Descrição'
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}>
                    </textarea>
                    <button className='btn-primary'>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}
