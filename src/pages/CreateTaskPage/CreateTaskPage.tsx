import React from 'react';
import { createTask  } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from './CreateTaskPage.module.css';
import TaskForm from '../../components/TaskForm/TaskForm';

const CreateTaskPage: React.FC = () => {
    const navigate = useNavigate();

    const handleCreate = (newTask: { title: string; description?: string; completed: boolean }) => {
        const taskToCreate = {
            ...newTask,
            description: newTask.description || '',
        };
    
        createTask(taskToCreate);
        navigate('/tasks');
    };

    return (
        <TaskForm
            onSubmit={handleCreate}
            onCancel={() => navigate('/tasks')}
        />
    );
};

export default CreateTaskPage;