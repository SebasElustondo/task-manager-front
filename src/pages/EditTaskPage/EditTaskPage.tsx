import React, { useState, useEffect } from 'react';
import { getTaskByID, updateTask } from '../../services/api'; 
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EditTaskPage.module.css';
import TaskForm from '../../components/TaskForm/TaskForm';
import { Task } from '../../types/task';
import Spinner from '../../utils/Spinner';

const EditTaskPage: React.FC = () => {
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const taskId = parseInt(id || '');

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await getTaskByID(taskId);
                if (data) {
                    setTask(data);
                } else {
                    setError('Task not found');
                }
            } catch (err) {
                setError('Failed to fetch task. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleSave = async (updatedTask: { title: string; description?: string; completed: boolean }) => {
        if (task) {
            try {
                const taskToUpdate = {
                    ...updatedTask,
                    description: updatedTask.description || '',
                };
    
                await updateTask(taskId, taskToUpdate);
                navigate('/tasks');
            } catch (err) {
                setError('Failed to save the task. Please try again.');
            }
        }
    };

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <p className={styles.error}>{error}</p>
                <button className={styles.retryButton} onClick={() => window.location.reload()}>
                    Retry
                </button>
            </div>
        );
    }

    return (
        <TaskForm
            initialTitle={task?.title}
            initialDescription={task?.description}
            initialCompleted={task?.completed}
            onSubmit={handleSave}
            onCancel={() => navigate('/tasks')}
        />
    );
};

export default EditTaskPage;