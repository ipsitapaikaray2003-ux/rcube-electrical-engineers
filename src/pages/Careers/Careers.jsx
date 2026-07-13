import "./Careers.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import hero from "../../assets/about-banner.png";

import {
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight
} from "react-icons/fa";

function Careers() {

  return (

    <>

      <Navbar />

      {/* ================= HERO ================= */}

      <section
        className="career-hero"
        style={{
          backgroundImage: `url(${hero})`
        }}
      >

        <div className="hero-overlay">

          <span>CAREERS</span>

          <h1>

            Build Your Career
            <br />
            With RCube

          </h1>

          <p>

            Join a passionate team of engineers delivering
            innovative electrical, fire safety and infrastructure
            solutions across India.

          </p>

        </div>

      </section>

      {/* ================= CAREER SECTION ================= */}

      <section className="career-section">

        <div className="career-container">

          {/* ================= LEFT ================= */}

          <div className="career-left">

            <span>WHY JOIN RCUBE</span>

            <h2>

              Grow With An
              <br />
              Engineering Team
              <br />
              That Builds The Future

            </h2>

            <p>

              At RCube Electrical & Engineers, we believe our
              people are our greatest strength. We offer an
              environment where innovation, teamwork and
              professional growth go hand in hand.

            </p>

            <div className="career-points">

              <div className="career-point">

                <FaUsers />

                <div>

                  <h3>Collaborative Culture</h3>

                  <p>
                    Work alongside experienced professionals
                    on challenging engineering projects.
                  </p>

                </div>

              </div>

              <div className="career-point">

                <FaGraduationCap />

                <div>

                  <h3>Continuous Learning</h3>

                  <p>
                    Enhance your technical and leadership
                    skills through practical experience.
                  </p>

                </div>

              </div>

              <div className="career-point">

                <FaBriefcase />

                <div>

                  <h3>Career Growth</h3>

                  <p>
                    Build a long-term career with exciting
                    opportunities and responsibilities.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="career-right">

            <span>APPLY NOW</span>

            <h2>

              Join Our Team

            </h2>

            <p>

              Complete the application form below and upload
              your resume. Our HR team will contact shortlisted
              candidates.

            </p>

            <form className="career-form">              <div className="career-grid">

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
                  placeholder="Current Location"
                />

                <select required>

                  <option value="">
                    Applying For
                  </option>

                  <option>
                    Electrical Engineer
                  </option>

                  <option>
                    Site Engineer
                  </option>

                  <option>
                    Project Engineer
                  </option>

                  <option>
                    Electrical Supervisor
                  </option>

                  <option>
                    MEP Engineer
                  </option>

                  <option>
                    Fire Alarm Engineer
                  </option>

                  <option>
                    CCTV & Networking Engineer
                  </option>

                  <option>
                    Graduate Engineer Trainee
                  </option>

                  <option>
                    Internship
                  </option>

                </select>

                <select>

                  <option>
                    Experience
                  </option>

                  <option>
                    Fresher
                  </option>

                  <option>
                    1 - 2 Years
                  </option>

                  <option>
                    3 - 5 Years
                  </option>

                  <option>
                    5+ Years
                  </option>

                </select>

              </div>

              {/* ================= RESUME ================= */}

              <div className="resume-upload">

                <label>

                  Upload Resume (PDF / DOC)

                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                />

              </div>

              {/* ================= MESSAGE ================= */}

              <textarea

                rows="6"

                placeholder="Tell us about yourself, your skills and experience..."

              ></textarea>

              <button
                type="submit"
                className="career-btn"
              >

                Apply Now

                <FaArrowRight />

              </button>

            </form>

          </div>

        </div>

      </section>
    
          
            {/* ================= EMPLOYEE BENEFITS ================= */}

      <section className="benefits-section">

        <div className="benefits-heading">

          <span>WHY WORK WITH US</span>

          <h2>

            Employee Benefits
            <br />
            & Career Growth

          </h2>

          <p>

            We believe great people build great companies.
            That's why we invest in our employees through
            continuous learning, rewarding careers and
            a supportive work environment.

          </p>

        </div>

        <div className="benefits-grid">

          {/* Card 1 */}

          <div className="benefit-card">

            <div className="benefit-number">
              01
            </div>

            <h3>
              Professional Growth
            </h3>

            <p>

              Work on challenging engineering projects
              with opportunities to grow into leadership
              roles.

            </p>

          </div>

          {/* Card 2 */}

          <div className="benefit-card">

            <div className="benefit-number">
              02
            </div>

            <h3>
              Learning & Development
            </h3>

            <p>

              Gain practical experience through
              technical training, mentorship and
              industry exposure.

            </p>

          </div>

          {/* Card 3 */}

          <div className="benefit-card">

            <div className="benefit-number">
              03
            </div>

            <h3>
              Team Collaboration
            </h3>

            <p>

              Work alongside experienced engineers
              in a professional and collaborative
              environment.

            </p>

          </div>

          {/* Card 4 */}

          <div className="benefit-card">

            <div className="benefit-number">
              04
            </div>

            <h3>
              Competitive Compensation
            </h3>

            <p>

              Attractive salary packages with
              performance-based growth and
              long-term career opportunities.

            </p>

          </div>

        </div>

      </section>
            {/* ================= HIRING PROCESS ================= */}

      <section className="hiring-section">

        <div className="hiring-heading">

          <span>OUR HIRING PROCESS</span>

          <h2>

            Your Journey
            <br />
            Starts Here

          </h2>

          <p>

            Our recruitment process is simple, transparent
            and designed to help talented professionals
            join our growing engineering team.

          </p>

        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-number">
              01
            </div>

            <h3>Apply Online</h3>

            <p>
              Submit your application along with
              your updated resume.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-number">
              02
            </div>

            <h3>Application Review</h3>

            <p>
              Our HR team carefully reviews your
              profile and qualifications.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-number">
              03
            </div>

            <h3>Technical Interview</h3>

            <p>
              Shortlisted candidates attend
              technical and HR discussions.
            </p>

          </div>

          <div className="timeline-item">

            <div className="timeline-number">
              04
            </div>

            <h3>Join RCube</h3>

            <p>
              Welcome to our engineering family
              and start building the future.
            </p>

          </div>

        </div>

      </section>

      {/* ================= HR CONTACT ================= */}

      <section className="career-contact">

        <div className="career-contact-box">

          <span>CAREER SUPPORT</span>

          <h2>

            Have Questions?
            <br />
            Contact Our HR Team

          </h2>

          <p>

            If you need more information about career
            opportunities or recruitment, feel free
            to get in touch with our HR department.

          </p>

          <div className="career-contact-grid">

            <a
              href="mailto:info@rcubeelectrical.in"
              className="career-contact-card"
            >

              <h3>Email HR</h3>

              <p>info@rcubeelectrical.in</p>

            </a>

            <a
              href="tel:+919108146948"
              className="career-contact-card"
            >

              <h3>Call HR</h3>

              <p>+91 91081 46948</p>

            </a>

            <a
              href="https://wa.me/919108146948"
              target="_blank"
              rel="noopener noreferrer"
              className="career-contact-card"
            >

              <h3>WhatsApp HR</h3>

              <p>Chat With Recruitment Team</p>

            </a>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Careers;