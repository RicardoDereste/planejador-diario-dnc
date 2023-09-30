import React, { useState } from 'react';
import './index.scss'
import editIcon from '../../assets/edit.svg'
import deleteIcon from '../../assets/delete.svg'
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import AddModal from '../AddModal/AddModal';

const List = () => {

  const db = [
    { "id": 1, "title": "Exercicios", "description": "Ir para academia fazer exercicios", "completed": true },
    { "id": 2, "title": "Limpar o carro", "description": "Limpar o carro inteiro, de dentro pra fora", "completed": false },
    { "id": 3, "title": "Banho e tosa", "description": "Levar o cachorro ao pet shop", "completed": false },
    { "id": 4, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto", "completed": true },
    { "id": 5, "title": "Trabalhar", "description": "Chegar ao escritorio antes das 20:00", "completed": true },
    { "id": 6, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00", "completed": false },
    { "id": 7, "title": "Almoçar", "description": "Preparar a comida para a janta", "completed": false },
    { "id": 8, "title": "Jogar volei", "description": "Ir a quadra para jogar volei com os amigos", "completed": true },
    { "id": 9, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar", "completed": false },
    { "id": 10, "title": "Shopping", "description": "Fazer algumas compras no shopping", "completed": true }
  ]

  const [items, setItems] = useState(db);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleCheckboxChange = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setNewTitle(item.title);
    setNewDescription(item.description);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (item) => {
    setDeletingItem(item);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingItem(null);
    setNewTitle('');
    setNewDescription('');
    setIsEditModalOpen(false);
  };

  const closeDeleteModal = () => {
    setDeletingItem(null);
    setIsDeleteModalOpen(false);
  };

  const handleSaveEdit = () => {
    if (!editingItem) return;

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItem.id
          ? { ...item, title: newTitle, description: newDescription }
          : item
      )
    );

    closeEditModal();
  };

  const handleDelete = () => {
    if (!deletingItem) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== deletingItem.id));
    closeDeleteModal();
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    closeAddModal();
  };

  return (
    <div className='list'>
      <div className="list__titles">
        <h3>Tarefa</h3>
        <h3>Status</h3>
        <h3>Opções</h3>
      </div>

      <div className='tarefas'>
        <div>
          {items.map((item) => (
            <div className='taskList' key={item.id}>
              <span>{item.title}</span>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(item.id)}
              />

              <div>
                <img src={editIcon} alt="Edit Icon" onClick={() => openEditModal(item)} />
                <img src={deleteIcon} alt="Delete Icon" onClick={() => openDeleteModal(item)} />
              </div>
            </div>
          ))}

          <div className='newTask'>
            <span className='newTaskButton' onClick={openAddModal}><em>Nova Tarefa...</em></span>
            <span className='plus' onClick={openAddModal}>+</span>
          </div>
        </div>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        newTitle={newTitle}
        newDescription={newDescription}
        setNewTitle={setNewTitle}
        setNewDescription={setNewDescription}
        handleSaveEdit={handleSaveEdit}
        handleCancelEdit={closeEditModal}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        handleDelete={handleDelete}
        title={deletingItem?.title || ''}
        description={deletingItem?.description || ''}
      />

      <AddModal
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
        handleAddItem={handleAddItem}
      />
    </div>
  );
};

export default List;