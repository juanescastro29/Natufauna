import React from "react";

const TableUser = ({ data, dataType }) => {

  return (
    <div className="table-responsive">
      <table className="table caption-top bg bg-white border border-dark table-striped table-hover">
        {dataType === "adoptions" && (
          <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
            Lista de adopciones
          </caption>
        )}
        {dataType === "sponsorships" && (
          <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
            Lista de apadrinamientos
          </caption>
        )}
        {dataType === "donations" && (
          <caption className="fs-3 fw-bolder" style={{ color: "green" }}>
            Lista de donaciones
          </caption>
        )}
        <thead>
          {dataType === "adoptions" && (
            <>
              <tr>
                <th scope="col">Id Adoption</th>
                <th scope="col">Id Mascota</th>
                <th scope="col">Id Usuario</th>
                <th scope="col">Fecha de solicitud</th>
                <th scope="col">Ultima actualización</th>
                <th scope="col">Comentarios</th>
                <th scope="col">Estado</th>
              </tr>
            </>
          )}
          {dataType === "sponsorships" && (
            <>
              <tr>
                <th scope="col">Id Apadrinamiento</th>
                <th scope="col">Id Mascota</th>
                <th scope="col">Id Usuario</th>
                <th scope="col">Estado</th>
              </tr>
            </>
          )}
          {dataType === "donations" && (
            <>
              <tr>
                <th scope="col">Id Donacion</th>
                <th scope="col">Id Usuario</th>
                <th scope="col">Fecha</th>
                <th scope="col">Valor</th>
                <th scope="col">Estado</th>
              </tr>
            </>
          )}
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
                  </tr>
                )
              )}
            </>
          )}
          {dataType === "sponsorships" && (
            <>
              {data.map(({ sponsorship_id, user, pet, status }) => (
                <tr key={sponsorship_id}>
                  <th scope="row">{sponsorship_id}</th>
                  <td>{pet.pet_id}</td>
                  <td>{user.user_id}</td>
                  <td>{status}</td>
                </tr>
              ))}
            </>
          )}
          {dataType === "donations" && (
            <>
              {data.map(
                ({ donation_id, date, donation_value, status, user }) => (
                  <tr key={donation_id}>
                    <th scope="row">{donation_id}</th>
                    <td>{user.user_id}</td>
                    <td>{date}</td>
                    <td>{donation_value}</td>
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

export default TableUser;