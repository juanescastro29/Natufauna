import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import "./Styles.css";

function Adoptions() {
  const [adoptionPets, setAdoptionPets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8080/pet/showPets/adoptions/${page}`
      );
      const data = await response.json();
      console.log(data);
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
        <h1 className="text text-dark">Adopciones</h1>
        <p className="border border-2 border-dark bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          inventore animi fugiat quasi eum! Accusantium tenetur dolores atque
          animi in, repudiandae autem quia exercitationem maiores facere omnis
          numquam sed? Harum.
        </p>
      </div>
      {page >= 2 ? (
        <div className="container">
          {
            adoptionPets.length === 0
            ?<p className="text-center fs-2">No hay mas mascotas</p>
            :<Cards data={adoptionPets} type={"adoption"} />
          }
        <div className="row">
          <div className="col-md-4 text-end">
            <button
                  className="border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page - 1)}
                >
                  <i class="bi bi-caret-left-square" style={{ fontSize: 35 }} ></i>
            </button>
          </div>
          <div className="col-md-4 text-center pt-2">
            <p className="fs-3">{page}</p>
          </div>
          <div className="col-md-4 text-start">
            {
              adoptionPets.length === 0
              ?
              <button
              className="border-0 bg-transparent"
              type="button"
              disabled
            >
              <i class="bi bi-caret-right-square" style={{ fontSize: 35 }}></i>
            </button>
              :<button
              className="border-0 bg-transparent"
              type="button"
              onClick={() => setPage(page + 1)}
            >
              <i class="bi bi-caret-right-square" style={{ fontSize: 35 }}></i>
            </button>
            }
          </div>
        </div>
      </div>
      ) : (
        <div className="container">
          <Cards data={adoptionPets} type={"adoption"} />  
        <div className="row">
            <div className="col-md-4 text-end">
              {page === 1 ? (
                <div>
                  <button
                    className="border-0 bg-transparent"
                    type="button"
                    disabled
                  >
                    <i class="bi bi-caret-left-square" style={{ fontSize: 35 }} ></i>
                  </button>
                </div>
              ) : (
                
                  <button
                    className="border-0 bg-transparent"
                    type="button"
                    onClick={() => setPage(page - 1)}
                  >
                    <i class="bi bi-caret-left-square" style={{ fontSize: 35 }} ></i>
                  </button>
                
              )}
            </div>
            <div className="col-md-4 text-center pt-2">
              <p className="fs-3">{page}</p>
            </div>
            <div className="col-md-4 text-start">
              <button
                className="border-0 bg-transparent"
                type="button"
                onClick={() => setPage(page + 1)}
              >
                <i class="bi bi-caret-right-square" style={{ fontSize: 35 }}></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Adoptions;
