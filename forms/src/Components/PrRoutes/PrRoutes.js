import React from 'react'
import { Navigate } from 'react-router-dom';
const PrRoutes = ({element}) => {
    // const allUsers=JSON.parse(localStorage.getItem("allUsers"));

    const loggedInUser=JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div>
       {loggedInUser ? element : <Navigate to="/login"/>}
    </div>
  )
}

export default PrRoutes