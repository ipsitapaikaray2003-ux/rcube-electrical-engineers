import "./ContactSection.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section className="home-contact-section">

      <div className="home-contact-header">

        <span>GET IN TOUCH</span>

        <h2>
          Let's Build Your
          <br />
          Next Engineering Project
        </h2>

        <p>
          Looking for reliable Electrical Engineering, CCTV,
          Fire Alarm Systems or Industrial Solutions?
          Our experts are ready to help.
        </p>

      </div>

      <div className="home-contact-wrapper">

        {/* ================= LEFT MAP ================= */}

        <div className="home-map-box">

          <iframe
            title="Rcube Office Location"
            src="https://www.google.com/maps?q=H.No.%207-3/1A/303,%20Third%20Floor,%20Shivam%20Elite,%20Above%20Union%20Bank%20of%20India,%20Chevella%20Road,%20Bhagya%20Nagar%20Colony,%20Suncity,%20Hyderabad,%20Telangana%20500091&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

        {/* ================= RIGHT DETAILS ================= */}

        <div className="home-contact-box">

          <h3>Contact Details</h3>

          <p>
            Reach out to Rcube Electrical & Engineers for
            project consultation, quotations and engineering
            support.
          </p>

          <div className="contact-items"></div>
                      {/* ================= PHONE ================= */}

            <a
              href="tel:+919108146948"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>Call Us</span>
                <h4>+91 91081 46948</h4>
              </div>
            </a>

            {/* ================= EMAIL ================= */}

            <a
              href="mailto:info@rcubeelectrical.in"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email Us</span>
                <h4>info@rcubeelectrical.in</h4>
              </div>
            </a>

            {/* ================= WHATSAPP ================= */}

            <a
              href="https://wa.me/919108146948"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon whatsapp">
                <FaWhatsapp />
              </div>

              <div>
                <span>WhatsApp</span>
                <h4>Chat With Our Team</h4>
              </div>
            </a>

            {/* ================= LOCATION ================= */}

            <a
              href="https://maps.google.com/?q=H.No.+7-3/1A/303,+Third+Floor,+Shivam+Elite,+Above+Union+Bank+of+India,+Chevella+Road,+Bhagya+Nagar+Colony,+Suncity,+Hyderabad,+Telangana+500091"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Head Office</span>
                <h4>Hyderabad, Telangana</h4>
              </div>
            </a>

            {/* ================= WORKING HOURS ================= */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div>
                <span>Working Hours</span>
                <h4>Monday – Saturday</h4>
                <small>09:00 AM – 06:00 PM</small>
              </div>

            </div>

          </div>

          <Link
            to="/contact"
            className="contact-btn"
          >
            Contact Us
            <FaArrowRight />
          </Link>

        </div>

    

    </section>
  );
}

export default ContactSection;
