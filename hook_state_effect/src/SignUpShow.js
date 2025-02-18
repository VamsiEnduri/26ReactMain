import React, { useState } from "react";
import { FaRegMoon ,FaSun} from "react-icons/fa";
import "./App.css";
const SignUpShow = () => {
  //   const show = true;
  //   const show =false;
  const [show, setShow] = useState(false);
  const [loginShow,setLoginShow]=useState(false)



  function handleSignUp() {
    setShow(!show);
  }


  const [theme,setTheme]=useState(false)

  const themeChanger=()=>{
    setTheme(!theme) 
  }

  const themes={
    bgColor: theme ? "black":"white",
    clr:theme? "white":"black"
  }
  return (
    <div style={{backgroundColor:themes.bgColor,height:"100vh",width:"100%",color:themes.clr}}>
      <div id="navbar">
        <h1>Hello</h1>
        <div id="nav-right">
          <button onClick={handleSignUp}>Signup</button>
          <button  onClick={()=>setLoginShow(!loginShow)}>Login</button>
        <p onClick={themeChanger}> {theme ? <FaSun /> :<FaRegMoon />}</p>
        </div>
      </div>
      <div>
        ahhhhhhhhhhhhhhhhhhhhhhhhsxxxxxxxxxxxxxxxxwwwwwwwwwwwwwwwyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyuiolllllllllllllllllkjhgfdsdfghjkjhgfdfghjk1234567890oiuygfdsdfghjkjhgfdfghjkjhgfdsdfghjkl;
      </div>

      {show && (
        <form>
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <input type="password" />
          <button>Signup</button>
        </form>
      )}

     {loginShow &&  <form>
        <input type="text" />
        <input type="email" />
        <input type="password" />
        <input type="password" />
        <button>Login</button>
      </form>}
    </div>
  );
};

export default SignUpShow;
