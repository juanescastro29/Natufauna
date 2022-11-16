import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";
import "./Card.css";
import { AdoptionPetContext } from "../context/AdoptionPetContext";

function Card({
  pet_id,
  pet_image,
  pet_name,
  type,
  pet_history,
  pet_age,
  pet_size,
  pet_color,
  pet_race,
}) {
  const { session } = useContext(UserContext);
  const { setPet } = useContext(AdoptionPetContext);

  async function fetchPetData() {
    const response = await fetch(`http://localhost:8081/pet/showPet/${pet_id}`);
    const petData = await response.json();
    setPet(petData);
  }

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp mb-5">
      <div className="overflow">
        <img src={pet_image} alt="pet profile" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title bg-transparent">{pet_name}</h4>
        <p
          className="card-text bg-transparent text-secondary m-0"
          style={{ textAlign: "justify" }}
        >
          {pet_history && pet_history}
        </p>
        {pet_age && pet_size && pet_color && pet_race && (
          <>
            <ul
              className="card-text text-secondary bg-transparent m-0 ms-3 list-group list-group-flush"
              style={{ textAlign: "justify" }}
            >
              Características:
              <li className="list-group-item text-secondary bg-transparent">
                Edad: {pet_age}
              </li>
              <li className="list-group-item text-secondary bg-transparent">
                Tamaño: {pet_size}
              </li>
              {type === "adoption" && (
                <>
                  <li className="list-group-item text-secondary bg-transparent">
                    Color: {pet_color}
                  </li>
                  <li className="list-group-item text-secondary bg-transparent">
                    Raza: {pet_race}
                  </li>
                </>
              )}
            </ul>
          </>
        )}
        {session ? (
          <>
            {type === "adoption" && (
              <NavLink to={"/adoption/form"} state={{ type: type }}>
                <button
                  className="btn btn-success my-2"
                  type="button"
                  onClick={() => fetchPetData()}
                >
                  Adoptar
                </button>
              </NavLink>
            )}
            {type === "sponsor" && (
              <NavLink to={"/sponsorship/sponsorform"}>
                <button
                  className="btn btn-success my-2"
                  type="button"
                  onClick={() => fetchPetData()}
                >
                  Apadrinar
                </button>
              </NavLink>
            )}
          </>
        ) : (
          <>
            {type === "adoption" && (
              <NavLink to={"/login"}>
                <button className="btn btn-success my-2">Iniciar sesión</button>
              </NavLink>
            )}
            {type === "sponsor" && (
              <NavLink to={"/login"}>
                <button className="btn btn-success my-2">Iniciar sesión</button>
              </NavLink>
            )}
          </>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  pet_name: PropTypes.string.isRequired,
  pet_id: PropTypes.number.isRequired,
  text: PropTypes.string,
  pet_image: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Card;
