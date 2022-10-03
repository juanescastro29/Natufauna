import React, { useEffect, useState } from "react";
import FormPet from "../../components/FormPet";
import Table from "../../components/Table";

const AdminPets = () => {
  const [pets, setPets] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchAdoptions() {
      const response = await fetch(
        `http://localhost:8081/pet/showPets/${page}`
      );
      const data = await response.json();
      setPets(data);
      console.log(data);
    }
    fetchAdoptions();
  }, [page]);

  return (
    <div className="background">
      <div className="cointainer p-4">
        {page >= 2 ? (
          <div className="container">
            {pets.length === 0 ? (
              <>
                <Table data={pets} dataType={"pets"} />
                <p className="text-center fs-3 fw-bolder">No hay adopciones.</p>
              </>
            ) : (
              <Table data={pets} dataType={"pets"} />
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
                {pets.length < 6 ? (
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
            {pets.length === 0 ? (
              <>
                <Table data={pets} dataType={"pets"} />
                <p className="text-center fs-3 fw-bolder">No hay adopciones.</p>
              </>
            ) : (
              <Table data={pets} dataType={"pets"} />
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
                {pets.length < 6 ? (
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
      <div className="container p-3">
        <FormPet />
      </div>
    </div>
  );
};

export default AdminPets;
