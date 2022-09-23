import React, { useState } from "react";
import ModalForm from "./ModalForm";

const Table = ({ data, dataType }) => {
  const [adoptionEdit, setAdoptionEdit] = useState({});

  function seachAdoption(adoption_id) {
    const dataAdoption = data.find((adoption) => {
      return data.adoption_id === adoption_id;
    });
    setAdoptionEdit(dataAdoption);
  }

  return (
    <div className="container">
      <table className="table caption-top bg bg-white border border-dark table-striped table-hover">
        <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
          Lista de adopciones
        </caption>
        <thead>
          <tr>
            <th scope="col">Id Adoption</th>
            <th scope="col">Id Mascota</th>
            <th scope="col">Id Usuario</th>
            <th scope="col">Fecha de solicitud</th>
            <th scope="col">Ultima actualización</th>
            <th scope="col">Comentarios</th>
            <th scope="col">Estado</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {dataType === "adoptions" && (
            <>
              {data.map(
                ({
                  adoption_id,
                  adoption_comments,
                  date,
                  date_update,
                  status,
                  user,
                  pet,
                }) => (
                  <tr key={adoption_id}>
                    <th scope="row">{adoption_id}</th>
                    <td>{pet.pet_id}</td>
                    <td>{user.user_id}</td>
                    <td>{date}</td>
                    <td>{date_update}</td>
                    <td>{adoption_comments}</td>
                    <td>{status}</td>
                    <td align="center">
                      <button
                        type="submit"
                        className="border-0 bg-transparent"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        onClick={() => seachAdoption(adoption_id)}
                      >
                        <i
                          class="bi bi-pencil-square"
                          style={{ fontSize: 20, color: "green" }}
                        ></i>
                      </button>
                      <ModalForm data={adoptionEdit} />
                    </td>
                  </tr>
                )
              )}
            </>
          )}
          {dataType === "sponsorships" && (
            <>
              {data.map(
                ({
                  adoption_id,
                  adoption_comments,
                  date,
                  date_update,
                  status,
                  user,
                  pet,
                }) => (
                  <tr key={adoption_id}>
                    <th scope="row">{adoption_id}</th>
                    <td>{pet.pet_id}</td>
                    <td>{user.user_id}</td>
                    <td>{date}</td>
                    <td>{date_update}</td>
                    <td>{adoption_comments}</td>
                    <td>{status}</td>
                    <td>
                      <button type="button">show data</button>
                    </td>
                  </tr>
                )
              )}
            </>
          )}
          {dataType === "donations" && (
            <>
              {data.map(
                ({
                  adoption_id,
                  adoption_comments,
                  date,
                  date_update,
                  status,
                  user,
                  pet,
                }) => (
                  <tr key={adoption_id}>
                    <th scope="row">{adoption_id}</th>
                    <td>{pet.pet_id}</td>
                    <td>{user.user_id}</td>
                    <td>{date}</td>
                    <td>{date_update}</td>
                    <td>{adoption_comments}</td>
                    <td>{status}</td>
                    <td>
                      <button type="button">show data</button>
                    </td>
                  </tr>
                )
              )}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
