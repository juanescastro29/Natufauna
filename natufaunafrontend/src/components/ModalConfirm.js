import React from "react";
import "./Modal.css";

function ModalConfirm({ type, id }) {
  async function deleteSponsorship(sponsorship_id) {
    const response = await fetch(
      `http://localhost:8081/sponsorship/deleteSponsorship/${sponsorship_id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.text();
    console.log(data);
    window.location.reload();
  }

  return (
    <>
      <div
        className="modal fade"
        id="confirmModal"
        tabIndex="-1"
        aria-labelledby="confirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {type === "sponsor" && (
                <p>¿Desea eliminar el vinculo de apadrinamiento?</p>
              )}
            </div>
            <div className="modal-footer justify-content-center">
              {type === "sponsor" && (
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => deleteSponsorship(id)}
                >
                  Aceptar
                </button>
              )}
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalConfirm;
