import "./QuoteRequest.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

function QuoteRequest()  {

  return (

    <>

      <Navbar />

      {/* ================= HERO ================= */}

      <section
        className="quote-hero"
        style={{
          backgroundImage:`url(${hero})`
        }}
      >

        <div className="hero-overlay">

          <span>REQUEST A QUOTE</span>

          <h1>Get Your Free Quote</h1>

          <p>

            Tell us about your project and our engineering
            experts will prepare a customized quotation
            based on your requirements.

          </p>

        </div>

      </section>

      {/* ================= QUOTE FORM ================= */}

      <section className="quote-section">

        <div className="quote-container">

          <div className="quote-heading">

            <span>FREE ESTIMATION</span>

            <h2>

              Request Your
              <br />
              Project Quote

            </h2>

            <p>

              Fill in the details below and our team
              will contact you with the best engineering
              solution and quotation.

            </p>

          </div>

          <form className="quote-form">

            <div className="form-grid">

              <input
                type="text"
                placeholder="Full Name *"
                required
              />

              <input
                type="email"
                placeholder="Email Address *"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number *"
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

              <select required>

                <option value="">
                  Select Service
                </option>

                <option>
                  Electrical Engineering
                </option>

                <option>
                  Electrical Installation
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

              <input
                type="text"
                placeholder="Estimated Budget"
              />

              <input
                type="date"
              />

            </div>

            <textarea
              rows="7"
              placeholder="Project Details..."
            ></textarea>

            <button type="submit">

              Request Free Quote

            </button>

          </form>
                    {/* ================= CONTACT INFO ================= */}

          <div className="quote-contact">

            <a
              href="tel:+919108146948"
              className="contact-card"
            >

              <div className="contact-icon">
                📞
              </div>

              <div>

                <h3>Call Us</h3>

                <p>+91 91081 46948</p>

              </div>

            </a>

            <a
              href="mailto:info@rcubeelectrical.in"
              className="contact-card"
            >

              <div className="contact-icon">
                ✉
              </div>

              <div>

                <h3>Email</h3>

                <p>info@rcubeelectrical.in</p>

              </div>

            </a>

            <a
              href="https://wa.me/919108146948"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <div className="contact-icon">
                💬
              </div>

              <div>

                <h3>WhatsApp</h3>

                <p>Chat With Us</p>

              </div>

            </a>

            <a
              href="https://maps.google.com/?q=H.No.+7-3/1A/303,+Third+Floor,+Shivam+Elite,+Above+Union+Bank+of+India,+Chevella+Road,+Bhagya+Nagar+Colony,+Suncity,+Hyderabad,+Telangana+500091"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <div className="contact-icon">
                📍
              </div>

              <div>

                <h3>Office</h3>

                <p>Hyderabad, Telangana</p>

              </div>

            </a>

          </div>

        </div>

      </section>

      {/* ================= MAP ================= */}

      <section className="quote-map-section">

        <iframe
          title="Darshikha Infrastructure Location"
          src="https://www.google.com/maps?q=H.No.%207-3/1A/303,%20Third%20Floor,%20Shivam%20Elite,%20Above%20Union%20Bank%20of%20India,%20Chevella%20Road,%20Bhagya%20Nagar%20Colony,%20Suncity,%20Hyderabad&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </section>

      <Footer />

    </>

  );

}

export default QuoteRequest;