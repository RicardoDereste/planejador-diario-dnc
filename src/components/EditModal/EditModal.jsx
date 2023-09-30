import React from 'react'
import './index.scss'
import Modal from 'react-modal'

const EditModal = ({
    isOpen,
    onRequestClose,
    newTitle,
    newDescription,
    setNewTitle,
    setNewDescription,
    handleSaveEdit,
    handleCancelEdit,
}) => {

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
            <h2>Salvar Alterações?</h2>
            <div className='inputs'>
                <input
                    type="text"
                    placeholder="Novo título"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    placeholder="Nova descrição"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <div className='buttons'>
                    <button className='salvar' onClick={handleSaveEdit}>Salvar</button>
                    <button className='cancelar' onClick={handleCancelEdit}>Cancelar</button>
                </div>
            </div>
        </Modal>
    );
};

export default EditModal