import "./VisionMission.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

import { FaBullseye, FaEye } from "react-icons/fa";

function VisionMission() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="vision-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="vision-overlay">

          <span>ABOUT RCUBE</span>

          <h1>Vision & Mission</h1>

          <p>
            Our vision inspires innovation, while our mission drives
            every project with excellence, quality and commitment.
          </p>

        </div>
      </section>

      {/* Vision Mission */}

      <section className="vision-section">

        <div className="vision-container">

          {/* Vision */}

          <div className="vision-card">

            <div className="vision-icon">
              <FaEye />
            </div>

            <h2>Our Vision</h2>

            <p>
              To become one of India's most trusted engineering companies
              by delivering innovative, sustainable and world-class
              electrical solutions that exceed customer expectations.
            </p>

          </div>

          {/* Mission */}

          <div className="vision-card">

            <div className="vision-icon">
              <FaBullseye />
            </div>

            <h2>Our Mission</h2>

            <p>
              To deliver safe, reliable and high-quality engineering
              solutions through innovation, skilled professionals,
              timely execution and complete customer satisfaction.
            </p>

          </div>

        </div>

      </section>

      {/* Quote */}

      <section className="vision-quote">

        <h2>
          "Engineering the Future with Innovation,
          Quality & Trust."
        </h2>

      </section>

      <Footer />
    </>
  );
}

export default VisionMission;