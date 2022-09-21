import React, { useContext, useState } from "react";
import image3 from "../assets/sopa.png";
import logo from "../assets/natufa.jpg";
import "./Login.css";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { AdminContext } from '../context/AdminContext'

export const Login = () => {
  const { setUser, setSession } = useContext(UserContext);
  const { setAdminSession } = useContext(AdminContext)
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function login(dataForm) {
    const dataUser = {
      userEmail: dataForm.userEmail,
      userPassword: dataForm.userPassword,
    };

    const response = await fetch("http://localhost:8081/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataUser),
    });

    const data = await response.json();
    console.log(data.user);
    if (data.route !== "/register") {
      if (data.error !== "Contraseña incorrecta") {
        if (data.user.role !== "ADMIN") {
          setUser(data.user);
          window.localStorage.setItem("user", JSON.stringify(data.user));
          setSession(true);
          window.localStorage.setItem("session", true);
          navigate(data.route);
        } else {
          setAdminSession(true);
          window.localStorage.setItem("adminSession", true);
          navigate(data.route);
        }
      } else {
        setError(data.error);
      }
    } else {
      navigate(data.route);
    }
  }

  return (
    <div className="LoginBack p-4">
      <div
        className="container border border-1 my-4 border-dark p-3"
        style={{
          background: "white",
          marginTop: 20,
          padding: 200,
          width: "600px",
          marginLeft: "100px",
        }}
      >
        <form className="text-center" onSubmit={handleSubmit(login)}>
          <div className="LoginFront">
            <h1
              style={{
                color: "darkgreen",
                textalign: "center",
                fontSize: 60,
                fontFamily: "cooper black",
              }}
            >
              LOGIN
            </h1>
            <img className="m-2" src={logo} width="80" alt="logo" />
            <br />
            <label
              className="m-2"
              style={{ fontFamily: "castellar" }}
              htmlFor="userEmail"
            >
              <strong>Correo electrónico</strong>
            </label>
            <input
              type="text"
              className="form-control border-dark"
              name="userEmail"
              id="userEmail"
              placeholder="example@email.com"
              autoComplete="nope"
              {...register("userEmail", {
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
            {errors.userEmail?.type === "pattern" && (
              <div className="text-danger">
                <small>Ingrese un correo electronico valido.</small>
              </div>
            )}
            {errors.userEmail?.type === "required" && (
              <div className="text-danger">
                <small>Este campo es requerido.</small>
              </div>
            )}
          </div>
          <div>
            <label
              className="m-2"
              htmlFor="txtpas"
              style={{ fontFamily: "castellar" }}
            >
              <strong>Contraseña</strong>
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
          <div>
            <NavLink to={"/register"}>
              <button
                type="button"
                className="btn btn-success my-3"
                style={{ background: "green" }}
              >
                Registrarse
              </button>
            </NavLink>
            <button
              type="submit"
              className="btn btn-success my-3 ms-3"
              style={{ background: "green" }}
            >
              Iniciar sesión
            </button>
          </div>
          {error !== "" && (
            <div className="text-danger text-center my-2">
              <small>{error}</small>
            </div>
          )}
        </form>
        <div className="text-center">
          <img
            src={image3}
            alt="login"
            className="rounded rounded-circle bg-white border border-1 border-dark m-1"
            width="160"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
