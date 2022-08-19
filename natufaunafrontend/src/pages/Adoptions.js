import React, { useEffect, useState } from "react";
import Information from "../components/Information";
import "./Styles.css";

const info = [
  {
    title: "Adopciones",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupttem odit blanditiis commodi maiores est rerum soluta accusantium non labore iusto possimus neque molestiae obcaecati eos, consequuntur modi enim, expedita impedit.",
  },
];

function Adoptions() {
  const [adoptionPets, setAdoptionPets] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/pet/showPets";
    fetch(url, {
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((result) => {
        setAdoptionPets(result);
        console.log(adoptionPets)
      });
  }, []);

  return (
    <div className="background">
      {info.map(({ title, text }) => (
        <Information title={title} text={text} />
      ))}
    </div>
  );
}
export default Adoptions;
