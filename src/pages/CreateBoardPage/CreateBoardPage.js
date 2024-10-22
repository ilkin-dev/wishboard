import React from 'react';
import './CreateBoardPage.scss';
import BoardForm from '../../components/BoardForm/BoardForm';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api/axios';

const CreateBoardPage = () => {
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (boardData) => {
        try {
            console.log(boardData);
            const response = await apiClient.post('/wishboards/create', boardData);
            console.log('Wishboard created successfully:', response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Failed to create wishboard:', error);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="create-board-page">
            <div className="create-board-page__container">
                <h1 className="create-board-page__heading">Create a New Board</h1>
                <BoardForm onSubmit={handleSubmit} onBack={handleBack} />
            </div>
        </div>
    );
};

export default CreateBoardPage;
