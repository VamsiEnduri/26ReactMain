// // // // import React from 'react'
// // // // import { useParams } from 'react-router-dom'

// // // // const SingleProduct = ({data}) => {
// // // //     console.log(useParams())
// // // //     const {urlId} =useParams()
// // // //     // console.log(id)
// // // //     console.log(data, "data from products to singleP")

// // // //    const itemFound=data.find(x=>x.id === parseInt(urlId));
// // // // //    console.log(itemFound,"itemFound")

// // // //   return (
// // // //     <div>
// // // //         singleP
// // // //        {/* <img src={itemFound.image} alt="" /> */}
// // // //     </div>
// // // //   )
// // // // }

// // // // export default SingleProduct












// // // import React from "react";
// // // import { Link, useParams ,Outlet} from "react-router-dom";

// // // const SingleProduct = ({ data }) => {
// // //   const { id } = useParams();
// // // //   const product = data.find((c) => c.id === parseInt(id));
// // // const itemFound=data.find((x)=>x.id === parseInt(id))

// // //   if (!itemFound) {
// // //     return <h2>Product Not Found</h2>;
// // //   }

// // //   return (
// // //     <div style={{ border: "2px solid black", padding: "10px", marginTop: "20px" }}>
// // //       <h2>Product Details</h2>
// // //       <img src={itemFound.image} alt={itemFound.name} width={150} />
// // //       <h3>{itemFound.name}</h3>
// // //       <p>Product ID: {itemFound.id}</p>
// // //       {/* <Link to={`/products/${itemFound.id}/ingredients`}>Ingredients</Link>
// // //       <Link to={`/products/${itemFound.id}/instructions`}>how to do it</Link> */}

// // //       {/* <Outlet context={product} /> */}
// // //     </div>
// // //   );
// // // };

// // // export default SingleProduct;

// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { Link, useParams,Outlet } from "react-router-dom";
// // const SingleProduct = () => {
// //   console.log(useParams());
// //   const { id } = useParams();
// //   console.log(id);
// //   const [singleItem,setSingleItem]=useState(null);

// //   useEffect(()=>{
// //     axios.get(`https://dummyjson.com/recipes/${1}`).then(res=>{
// //       setSingleItem(res.data)
// //       console.log(res.data)
// //     })
// //   },[id])
 
// //   // const itemFound = data.find((x) => x.id === Number(id));


// //   return (
// //     <div style={{width:"18rem",border:"2px solid black",padding:5}}>
// //       SingleProduct
// //       <img src={singleItem.image} alt="" width={200}/>
// //       {/* <img src={itemFound.image} alt="" width={200}/>
// //       <p> {itemFound.name}</p>
// //       <div style={{display:"flex",gap:20}}>
// //       <Link to={`/products/${itemFound.id}/ingredients`}>Ingredients</Link>
// //       <Link >Instructions</Link>
// //       </div>
// //       <Outlet context={itemFound}/> */}
// //     </div>
// //   );
// // };

// // export default SingleProduct;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [singleItem, setSingleItem] = useState(() => {
//     return JSON.parse(localStorage.getItem("singleProduct")) || null;
//   });

//   useEffect(() => {
//     if (!singleItem || singleItem.id !== parseInt(id)) {
//       axios
//         .get(`https://dummyjson.com/recipes/${id}`)
//         .then((res) => {
//           setSingleItem(res.data);
//           localStorage.setItem("singleProduct", JSON.stringify(res.data)); 
//         })
//         .catch((err) => console.log(err));
//     }
//   }, []);

//   if (!singleItem) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div style={{ width: "18rem", border: "2px solid black", padding: 5 }}>
//       <h3>Single Product</h3>
//       <img src={singleItem.image} alt={singleItem.name} width={200} />
//       <p>{singleItem.name}</p>
//     </div>
//   );
// };

// export default SingleProduct;











import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams(); 
  const [singleItem,setSingleItem]=useState(null)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://dummyjson.com/recipes/${id}`).then(res=>{
      setSingleItem(res.data);
      setLoading(false)
    }).then(err=>{
      console.log(err)
      setLoading(false)
    })
    
  },[])

  if(loading){
    return <h1>Loading...</h1>
  }

  if(!singleItem){
    return <h1>reciep not Found</h1>
  }


  return (
    <div style={{ width: "18rem", border: "2px solid black", padding: 5 }}>
      <h3>Single Product</h3>
      <img src={singleItem.image} alt="" width={200}/>
    
    </div>
  );
};

export default SingleProduct;

