import { NavLink } from "react-router-dom";
import Logo from "../assets/natufa.jpg";

function navbar() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col text-center my-2">
          <NavLink to="/">
            <img src={Logo} alt="Natufauna logo" width="80" />
          </NavLink>
        </div>
        <div className="col text-center my-2">
          <NavLink to="/">
            <button
              type="button"
              className="btn btn-outline-primary btn-rounded"
            >
              Inicio
            </button>
          </NavLink>
        </div>
        <div className="col text-center my-2">
          <NavLink to="/adoption">
            <button
              type="button"
              className="btn btn-outline-primary btn-rounded"
            >
              Adopcion
            </button>
          </NavLink>
        </div>
        <div className="col text-center my-2">
          <NavLink to="/sponsorship">
            <button
              type="button"
              className="btn btn-outline-primary  btn-rounded"
            >
              Apadrinamiento
            </button>
          </NavLink>
        </div>
        <div className="col text-center my-2">
          <NavLink to="/donation">
            <button
              type="button"
              className="btn btn-outline-primary  btn-rounded"
            >
              Donacion
            </button>
          </NavLink>
        </div>
        <div className="col text-center my-2">
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
