import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [errorResponse, setErrorResponse] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function registUser(dataForm) {
    const dataUser = {
      user_id: dataForm.userId,
      user_first_name: dataForm.userName,
      user_last_name: dataForm.userLastName,
      password: dataForm.userPassword,
      email: dataForm.userEmail,
    };

    const response = await fetch("http://localhost:8081/user/newUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataUser),
    });
    const data = await response.json();
    if (data.error !== "Usuario ya registrado") {
      navigate(data.route);
    } else {
      setErrorResponse(data.error);
    }
  }

  return (
    <form className="row" onSubmit={handleSubmit(registUser)}>
      <div className="col-12 p-2">
        <h2>Registrarse</h2>
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userId" className="form-label fw-bolder">
          Cedula de ciudadania:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userId"
          id="userId"
          {...register("userId", {
            required: true,
            pattern: /^[0-9]+$/,
            minLength: 8,
            maxLength: 10,
          })}
        />
        {errors.userId?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
        {errors.userId?.type === "minLength" && (
          <div className="text-danger">
            <small>Número de identificación no valido.</small>
          </div>
        )}
        {errors.userId?.type === "maxLength" && (
          <div className="text-danger">
            <small>Número de identificación no valido.</small>
          </div>
        )}
        {errors.userId?.type === "pattern" && (
          <div className="text-danger">
            <small>Número de identificación no valido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userName" className="form-label fw-bolder">
          Nombres:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userName"
          id="userName"
          autoComplete="nope"
          {...register("userName", {
            required: true,
          })}
        />
        {errors.userName?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userLastName" className="form-label fw-bolder">
          Apellidos:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userLastName"
          id="userLastName"
          autoComplete="nope"
          {...register("userLastName", {
            required: true,
          })}
        />
        {errors.userLastName?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userPassword" className="form-label fw-bolder">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control border-dark"
          name="userPassword"
          id="userPassword"
          autoComplete="nope"
          {...register("userPassword", { required: true })}
        />
        {errors.userPassword?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userRePassword" className="form-label fw-bolder">
          Repetir contraseña:
        </label>
        <input
          type="password"
          className="form-control border-dark"
          name="userRePassword"
          id="userRePassword"
          {...register("userRePassword", {
            required: true,
            validate: (value) => value === watch("userPassword"),
          })}
        />
        {errors.userRePassword?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
        {errors.userRePassword?.type === "validate" && (
          <div className="text-danger">
            <small>Las contraseñas no coinciden.</small>
          </div>
        )}
      </div>
      <div className="col-6 p-2">
        <label htmlFor="userEmail" className="form-label fw-bolder">
          Correo electrónico:
        </label>
        <input
          type="text"
          className="form-control border-dark"
          name="userEmail"
          id="userEmail"
          {...register("userEmail", {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.userEmail?.type === "required" && (
          <div className="text-danger">
            <small>Este campo es requerido.</small>
          </div>
        )}
        {errors.userEmail?.type === "pattern" && (
          <div className="text-danger">
            <small>Ingrese una direccion de correo electrónico valida.</small>
          </div>
        )}
      </div>
      <div className="d-grid col-12 mx-auto p-2 my-2">
        <button className="btn btn-success" type="submit">
          Registrarse
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

export default FormRegister;
