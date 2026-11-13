import "./Clients.css";

// =======================
// PROJECT LOGOS
// =======================

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

import google from "../../assets/google.png";
import jsw from "../../assets/jsw.png";
import centrus from "../../assets/centrus.png";
import copart from "../../assets/copart.png";
import zap91 from "../../assets/zap91.png";
import doordash from "../../assets/doordash.png";
import elixir from "../../assets/elixir.png";
import chubb from "../../assets/chubb.png";
import innov8 from "../../assets/innov8.png";
import att from "../../assets/att.png";

// =======================
// CLIENT LOGOS
// =======================

import tablespace from "../../assets/tablespace.png";
import satva from "../../assets/satva.png";
import studioMasons from "../../assets/studio-masons.png";
import jrdInteriors from "../../assets/jrd-interiors.png";
import dearcReality from "../../assets/dearc-reality.png";
import dwp from "../../assets/dwp.png";
import designArc from "../../assets/design-arc.png";
import eleganz from "../../assets/eleganz.png";
import interia from "../../assets/interia.png";
import knowledgeRealityTrust from "../../assets/knowledge-reality-trust.png";
import winwire from "../../assets/winwire.png";
import simpliwork from "../../assets/simpliwork.png";
import devInteriors from "../../assets/dev-interiors.png";
import mfine from "../../assets/mfine.png";

// Uncomment after adding logo files

// import devabumi from "../../assets/clients/devabumi.png";
// import designIcon from "../../assets/clients/design-icon.png";
// import corker from "../../assets/clients/corker.png";
// import interics from "../../assets/clients/interics.png";
// import corporateSupplies from "../../assets/clients/corporate-supplies.png";

function Clients() {

  const projectLogos = [
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
    google,
    jsw,
    centrus,
    copart,
    zap91,
    doordash,
    elixir,
    chubb,
    innov8,
    att,
  ];

  const clientLogos = [
    tablespace,
    simpliwork,
    satva,
    studioMasons,
    devInteriors,
    jrdInteriors,
    winwire,
    dearcReality,
    dwp,
    designArc,
    eleganz,
    mfine,
    interia,
    knowledgeRealityTrust,
  ];

  return (

    <section className="clients">

      {/* ======================
          PROJECTS
      ======================= */}

      <div className="clients-heading">

        <span>PROJECT PORTFOLIO</span>

        <h2>Projects We Have Executed</h2>

        <p>
          Delivering engineering excellence across
          commercial, industrial and infrastructure
          projects with quality, precision and
          engineering excellence.
        </p>

      </div>

      <div className="clients-slider">

        <div className="clients-track">

          {projectLogos.concat(projectLogos).map((logo, index) => (

            <div
              className="client-logo"
              key={index}
            >

              <img
                src={logo}
                alt="Project Logo"
              />

            </div>

          ))}

        </div>

      </div>
            {/* ======================
          OUR TRUSTED CLIENTS
      ======================= */}

      <div
        className="clients-heading"
        style={{ marginTop: "100px" }}
      >

        <span>OUR TRUSTED CLIENTS</span>

        <h2>Clients We Serve</h2>

        <p>
          We are proud to work with leading organizations across
          commercial, industrial and infrastructure sectors,
          delivering quality engineering solutions and long-term
          partnerships.
        </p>

      </div>

      <div className="clients-slider reverse">

        <div className="clients-track">

          {clientLogos.concat(clientLogos).map((logo, index) => (

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