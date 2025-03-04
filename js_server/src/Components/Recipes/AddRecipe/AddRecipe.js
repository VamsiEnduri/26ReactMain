import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios"
const AddRecipe = () => {
  const [showModal, setShowModal] = useState(true);
  const [newRecipeDetails, setNewRecipeDetails] = useState({
    name: "",
    image: "",
    ingredients: "",
    instructions: "",
  });
  const hideModal = () => {
    setShowModal(false);
  };
  const handleChange=(e)=>{
    setNewRecipeDetails({...newRecipeDetails,[e.target.name]:e.target.value})
  }
  const handleSubmitNewRecipeDetails=async(e)=>{
 e.preventDefault();
 console.log(newRecipeDetails)
 setShowModal(false)
 await axios.post("http://localhost:5000/recipes",newRecipeDetails)
 alert("recipe added successfully!!!! to exisiting recipes")
  }
  return (
    <div>
      AddRecipe
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>AddNewRecipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitNewRecipeDetails}>
            <Form.Group className="mb-3">
              <Form.Label>RecipeName</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus onChange={handleChange}
              name="name"
              
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>RecipeImageURL</Form.Label>
              <Form.Control type="text" placeholder="" onChange={handleChange} autoFocus name="image"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control as="textarea"  onChange={handleChange} rows={6} name="ingredients"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instructions</Form.Label>
              <Form.Control as="textarea" onChange={handleChange} rows={6} name="instructions"/>
            </Form.Group>
            <Button type="submit">AddRecipe</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddRecipe;
