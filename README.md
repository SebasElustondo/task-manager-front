# Task Manager Frontend

This is the frontend application for the **Task Manager** project, built with React. It allows users to create, edit, delete, and manage tasks efficiently. The application is styled for responsiveness and includes features like a floating action button, error handling, and a modern UI.

## Features

- **Task Management**: Create, edit, and delete tasks.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Floating Action Button**: Quick access to create new tasks.
- **Error Handling**: Displays error messages and retry options for failed API calls.
- **Loading Spinner**: Modern spinner for better user experience during data fetching.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Router**: For navigation and routing.
- **Font Awesome**: For icons.
- **CSS Modules**: For scoped and maintainable styles.
- **TypeScript**: For type safety and better developer experience.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```
   git clone https://github.com/SebasElustondo/task-manager-frontend.git
   ```

2. Navigate to the project directory:
    ```
    cd task-manager-frontend
    ```

3. install dependencies:
    ```
    npm install
    ```

4. Create a .env file in the root directory and configure the following variables:
   ```
    REACT_APP_API_URL=http://localhost:3000/tasks
   ```

## Usage

To start the development server, run:
   ```
   npm start
   ```

## Folder Structure
```
src/
├── components/         # Reusable components (Header, Footer, etc.)
├── pages/              # Page components (TaskListPage, EditTaskPage, etc.)
├── services/           # API service functions
├── types/              # TypeScript type definitions
├── utils/              # Shared components
├── App.tsx             # Main app component
├── App.css             # Global styles
└── index.tsx           # Entry point
```

## API Integration

This project interacts with a backend API for task management. Ensure the backend is running and accessible at the configured API URL.

Example API Endpoints
* Get all tasks: GET /tasks
* Get task by id: GET /tasks/:id
* Create a task: POST /tasks
* Edit a task: PUT /tasks/:id
* Delete a task: DELETE /tasks/:id

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
* React
* Font Awesome
* Create React App