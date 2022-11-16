import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const [errorResponse, setErrorResponse] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function updateUser(dataForm) {
    const dataUser = {
      user_id: dataForm.userId,
      user_first_name: dataForm.userName,
      user_last_name: dataForm.userLastName,
      password: dataForm.userPassword,
      email: dataForm.userEmail,
    };

    const response = await fetch(
      `http://localhost:8081/user/updateUser/${user.user_id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataUser),
      }
    );
    const data = await response.json();
    if (data.message === "User update successfully") {
      setUser(data.user);
      window.localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      setErrorResponse(data.message);
    }
  }

  return (
    <div className="background">
      <div className="container p-4">
        <div className="row">
          <div className="col-6 p-4">
            <div className="row">
              <div className="col-12 p-2 text-center">
                <h2>Datos del usuario</h2>
              </div>
              <div className="col-12 p-3">
                <h3>Cédula: {user.user_id}</h3>
              </div>
              <div className="col-12 p-3">
                <h3>Nombres: {user.user_first_name}</h3>
              </div>
              <div className="col-12 p-3">
                <h3>Apellidos: {user.user_last_name}</h3>
              </div>
              <div className="col-12 p-3">
                <h3>Correo electronico: {user.email}</h3>
              </div>
            </div>
          </div>
          <div className="col-6 text-center p-4">
            <form className="row" onSubmit={handleSubmit(updateUser)}>
              <div className="col-12 p-2">
                <h2>Actualizar datos</h2>
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
                    required: false,
                  })}
                />
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
                    required: false,
                  })}
                />
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
                  {...register("userPassword", {
                    required: false,
                  })}
                />
              </div>
              <div className="col-6 p-2">
                <label
                  htmlFor="userRePassword"
                  className="form-label fw-bolder"
                >
                  Repetir contraseña:
                </label>
                <input
                  type="password"
                  className="form-control border-dark"
                  name="userRePassword"
                  id="userRePassword"
                  {...register("userRePassword", {
                    required: false,
                    validate: (value) => value === watch("userPassword"),
                  })}
                />
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
                    required: false,
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                {errors.userEmail?.type === "pattern" && (
                  <div className="text-danger">
                    <small>
                      Ingrese una direccion de correo electrónico valida.
                    </small>
                  </div>
                )}
              </div>
              <div className="d-grid col-12 mx-auto p-2 my-2">
                <button className="btn btn-success" type="submit">
                  Actualizar perfil
                </button>
              </div>
              {errorResponse && (
                <div className="text-center text-danger p-2">
                  <p className="fs-6">{errorResponse}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
