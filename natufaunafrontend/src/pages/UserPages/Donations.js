import React from "react";
import { NavLink } from "react-router-dom";
import Tarjeta from "../../assets/tarjeta.png";
import PSE from "../../assets/pse.png";
import "../Styles.css";

function Donations() {
  return (
    <div className="background">
      <div className="container p-4">
      <h1 className="text text-dark">
          {" "}
          <center>
            <b>DONACIONES </b>
          </center>
        </h1>
        <div className="row text-center">
          <div className="col-md-6">
            <div className="container border border-1 p-3 border-dark bg-white">
              <p><center>
              <font face="New York Font">
              Todos los peluditos que rescatamos día a día nos representan un trabajo constante y fuerte para poder 
              ofrecerles un buen futuro. Necesitamos de la mayor ayuda posible para que mutuamente Huellas Perros al
               Servicio pueda crecer y ayudar cada día más a lo miles de cachorros que se encuentran por las calles 
               sin hogar.
               <br /><br />
                Tus aportes son muy valiosos para nosotros, por ende si estas comprometido y dispuesto a colaborar estas
                 bienvenido y con los brazos abiertos. Desde un Kilo de comida es recibido ya que para mantener a nuestros
                  peluditos necesitamos un poco más de una tonelada mensual.
                  <br /><br />
                Si quieres ayudarnos con las donaciones de alimentación solamente es que vayas a la tienda más cercana,
                 la compres y te comuniques con nosotros para que lo más pronto posible nuestros peluditos disfruten de
                  un delicioso banquete preparado por ti.Las donaciones físicas para la fundación son muy importantes, 
                  para Huellas al servicio es una misión esencial, que los perros convivan en un lugar seguro con todas
                   las condiciones necesarias para poder crecer, desarrollarse y socializar mientras son adoptados.
                   </font>
                   </center>
                   
              </p>

            </div>
          </div>
          <div className="col-md-6">
            <div className="container border border-1 border-dark bg-white p-2">
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
