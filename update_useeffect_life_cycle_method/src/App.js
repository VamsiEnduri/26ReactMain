import React from "react";
class App extends React.Component{
    constructor(){
      super()
      this.state={
        count:0,
        number:[]
      }
    }

    componentDidMount(){
      fetch("https://dummyjson.com/users").then(res=>res.json()).then(res=>console.log(res)).catch(err=>{
        console.log(err)
      })
    }

    
    componentDidUpdate(){
      console.log("btn clicked")
      document.title=`${this.state.count} times`

      // fetch("https://dummyjson.com/users").then(res=>res.json()).then(res=>{console.log(res)
      //   this.setState({number:this.state.number.push(res)})
      // }).catch(err=>{
      //   console.log(err)
      // })
    }
  render(){
    return(
      <div>
        <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
        {this.state.count}
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>

        <br/>
        hello theree  
        <p>helllllllllllllllllllll0oooooooooooooooooooo</p>
        <button>gggagag008765434567890-</button>
      </div>
    )
  
  }
}
export default App;