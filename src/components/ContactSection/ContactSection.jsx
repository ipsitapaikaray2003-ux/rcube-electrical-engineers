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
            title="Darshikha Infrastructure Office Location"
            src="https://www.google.com/maps?q=7-3/1A/303,+Shivam+Elite,+Above+Union+Bank+of+India,+Chevella+Road,+Rajendra+Nagar,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

        {/* ================= RIGHT DETAILS ================= */}

        <div className="home-contact-box">

          <h3>Contact Details</h3>

          <p>
            Reach out to Darshikha Infrastructure Pvt Ltd for
            project consultation, quotations and engineering
            support.
          </p>

          <div className="contact-items">
            {/* ================= PHONE ================= */}

            <a
              href="tel:+919108146948"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-text">
                <span>Call Us</span>
                <h4>+91 91081 46948</h4>
              </div>
            </a>

            {/* ================= EMAIL ================= */}

            <a
              href="mailto:info@darshikha.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-text">
                <span>Email Us</span>
                <h4>info@darshikha.com</h4>
              </div>
            </a>

            {/* ================= WHATSAPP ================= */}

            <a
              href="https://wa.me/919108146948?text=Hello%20Darshikha%20Infrastructure%2C%20I%20would%20like%20to%20enquire%20about%20your%20electrical%20engineering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon whatsapp">
                <FaWhatsapp />
              </div>

              <div className="contact-text">
                <span>WhatsApp</span>
                <h4>Chat With Our Team</h4>
              </div>
            </a>

            {/* ================= LOCATION ================= */}

            <a
              href="https://maps.google.com/?q=7-3/1A/303,+3rd+Floor,+Shivam+Elite,+Chevella+Road,+Rajendra+Nagar,+Above+Union+Bank+of+India,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-text">
                <span>Head Office</span>
                <h4>Shivam Elite, Suncity</h4>
                <small>Hyderabad - 500091, Telangana</small>
              </div>
            </a>

            {/* ================= WORKING HOURS ================= */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div className="contact-text">
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

      </div>

    </section>
  );
}

export default ContactSection;
