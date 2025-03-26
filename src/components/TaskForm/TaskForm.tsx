import React, { useState } from 'react';
import styles from './TaskForm.module.css';

interface TaskFormProps {
    initialTitle?: string;
    initialDescription?: string;
    initialCompleted?: boolean;
    onSubmit: (task: { title: string; description?: string; completed: boolean }) => void;
    onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
    initialTitle = '',
    initialDescription = '',
    initialCompleted = false,
    onSubmit,
    onCancel,
}) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [completed, setCompleted] = useState(initialCompleted);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            title,
            description: description.trim() || undefined,
            completed,
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>{initialTitle ? 'Edit Task' : 'Create Task'}</h1>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Title"
                    className={styles.inputField}
                    maxLength={15}
                    required
                />
                <p className={styles.charCounter}>{title.length}/15</p>
            </div>
            <div className={styles.inputGroup}>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description (optional)"
                    className={styles.inputField}
                    maxLength={100}
                />
                <p className={styles.charCounter}>{description.length}/100</p>
            </div>
            <div className={styles.checkboxContainer}>
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    Completed
                </label>
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={`${styles.button} ${styles.save}`}>
                    Save
                </button>
                <button type="button" onClick={onCancel} className={`${styles.button} ${styles.cancel}`}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default TaskForm;