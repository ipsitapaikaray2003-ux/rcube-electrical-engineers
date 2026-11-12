import "./AboutPreview.css";
import aboutImg from "../../assets/about.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="about">

      <div className="about-container">

        {/* Left Content */}

        <div className="about-content">

          <span className="about-subtitle">
            GET TO KNOW US
          </span>

          <h2>
            ABOUT DARSHIKHA INFRASTRUCTURE
          </h2>

          <p>
            Darshikha Infrastructure Pvt Ltd is a trusted engineering company
            specializing in Electrical Systems, Fire Alarm Systems,
            CCTV, Networking, Design Consultancy and Project Management.
            We deliver reliable engineering solutions with a strong
            commitment to quality, safety and client satisfaction.
          </p>

          <p>
            From design consultancy to installation, testing and
            commissioning, we provide complete engineering solutions
            for commercial, industrial and infrastructure projects
            with a focus on quality execution and long-term value.
          </p>

          {/* Read More Button */}

         <Link to="/leadership" className="about-btn">
  READ MORE
  <FaArrowRight />
</Link>

        </div>

        {/* Right Image */}

        <div className="about-image">

          <img
            src={aboutImg}
            alt="About Darshikha Infrastructure"
          />

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;