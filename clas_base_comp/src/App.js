// import React from "react"
// import Child from "./Child"
// class App extends React.Component{
  
// render(){
//   console.log(React)

//   const data=[{id:1,p_Name:"laptop",cost:55000},{id:2,p_Name:"laptop2",cost:65000}]

//   return(
//     <div>
//       <h1>hello vamsi</h1>
//       <p>this is p tag</p>

//       {data.map(item=>{
//         return(
//           <Child p_n={item.p_Name} cost={item.cost}/>
//         )
//       })}
//     </div>
//   )
// }
// }
// export default App;


// // function App(){
// //   return(
// //     <div>
// //       dfghjk
// //     </div>
// //   )
// // }
// // export default App;
















// import React from "react"
// class App extends React.Component{

//   constructor(){
//     super()
//     this.state={
//       count:10
//      }
//   }

//   decrement=()=>{
//        this.setState({
//         count:this.state.count-1
//        })
//   }

//   increment=()=>{
//     this.setState({
//      count:this.state.count+1
//     })
// }

//   render(){
//     return(
//       <div style={{textAlign:"center"}}>
//         <button onClick={this.decrement}>-</button>
//         {this.state.count}
//         <button onClick={this.increment}>+</button>
//       </div>
//     )
//   }
// }
// export default App




import React from "react";
class App extends React.Component{
  constructor(){
    super()
    this.state={
      loginShow:false
    }
    this.state={
      color:"green"
    }
  }
  render(){
    return(
      <div style={{backgroundColor:this.state.color}}>
        
        <button onClick={()=>this.setState({loginShow:!this.state.loginShow})}>Login</button>
        {this.state.loginShow &&  <div>
          <input />
          <input />
          <input />
          <input />
        </div>}

        <button onClick={()=>this.setState({color:this.state.color="red"})}>red</button>
        <button onClick={()=>this.setState({color:this.state.color="purple"})}>purple</button>
        <button>yellow</button>
      </div>
    )
  }
}
export default App;