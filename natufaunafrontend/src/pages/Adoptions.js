import React from "react";
import Information from "../components/Information";
import Cards from '../components/Cards'
import More from '../components/More'

const info = [
  {
    title: "Adoptions",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupttem odit blanditiis commodi maiores est rerum soluta accusantium non labore iusto possimus neque molestiae obcaecati eos, consequuntur modi enim, expedita impedit.",
  },
];

function Adoptions() {
  return (
    <div className="adoptions">
      {info.map(({ title, text }) => (
        <Information title={title} text={text} />
      ))}
      <Cards/>
      <More/>
    </div>
  );
}
export default Adoptions;
