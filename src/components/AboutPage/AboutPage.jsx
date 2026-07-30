import "./AboutPage.css";

import aboutImg from "../../assets/about.png";

function AboutPage() {
  return (
    <section className="about-page">

      {/* Hero */}

      <section className="about-hero">

        <div className="about-hero-overlay">

          <span>ABOUT RCUBE</span>

          <h1>
            Engineering Excellence
            <br />
            Built On Trust
          </h1>

          <p>
            Delivering innovative electrical engineering solutions with
            precision, quality and long-term reliability for commercial,
            industrial and infrastructure projects.
          </p>

        </div>

      </section>

      {/* Who We Are */}

      <section className="who-we-are">

        <div className="about-wrapper">

          <div className="about-left">

            <img
              src={aboutImg}
              alt="RCube"
            />

          </div>

          <div className="about-right">

            <span>WHO WE ARE</span>

            <h2>
              Trusted Electrical Engineering
              Partner For Modern Infrastructure
            </h2>

            <p>
              Rcube Electrical & Engineers delivers complete engineering
              solutions with expertise in Electrical Works, Fire Alarm
              Systems, CCTV Surveillance, Networking, Design Consultancy
              and Project Management.
            </p>

            <p>
              Every project is executed with precision, safety,
              innovation and uncompromised quality standards while
              ensuring timely completion and complete customer
              satisfaction.
            </p>

            <div className="about-features">

              <div className="feature">
                ✓ Experienced Engineers
              </div>

              <div className="feature">
                ✓ Quality Assurance
              </div>

              <div className="feature">
                ✓ Safety Standards
              </div>

              <div className="feature">
                ✓ Timely Delivery
              </div>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}

export default AboutPage;