import React from "react";
import Background from '../assets/footer.jpg'

function Footer() {
  return (
    <div className="container justify-content-center">
      <div className="row align-items-center">
        <div className="col text-start">
          <p>
            funatufauna@gmail.com <br /> 3125451285 <br /> Boyaca - Sogamoso
          </p>
        </div>
        <div className="col text-center">
          <img src={Background} alt="footer background" width="450"/>
        </div>
        <div className="col text-end">
          <a
            className="btn btn-primary m-1"
            href="https://www.facebook.com/FundacionNatufauna/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="btn btn-primary m-1"
            href="https://www.youtube.com/channel/UCXUwIjcAEtEC8os7jG-5U8Q"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
          <a
            className="btn btn-primary m-1"
            href="https://www.instagram.com/fundacion_natufauna/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
