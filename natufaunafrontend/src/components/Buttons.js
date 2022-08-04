import React from "react";
import { NavLink } from "react-router-dom";
import Adoption from "../assets/adoption.jpg";
import Sponsorship from "../assets/sponsorship.jpeg";
import Donation from "../assets/donation.jpg";

function Buttons() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-4 text-center">
          <NavLink to="/adoption">
            <button className="border-0 bg-white" type="button">
              <img
                src={Adoption}
                alt="adoption logo"
                className="rounded rounded-circle bg-white border border-2 border-dark"
                width="160"
              />
            </button>
          </NavLink>
        </div>
        <div className="col-md-4 text-center">
          <NavLink to="/sponsorship">
            <button className="border-0 bg-white" type="button">
              <img
                src={Sponsorship}
                alt="sponsorship logo"
                className="rounded rounded-circle bg-white border border-2 border-dark"
                width="160"
              />
            </button>
          </NavLink>
        </div>
        <div className="col-md-4 text-center">
          <NavLink to="/donation">
            <button className="border-0 bg-white" type="button">
              <img
                src={Donation}
                alt="donation logo"
                className="rounded rounded-circle bg-white border border-2 border-dark"
                width="160"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
