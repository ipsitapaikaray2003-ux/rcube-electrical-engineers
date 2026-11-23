import "./AboutPreview.css";
import aboutImg from "../../assets/about.png";
import iso9001 from "../../assets/iso-9001.png";
import iso14001 from "../../assets/iso-14001.png";
import iso45001 from "../../assets/iso-45001.png";
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

          {/* ISO Certification Badges */}
          <div className="about-iso-row">
            <span className="about-iso-title">ISO Certified:</span>
            <div className="about-iso-badge" title="ISO 9001:2015 Quality Management System">
              <img src={iso9001} alt="ISO 9001:2015 Certified" />
              <span>9001:2015</span>
            </div>
            <div className="about-iso-badge" title="ISO 14001:2015 Environmental Management System">
              <img src={iso14001} alt="ISO 14001:2015 Certified" />
              <span>14001:2015</span>
            </div>
            <div className="about-iso-badge" title="ISO 45001:2018 Occupational Health & Safety Management System">
              <img src={iso45001} alt="ISO 45001:2018 Certified" />
              <span>45001:2018</span>
            </div>
          </div>

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