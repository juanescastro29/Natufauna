import React from "react";
import FormRegister from "../components/FormRegister";
import './Styles.css'

function Register() {
  return (
    <div className="background">
      <div className="container p-4">
        <div className="row justify-content-center align-items-center bg-light rounded border p-4 border-1 border-dark">
          <FormRegister />
        </div>
      </div>
    </div>
  );
}

export default Register;
