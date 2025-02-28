import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const nav=useNavigate()
    const [loginDetails,setLoginDetails]=useState({email:"",password:""})

    const handleDetailsLogin=(e)=>{
      setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
    }

    const handleSubmitLogin=(e)=>{
        e.preventDefault()
      const allUsersFromLS=  JSON.parse(localStorage.getItem("allUsers"))
      const loginFormData=loginDetails;

    const userFound=  allUsersFromLS.find(x=>x.email === loginFormData.email && x.password === loginFormData.password)


    if(userFound){
        alert("login successfully done!!!")
        localStorage.setItem("loggedInUser",JSON.stringify(userFound))
        nav("/dashboard")
    }else{
        alert("invalid credentials")
    }
      console.log(loginFormData,"all login data")
      console.log(allUsersFromLS,"alluserfromls")



    }

  return (
    <div>Login


<form onSubmit={handleSubmitLogin}>
        
        <input
          type="email"
          placeholder="email here"
          name="email"
          onChange={handleDetailsLogin}
        //   value={loginDetails.email}
        />
        <input
          type="password"
          placeholder="password here"
          name="password"
          onChange={handleDetailsLogin}
        //   value={loginDetails.password}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login