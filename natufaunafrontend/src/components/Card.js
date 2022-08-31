import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Card.css";

function Card({ pet_id, pet_image, pet_name, type, text }) {
  const { user } = useContext(UserContext);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (user === null) {
      setPath("/login");
    }else {
      setPath("/adoption/form")
    }
  }, [user]);

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp mb-5">
      <div className="overflow">
        <img src={pet_image} alt="pet profile" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{pet_name}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        {type === "adoption" ? (
          <NavLink
            to={path}
            state={{ pet_id: pet_id, pet_image: pet_image, pet_name: pet_name }}
          >
            <button className="btn btn-primary" type="button">
              Adoptar
            </button>
          </NavLink>
        ) : (
          ""
        )}
        {type === "sponsor" ? (
          <NavLink to={"/sponsorship/form"}>
            <button className="btn btn-primary" type="button">
              Apadrinar
            </button>
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  pet_name: PropTypes.string.isRequired,
  text: PropTypes.string,
  pet_image: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
