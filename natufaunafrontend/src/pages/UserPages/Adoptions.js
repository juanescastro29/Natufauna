import { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import "../Styles.css";

function Adoptions() {
  const [adoptionPets, setAdoptionPets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8081/pet/showPets/adoptions/${page}`
      );
      const data = await response.json();
      setAdoptionPets(data);
    }

    fetchData();
  }, [page]);

  return (
    <div className="background">
      <div className="container p-4">
        <h1 className="text text-dark">
          <center>
            <b>ADOPCIONES</b>
          </center>
        </h1>
        <p className="border border-1 border-dark bg-white p-3 m-4">
          <h3 style={{textAlign: "justify"}}>
            <font face="New York Font">
              En la mayoría de los casos, adoptar significa darle una segunda
              oportunidad a un animal que ha sufrido un proceso de abandono, y
              en ocasiones maltrato. Acogerlo en tu casa de por vida y darle la
              estabilidad, los cuidados y el cariño que necesita va a ayudarlo a
              que recupere su confianza y su autoestima.
            </font>
          </h3>
        </p>
      </div>
      {page >= 2 ? (
        <div className="container">
          {adoptionPets.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">
              No hay mascotas disponibles para adopción.
            </p>
          ) : (
            <Cards data={adoptionPets} type={"adoption"} />
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
              {adoptionPets.length < 6 ? (
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
          {adoptionPets.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">
              No hay mascotas disponibles para adopción.
            </p>
          ) : (
            <Cards data={adoptionPets} type={"adoption"} />
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
              {adoptionPets.length < 6 ? (
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
export default Adoptions;
