import React from "react";
import Cards from "../components/Cards";
import image1 from "../assets/ben.png";
import image2 from "../assets/cafe.png";
import image3 from "../assets/sopa.png";
import "./Styles.css";

const adoptionPets = [
  {
    id: 1,
    title: "Fazt Web",
    image: image1,
    type: "sponsor",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    type: "sponsor",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    type: "sponsor",
  },
  {
    id: 4,
    title: "Fazt ",
    image: image3,
    type: "sponsor",
    text: "holi",
  },
];

function Sponsorship() {
  return (
    <div className="background">
      <div className="container p-4">
        <h1 className="text text-dark">Apadrinamiento</h1>
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

export default Sponsorship;
