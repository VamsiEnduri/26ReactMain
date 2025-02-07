// import React from "react";

// const DashBoard = (userInfo) => {
//   console.log(userInfo)
//   return <div>DashBoard

//   {/* {userInfo.user && <div>
//     {userInfo.data.id}
//     {userInfo.data.name}
    
//     {userInfo.data.age}
//     </div>} */}
//     {/* {data.data.name} */}
//   </div>;
// };

// export default DashBoard;




import React from 'react'
import Login from "../Login/Login"
import Card from '../Card/Card'
const DashBoard = ({userName}) => {
console.log(userName)
let Data;
// let 
switch(userName){
 
  case "vamsi":
    Data={id:1,name:"vamsi",age:26};
    break;
    case "ravi":
      Data={id:2,name:"Ravi",age:26};
      break;
    default:
     
      if( window.confirm("no user found going to login is it ok?")){
        console.log("no user found so displaying login")
        return  <Login/>
      }else{
      return <Card />
      }
     
      
}
  return (
    <div>
      welcome {userName}
      <h1>{Data.id}</h1>
      <h1>{Data.name}</h1>

    </div>
  )
}

export default DashBoard