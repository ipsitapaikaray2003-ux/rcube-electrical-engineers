import "./Consultation.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { FaArrowRight } from "react-icons/fa";

import hero from "../../assets/about-banner.png";

function Consultation() {

  return (

    <>

      <Navbar />

      {/* ================= HERO ================= */}

      <section
        className="consultation-hero"
        style={{
          backgroundImage:`url(${hero})`
        }}
      >

        <div className="consultation-overlay">

          <span>FREE CONSULTATION</span>

          <h1>

            Let's Discuss
            <br />
            Your Next Project

          </h1>

          <p>

            Get expert guidance from Darshikha Infrastructure
            Pvt Ltd for your upcoming electrical,
            industrial and infrastructure projects.

          </p>

        </div>

      </section>

      {/* ================= FORM SECTION ================= */}

      <section className="consultation-section">

        <div className="consultation-container">

          {/* LEFT */}

          <div className="consultation-left">

            <span>FREE CONSULTATION</span>

            <h2>

              Request A
              <br />
              Free Consultation

            </h2>

            <p>

              Fill out the form and one of our engineering
              experts will contact you shortly.

            </p>
                        <div className="consultation-features">

              <div className="feature-card">

                <h4>✔ Certified Engineers</h4>

                <p>
                  Experienced professionals delivering
                  reliable engineering solutions.
                </p>

              </div>

              <div className="feature-card">

                <h4>✔ Fast Response</h4>

                <p>
                  We usually respond to consultation
                  requests within 24 hours.
                </p>

              </div>

              <div className="feature-card">

                <h4>✔ Tailored Solutions</h4>

                <p>
                  Every project is designed according
                  to your business requirements.
                </p>

              </div>

              <div className="feature-card">

                <h4>✔ Trusted Partner</h4>

                <p>
                  From planning to execution,
                  Darshikha Infrastructure is with you at every step.
                </p>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="consultation-right">

            <h3>Book Your Free Consultation</h3>

            <form>

              <div className="form-grid">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />

                <input
                  type="text"
                  placeholder="Company Name"
                />

                <input
                  type="text"
                  placeholder="Project Location"
                />

                <select>

                  <option>
                    Select Service
                  </option>

                  <option>
                    Electrical Engineering
                  </option>

                  <option>
                    Fire Alarm System
                  </option>

                  <option>
                    CCTV Surveillance
                  </option>

                  <option>
                    Networking Solutions
                  </option>

                  <option>
                    Design Consultancy
                  </option>

                  <option>
                    Project Management
                  </option>

                </select>

              </div>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>

              <button
                type="submit"
                className="consult-btn"
              >

                Request Free Consultation

                <FaArrowRight />

              </button>

            </form>

          </div>

        </div>

      </section>
            {/* ================= CONTACT INFO ================= */}

      <section className="consultation-contact">

        <div className="consultation-contact-container">

          <div className="consultation-card">

            <h2>Need Immediate Assistance?</h2>

            <p>
              Our engineering team is always ready to help you with
              project planning, quotations and technical support.
            </p>

            <div className="contact-list">

              <a
                href="tel:+919108146948"
                className="contact-item"
              >
                📞 +91 91081 46948
              </a>

              <a
                href="mailto:info@darshikha.com"
                className="contact-item"
              >
                ✉ info@darshikha.com
              </a>

              <a
                href="https://wa.me/919108146948?text=Hello%20Darshikha%20Infrastructure%2C%20I%20would%20like%20to%20schedule%20a%20free%20project%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                💬 WhatsApp Support
              </a>

              <a
                href="https://maps.google.com/?q=7-3/1A/303,+3rd+Floor,+Shivam+Elite,+Chevella+Road,+Rajendra+Nagar,+Above+Union+Bank+of+India,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                📍 Shivam Elite, Suncity, Hyderabad
              </a>

            </div>

          </div>

          {/* ================= GOOGLE MAP ================= */}

          <div className="consultation-map">

            <iframe
              title="Darshikha Infrastructure Office"
              src="https://www.google.com/maps?q=7-3/1A/303,+Shivam+Elite,+Above+Union+Bank+of+India,+Chevella+Road,+Rajendra+Nagar,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Consultation;
