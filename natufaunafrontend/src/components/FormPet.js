import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormPet = () => {
  const [errorResponse, setErrorResponse] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function registPet(dataForm) {
    const response = await fetch("http://localhost:8081/pet/registerPet", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });

    const data = await response.text();
    if (data !== "Pet saved") {
      setErrorResponse(data);
    }else {
      window.location.reload();
    }
  }

  return (
    <form className="row" onSubmit={handleSubmit(registPet)}>
      <div className="col-12 p-2">
        <h2 className="fs-3 fw-bolder" style={{ color: "green" }}>
          Registrar nueva mascota
        </h2>
      </div>
      <div className="col-6 p-2">
        <label htmlFor="pet_name" className="form-label fw-bolder">
          Nombre:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="pet_name"
          id="pet_name"
          {...register("pet_name", {
            required: true,
          })}
        />
        {errors.pet_name?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="pet_age" className="form-label fw-bolder">
          Edad:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="pet_age"
          id="pet_age"
          autoComplete="nope"
          {...register("pet_age", {
            required: true,
          })}
        />
        {errors.pet_age?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="pet_color" className="form-label fw-bolder">
          Color:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="pet_color"
          id="pet_color"
          autoComplete="nope"
          {...register("pet_color", {
            required: true,
          })}
        />
        {errors.pet_color?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="pet_race" className="form-label fw-bolder">
          Raza:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="pet_race"
          id="pet_race"
          autoComplete="nope"
          {...register("pet_race", { required: true })}
        />
        {errors.pet_race?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="pet_size" className="form-label fw-bolder">
          Tamaño:
        </label>
        <select
          className="form-select border-dark"
          name="pet_size"
          id="pet_size"
          autoComplete="nope"
          {...register("pet_size", { required: true })}
        >
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
      </div>
      <div className="col-12 p-2">
        <label htmlFor="pet_history" className="form-label fw-bolder">
          Historia:
        </label>
        <textarea
          className="form-control border-dark"
          name="pet_history"
          id="pet_history"
          style={{ resize: "none", height: "150px" }}
          {...register("pet_history", { required: true })}
        ></textarea>
        {errors.pet_history?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="d-grid col-12 mx-auto p-2 my-2">
        <button className="btn btn-success" type="submit">
          Registrar mascota
        </button>
      </div>
      {errorResponse && (
        <div className="text-center text-danger p-2">
          <p className="fs-6">{errorResponse}</p>
        </div>
      )}
    </form>
  );
};

export default FormPet;
