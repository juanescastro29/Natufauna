import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";
import "../pages/Styles.css";
import { NavLink } from "react-router-dom";
import { AdoptionPetContext } from "../context/AdoptionPetContext";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

function FormAdoption() {
  const { user } = useContext(UserContext);
  const { pet } = useContext(AdoptionPetContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [adoptionResponse, setAdoptionResponse] = useState("");
  const form = useRef();

  async function newAdoption() {
    const user_id = user.user_id;
    const pet_id = pet.pet_id;
    const adoptionData = { user_id, pet_id };

    const response = await fetch("http://localhost:8081/adoption/newAdoption", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(adoptionData),
    });
    const data = await response.text();
    setAdoptionResponse(data);

    if (data === "Adoption saved") {
      emailjs
        .sendForm(
          "service_yirlvz6",
          "template_s55cyug",
          form.current,
          "Xqz1DvFIfX_Y3wjd7"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <div className="col-md-6">
      <h2 className="text text-dark text-center">Información para contacto</h2>
      <form ref={form} className="row g-3" onSubmit={handleSubmit(newAdoption)}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Nombres:
          </label>
          <input
            type="text"
            className="form-control border-dark"
            name="inputName"
            id="inputName"
            autoComplete="nope"
            {...register("inputName", { required: true })}
          />
          {errors.inputName && (
            <div className="text-danger">
              <small>Este campo es obligatorio.</small>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Apellidos:
          </label>
          <input
            type="text"
            className="form-control border-dark"
            name="inputLastName"
            id="inputLastName"
            autoComplete="nope"
            {...register("inputLastName", { required: true })}
          />
          {errors.inputLastName && (
            <div className="text-danger">
              <small>Este campo es obligatorio.</small>
            </div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Correo electronico:
          </label>
          <input
            type="email"
            className="form-control border-dark"
            name="inputEmail"
            id="inputEmail"
            placeholder="example@email.com"
            autoComplete="nope"
            {...register("inputEmail", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.inputEmail?.type === "pattern" && (
            <div className="text-danger">
              <small>Ingrese una dirección de correo valida.</small>
            </div>
          )}
          {errors.inputEmail?.type === "required" && (
            <div className="text-danger">
              <small>Ingrese una dirección de correo valida.</small>
            </div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="inputDireccion" className="form-label">
            Dirección:
          </label>
          <input
            type="text"
            className="form-control border-dark"
            name="inputAddress"
            id="inputAddress"
            autoComplete="nope"
            {...register("inputAddress", { required: true })}
          />
          {errors.inputAddress && (
            <div className="text-danger">
              <small>Este campo es obligatorio.</small>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Ciudad:
          </label>
          <input
            type="text"
            className="form-control border-dark"
            name="inputCity"
            id="inputCity"
            autoComplete="nope"
            {...register("inputCity", { required: true })}
          />
          {errors.inputCity && (
            <div className="text-danger">
              <small>Este campo es obligatorio.</small>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            Departamento:
          </label>
          <select
            className="form-select border-dark"
            name="inputState"
            id="inputState"
            autoComplete="nope"
            {...register("inputState")}
          >
            <option value="Amazonas">Amazonas</option>
            <option value="Antioquia">Antioquia</option>
            <option value="Arauca">Arauca</option>
            <option value="Atlántico">Atlántico</option>
            <option value="Bolívar">Bolívar</option>
            <option value="Boyacá">Boyacá</option>
            <option value="Caldas">Caldas</option>
            <option value="Caquetá">Caquetá</option>
            <option value="Casanare">Casanare</option>
            <option value="Cauca">Cauca</option>
            <option value="Cesar">Cesar</option>
            <option value="Chocó">Chocó</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Cundinamarca">Cundinamarca</option>
            <option value="Guainía">Guainía</option>
            <option value="Guaviare">Guaviare</option>
            <option value="Huila">Huila</option>
            <option value="La Guajira">La Guajira</option>
            <option value="Magdalena">Magdalena</option>
            <option value="Meta">Meta</option>
            <option value="Nariño">Nariño</option>
            <option value="Norte de Santander">Norte de Santander</option>
            <option value="Putumayo">Putumayo</option>
            <option value="Quindío">Quindío</option>
            <option value="Risaralda">Risaralda</option>
            <option value="San Andrés y Providencia">
              San Andrés y Providencia
            </option>
            <option value="Santander">Santander</option>
            <option value="Sucre">Sucre</option>
            <option value="Tolima">Tolima</option>
            <option value="Valle del Cauca">Valle del Cauca</option>
            <option value="Vaupés">Vaupés</option>
            <option value="Vichada">Vichada</option>
          </select>
        </div>
        <div className="col-md-6 text-center">
          <NavLink to={"/adoption"}>
            <button type="button" className="btn btn-success">
              Cancelar solicitud
            </button>
          </NavLink>
        </div>
        <div className="col-md-6 text-center">
          <button
            type="submit"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#requestModal"
          >
            Enviar solicitud
          </button>
          <Modal adoptionResponse={adoptionResponse}></Modal>
        </div>
      </form>
    </div>
  );
}

FormAdoption.prototype = {
  pet_name: PropTypes.string.isRequired,
  pet_id: PropTypes.number.isRequired,
  pet_image: PropTypes.string.isRequired,
};

export default FormAdoption;
