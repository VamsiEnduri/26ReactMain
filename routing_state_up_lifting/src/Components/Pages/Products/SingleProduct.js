// import React from 'react'
// import { useParams } from 'react-router-dom'

// const SingleProduct = ({data}) => {
//     console.log(useParams())
//     const {urlId} =useParams()
//     // console.log(id)
//     console.log(data, "data from products to singleP")

//    const itemFound=data.find(x=>x.id === parseInt(urlId));
// //    console.log(itemFound,"itemFound")

//   return (
//     <div>
//         singleP
//        {/* <img src={itemFound.image} alt="" /> */}
//     </div>
//   )
// }

// export default SingleProduct



import React from "react";
import { Link, useParams ,Outlet} from "react-router-dom";


const SingleProduct = ({ data }) => {
  const { id } = useParams();
//   const product = data.find((c) => c.id === parseInt(id));
const itemFound=data.find((x)=>x.id === parseInt(id))

  if (!itemFound) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ border: "2px solid black", padding: "10px", marginTop: "20px" }}>
      <h2>Product Details</h2>
      <img src={itemFound.image} alt={itemFound.name} width={150} />
      <h3>{itemFound.name}</h3>
      <p>Product ID: {itemFound.id}</p>
      {/* <Link to={`/products/${itemFound.id}/ingredients`}>Ingredients</Link>
      <Link to={`/products/${itemFound.id}/instructions`}>how to do it</Link> */}


      {/* <Outlet context={product} /> */}
    </div>
  );
};


export default SingleProduct;