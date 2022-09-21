import React from "react";
import Background from "../assets/footer.jpg";

function Footer() {
  return (
    <div className="container-fluid">
      <footer
        className="d-flex justify-content-between align-items-center py-2"
        style={{ height: "120px" }}
      >
        <div className=" nav col-md-4 justify-content-center">
          <p className="text-start">
            funatufauna@gmail.com <br /> 3125451285 <br /> Boyaca - Sogamoso
          </p>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src={Background} alt="footer background" width="350" />
        </div>

        <ul className="nav col-md-4 justify-content-center">
          <li className="nav-item">
            <a
              href="https://github.com/juanescastro29/Video-Gallery"
              className="nav-link px-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-git" style={{ fontSize: 22 }}></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-success m-1"
              href="https://www.facebook.com/FundacionNatufauna/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-success m-1"
              href="https://www.youtube.com/channel/UCXUwIjcAEtEC8os7jG-5U8Q"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-success m-1"
              href="https://www.instagram.com/fundacion_natufauna/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
