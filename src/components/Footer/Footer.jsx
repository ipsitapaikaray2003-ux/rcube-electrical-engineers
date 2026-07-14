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

      {/* ================= FOOTER MAIN ================= */}

      <div className="footer-main">
              {/* ================= ABOUT ================= */}

        <div className="footer-about">

          <img
            src={logo}
            alt="RCube Logo"
          />

          <p>

            RCube Electrical & Engineers provides complete
            electrical engineering solutions for commercial,
            industrial and infrastructure projects with
            quality and commitment.

          </p>

          {/* ================= SOCIAL ================= */}

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
              href="https://maps.google.com/?q=H.No.7-3/1A/303,Shivam Elite,Suncity,Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              title="Location"
            >
              <FaMapMarkerAlt />
            </a>

            <a
              href="mailto:info@rcubeelectrical.in"
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

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

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

            +91 91081 46948

          </a>

          <a
            href="https://wa.me/919108146948"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaWhatsapp />

            WhatsApp

          </a>

          <a href="mailto:info@rcubeelectrical.in">

            <FaEnvelope />

            info@rcubeelectrical.in

          </a>
          <a
            href="https://maps.google.com/?q=H.No.7-3/1A/303,Shivam Elite,Suncity,Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaMapMarkerAlt />

            Hyderabad, Telangana

          </a>
          <div className="branch-info">

  <FaMapMarkerAlt />

  <span>Branches: Bangalore and Mumbai</span>

</div>

        </div>

      </div>

      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <p>

          © 2026 RCube Electrical & Engineers.
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

      {/* ================= SCROLL TO TOP ================= */}

      <button
        className="scroll-top"
        onClick={() =>
          window.scrollTo({
            top:0,
            behavior:"smooth",
          })
        }
      >

        <FaArrowUp />

      </button>

    </footer>

  );

}

export default Footer;