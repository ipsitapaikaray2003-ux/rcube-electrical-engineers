import "./Clients.css";

import microsoft from "../../assets/microsoft.jpg";
import amazon from "../../assets/amazon.jpg";
import apple from "../../assets/apple.jpg";
import amd from "../../assets/amd.jpg";
import techmahindra from "../../assets/techmahindra.png";
import freshworks from "../../assets/freshworks.png";
import coforge from "../../assets/coforge.png";
import gmr from "../../assets/gmr.png";
import jll from "../../assets/jll.png";
import cbre from "../../assets/cbre.png";
import oyo from "../../assets/oyo.png";
import brigade from "../../assets/brigade.png";

function Clients() {

  const logos = [
    microsoft,
    amazon,
    apple,
    amd,
    techmahindra,
    freshworks,
    coforge,
    gmr,
    jll,
    cbre,
    oyo,
    brigade,
  ];

  return (

    <section className="clients">

      <div className="clients-heading">

        <span>TRUSTED BY LEADING BRANDS</span>

        <h2>Our Valuable Clients</h2>

      </div>

      <div className="clients-slider">

        <div className="clients-track">

          {logos.concat(logos).map((logo, index) => (

            <div
              className="client-logo"
              key={index}
            >

              <img
                src={logo}
                alt="Client Logo"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Clients;