import "./Services.css";

import electrical from "../../assets/service-1.jpg";
import hvac from "../../assets/service-6.jpg";
import plumbing from "../../assets/service-7.jpg";
import firefighting from "../../assets/service-8.jpg";
import firealarm from "../../assets/service-2.jpg";
import publicaddress from "../../assets/service-9.jpg";
import networking from "../../assets/service-10.jpg";
import cctv from "../../assets/service-3.jpg";
import consultancy from "../../assets/service-4.jpg";
import project from "../../assets/service-5.jpg";

function Services() {
  return (
    <section className="services">

      <div className="services-title">
        <span>OUR SERVICES</span>
      </div>

      <div className="services-wrapper">

        {/* CARD 1 */}

        <div className="service-card card-one">

          <div className="service-number">01</div>

          <h3>
            Electrical
            <br />
            System
          </h3>

          <img src={electrical} alt="Electrical System" />

          <p>
            Rcube Electrical & Engineers delivers complete electrical system
            solutions for commercial, industrial and infrastructure projects.
            Our services include power distribution, electrical installations,
            cable laying, panel erection and system testing with complete
            compliance to industry standards.
          </p>

          <p>
            Our experienced engineering team focuses on safety, energy
            efficiency and long-term reliability in every project we execute.
            From planning and installation to testing and commissioning, we
            provide dependable electrical solutions that ensure uninterrupted
            operations and maximum customer satisfaction.
          </p>

        </div>

        {/* CARD 2 */}

        <div className="service-card card-two">

          <div className="service-number">02</div>

          <h3>
            HVAC
            <br />
            System
          </h3>

          <img src={hvac} alt="HVAC System" />

          <p>
            We provide complete HVAC solutions including heating,
            ventilation and air conditioning systems for commercial,
            industrial and institutional facilities. Every installation is
            designed to deliver maximum comfort and operational efficiency.
          </p>

          <p>
            Our engineers design, install and commission energy-efficient
            HVAC systems that improve indoor air quality while reducing
            operating costs. Every solution is customized according to the
            client's building requirements and international standards.
          </p>

        </div>

        {/* CARD 3 */}

        <div className="service-card card-three">

          <div className="service-number">03</div>

          <h3>
            Plumbing
            <br />
            System
          </h3>

          <img src={plumbing} alt="Plumbing System" />

          <p>
            We deliver complete plumbing solutions including water supply,
            drainage, sanitary systems and piping installations for
            residential, commercial and industrial developments with
            high-quality engineering standards.
          </p>

          <p>
            Our experienced professionals ensure durable piping systems,
            efficient water management and timely project execution.
            Every installation is carefully tested to deliver reliable
            long-term performance with minimal maintenance.
          </p>

        </div>

        {/* CARD 4 */}

        <div className="service-card card-four">

          <div className="service-number">04</div>

          <h3>
            Fire Fighting
            <br />
            System
          </h3>

          <img src={firefighting} alt="Fire Fighting System" />

          <p>
            We provide advanced fire fighting systems including hydrants,
            sprinklers, fire pumps and suppression systems for commercial,
            industrial and high-rise buildings with complete safety
            compliance.
          </p>

          <p>
            Our engineering team ensures proper design, installation,
            testing and commissioning of every fire protection system.
            We help safeguard lives, valuable assets and critical
            infrastructure through dependable fire safety solutions.
          </p>

        </div>

        {/* CARD 5 */}

        <div className="service-card card-five">

          <div className="service-number">05</div>

          <h3>
            Fire Alarm
            <br />
            System
          </h3>

          <img src={firealarm} alt="Fire Alarm System" />

          <p>
            We design and install intelligent fire alarm systems that
            provide early fire detection, rapid emergency response and
            complete life safety for commercial, industrial and
            residential buildings.
          </p>

          <p>
            Our certified engineers perform professional installation,
            testing and commissioning while ensuring compliance with
            national fire safety standards. Every solution is designed
            for reliable long-term performance.
          </p>

        </div>
                {/* CARD 6 */}

        <div className="service-card card-six">

          <div className="service-number">06</div>

          <h3>
            Public Address
            <br />
            System
          </h3>

          <img src={publicaddress} alt="Public Address System" />

          <p>
            We provide advanced public address systems for offices,
            industries, educational institutions and commercial buildings.
            Our solutions ensure clear voice communication for routine
            announcements and emergency evacuation procedures.
          </p>

          <p>
            Our team designs and installs reliable audio distribution
            systems using high-quality equipment that delivers crystal-clear
            sound coverage. Every installation is tested to provide
            dependable performance and long-term operational reliability.
          </p>

        </div>

        {/* CARD 7 */}

        <div className="service-card card-seven">

          <div className="service-number">07</div>

          <h3>
            Networking
            <br />
            System
          </h3>

          <img src={networking} alt="Networking System" />

          <p>
            We offer complete networking solutions including structured
            cabling, LAN, WAN, fiber optic installation and server room
            infrastructure. Our systems are designed for secure, scalable
            and high-speed communication networks.
          </p>

          <p>
            Our networking experts ensure seamless connectivity, improved
            data security and reliable communication across every business
            environment. We deliver future-ready infrastructure that
            supports growing operational requirements.
          </p>

        </div>

        {/* CARD 8 */}

        <div className="service-card card-eight">

          <div className="service-number">08</div>

          <h3>
            CCTV
            <br />
            System
          </h3>

          <img src={cctv} alt="CCTV System" />

          <p>
            Our CCTV surveillance solutions provide continuous monitoring,
            enhanced security and complete protection for commercial,
            industrial and residential facilities. We install advanced
            HD and IP camera systems with centralized monitoring.
          </p>

          <p>
            Every surveillance solution is customized according to the
            client's security requirements using modern technologies and
            professional installation practices. We ensure maximum coverage,
            reliability and peace of mind.
          </p>

        </div>

        {/* CARD 9 */}

        <div className="service-card card-nine">

          <div className="service-number">09</div>

          <h3>
            MEP Design
            <br />
            Consultancy
          </h3>

          <img src={consultancy} alt="MEP Design Consultancy" />

          <p>
            Rcube provides complete MEP design consultancy services covering
            mechanical, electrical and plumbing engineering for commercial,
            industrial and infrastructure developments. Every design is
            prepared with technical accuracy and regulatory compliance.
          </p>

          <p>
            Our experienced consultants develop cost-effective, sustainable
            and innovative engineering solutions that optimize project
            performance. We support clients from conceptual planning through
            detailed design and successful project execution.
          </p>

        </div>

        {/* CARD 10 */}

        <div className="service-card card-ten">

          <div className="service-number">10</div>

          <h3>
            Project
            <br />
            Management
          </h3>

          <img src={project} alt="Project Management" />

          <p>
            Our project management services cover planning, scheduling,
            execution, quality control, supervision and final commissioning.
            We coordinate every stage efficiently to ensure projects are
            delivered safely, on time and within budget.
          </p>

          <p>
            With experienced project managers and engineering professionals,
            we maintain the highest standards of quality throughout the
            project lifecycle. Our systematic approach minimizes risks,
            improves efficiency and ensures complete client satisfaction.
          </p>

        </div>

      </div>

    </section>

  );

}

export default Services;