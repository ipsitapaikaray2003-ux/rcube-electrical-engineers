import "./CompanyProfile.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";
import company from "../../assets/about.png";
import iso9001 from "../../assets/iso-9001.png";
import iso14001 from "../../assets/iso-14001.png";
import iso45001 from "../../assets/iso-45001.png";

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

          <span>ABOUT DARSHIKHA INFRASTRUCTURE</span>

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
              alt="Darshikha Infrastructure"
            />

          </div>

          <div className="company-content">

            <span>WHO WE ARE</span>

            <h2>
              Trusted Engineering Partner
              For Modern Infrastructure
            </h2>

            <p>
              Darshikha Infrastructure Pvt Ltd is a trusted engineering company
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

            {/* ISO Certifications */}
            <div className="company-iso-section">

              <h3>ISO Certified Company</h3>

              <p>
                Darshikha Infrastructure operates under stringent international
                standards for Quality, Environmental Management, and Workplace Safety:
              </p>

              <div className="company-iso-grid">

                <div className="company-iso-card">
                  <img src={iso9001} alt="ISO 9001:2015 Certified" />
                  <div className="company-iso-meta">
                    <strong>ISO 9001:2015</strong>
                    <span>Quality Management</span>
                  </div>
                </div>

                <div className="company-iso-card">
                  <img src={iso14001} alt="ISO 14001:2015 Certified" />
                  <div className="company-iso-meta">
                    <strong>ISO 14001:2015</strong>
                    <span>Environmental Management</span>
                  </div>
                </div>

                <div className="company-iso-card">
                  <img src={iso45001} alt="ISO 45001:2018 Certified" />
                  <div className="company-iso-meta">
                    <strong>ISO 45001:2018</strong>
                    <span>Health & Safety Management</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default CompanyProfile;