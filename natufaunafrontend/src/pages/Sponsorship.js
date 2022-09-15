import React from "react";
import Cards from "../components/Cards";
import ap1 from "../assets/ap1.jpg";
import ap2 from "../assets/ap2.jpg";
import ap3 from "../assets/ap3.jpg";
import ap4 from "../assets/ap4.jpg";
import ap5 from "../assets/ap5.jpg";
import ap6 from "../assets/ap6.jpg";
import "./Styles.css";
import Slider from "../components/Slider";
import Carousel from "../components/Carousel";

const adoptionPets = [
  {
    id: 1,
    title: "Lobo",
    image: ap1,
    type: "sponsor",
    text: " ",
  },
  {
    id: 2,
    title: "Snoopy",
    image: ap2,
    type: "sponsor",
    text: " ",
  },
  {
    id: 3,
    title: "Milú",
    image: ap3,
    type: "sponsor",
    text: " ",
  },
  {
    id: 4,
    title: "Marley",
    image: ap4,
    type: "sponsor",
    text: " ",
  },
  {
    id: 5,
    title: "Bolt",
    image: ap5,
    type: "sponsor",
    text: " ",
  },
  {
    id: 6,
    title: "Max",
    image: ap6,
    type: "sponsor",
    text: " ",
  },
];

function Sponsorship() {
  return (
    <div className="background">
      <div className="container p-2">
        <h1 className="text text-dark">
          {" "}
          <center>
            <b>APADRINAMIENTO </b>
          </center>
        </h1>
        <p>
          El apadrinamiento es un apoyo mensual que puedes hacer de forma
          económica o en especie (comida, guacales, medicamentos, etc) para
          todos nuestros rescatados o para uno en particular. Esta donación
          ayuda a la manutención de nuestros perritos en el transcurso de su
          proceso de adopción por una familia que después de un meticuloso
          proceso será el hogar de este amiguito por el resto de su vida. Si
          quieres tener una mascota y no puedes, esta es tu oportunidad
          ¡Anímate!
        </p>
        <Slider />
        <p> aaaa</p>

        <p>
          {" "}
          <br />
        </p>
        <p
          className="/n border border-4 border-black p-4 "
          style={{ textAlign: "justify", background: "grey", width: "1000px", marginLeft:"60px" }}
        >
          <font face="New York Font" size="4" color="green">
            {" "}
            Existen muchas personas que aman a los perros y a los gatos, pero
            que no pueden tenerlos en casa.
            <br />
            Bien sea por falta de tiempo, de un espacio adecuado o por falta de
            recursos, pero no tienen la posibilidad de darles un hogar ni de
            disfrutar de su compañía.
            <br />
            <br /> Conscientes de que no todos pueden adoptar a una mascota, son
            cada vez más las fundaciones que ofrecen el servicio de
            apadrinamiento, que consiste en apoyar económicamente el
            sostenimiento de un perro o un gato, o asistiendo a sitios donde los
            puedan pasear o cuidar, ante la imposibilidad de tenerlos en su
            casa.
          </font>
        </p>
      </div>

      <Cards data={adoptionPets} />
    </div>
  );
}
export default Sponsorship;
