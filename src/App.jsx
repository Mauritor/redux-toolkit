import React from 'react'
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Users from "./components/Users";
import ThemeColor from './components/ThemeColor'

const App = () => {

  return (
    <div className="container">
      <ThemeColor/>
      <Users />
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default App;
