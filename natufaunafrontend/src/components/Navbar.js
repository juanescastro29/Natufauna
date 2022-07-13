import { NavLink } from "react-router-dom";
import Logo from "../assets/natufa.jpg";
import './Navbar.css'

function navbar() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col text-start my-2">
          <NavLink to="/">Natufauna</NavLink>
        </div>
        <div className="col text-center my-2">
          <NavLink to="/adoption">
            <button type="button" className="btn btn-primary btn-rounded">
              Adopcion
            </button>
          </NavLink>
        </div>
        <div className="col text-center my-2">
          <NavLink to="/sponsorship">
            <button type="button" className="btn btn-primary btn-rounded">
              Apadrinamiento
            </button>
          </NavLink>
        </div>
        <div className="col text-center my-2">
          <NavLink to="/donation">
            <button type="button" className="btn btn-primary btn-rounded">
              Donacion
            </button>
          </NavLink>
        </div>
        <div className="col text-end my-2">
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default navbar;
