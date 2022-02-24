import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import TasksPage from './features/tasks/TasksPage';
import AuthorPage from './features/author/AuthorPage';
import Navigation from './Navigation';
import TaskPage from './features/tasks/TaskPage';
import { toTask, toTasks, toAuthor } from './routes';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toTask()} element={<TaskPage />} />
        <Route path={toTasks()} element={<TasksPage />} />
        <Route path={toAuthor()} element={<AuthorPage />} />
        <Route path="*" element={<TasksPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
