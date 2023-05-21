import React, { useEffect, useState } from 'react'
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../api/apiSlice";

const dona = {
  labels: ['Completed Task', 'Pending Task'],
  datasets: [
    {
      label: 'Tasks',
      data: [1, 1],
      backgroundColor: [
        'rgba(0, 128, 0, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      hoverOffset: 4,
    },
  ],
}


import Dona from "./Doughnut";

const TasksList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();


  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;
  //console.log(tasks);


  let completed = tasks.filter(t => t.completed).length
  let d = JSON.parse(JSON.stringify(dona))
  d.datasets[0].data = [completed, tasks.length - completed]

  let percentCompleted = (completed * 100) / tasks.length
  d.labels = [`Completed Task ${percentCompleted.toFixed(2)}%`, `Pending Task ${100 - percentCompleted.toFixed(2)}%`]

  return (

    <div className="row mt-5">
      <hr />
      <div className="col-md-6">



        {tasks.map((task) => (
          <div className='card my-1' key={task.id}>
            <div className="card-body">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <div className='d-flex justify-content-between'>
                <div>

                  <input
                    className='form-check-input mx-2'
                    type="checkbox"
                    id={task.id}
                    checked={task.completed}
                    onChange={(e) => {
                      updateTask({ ...task, completed: e.target.checked });
                    }}
                  />
                  <label className="form-check-label" >Completed</label>
                </div>

                <i className="bi bi-trash3 mx-5 text-danger" style={{ cursor: 'pointer' }} onClick={() => deleteTask(task.id)}></i>

              </div>
            </div>
          </div>
        ))}

      </div>
      <div className="col-md-6">

        <div className="card">

          <div className="card-body d-flex justify-content-around">
            <div>
              <h5 className="card-title">Tasks</h5>
              {
                tasks && tasks.map(t => (
                  <h6 key={t.description} className={t.completed ? 'text-success' : 'text-primary'}>{t.name}</h6>
                ))
              }
            </div>
            <Dona tasks={d}/>
          </div>

        </div>


      </div>
    </div>
  );
};

export default TasksList;
