import "./Support.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaUser,
  FaBuilding,
  FaMapMarkedAlt,
  FaCalendarAlt
} from "react-icons/fa";

function Support() {

  return (

    <>

      <Navbar />

      {/* ================= HERO ================= */}

      <section
        className="support-hero"
        style={{
          backgroundImage: `url(${hero})`
        }}
      >

        <div className="hero-overlay">

          <span>SUPPORT & SERVICE</span>

          <h1>

            We're Here
            <br />
            To Help You

          </h1>

          <p>

            Our expert support team is available 24/7 to assist you with
            maintenance, technical issues and emergency engineering services.

          </p>

        </div>

      </section>

      {/* ================= SUPPORT SECTION ================= */}

      <section className="support-section">

        <div className="support-container">

          {/* ================= LEFT CARD ================= */}

          <div className="support-left">

            <span>GET IN TOUCH</span>

            <h2>

              We Are Always
              <br />
              <strong>Ready To Support</strong>

            </h2>

            <div className="support-contact-list">

              {/* Call */}

              <a
                href="tel:+919108146948"
                className="support-contact-card"
              >

                <div className="support-icon">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h3>Call Support</h3>

                  <p>+91 91081 46948</p>

                  <small>24/7 Available</small>

                </div>

              </a>

              {/* Email */}

              <a
                href="mailto:info@rcubeelectrical.in"
                className="support-contact-card"
              >

                <div className="support-icon">

                  <FaEnvelope />

                </div>

                <div>

                  <h3>Email Support</h3>

                  <p>info@rcubeelectrical.in</p>

                  <small>Reply Within 2 Hours</small>

                </div>

              </a>
                            {/* ================= WHATSAPP ================= */}

              <a
                href="https://wa.me/919108146948"
                target="_blank"
                rel="noopener noreferrer"
                className="support-contact-card"
              >

                <div className="support-icon">

                  <FaWhatsapp />

                </div>

                <div>

                  <h3>WhatsApp Support</h3>

                  <p>+91 91081 46948</p>

                  <small>Chat With Our Team</small>

                </div>

              </a>

              {/* ================= OFFICE ================= */}

              <a
                href="https://maps.google.com/?q=H.No.+7-3/1A/303,+Third+Floor,+Shivam+Elite,+Above+Union+Bank+of+India,+Chevella+Road,+Bhagya+Nagar+Colony,+Suncity,+Hyderabad,+Telangana+500091"
                target="_blank"
                rel="noopener noreferrer"
                className="support-contact-card"
              >

                <div className="support-icon">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3>Visit Our Office</h3>

                  <p>
                    H.No. 7-3/1A/303, Third Floor,
                    Shivam Elite, Hyderabad
                  </p>

                  <small>Telangana - 500091</small>

                </div>

              </a>

            </div>

          </div>

          {/* ================= RIGHT FORM ================= */}

          <div className="support-right">

            <span>SUBMIT REQUEST</span>

            <h2>

              Submit A
              <br />
              Service Request

            </h2>

            <p>

              Fill out the form below and our support team
              will contact you shortly.

            </p>

            <form className="support-form">

              <div className="support-grid">

                <div className="input-box">

                  <FaUser />

                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                  />

                </div>

                <div className="input-box">

                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                  />

                </div>

                <div className="input-box">

                  <FaPhoneAlt />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                  />

                </div>

                <div className="input-box">

                  <FaBuilding />

                  <input
                    type="text"
                    placeholder="Company Name"
                  />

                </div>
                                {/* ================= PROJECT LOCATION ================= */}

                <div className="input-box">

                  <FaMapMarkedAlt />

                  <input
                    type="text"
                    placeholder="Project Location"
                  />

                </div>

                {/* ================= SERVICE ================= */}

                <div className="input-box">

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
                      Annual Maintenance (AMC)
                    </option>

                    <option>
                      Emergency Support
                    </option>

                  </select>

                </div>

                {/* ================= PRIORITY ================= */}

                <div className="input-box">

                  <select>

                    <option>
                      Select Priority
                    </option>

                    <option>
                      Low
                    </option>

                    <option>
                      Medium
                    </option>

                    <option>
                      High
                    </option>

                    <option>
                      Emergency
                    </option>

                  </select>

                </div>

                {/* ================= DATE ================= */}

                <div className="input-box">

                  <FaCalendarAlt />

                  <input
                    type="date"
                  />

                </div>

              </div>

              {/* ================= MESSAGE ================= */}

              <textarea

                rows="7"

                placeholder="Describe your issue or service requirement..."

              ></textarea>

              {/* ================= BUTTON ================= */}

              <button
                type="submit"
                className="support-btn"
              >

                Submit Request →

              </button>

            </form>

          </div>

        </div>

      </section>
            {/* ================= GOOGLE MAP ================= */}

      <section className="support-map-section">

        <div className="support-map-heading">

          <span>OUR LOCATION</span>

          <h2>

            Visit Our Office

          </h2>

          <p>

            Meet our engineering experts to discuss your
            project requirements and technical solutions.

          </p>

        </div>

        <div className="support-map-wrapper">

          <iframe
            title="RCube Electrical & Engineers"
            src="https://www.google.com/maps?q=H.No.%207-3/1A/303,%20Third%20Floor,%20Shivam%20Elite,%20Above%20Union%20Bank%20of%20India,%20Chevella%20Road,%20Bhagya%20Nagar%20Colony,%20Suncity,%20Hyderabad,%20Telangana%20500091&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="office-card">

            <span>HEAD OFFICE</span>

            <h3>

              RCube Electrical &
              Engineers

            </h3>

            <p>

              H.No. 7-3/1A/303,
              Third Floor,
              Shivam Elite,
              Above Union Bank of India,
              Chevella Road,
              Bhagya Nagar Colony,
              Suncity,
              Hyderabad,
              Telangana – 500091

            </p>

            <div className="office-buttons">

              <a
                href="https://maps.google.com/?q=H.No.+7-3/1A/303,+Third+Floor,+Shivam+Elite,+Above+Union+Bank+of+India,+Chevella+Road,+Bhagya+Nagar+Colony,+Suncity,+Hyderabad,+Telangana+500091"
                target="_blank"
                rel="noopener noreferrer"
                className="direction-btn"
              >

                Get Direction

              </a>

              <a
                href="tel:+919108146948"
                className="call-btn"
              >

                Call Now

              </a>

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHY CHOOSE OUR SUPPORT ================= */}

      <section className="support-features">

        <div className="support-feature-heading">

          <span>WHY CHOOSE RCUBE</span>

          <h2>

            Professional Support
            <br />
            You Can Trust

          </h2>

          <p>

            Our experienced engineering team delivers fast response,
            preventive maintenance and reliable technical support
            to keep your business running without interruption.

          </p>

        </div>

        <div className="support-feature-grid">

          {/* Card 1 */}

          <div className="feature-card">

            <div className="feature-number">

              01

            </div>

            <h3>

              24/7 Emergency
              Support

            </h3>

            <p>

              Immediate response for critical electrical
              failures and emergency engineering
              requirements.

            </p>

          </div>

          {/* Card 2 */}

          <div className="feature-card">

            <div className="feature-number">

              02

            </div>

            <h3>

              Preventive
              Maintenance

            </h3>

            <p>

              Regular inspections and scheduled
              maintenance to reduce downtime
              and increase equipment life.

            </p>

          </div>

          {/* Card 3 */}

          <div className="feature-card">

            <div className="feature-number">

              03

            </div>

            <h3>

              On-Site Technical
              Assistance

            </h3>

            <p>

              Certified engineers visit your location
              for inspection, troubleshooting
              and complete technical support.

            </p>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Support;