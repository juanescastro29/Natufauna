import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import "./Styles.css";

function Adoptions() {
  
  const [adoptionPets, setAdoptionPets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8080/pet/showPets/adoptions/${page}`
      );
      const data = await response.json();
      const responseImages = await fetch(
        `https://api.thedogapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=1&limit=${data.length}`
      );
      const dataImages = await responseImages.json();
      if (data.length !== 0) {
        for (let i = 0; i < dataImages.length; i++) {
          data[i].pet_image = dataImages[i].url;
        }
      }
      setAdoptionPets(data);
    }

    fetchData();
  }, [page]);

  return (
    <div className="background">
      <div className="container p-4">
        <h2 className="text text-dark">Adopciones</h2>
        <p className="border border-1 border-dark bg-white p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          inventore animi fugiat quasi eum! Accusantium tenetur dolores atque
          animi in, repudiandae autem quia exercitationem maiores facere omnis
          numquam sed? Harum.
        </p>
      </div>
      {page >= 2 ? (
        <div className="container">
          {adoptionPets.length === 0 ? (
            <p className="text-center fs-2 fw-bolder">No hay más mascotas disponibles.</p>
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
                <i className="bi bi-caret-left-square" style={{ fontSize: 35 }}></i>
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
          <Cards data={adoptionPets} type={"adoption"} />
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Adoptions;
