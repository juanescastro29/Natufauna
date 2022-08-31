import { useLocation } from "react-router-dom";
import React from "react";
import Form from '../components/Form'
import "./Styles.css";

function AdoptionForm() {

  const location = useLocation()
  const pet_image = location.state.pet_image
  const pet_name = location.state.pet_name

  return (
    <div className="background">  
      <Form pet_name={pet_name} pet_image={pet_image}/>
    </div>
  );
}

export default AdoptionForm;
