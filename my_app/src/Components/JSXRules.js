// function JSXRules(){
//     return (
//         <div>
//             jsx rules
//         </div>
//     )
// }
// export default JSXRules

import "./JSXRules.css"

const JSXRules=()=>{
    let name="vamsi"
    let details={
        name:"vamsi",
        age:26,
iMarried:false,
state:"Andra"
    }
    let arrayData=["vamsi","ravi","rahul","sai"]
    return(
      <div>

 {arrayData.map((x)=>{
    console.log(x)
    return(
        <div>
            {x}
        </div>
    )
 })}


        {/* {arrayData.forEach((x)=>{
            console.log(x)
           
                const name=x;
                {name}
            
        })} */}
        {/* <br/>
        hello {arrayData[0]}
        <br/>

        hello {arrayData[1]}
        <br/>

        hello {arrayData[2]}
        <br/>

        hello {arrayData[3]}
        <br/> */}

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       helo there my name is {details.name}and im {details.age} old and im from {details.state} and my marital sttaus is {details.iMarried}
        <h1 className="vamsi">hello there this about hsx rules and by {name}</h1>
        <p>{name}</p>
        <p>hello this p tag in jsx</p>
        <img src="https://images.cnbctv18.com/uploads/2024/07/abhishek-sharma-t20-2024-07-0f1c8d2525bddd6f9f146dab749adc44.jpg" alt=""/>
      </div>
    )
}
export default JSXRules;