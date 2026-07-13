import "./CoreValues.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

import {
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

function CoreValues() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="core-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div
          className="core-overlay"
          data-aos="zoom-out"
        >
          <span>ABOUT RCUBE</span>

          <h1>Core Values</h1>

          <p>
            The values that inspire every decision,
            every project and every successful partnership.
          </p>
        </div>
      </section>

      {/* Heading */}

      <section className="core-section">

        <div
          className="core-heading"
          data-aos="fade-up"
        >

          <span>OUR FOUNDATION</span>

          <h2>
            Values That Define
            Our Engineering Excellence
          </h2>

        </div>

        {/* Cards */}

        <div className="core-grid">

          <div
            className="core-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <div className="icon-box">
              <FaHandshake />
            </div>

            <h3>Integrity</h3>

            <p>
              We build lasting relationships through
              honesty, transparency and ethical engineering.
            </p>

          </div>

          <div
            className="core-card"
            data-aos="fade-up"
            data-aos-delay="250"
          >

            <div className="icon-box">
              <FaLightbulb />
            </div>

            <h3>Innovation</h3>

            <p>
              We embrace modern technologies to
              create smarter and more efficient solutions.
            </p>

          </div>

          <div
            className="core-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >

            <div className="icon-box">
              <FaAward />
            </div>

            <h3>Quality</h3>

            <p>
              Excellence is maintained through
              uncompromising quality standards in every project.
            </p>

          </div>

          <div
            className="core-card"
            data-aos="fade-up"
            data-aos-delay="550"
          >

            <div className="icon-box">
              <FaShieldAlt />
            </div>

            <h3>Commitment</h3>

            <p>
              We remain committed to timely delivery,
              safety and complete client satisfaction.
            </p>

          </div>

        </div>

      </section>

      {/* Promise */}

      <section
        className="promise-section"
        data-aos="zoom-in"
      >

        <div className="promise-content">

          <span>OUR PROMISE</span>

          <h2>
            Engineering Excellence
            Built On Trust
          </h2>

          <p>
            Every project reflects our dedication towards
            innovation, quality, integrity and long-term value.
          </p>

          <a
            href="/contact"
            className="promise-btn"
          >
            Get In Touch
            <FaArrowRight />
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default CoreValues;