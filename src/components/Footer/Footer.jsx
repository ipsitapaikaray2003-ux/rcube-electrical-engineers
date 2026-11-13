import "./Footer.css";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  FaUserTie,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

function Footer() {

  const navigate = useNavigate();

  const location = useLocation();

  const scrollToSection = (sectionId) => {

    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {

        document
          .getElementById(sectionId)
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }, 300);

    } else {

      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }

  };

  return (

    <footer className="footer">

      {/* ================= CTA ================= */}

      <div className="footer-cta">

        <h2>
          Ready To Power
          <br />
          Your Next Project?
        </h2>

        <p>
          Let's discuss your electrical engineering
          requirements and deliver reliable
          solutions together.
        </p>

        <Link
          to="/consultation"
          className="consultation-btn"
        >

          <span className="consult-icon">
            <FaUserTie />
          </span>

          <span className="consult-text">
            Get Free Consultation
          </span>

          <span className="consult-arrow">
            <FaArrowRight />
          </span>

        </Link>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="footer-main">

        {/* ================= ABOUT ================= */}

        <div className="footer-about">

          <img
            src={logo}
            alt="Darshikha Infrastructure Logo"
          />

          <p>
            Darshikha Infrastructure Pvt Ltd provides complete
            electrical engineering solutions for commercial,
            industrial and infrastructure projects with
            quality, innovation and commitment.
          </p>

          <div className="footer-social">

            <a
              href="https://wa.me/919108146948"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://maps.google.com/?q=7-3/1A/303,+3rd+Floor,+Shivam+Elite,+Chevella+Road,+Rajendra+Nagar,+Above+Union+Bank+of+India,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091"
              target="_blank"
              rel="noopener noreferrer"
              title="Location"
            >
              <FaMapMarkerAlt />
            </a>

            <a
              href="mailto:info@darshikha.com"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+919108146948"
              title="Call"
            >
              <FaPhoneAlt />
            </a>

          </div>

        </div>

        {/* ================= QUICK LINKS ================= */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <button
            className="footer-link-btn"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          <button
            className="footer-link-btn"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <Link to="/careers">
            Careers
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>
                {/* ================= CONTACT ================= */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <a href="tel:+919108146948">

            <FaPhoneAlt />

            <span>+91 91081 46948</span>

          </a>

          <a
            href="https://wa.me/919108146948"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaWhatsapp />

            <span>WhatsApp</span>

          </a>

          <a href="mailto:info@darshikha.com">

            <FaEnvelope />

            <span>info@darshikha.com</span>

          </a>

          <a
            href="https://maps.google.com/?q=7-3/1A/303,+3rd+Floor,+Shivam+Elite,+Chevella+Road,+Rajendra+Nagar,+Above+Union+Bank+of+India,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >

            <FaMapMarkerAlt />

            <span>
              #7-3/1A/303, 3rd Floor, Shivam Elite,
              <br />
              Chevella Rd, Above Union Bank,
              <br />
              Suncity, Bandlaguda Jagir,
              <br />
              Hyderabad - 500091, Telangana
            </span>

          </a>

          <div className="branch-info">

            <FaMapMarkerAlt />

            <span>
              Branches:
              <br />
              Bangalore & Mumbai
            </span>

          </div>

        </div>

      </div>

      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © 2026 Darshikha Infrastructure Pvt Ltd.
          All Rights Reserved.
        </p>

        <p>

          Designed & Developed by{" "}

          <a
            href="https://www.qubnixtechnology.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >

            Qubnix Technology

          </a>

        </p>

      </div>

      {/* ================= SCROLL TOP ================= */}

      <button
        className="scroll-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >

        <FaArrowUp />

      </button>

    </footer>

  );

}

export default Footer;