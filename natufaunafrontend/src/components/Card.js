import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";
import "./Card.css";
import { AdoptionPetContext } from "../context/AdoptionPetContext";

function Card({ pet_id, pet_image, pet_name, type, text }) {
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
        <h4 className="card-title">{pet_name}</h4>
        <p className="card-text text-secondary" style={{textAlign: "justify"}}>
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        {session ? (
          <>
            {type === "adoption" && (
              <NavLink to={"/adoption/form"} state={{ pet_image: pet_image }}>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={fetchPetData}
                >
                  Adoptar
                </button>
              </NavLink>
            )}
            {type === "sponsor" && (
              <NavLink to={"/sponsorship/form"}>
                <button className="btn btn-primary" type="button">
                  Apadrinar
                </button>
              </NavLink>
            )}
          </>
        ) : (
          <NavLink to={"/login"}>
            <button className="btn btn-success">Iniciar sesión</button>
          </NavLink>
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
