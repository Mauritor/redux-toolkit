import React from 'react'
import {useGetUsersQuery} from '../api/apiSlice'

const Users = () => {

  const { data: users, isLoading, isError, error } = useGetUsersQuery();
  //const [deleteTask] = useDeleteTaskMutation();
  //const [updateTask] = useUpdateTaskMutation();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  //console.log(users);
  
  return (
    <div>{users[0].name + ' - ' + users[0].lastName}</div>
  )
}

export default Users