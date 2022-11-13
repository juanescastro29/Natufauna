import React from "react";
import "./Modal.css";

function ModalConfirm({ type, id }) {
  async function deleteSponsorship(sponsorship_id) {
    await fetch(
      `http://localhost:8081/sponsorship/deleteSponsorship/${sponsorship_id}`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  }

  async function deletePet(pet_id) {
    await fetch(`http://localhost:8081/pet/deletePet/${pet_id}`, {
      method: "DELETE",
    });
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
                <h4 className="text-center">¿Desea eliminar el vinculo de apadrinamiento?</h4>
              )}
              {type === "pet" && (
                <h4 className="text-center">¿Desea eliminar esta mascota?</h4>
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
              {type === "pet" && (
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => deletePet(id)}
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
