import "./Achievements.css";

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

function Achievements() {
  return (
    <section className="achievements">

      <div className="achievement-container">

        {/* Heading */}

        <div className="achievement-heading">

          <span>OUR IMPACT</span>

          <h2>
            Engineering Excellence
            <br />
            Built On Trust
          </h2>

          <p>
            Delivering reliable engineering solutions with quality,
            innovation and commitment across commercial and
            industrial projects.
          </p>

        </div>

        {/* Counter */}

        <div className="counter-grid">

          <div className="counter-card">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>

          <div className="counter-card">
            <h3>250+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="counter-card">
            <h3>80+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="counter-card">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

        </div>

        {/* Clients */}

        <div className="client-heading">

          <h3>Trusted by Industry Leaders</h3>

        </div>

        <div className="logo-slider">

          <div className="logo-track">

            {/* First Set */}

            <div className="logo"><img src={microsoft} alt="Microsoft" /></div>
            <div className="logo"><img src={amazon} alt="Amazon" /></div>
            <div className="logo"><img src={apple} alt="Apple" /></div>
            <div className="logo"><img src={amd} alt="AMD" /></div>
            <div className="logo"><img src={techmahindra} alt="Tech Mahindra" /></div>
            <div className="logo"><img src={freshworks} alt="Freshworks" /></div>
            <div className="logo"><img src={coforge} alt="Coforge" /></div>
            <div className="logo"><img src={gmr} alt="GMR" /></div>
            <div className="logo"><img src={jll} alt="JLL" /></div>
            <div className="logo"><img src={cbre} alt="CBRE" /></div>
            <div className="logo"><img src={oyo} alt="OYO" /></div>
            <div className="logo"><img src={brigade} alt="Brigade" /></div>

            {/* Duplicate for infinite scroll */}

            <div className="logo"><img src={microsoft} alt="" /></div>
            <div className="logo"><img src={amazon} alt="" /></div>
            <div className="logo"><img src={apple} alt="" /></div>
            <div className="logo"><img src={amd} alt="" /></div>
            <div className="logo"><img src={techmahindra} alt="" /></div>
            <div className="logo"><img src={freshworks} alt="" /></div>
            <div className="logo"><img src={coforge} alt="" /></div>
            <div className="logo"><img src={gmr} alt="" /></div>
            <div className="logo"><img src={jll} alt="" /></div>
            <div className="logo"><img src={cbre} alt="" /></div>
            <div className="logo"><img src={oyo} alt="" /></div>
            <div className="logo"><img src={brigade} alt="" /></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;