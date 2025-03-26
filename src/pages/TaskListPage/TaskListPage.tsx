import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from '../../components/TaskList/TaskList';
import { getTasks, deleteTask } from '../../services/api';
import styles from './TaskListPage.module.css';
import { Task } from '../../types/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../utils/Spinner';

const TaskListPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (err) {
                setError('Failed to fetch tasks. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleDelete = (id: number) => {
        deleteTask(id);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const handleUpdate = (id: number, updatedTask: { title: string; description: string; completed: boolean }) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
        );
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
        <div className={styles.container}>
            <h1 className={styles.title}>Task List</h1>
            <button
                className="floating-button"
                onClick={() => navigate('/tasks/create')}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    );
};

export default TaskListPage;