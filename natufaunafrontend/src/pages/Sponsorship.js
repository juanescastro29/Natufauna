import React from "react";
import Information from "../components/Information";
import Cards from '../components/Cards'
import image1 from "../assets/ben.png";
import image2 from '../assets/cafe.png'
import image3 from '../assets/sopa.png'
import "./Styles.css"

const info = [
  {
    title: "Apadrinamiento",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupttem odit blanditiis commodi maiores est rerum soluta accusantium non labore iusto possimus neque molestiae obcaecati eos, consequuntur modi enim, expedita impedit.",
  },
];

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
    title: "Fazt Youtube",
    image: image3,
    type: "sponsor",
  },
]

function Sponsorship() {
  return (
    <div className="background">
      {info.map(({ title, text }) => (
        <Information title={title} text={text} />
      ))}
      <Cards data={adoptionPets} />
    </div>
  );
}
export default Sponsorship;
