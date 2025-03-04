import React, { useEffect, useState } from "react";
import axios from "axios";
import {Form,Modal} from "react-bootstrap"
import { Button, Card } from "react-bootstrap";
const Recipes = () => {
  const [data, setData] = useState([]);
  const [showEditModal,setShowEditModal]=useState(false)
  const [recipeDlte,setRecipeDlte]=useState(null)
  const [edited,setEdited]=useState(false)
  const [currentRecipe,setCurrentRecipe]=useState({
    name:"",
    image:"",
    ingredients:"",
    instructions:""
  })
  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeDlte,edited]);

  const handleAddToCart=(cartItem)=>{
    alert("item added to cart")
              axios.post("http://localhost:5000/cartItems",cartItem)
  }

  const handleDtleRecipe=async(xyz)=>{
   try{

    await   axios.delete(`http://localhost:5000/recipes/${xyz.id}`)
    alert("recipe dleted from the recipesList")
    setRecipeDlte(xyz)
  
   }catch(err){
    console.log(err)
   }
  }

  const handleChange=(e)=>{
        setCurrentRecipe({...currentRecipe,[e.target.name]:e.target.value})
  }
  const handleEditRecipe=(editItem)=>{
           setShowEditModal(true)
           setCurrentRecipe(editItem)
           console.log(editItem)
           console.log(currentRecipe)
  }
  const handleSubmitEditRecipeDetails=async()=>{
  try{
    await  axios.put(`http://localhost:5000/recipes/${currentRecipe.id}`,currentRecipe)
    alert("successfully edited !!!")
    setEdited(true)
    setShowEditModal(false)
  }
  catch(err){
    console.log(err)
  }
  }
  const hideModal=()=>{
    setShowEditModal(false)
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: 10,
      }}
    >
      {data.map((x) => {
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={x.image} />
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <div style={{ display: "flex", gap: 20 }}>
                  <Button variant="primary" onClick={()=>handleAddToCart(x)}>AddToCart</Button>

                  <Button variant="primary" onClick={()=>handleEditRecipe(x)}>EditRecipe</Button>
                  <Button variant="primary" onClick={()=>handleDtleRecipe(x)}>DlteRecipe</Button>
                </div>
              </Card.Body>
            </Card>


            <Modal show={showEditModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>EditRecipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEditRecipeDetails}>
            <Form.Group className="mb-3">
              <Form.Label>RecipeName</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus onChange={handleChange}
              name="name"
              value={currentRecipe.name}
              
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>RecipeImageURL</Form.Label>
              <Form.Control type="text" placeholder="" onChange={handleChange} autoFocus name="image" 
              value={currentRecipe.image}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control as="textarea"  onChange={handleChange} rows={6} name="ingredients" 
              value={currentRecipe.ingredients}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instructions</Form.Label>
              <Form.Control as="textarea" onChange={handleChange} rows={6} name="instructions" 
              value={currentRecipe.instructions}
              
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmitEditRecipeDetails}>EditRecipe</Button>
          <Button onClick={()=>setShowEditModal(false)}>EditCancel</Button>
        </Modal.Footer>
      </Modal>
          </>
        );
      })}
    </div>
  );
};

export default Recipes;
