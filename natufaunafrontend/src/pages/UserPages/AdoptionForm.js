import { useLocation } from "react-router-dom";
import React from "react";
import Form from "../../components/Form";
import PetProfile from "../../components/PetProfile";
import "../Styles.css";

function AdoptionForm() {
  const location = useLocation();
  const pet_image = location.state.pet_image;

  return (
    <div className="background">
      <div className="container p-4">
        <div className="row justify-content-center align-items-center bg-light rounded border p-4 border-1 border-dark">
          <PetProfile pet_image={pet_image} />
          <Form tpye={"adoption"}/>
        </div>
      </div>
    </div>
  );
}

export default AdoptionForm;
