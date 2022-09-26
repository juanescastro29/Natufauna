import React from "react";
import { NavLink } from "react-router-dom";
import "./Modal.css";

function Modal({ adoptionResponse }) {
  return (
    <>
      <div
        className="modal fade"
        id="requestModal"
        tabIndex="-1"
        aria-labelledby="requestModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {adoptionResponse === "Adoption saved" ? (
                <div className="f-modal-alert">
                  <div className="f-modal-icon f-modal-success animate">
                    <span className="f-modal-line f-modal-tip animateSuccessTip"></span>
                    <span className="f-modal-line f-modal-long animateSuccessLong"></span>
                    <div className="f-modal-placeholder"></div>
                    <div className="f-modal-fix"></div>
                  </div>
                </div>
              ) : (
                <div className="f-modal-alert">
                  <div className="f-modal-icon f-modal-error animate">
                    <span className="f-modal-x-mark">
                      <span className="f-modal-line f-modal-left animateXLeft"></span>
                      <span className="f-modal-line f-modal-right animateXRight"></span>
                    </span>
                    <div className="f-modal-placeholder"></div>
                    <div className="f-modal-fix"></div>
                  </div>
                </div>
              )}
              {adoptionResponse === "Adoption saved" ? (
                <p className="fs-4 fw-bolder text-center">
                  Solicitud de adopción enviada correctamente
                </p>
              ) : (
                <>
                  {adoptionResponse === "Exceeds the number of adoptions" ? (
                    <p className="fs-4 fw-bolder text-center">
                      No se permite tener más de dos procesos de adopción.
                    </p>
                  ) : (
                    <p className="fs-4 fw-bolder text-center">
                      Error en el envio de la solicitud de adopción
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="modal-footer justify-content-center">
              {adoptionResponse === "Adoption saved" ? (
                <NavLink to={"/"}>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Aceptar
                  </button>
                </NavLink>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Aceptar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
