import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TaskItem.module.css';
import { Task } from '../../types/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

interface TaskItemProps {
    task: Task;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
    return (
        <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
            <h3 className={styles.taskTitle}>{task.title}</h3>
            <p className={styles.taskDescription}>{task.description}</p>
            <div>
                <Link to={`/tasks/edit/${task.id}`}>
                    <button
                        className={`${styles.iconButton} ${styles.edit}`}
                        onClick={() => console.log('Edit clicked')}
                        aria-label="Edit Task"
                    >
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                </Link>
                <button
                    className={`${styles.iconButton} ${styles.delete}`}
                    onClick={() => onDelete(task.id)}
                    aria-label="Delete Task"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;