import React, { useState ,useEffect} from "react";

const SignUp = () => {
  const [signupDetails, setDSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [allUsers,setAllUsers]=useState([])

  console.log(signupDetails);
  const handleDetails = (e) => {
    setDSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("signUpUsers", JSON.stringify(signupDetails));
//     alert("signup successful done!!");
//     setDSignupDetails({ name: "", email: "", password: "" });
//     console.log(signupDetails,"console after vanishing in submit function")
//   };
  // name:"vamsi",
  // email:"vamsi@gmail.com",
  // password:vamsi@123


  useEffect (()=>{
    const storedUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    setAllUsers (storedUsers);
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
   const allSignUpusersData=[...allUsers,signupDetails]
   setAllUsers(allSignUpusersData)
   localStorage.setItem("allUsers",JSON.stringify(allSignUpusersData))
   setDSignupDetails({ name: "", email: "", password: "" });
    alert("signup successful done!!");
  };
  console.log(allUsers)
  return (
    <div>
      {/* <form>
            <input type='text' placeholder='name here' name='name' onChange={(e)=>setDSignupDetails(e.target.value)}/>
            <input type='email' placeholder='email here' name='email' onChange={(e)=>setDSignupDetails(e.target.value)}/>
            <input type='password' placeholder='password here' name='password'/>
            <button>SignUp</button>
        </form> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name here"
          name="name"
          onChange={handleDetails}
          value={signupDetails.name}
        />
        <input
          type="email"
          placeholder="email here"
          name="email"
          onChange={handleDetails}
          value={signupDetails.email}
        />
        <input
          type="password"
          placeholder="password here"
          name="password"
          onChange={handleDetails}
          value={signupDetails.password}
        />
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
