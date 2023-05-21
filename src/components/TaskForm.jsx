import { useCreateTaskMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;
    createTask({ name, description, completed });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">Task</label>
          <input className="form-control" type="text" name="name" htmlFor="name" />
          <label className="form-label" htmlFor="description">Description</label>
          <input className="form-control" type="text" name="description" htmlFor="description" />
          <div className="form-check my-2">
            <input className="form-check-input" type="checkbox" name="completed" htmlFor="complete" />
            <label className="form-check-label mx-1" htmlFor="complete">Complete</label>
          </div>
          <button className="btn btn-outline-primary" type="submit">Add Task</button>
        </div>
        <div className="col-md-3"></div>
      </div>


    </form>
  );
};

export default TaskForm;
