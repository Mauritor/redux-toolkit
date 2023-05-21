import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Users from "./components/Users";

const App = () => {

  
  return (
    <div className="container">
      <Users />
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default App;
