import React, { useEffect, useState } from "react";
import a from "axios";
const App2 = () => {
  const [width, setWidth] = useState("200px");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    a.get("https://fakestoreapi.com/products")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
     let color="#"
    // document.body.style.backgroundColor="";
    let xyz="abcdef0123456789";
   
    for(let i=0;i<6;i++){
        let value=Math.floor(Math.random() * xyz.length);
        console.log(value)
        color += xyz[value]

    }
    setBgColor(color)
    console.log(bgColor)
    return()=>{
        console.log("unmounting")
      }
  }, [width]);
//   console.log(color)
  // function stateChangeWithBgColorWidth(w,c){
  //     setBgColor(c)
  //     setWidth(w)
  // }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1 style={{ width: width, backgroundColor: "yellow" }}>
        hello there this class is about mounting, updating, unmounting
      </h1>
      <button
        onClick={() => {
          setWidth("350px");
        }}
      >
        350px
      </button>


      <button
        onClick={() => {
          setWidth("450px");
        }}
      >
        450px
      </button>


      <button
        onClick={() => {
          setWidth("550px");
        }}
      >
        550px
      </button>

      <button
        onClick={() => {
          setWidth("650px");
        }}
      >
        650px
      </button>
      {/* <button onClick={()=>stateChangeWithBgColorWidth("450px","blue")}>450px</button> */}
      {/* <button onClick={()=>setWidth("550px")}>550px</button> */}
    </div>
  );
};

export default App2;
