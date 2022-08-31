import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Form({ pet_id, pet_name, pet_image }) {
  
  const { user } = useContext(UserContext);

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-dark fw-bolder">Hola mi nombre es {pet_name}:</h2>
          <img
            className="img-pet-profile border border-2 border-dark"
            src={pet_image}
            alt="pet profile"
            width={300}
          />
        </div>
        <div className="col-md-6">
          <h2 className="text text-dark text-center fw-bolder ms-3">
            Informacion para contacto:
          </h2>
          <form>
            <div className="row ms-5">
              <div className="col">
                <h4>Nombres:</h4>
                <input type="text" />
              </div>
              <div className="col">
                <h4>Apellidos:</h4>
                <input type="text" />
              </div>
            </div>
            <div className="row mt-3 ms-5">
              <div className="col">
                <h4>Telefono:</h4>
                <input type="text" />
              </div>
              <div className="col">
                <h4>Ciudad:</h4>
                <input type="text" />
              </div>
            </div>
            <div className="row mt-3 ms-5">
              <div className="col">
                <h4>Correo electronico:</h4>
                <input type="text" />
              </div>
            </div>
            <div className="row mt-5 ms-5">
              <div className="col-md-6 text-end">
                <button className="btn btn-primary" type="submit">
                  Cancelar
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary" type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
