import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/natufa.jpg";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { session, setUser, setSession } = useContext(UserContext);

  function logout() {
    window.localStorage.removeItem("user");
    setUser(null);
    window.localStorage.removeItem("session");
    setSession(false);
  }

  return (
    <nav className="navbar navbar-expand-lg static-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img
            className="me-1"
            src={Logo}
            alt="Video gallery logo"
            height="50"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto me-auto justify-content-center align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/adoption"
                className="nav-link active"
                aria-current="page"
              >
                Adopciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sponsorship"
                className="nav-link active"
                aria-current="page"
              >
                Apadrinamiento
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/donation"
                className="nav-link active"
                aria-current="page"
              >
                Donaciones
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-center align-items-center">
            {session ? (
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => logout()}
                >
                  <i
                    className="bi bi-box-arrow-left"
                    style={{ fontSize: 35, color: "green" }}
                  ></i>
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link active"
                  aria-current="page"
                >
                  <i
                    className="bi bi-box-arrow-in-right"
                    style={{ fontSize: 35, color: "green" }}
                  ></i>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
