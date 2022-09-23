import React from "react";
import { useForm } from "react-hook-form";
import "./Modal.css";

function ModalForm({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar adopción</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row">
              <div className="col-6">
                <label
                  htmlFor="lastUpdateAdoption"
                  className="form-label fw-bolder"
                >
                  Última modificación
                </label>
                <input type="text" className="form-control border-2" disabled />
              </div>
              <div className="col-6">
                <label htmlFor="stateAdoption" className="form-label fw-bolder">
                  Estado:
                </label>
                <select
                  className="form-select border-dark"
                  name="stateAdoption"
                  id="stateAdoption"
                  autoComplete="nope"
                  {...register("stateAdoption")}
                >
                  <option value="En progreso">En progreso</option>
                  <option value="Aceptado">Aceptado</option>
                  <option value="Rechazado">Rechazado</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="commentsAdoption"></label>
                <textarea className="form-control border-dark" name="commentsAdopton" id="commentsAdopton" style={{resize: "none"}}></textarea>
              </div>
            </form>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>

              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
