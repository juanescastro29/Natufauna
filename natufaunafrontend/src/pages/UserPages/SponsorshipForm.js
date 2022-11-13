import React from "react";
import FormSponsorship from "../../components/Form";
import PetProfile from "../../components/PetProfile";
import "../Styles.css";

function SponsorshipForm() {

  return (
    <div className="background">
      <div className="container p-4">
        <div className="row justify-content-center align-items-center bg-light rounded border p-4 border-1 border-dark">
          <PetProfile />
          <FormSponsorship />
        </div>
      </div>
    </div>
  );
}

export default SponsorshipForm;
