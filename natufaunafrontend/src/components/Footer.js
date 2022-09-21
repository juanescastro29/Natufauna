import React from "react";
import Background from "../assets/footer.jpg";

function Footer() {
  return (
    <div className="container-fluid">
      <footer
        className="d-flex justify-content-between align-items-center static-bottom"
        style={{ height: "100px" }}
      >
        <div className="nav col-md-4 justify-content-center">
          <p className="text-start">
            funatufauna@gmail.com <br /> 3125451285 <br /> Boyaca - Sogamoso
          </p>
        </div>

        <div className="nav col-md-4 d-flex align-items-center justify-content-center">
          <img src={Background} alt="footer background" width="350" />
        </div>

        <ul className="nav col-md-4 justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link text-success"
              href="https://www.facebook.com/FundacionNatufauna/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook" style={{ fontSize: 25 }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-success"
              href="https://www.youtube.com/channel/UCXUwIjcAEtEC8os7jG-5U8Q"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-youtube" style={{ fontSize: 25 }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-success"
              href="https://www.instagram.com/fundacion_natufauna/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram" style={{ fontSize: 25 }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
