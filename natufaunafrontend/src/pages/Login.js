import React, { useState } from "react";
import Menu from "./Home";
import image3 from "../assets/sopa.png";
import logo from "../assets/natufa.jpg";
import "./Login.css";

export const Login = () => {
  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("complete datos faltantes||");
    } else {
      if (usu === "admi" && pas === "123") {
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("error de usuario o contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
      }
    }
  }

  return (
    <div className="LoginBack p-4">
      <div
        className="container border border-2 my-4 border-dark p-3"
        style={{
          background: "white",
          marginTop: 20,
          padding: 200,
          width: "600px",
          marginLeft: "100px",
        }}
      >
        <center>
          <form id="form_login">
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
              <br />
              <img src={logo} width="80" />
              <br /> <br />
              <label style={{ fontFamily: "castellar" }} htmlFor="txtusu">
                <strong>Username</strong>
              </label>
              <input
                type="text"
                id="txtusu"
                style={{ textAlign: "center" }}
                className="form-control"
                onChange={(e) => setUsu(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="txtpas" style={{ fontFamily: "castellar" }}>
                <strong>Password</strong>
              </label>
              <input
                type="password"
                id="txtpas"
                style={{ textAlign: "center" }}
                className="form-control"
                onChange={(e) => setPas(e.target.value)}
                required
              />
            </div>
            <br />
            <input
              type="submit"
              className="btn btn-primary"
              value="Login"
              onClick={iniciarSesion}
              style={{ background: "green" }}
            />
          </form>
        </center>
        <p> </p>
        <center>
          <img
            src={image3}
            alt="img"
            className="rounded rounded-circle bg-white border border-1 border-dark"
            width="160"
          />{" "}
        </center>
        {miLogin === "true" && <Menu />}
      </div>
    </div>
  );
};

export default Login;
