import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import "../Styles.css";
import Slider from "../../components/Slider";

function Sponsorship() {
  const [sponsorshipPets, setSponsorshipPets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8081/pet/showPets/sponsorships/${page}`
      );
      const data = await response.json();
      setSponsorshipPets(data);
    }

    fetchData();
  }, [page]);

  return (
    <div className="background">
      <div className="container p-4">
        <h1 className="text text-dark">
          <center>
            <b>APADRINAMIENTO </b>
          </center>
        </h1>
        <p
          className="border border-1 border-dark p-3 mt-4 fs-4"
          style={{ textAlign: "justify", background: "black" }}
        >
          <font face="New York Font" color="white">
            El apadrinamiento es un apoyo mensual que puedes hacer de forma
            económica o en especie (comida, guacales, medicamentos, etc) para
            todos nuestros rescatados o para uno en particular. Esta donación
            ayuda a la manutención de nuestros perritos en el transcurso de su
            proceso de adopción por una familia que después de un meticuloso
            proceso será el hogar de este amiguito por el resto de su vida. Si
            quieres tener una mascota y no puedes, esta es tu oportunidad
            ¡Anímate!
          </font>
        </p>
        <Slider />
        <p>
          <br />
        </p>
        <p className="fs-4" style={{ textAlign: "justify" }}>
          <font face="New York Font" color="gray">
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
      {page >= 2 ? (
        <div className="container">
          {sponsorshipPets.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">
              No hay mascotas disponibles para apadrinar.
            </p>
          ) : (
            <Cards data={sponsorshipPets} type={"sponsor"} />
          )}
          <div className="row">
            <div className="col text-end">
              <button
                className="btn border-0 bg-transparent"
                type="button"
                onClick={() => setPage(page - 1)}
              >
                <i
                  className="bi bi-caret-left-square"
                  style={{ fontSize: 35 }}
                ></i>
              </button>
            </div>
            <div className="col text-center pt-2">
              <p className="fs-3">{page}</p>
            </div>
            <div className="col text-start">
              {sponsorshipPets.length < 6 ? (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  disabled
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              ) : (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page + 1)}
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          {sponsorshipPets.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">
              No hay mascotas disponibles para apadrinar.
            </p>
          ) : (
            <Cards data={sponsorshipPets} type={"sponsor"} />
          )}
          <div className="row">
            <div className="col text-end">
              {page === 1 ? (
                <div>
                  <button
                    className="btn border-0 bg-transparent"
                    type="button"
                    disabled
                  >
                    <i
                      className="bi bi-caret-left-square"
                      style={{ fontSize: 35 }}
                    ></i>
                  </button>
                </div>
              ) : (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page - 1)}
                >
                  <i
                    className="bi bi-caret-left-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              )}
            </div>
            <div className="col text-center pt-2">
              <p className="fs-3">{page}</p>
            </div>
            <div className="col text-start">
              {sponsorshipPets.length < 6 ? (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  disabled
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              ) : (
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page + 1)}
                >
                  <i
                    className="bi bi-caret-right-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Sponsorship;
