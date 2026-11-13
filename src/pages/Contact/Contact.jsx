import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay">

          <span>CONTACT US</span>

          <h1>Let's Connect</h1>

          <p>
            Reach out to Darshikha Infrastructure Pvt Ltd for
            reliable engineering solutions.
          </p>

        </div>
      </section>

      {/* Contact Details */}

      <section className="contact-info">

        <div className="section-heading">

          <span>GET IN TOUCH</span>

          <h2>Let's Connect</h2>

          <p>
            We'd love to hear from you.
            Contact us for any engineering requirement.
          </p>

        </div>

        <div className="contact-grid">

          <a
            href="tel:+919108146948"
            className="contact-card"
          >

            <div className="card-icon">

              <FaPhoneAlt />

            </div>

            <h3>Call Us</h3>

            <p>+91 91081 46948</p>

          </a>

          <a
            href="mailto:info@darshikha.com"
            className="contact-card"
          >

            <div className="card-icon">

              <FaEnvelope />

            </div>

            <h3>Email</h3>

            <p>info@darshikha.com</p>

          </a>

          <a
            href="https://maps.google.com/?q=7-3/1A/303,+3rd+Floor,+Shivam+Elite,+Chevella+Road,+Rajendra+Nagar,+Above+Union+Bank+of+India,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <div className="card-icon">

              <FaMapMarkerAlt />

            </div>

            <h3>Head Office</h3>

            <p>
              #7-3/1A/303, 3rd Floor, Shivam Elite,
              <br />
              Chevella Rd, Suncity, Hyderabad - 500091
            </p>

          </a>

          <div className="contact-card">

            <div className="card-icon">

              <FaClock />

            </div>

            <h3>Working Hours</h3>

            <p>Mon - Sat</p>

            <span>09:00 AM - 06:00 PM</span>

          </div>

        </div>

      </section>
            {/* ================= CONTACT FORM ================= */}

      <section className="contact-form-section">

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-left">

            <span>SEND MESSAGE</span>

            <h2>
              Let's Discuss
              <br />
              Your Project
            </h2>

            <div className="gold-line"></div>

            <p>
              Whether you need Electrical Works, Fire Alarm Systems,
              CCTV Surveillance, Networking Solutions, Design Consultancy
              or Project Management, our experienced team is ready to
              deliver safe, reliable and high-quality engineering solutions
              for your business.
            </p>

            <div className="contact-features">

              <div className="feature">
                ✓ Professional Engineers
              </div>

              <div className="feature">
                ✓ On-Time Project Delivery
              </div>

              <div className="feature">
                ✓ 24/7 Technical Support
              </div>

              <div className="feature">
                ✓ Trusted Engineering Partner
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="contact-right">

            <form className="contact-form">

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
                    Electrical Works
                  </option>

                  <option>
                    Fire Alarm Systems
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
                className="send-btn"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
            {/* ================= GOOGLE MAP ================= */}

      <section className="map-section">

        <div className="map-heading">

          <span>OUR LOCATION</span>

          <h2>Visit Our Office</h2>

          <p>
            We welcome you to visit our office and discuss your
            engineering requirements with our experienced team.
          </p>

        </div>

        <div className="map-wrapper">

          <iframe
            title="Darshikha Infrastructure Location"
            src="https://www.google.com/maps?q=7-3/1A/303,+Shivam+Elite,+Above+Union+Bank+of+India,+Chevella+Road,+Rajendra+Nagar,+Suncity,+Bandlaguda+Jagir,+Hyderabad,+Telangana+500091&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="contact-cta">

        <div className="cta-content">

          <span>LET'S BUILD TOGETHER</span>

          <h2>
            Ready To Start Your
            Next Engineering Project?
          </h2>

          <p>
            Partner with Darshikha Infrastructure Pvt Ltd for reliable,
            innovative and high-quality engineering solutions
            tailored to your business needs.
          </p>

          <div className="cta-buttons">

            <a
              href="tel:+919108146948"
              className="call-btn"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919108146948"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Contact;