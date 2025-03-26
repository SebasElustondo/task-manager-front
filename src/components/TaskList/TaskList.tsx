import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';
import { Task } from '../../types/task';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onUpdate: (id: number, updatedTask: { title: string; description: string; completed: boolean }) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onUpdate }) => {
    return (
        <div className={styles.container}>
            {tasks.length === 0 ? (
                <p className={styles.emptyMessage}>No tasks available. Add a new task!</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;