import { NavLink } from "react-router-dom";
import Logo from "../assets/natufa.jpg";

function navbar() {
  return (
    <div className="container">
      <div className="row align-items-center my-2">
        <div className="col-md-2 text-center">
          <NavLink to="/">
            <img src={Logo} alt="Natufauna logo" width="80" />
          </NavLink>
        </div>
        <div className="col-md-2 text-center">
          <NavLink to="/">
            <button style={{ background: "#F0B27A", fontFamily:"castellar", color:"black" }}
              type="button"
              className="btn btn-outline-primary btn-rounded"
            >
              Inicio
            </button>
          </NavLink>
        </div>
        <div className="col-md-2 text-center">
          <NavLink to="/adoption" >
            <button  style={{ background: "#F0B27A", fontFamily:"castellar", color:"black" }}
            
              type="button"
              className="btn btn-outline-primary btn-rounded"
            >
              Adopción
            </button>
          </NavLink>
        </div>
        <div className="col-md-2 text-center">
          <NavLink to="/sponsorship">
            <button style={{ background: "#F0B27A", fontFamily:"castellar", color:"black" }}
              type="button"
              className="btn btn-outline-primary  btn-rounded"
            >
              Apadrinamiento
            </button>
          </NavLink>
        </div>
        <div className="col-md-2 text-center">
          <NavLink to="/donation">
            <button   style={{ background: "#F0B27A", fontFamily:"castellar", color:"black" }}
              type="button"
              className="btn btn-outline-primary  btn-rounded"
            >
              Donacion
            </button>
          </NavLink>
        </div>
        <div className="col-md-2 text-center">
          <NavLink to="/login">
            <i
              className="bi bi-box-arrow-in-right"
              style={{ fontSize: 30 }}
            ></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default navbar;
