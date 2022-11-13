import React, { useContext } from "react";
import { AdoptionPetContext } from "../context/AdoptionPetContext";

function PetProfile() {
  const { pet } = useContext(AdoptionPetContext);

  return (
    <div className="col-md-6">
      <h2 className="text-center">
        Hola mi nombre es {pet.pet_name}
      </h2>
      <div className="container text-center">
        <img
          className="img-pet-profile border border-1 border-dark rounded"
          src={pet.pet_image}
          alt="pet profile"
          width={300}
        />
      </div>
    </div>
  );
}

export default PetProfile;
