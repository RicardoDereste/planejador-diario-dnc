import React, { useState } from 'react';
import './index.scss';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddModal = ({ isOpen, onRequestClose, handleAddItem }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSave = () => {
        if (newTitle.trim() === '') {
            alert('Por favor, insira um título válido.');
            return;
        }

        const newItem = {
            title: newTitle,
            description: newDescription,
            completed: false,
        };

        handleAddItem(newItem);

        setNewTitle('');
        setNewDescription('');
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="addModal"
        >
            <h2>Adicionar Nova Tarefa</h2>
            <div className="inputs">
                <input
                    type="text"
                    placeholder="Título"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    placeholder="Descrição"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <div className="buttons">
                    <button className="salvar" onClick={handleSave}>
                        Salvar
                    </button>
                    <button className="cancelar" onClick={onRequestClose}>
                        Cancelar
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default AddModal;