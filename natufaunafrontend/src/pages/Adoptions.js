import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import "./Styles.css";

function Adoptions() {
  
  const [adoptionPets, setAdoptionPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/pet/showPets")
      .then((res) => res.json())
      .then((result) => {
        setAdoptionPets(result);
      });
  }, []);

  return (
    <div className="background">
      <div className="container p-4">
        <h1 className="text text-dark">Adopciones</h1>
        <p className="border border-2 border-dark bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          inventore animi fugiat quasi eum! Accusantium tenetur dolores atque
          animi in, repudiandae autem quia exercitationem maiores facere omnis
          numquam sed? Harum.
        </p>
      </div>
      <Cards data={adoptionPets} />
    </div>
  );
}
export default Adoptions;
