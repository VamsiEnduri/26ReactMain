// props are nothing but which carry the data from one comp to another comp
// r props can pass the data from one comp to naother comp

// import React from 'react'

// const Props = (props) => {
//     console.log(props)

//   return (
//     <div>Props
//         hello my name {props.n} and im
//         {props.a} old and im from {props.k}
//     </div>
//   )
// }

// export default Props


import React from 'react'
import "./Props.css"

const Props = (info) => {
    console.log(info)
   
  return (
    <div id='propCard'>
      Props
<span style={{backgroundColor:"red",fontSize:50}}>{info.n}</span>
<br/>
{info.a}
<br/>
{info.loc}
    </div>
  )
}

export default Props


// import React from 'react'

// const Props = (NTR) => {
//     console.log(NTR)

//   return (
//     <div>
//         child comp

//         {NTR.n}
//         {NTR.a}
//         {NTR.l}
        
//     </div>
//   )
// }

// export default Props
