import React from 'react';
import './index.scss';
import Modal from 'react-modal';

const DeleteModal = ({ isOpen, onRequestClose, handleDelete, title, description }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="delete-modal">
      <h2>Deseja excluir esse item?</h2>
      <div className='task-details'>
          <span>{title}</span>
          <span className='description'>{description}</span>        
      </div>
      <div className='buttons'>
        <button className='nao' onClick={onRequestClose}>Não</button>
        <button className='sim' onClick={() => handleDelete()}>Sim</button>
      </div>
    </Modal>
  );
};

export default DeleteModal;