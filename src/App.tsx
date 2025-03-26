import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage/TaskListPage';
import EditTaskPage from './pages/EditTaskPage/EditTaskPage';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/tasks" />} />
                    <Route path="/tasks" element={<TaskListPage />} />
                    <Route path="/tasks/edit/:id" element={<EditTaskPage />} />
                    <Route path="/tasks/create" element={<CreateTaskPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;