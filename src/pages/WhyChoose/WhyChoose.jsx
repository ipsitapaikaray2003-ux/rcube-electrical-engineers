import "./WhyChoose.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

import {
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaAward,
  FaHeadset,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="why-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="why-overlay">
          <span>ABOUT RCUBE</span>

          <h1>Why Choose Rcube</h1>

          <p>
            Delivering engineering excellence with quality, innovation and
            complete customer satisfaction.
          </p>
        </div>
      </section>

      {/* Cards */}

      <section className="why-section">

        <div className="section-title">

          <span>OUR ADVANTAGES</span>

          <h2>Why Clients Trust RCube</h2>

        </div>

        <div className="why-grid">

          <div className="why-card">
            <FaUserTie />
            <h3>Experienced Engineers</h3>
            <p>Skilled professionals delivering reliable engineering solutions.</p>
          </div>

          <div className="why-card">
            <FaShieldAlt />
            <h3>Safety First</h3>
            <p>Strict compliance with safety standards on every project.</p>
          </div>

          <div className="why-card">
            <FaClock />
            <h3>On-Time Delivery</h3>
            <p>Projects completed within committed timelines.</p>
          </div>

          <div className="why-card">
            <FaTools />
            <h3>Modern Technology</h3>
            <p>Advanced tools and innovative engineering practices.</p>
          </div>

          <div className="why-card">
            <FaAward />
            <h3>Quality Assurance</h3>
            <p>Every project undergoes strict quality checks.</p>
          </div>

          <div className="why-card">
            <FaHeadset />
            <h3>Customer Support</h3>
            <p>Dedicated support before, during and after project completion.</p>
          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default WhyChoose;