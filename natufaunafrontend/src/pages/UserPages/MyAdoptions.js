import React, { useEffect, useState } from "react";
import { useContext } from "react";
import TableUser from "../../components/TableUser";
import { UserContext } from "../../context/UserContext";
import "../Styles.css";

const MyAdoptions = () => {
  const { user } = useContext(UserContext);
  const [adoptionsData, setAdoptionsData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchAdoptions() {
      const response = await fetch(
        `http://localhost:8081/adoption/showAdoptions/${page}/${user.user_id}`
      );
      const data = await response.json();
      setAdoptionsData(data);
    }
    fetchAdoptions();
  }, [page]);

  return (
    <div className="background">
      <div className="container p-4">
        {page >= 2 ? (
          <div className="container">
            {adoptionsData.length === 0 ? (
              <>
                <TableUser data={adoptionsData} dataType={"adoptions"} />
                <p className="text-center fs-3 fw-bolder">
                  No hay adopciones.
                </p>
              </>
            ) : (
              <TableUser data={adoptionsData} dataType={"adoptions"} />
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
                {adoptionsData.length < 6 ? (
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
            {adoptionsData.length === 0 ? (
              <>
                <TableUser data={adoptionsData} dataType={"adoptions"} />
                <p className="text-center fs-3 fw-bolder">
                  No hay adopciones.
                </p>
              </>
            ) : (
              <TableUser data={adoptionsData} dataType={"adoptions"} />
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
                {adoptionsData.length < 6 ? (
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
    </div>
  );
};

export default MyAdoptions;
