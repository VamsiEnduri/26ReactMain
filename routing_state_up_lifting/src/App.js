import React ,{useState,useEffect}from 'react'
import Navbar1 from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import About  from './Components/Pages/About/About'
import {data, Route,Routes} from "react-router-dom"
import xyz from "axios"
import Products from './Components/Pages/Products/Products'
import SingleProduct from './Components/Pages/Products/SingleProduct'
import SingleProductIng from './Components/Pages/Products/SingleProductIng'
const App = () => {
      const [data,setData]=useState([])
      useEffect(()=>{
         xyz.get('https://dummyjson.com/recipes').then(res=>{
          console.log(res)
          setData(res.data.recipes)
         }).catch(err=>{
          console.log(err)
         })
      },[])
      console.log(data,"data from api")
  return (
    <div>
      <Navbar1 />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products data={data}/>}/>
        <Route path='/products/:id' element={<SingleProduct data={data} />}>
                    <Route path="ingredients" element={<SingleProductIng />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App