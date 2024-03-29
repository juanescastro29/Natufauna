import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/natufa.jpg";
import { AdminContext } from "../context/AdminContext";
import { UserContext } from "../context/UserContext";
import "./Navbar.css";

function Navbar() {
  const { session, setSession, setUser } = useContext(UserContext);
  const { adminSession, setAdminSession } = useContext(AdminContext);
  const navigate = useNavigate()

  function logoutAdmin() {
    window.localStorage.removeItem("adminSession");
    setAdminSession(false);
  }

  function logout () {
    window.localStorage.removeItem("session");
    setSession(false);
    window.localStorage.removeItem("user");
    setUser({});
    navigate("/")
  }


  return (
    <>
      {adminSession ? (
        <nav className="navbar navbar-expand-lg static-top border-bottom border-dark p-1">
          <div className="container">
            <NavLink to="/admin/" className="navbar-brand">
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-auto justify-content-center align-items-center">
                <li className="nav-item">
                  <NavLink
                    to="/admin/"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/pets"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Mascotas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/adoption"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Adopciones
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/sponsorship"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Apadrinamientos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/donation"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Donaciones
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-center align-items-center">
                {adminSession ? (
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                      onClick={() => logoutAdmin()}
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
      ) : (
        <nav className="navbar navbar-expand-lg static-top border-bottom border-dark p-1">
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-auto justify-content-center align-items-center">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link fs-5" aria-current="page">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/adoption"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Adopciones
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/sponsorship"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Apadrinamientos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/donation"
                    className="nav-link fs-5"
                    aria-current="page"
                  >
                    Donaciones
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-center align-items-center">
                {session ? (
                  <li className="nav-item dropdown me-5">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="userMenu"
                    >
                      <i className="bi bi-person-circle" style={{fontSize: 28, color: "green"}}></i>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          to="/profile"
                          className="dropdown-item"
                          style={({ isActive }) => ({
                            background: isActive && "#E0ECFF",
                          })}
                        >
                          Mi perfil
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/myAdoptions"
                          className="dropdown-item"
                          style={({ isActive }) => ({
                            background: isActive && "#E0ECFF",
                          })}
                        >
                          Mi adopciones
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/mySponsorships"
                          className="dropdown-item"
                          style={({ isActive }) => ({
                            background: isActive && "#E0ECFF",
                          })}
                        >
                          Mis apadrinamientos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/myDonations"
                          className="dropdown-item"
                          style={({ isActive }) => ({
                            background: isActive && "#E0ECFF",
                          })}
                        >
                          Mis donaciones
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink
                          to=""
                          className="dropdown-item"
                          style={({ isActive }) => ({
                            background: isActive && "#E0ECFF",
                          })}
                          onClick={() => logout()}
                        >
                          Salir
                        </NavLink>
                      </li>
                    </ul>
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
      )}
    </>
  );
}

export default Navbar;
