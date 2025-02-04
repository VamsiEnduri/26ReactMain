import "./App.css"
import React from "react"
// import {Hello} from "./App"
import Banner from "./k";
import RC from "./Components/JSXRules"
import ListRendering from "./Components/ListRendering";

function App(){
  return(
   <React.Fragment id="vamsi">
    <ListRendering />

    {/* <RC></RC> */}
     {/* <div id="navbar">
     <img src="https://images.cnbctv18.com/uploads/2024/07/abhishek-sharma-t20-2024-07-0f1c8d2525bddd6f9f146dab749adc44.jpg" alt="sharmaIMage" width="100" height="70"/>
     <div className="navBarCenter">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
      <span>Services</span>
     </div>
    <div id="navBarRight">
    <button>Login</button>
    <button>Signup</button>
    </div>
    </div> */}
    {/* <Banner></Banner> */}
   </React.Fragment>
  )
}
export default App;







// export default Hello;