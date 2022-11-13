import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";
import "../pages/Styles.css";
import { NavLink } from "react-router-dom";
import { AdoptionPetContext } from "../context/AdoptionPetContext";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

function Form( { type } ) {
  const { user } = useContext(UserContext);
  const { pet } = useContext(AdoptionPetContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [responseBackend, setResponseBackend] = useState("");
  const form = useRef();

  async function sendForm() {
    if (type === "adoption") {
      const user_id = user.user_id;
      const pet_id = pet.pet_id;
      const adoptionData = { user_id, pet_id };

      const response = await fetch(
        "http://localhost:8081/adoption/newAdoption",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(adoptionData),
        }
      );
      const data = await response.text();
      setResponseBackend(data);

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
    } else {
      const user_id = user.user_id;
      const pet_id = pet.pet_id;
      const sponsorshipData = { user_id, pet_id };

      const response = await fetch(
        "http://localhost:8081/sponsorship/newSponsorship",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(sponsorshipData),
        }
      );
      const data = await response.text();
      setResponseBackend(data);

      if (data === "Sponsorship saved") {
        emailjs
          .sendForm(
            "service_yirlvz6",
            "template_w5uo2it",
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
  }

  return (
    <div className="col-md-6">
      <h2 className="text text-dark text-center">Información para contacto</h2>
      <form ref={form} className="row g-3" onSubmit={handleSubmit(sendForm)}>
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
            {...register("inputName", { required: true, pattern: /[A-Za-z]/ })}
          />
          {errors.inputName?.type === "required" && (
            <div className="text-danger">
              <small>Este campo es obligatorio.</small>
            </div>
          )}
          {errors.inputName?.type === "pattern" && (
            <div className="text-danger">
              <small>No se permiten números ni caracteres especiales.</small>
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
            {...register("inputLastName", {
              required: true,
              pattern: /[A-Za-z]/,
            })}
          />
          {errors.inputLastName?.type === "required" && (
            <div className="text-danger">
              <small>Este campo es obligatorio.</small>
            </div>
          )}
          {errors.inputLastName?.type === "pattern" && (
            <div className="text-danger">
              <small>No se permiten números ni caracteres especiales.</small>
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
        {type === "adoption" && (
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Departamento:
            </label>
            <select
              className="form-select border-dark"
              name="inputState"
              id="inputState"
              autoComplete="nope"
              {...register("inputState", { required: true })}
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
        )}
        {type === "adoption" && (
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
              {...register("inputCity", {
                required: true,
                pattern: /[a-zA-Z]/,
              })}
            />
            {errors.inputCity?.type === "required" && (
              <div className="text-danger">
                <small>Este campo es obligatorio.</small>
              </div>
            )}
            {errors.inputCity?.type === "pattern" && (
              <div className="text-danger">
                <small>No se permiten números ni caracteres especiales.</small>
              </div>
            )}
          </div>
        )}
        {type === "adoption" && (
          <div className="col-md-6">
            <label htmlFor="inputAddress" className="form-label">
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
            {errors.inputAddress?.type === "required" && (
              <div className="text-danger">
                <small>Este campo es obligatorio.</small>
              </div>
            )}
          </div>
        )}
        {type === "adoption" ? (
          <>
            <div className="col-md-6">
              <label htmlFor="inputPhone" className="form-label">
                Telefono:
              </label>
              <input
                type="text"
                className="form-control border-dark"
                name="inputPhone"
                id="inputPhone"
                autoComplete="nope"
                {...register("inputPhone", {
                  required: true,
                  pattern: /[0-9]/,
                })}
              />
              {errors.inputPhone?.type === "required" && (
                <div className="text-danger">
                  <small>Este campo es obligatorio.</small>
                </div>
              )}
              {errors.inputPhone?.type === "pattern" && (
                <div className="text-danger">
                  <small>No se permiten letras ni caracteres especiales.</small>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="col-md-12">
              <label htmlFor="inputPhone" className="form-label">
                Telefono:
              </label>
              <input
                type="text"
                className="form-control border-dark"
                name="inputPhone"
                id="inputPhone"
                autoComplete="nope"
                {...register("inputPhone", {
                  required: true,
                  pattern: /[0-9]/,
                })}
              />
              {errors.inputPhone?.type === "required" && (
                <div className="text-danger">
                  <small>Este campo es obligatorio.</small>
                </div>
              )}
              {errors.inputPhone?.type === "pattern" && (
                <div className="text-danger">
                  <small>No se permiten letras ni caracteres especiales.</small>
                </div>
              )}
            </div>
          </>
        )}
        <div className="col-md-7 text-center">
          <NavLink to={"/adoption"}>
            <button type="button" className="btn btn-success">
              Cancelar solicitud
            </button>
          </NavLink>
        </div>
        <div className="col-md-4 text-center">
          <button
            type="submit"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#requestModal"
          >
            Enviar solicitud
          </button>
          <Modal responseBackend={responseBackend} type={type}></Modal>
        </div>
      </form>
    </div>
  );
}

Form.prototype = {
  type: PropTypes.string.isRequired,
};

export default Form;
