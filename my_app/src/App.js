import "./App.css"
import React from "react"
// import {Hello} from "./App"
import Banner from "./k";
import RC from "./Components/JSXRules"
import ListRendering from "./Components/ListRendering";
import Props from "./Props&Styling/Props/Props";

// import React from 'react'

// const App = () => {
//   const details={
//     name:"vamsi",
//     age:26,
//     loc:"hyd"
//   }
//   return (
//     <div>App
//       <Props n={details.name} a={details.age} l={details.loc}/>
//     </div>
//   )
// }

// export default App



const App = () => {
  const data=[{
    name:"vamsi",
    age:26,
    loc:"hyd"
  },{
    name:"rakesh",
    age:30,
    loc:"hyd"
  }, {
    name:"pavan",
    age:24,
    loc:"Ap"
  }]

  const obj={
   bgColor:"green",
   textColor:"red"
  }
 
  return (
    <div style={{backgroundColor:obj.bgColor}}>
      App

    {data.map((item)=>{
      console.log(item)
      return(
       <div id="propCard">
        <Props n={item.name} a={item.age} loc={item.loc} />
       </div>
      )
    })}

     {/* <Props name={data[0].name} age={data[0].age} location={data[0].loc}/> */}


     {/* <Props name={data[1].name} age={data[1].age} location={data[1].loc}/>


     <Props name={data[2].name} age={data[2].age} location={data[2].loc}/> */}
    </div>
  )
}

export default App

// function App(){
//   const name="vamsi";
//   const age=26;
//   const loc="hyd"
//   return(
//     <div>
// <Props n={name} a={age} k={loc}/>
//     </div>










//   //  <React.Fragment id="vamsi">

//   //   {/* <ListRendering /> */}

//   //   {/* <RC></RC> */}
//   //    {/* <div id="navbar">
//   //    <img src="https://images.cnbctv18.com/uploads/2024/07/abhishek-sharma-t20-2024-07-0f1c8d2525bddd6f9f146dab749adc44.jpg" alt="sharmaIMage" width="100" height="70"/>
//   //    <div className="navBarCenter">
//   //     <span>Home</span>
//   //     <span>About</span>
//   //     <span>Contact</span>
//   //     <span>Services</span>
//   //    </div>
//   //   <div id="navBarRight">
//   //   <button>Login</button>
//   //   <button>Signup</button>
//   //   </div>
//   //   </div> */}
//   //   {/* <Banner></Banner> */}
//   //  </React.Fragment>
//   )
// }
// export default App;







// export default Hello;