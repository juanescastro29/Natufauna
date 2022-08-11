import React from "react";
import { NavLink } from "react-router-dom";
import Tarjeta from "../assets/tarjeta.png";
import PSE from "../assets/pse.png";

function Donations() {
  return (
    <div className="container p-3">
      <div className="pt-2">
        <h1>Donaciones</h1>
      </div>
      <div className="row text-center">
        <div className="col-md-6 m">
          <div className="container border border-2 p-2 border-dark">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              praesentium eos ipsum nisi eaque? Consectetur iusto amet ab
              assumenda reiciendis magni accusamus! Possimus officia dolorem
              expedita fuga veniam asperiores molestiae!
            </p>
          </div>
        </div>
        <div className="col-md-6 border border-2 border-dark">
          <div className="row row-cols-1 p-3 text center">
            <div className="col mb-1">
              <h4>Tarjeta de credito</h4>
            </div>
            <div className="col">
              <NavLink to="/adoption">
                <button className="border-0 bg-white" type="button">
                  <img
                    src={Tarjeta}
                    alt="tarjeta logo"
                    className="rounded rounded-circle bg-white"
                    width="130"
                  />
                </button>
              </NavLink>
            </div>
            <div className="col mt-3">
              <h4>Pagos PSE</h4>
            </div>
            <div className="col">
              <NavLink to="/adoption">
                <button className="border-0 bg-white" type="button">
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
  );
}

export default Donations;
