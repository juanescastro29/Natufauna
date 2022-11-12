import React from "react";
import Cards from "../../components/Cards";
import ap1 from "../../assets/ap1.jpg";
import ap2 from "../../assets/ap2.jpg";
import ap3 from "../../assets/ap3.jpg";
import ap4 from "../../assets/ap4.jpg";
import ap5 from "../../assets/ap5.jpg";
import ap6 from "../../assets/ap6.jpg";
import "../Styles.css";
import Slider from "../../components/Slider";

const adoptionPets = [
  {
    pet_id: 1,
    pet_name: "Lobo",
    pet_image: ap1,
    type: "sponsor",
    text: " ",
  },
  {
    pet_id: 2,
    pet_name: "Snoopy",
    pet_image: ap2,
    type: "sponsor",
    text: " ",
  },
  {
    pet_id: 3,
    pet_name: "Milú",
    pet_image: ap3,
    type: "sponsor",
    text: " ",
  },
  {
    pet_id: 4,
    pet_name: "Marley",
    pet_image: ap4,
    type: "sponsor",
    text: " ",
  },
  {
    pet_id: 5,
    pet_name: "Bolt",
    pet_image: ap5,
    type: "sponsor",
    text: " ",
  },
  {
    pet_id: 6,
    pet_name: "Max",
    pet_image: ap6,
    type: "sponsor",
    text: " ",
  },
];

function Sponsorship() {
  return (
    <div className="background">
      <div className="container p-4">
        <h1 className="text text-dark">
          <center>
            <b>APADRINAMIENTO </b>
          </center>
        </h1>
        <p
          className="border border-1 border-dark p-3 m-4"
          style={{ textAlign: "justify", background: "black" }}
        >
          <font face="New York Font" size="4" color="white">
            <h3>
              El apadrinamiento es un apoyo mensual que puedes hacer de forma
              económica o en especie (comida, guacales, medicamentos, etc) para
              todos nuestros rescatados o para uno en particular. Esta donación
              ayuda a la manutención de nuestros perritos en el transcurso de su
              proceso de adopción por una familia que después de un meticuloso
              proceso será el hogar de este amiguito por el resto de su vida. Si
              quieres tener una mascota y no puedes, esta es tu oportunidad
              ¡Anímate!
            </h3>
          </font>
        </p>
        <Slider />
        <p>
          {" "}
          <br />
        </p>
        <p className="">
          <font face="New York Font" size="4" color="gray">
            <h3>
              <center>
                {" "}
                Existen muchas personas que aman a los perros y a los gatos,
                pero que no pueden tenerlos en casa.
                <br />
                Bien sea por falta de tiempo, de un espacio adecuado o por falta
                de recursos, pero no tienen la posibilidad de darles un hogar ni
                de disfrutar de su compañía.
                <br />
                <br /> Conscientes de que no todos pueden adoptar a una mascota,
                son cada vez más las fundaciones que ofrecen el servicio de
                apadrinamiento, que consiste en apoyar económicamente el
                sostenimiento de un perro o un gato, o asistiendo a sitios donde
                los puedan pasear o cuidar, ante la imposibilidad de tenerlos en
                su casa.
              </center>
            </h3>
          </font>
        </p>
      </div>
      <Cards data={adoptionPets} type="sponsor" />
    </div>
  );
}
export default Sponsorship;
