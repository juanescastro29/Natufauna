import React from "react";
import { NavLink } from "react-router-dom";
import Tarjeta from "../assets/tarjeta.png";
import PSE from "../assets/pse.png";
import "./Styles.css";

function Donations() {
  return (
    <div className="background">
      <div className="container p-4">
        <h2 className="text text-dark fw-bolder">Donaciones</h2>
        <div className="row text-center">
          <div className="col-md-6">
            <div className="container border border-2 p-2 border-dark bg-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                praesentium eos ipsum nisi eaque? Consectetur iusto amet ab
                assumenda reiciendis magni accusamus! Possimus officia dolorem
                expedita fuga veniam asperiores molestiae!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container border border-2 border-dark bg-white p-2">
              <div className="row mb-1">
                <h4>Tarjeta de credito</h4>
              </div>
              <div className="row">
                <NavLink to="/adoption">
                  <button className="border-0 bg-transparent" type="button">
                    <img
                      src={Tarjeta}
                      alt="tarjeta logo"
                      className="rounded rounded-circle bg-white"
                      width="130"
                    />
                  </button>
                </NavLink>
              </div>
              <div className="row mt-3">
                <h4>Pagos PSE</h4>
              </div>
              <div className="row">
                <NavLink to="/adoption">
                  <button className="border-0 bg-transparent" type="button">
                    <img
                      src={PSE}
                      alt="pse logo"
                      className="rounded rounded-circle bg-white "
                      width="140"
                    />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donations;
