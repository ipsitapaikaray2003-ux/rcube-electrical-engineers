import "./Process.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

import {
  FaComments,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaTools,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";

function Process() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const steps = [
    {
      icon: <FaComments />,
      title: "Consultation",
      desc: "Understanding client requirements and project objectives.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Site Survey",
      desc: "Detailed inspection and technical feasibility analysis.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Design & Planning",
      desc: "Preparing engineering drawings and execution strategy.",
    },
    {
      icon: <FaTools />,
      title: "Execution",
      desc: "Professional installation using modern engineering practices.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Testing",
      desc: "Quality inspection, testing and safety verification.",
    },
    {
      icon: <FaHandshake />,
      title: "Project Handover",
      desc: "Successful delivery with complete client satisfaction.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section
        className="process-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="process-overlay">

          <span>ABOUT DARSHIKHA INFRASTRUCTURE</span>

          <h1>Our Process</h1>

          <p>
            Every successful project follows a systematic,
            transparent and quality-driven engineering process.
          </p>

        </div>
      </section>

      {/* Timeline */}

      <section className="process-section">

        <div className="process-heading">

          <span>HOW WE WORK</span>

          <h2>
            From Planning To
            Successful Delivery
          </h2>

        </div>

        <div className="timeline">

          {steps.map((item, index) => (

            <div
              className="timeline-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >

              <div className="timeline-number">
                0{index + 1}
              </div>

              <div className="timeline-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Process;