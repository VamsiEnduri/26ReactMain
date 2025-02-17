import React from "react"
class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0,
      data:[]

    }
   
   this.inc= this.inc.bind(this)
    this.dec=this.dec.bind(this)
  }

  inc(){
    this.setState({count:this.state.count+1})
  }

  dec(){
    this.setState({count:this.state.count-1})
  }


//  getData=async()=>{
//   let a=await fetch("https://dummyjson.com/users").then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))
//   console.log(a)
//  }
  // inc=()=>{
  //   this.setState({count:this.state.count+1})
  // }

  // dec=()=>{
  //   this.setState({count:this.state.count-1})
  // }
  render(){
    console.log(this.state.data,"data in state")
    return(
      <div>
        {this.state.data.map(x=>{
          return(
            <div>{x.age}
            <h1>{x.firstName}</h1>
            <h1>{x.lastName}</h1>
            </div>
          )
        })}
        <a href="">youtube</a>
        <h1>vamsiiiiiiiiiNtr</h1>
        <h1>hello there</h1>
        <br/>
        <span>hello im psna tag vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</span>
      <p>hi my name is vamsi gggggggggggggggggggggggggggggggggggggggggggggggggggvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvqqqqqqqqqqqqqqqqqqqqqqqqqqqqq  ggggggggggddddddddddddddd</p>
      <button onClick={()=>this.setState({count:this.state.count+1})}>-</button>
        {this.state.count}
        <button onClick={this.inc.bind(this)}>+</button>


        {/* <button onClick={this.getData}>GetData</button> */}
      </div>
    )
  }




  componentDidMount(){
    console.log("vamsi after rendering comp to ui")
   let c=async()=>{
      let a=await fetch("https://dummyjson.com/users").then(res=>res.json()).then(res=>{
        console.log(res)
        this.setState({data:res.users})

          // this.setState({data:this.state.data.push(res)})
      }).catch(err=>console.log(err))
      console.log(a)
     }
     console.log(c())
   }


}

export default App;