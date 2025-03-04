import React from 'react'
import Navbar1 from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Recipes from './Components/Recipes/Recipes'
import Cart from './Components/Cart/Cart'
import AddRecipe from './Components/Recipes/AddRecipe/AddRecipe'
const App = () => {

  return (
    <div>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recipes' element={<Recipes />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/addRecipe' element={<AddRecipe />}/>
      </Routes>
    </div>
  )
}

export default App