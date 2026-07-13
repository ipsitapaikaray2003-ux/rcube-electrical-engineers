import "./CompanyProfile.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";
import company from "../../assets/about.png";

function CompanyProfile() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="company-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="company-overlay">

          <span>ABOUT RCUBE</span>

          <h1>Company Profile</h1>

          <p>
            Delivering innovative electrical engineering solutions with
            quality, safety and excellence.
          </p>

        </div>
      </section>

      {/* Company */}

      <section className="company-section">

        <div className="company-container">

          <div className="company-image">

            <img
              src={company}
              alt="RCube"
            />

          </div>

          <div className="company-content">

            <span>WHO WE ARE</span>

            <h2>
              Trusted Engineering Partner
              For Modern Infrastructure
            </h2>

            <p>
              RCube Electrical & Engineers is a trusted engineering company
              specializing in Electrical Works, Fire Alarm Systems, CCTV,
              Networking, Design Consultancy and Project Management.
            </p>

            <p>
              We deliver safe, reliable and innovative engineering
              solutions for commercial, industrial and infrastructure
              projects while maintaining the highest quality standards.
            </p>

            <div className="company-list">

              <div>✔ Experienced Engineers</div>

              <div>✔ Quality Assurance</div>

              <div>✔ Safety Standards</div>

              <div>✔ Timely Delivery</div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default CompanyProfile;