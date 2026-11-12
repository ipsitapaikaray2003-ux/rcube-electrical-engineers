import "./Leadership.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ravi from "../../assets/ravi-rathod.png";
import sufiyan from "../../assets/mohammed-sufiyan.png";
import hemalatha from "../../assets/hemalatha.png";

function Leadership() {

const navigate = useNavigate();

return (

<div className="leadership-page">

{/* Hero */}

<section className="leadership-hero">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
>

<span>OUR LEADERSHIP</span>

<h1>
Meet The Visionaries Behind
Darshikha Infrastructure Pvt Ltd
</h1>

<p>

Our leadership team brings together decades of engineering,
project execution and operational excellence, driving every
project with integrity, innovation and customer commitment.

</p>

</motion.div>

</section>

{/* Ravi */}

<section className="leader-card">

<div className="leader-image">

<img src={ravi} alt="Ravi Rathod"/>

</div>

<div className="leader-content">

<h2>Ravi Rathod</h2>

<h4>Founder & Managing Director</h4>

<div className="leader-info">

<div>

<h5>Qualification</h5>

<span>Bachelor of Engineering</span>

</div>

<div>

<h5>Experience</h5>

<span>15+ Years</span>

</div>

</div>

<p>

Ravi Rathod is an Electrical Engineer with over 15 years of
experience in the MEP industry. He founded Darshikha Infrastructure
Pvt Ltd in 2021 with a vision to provide efficient, safe and
cost-effective engineering solutions for commercial, industrial
and infrastructure projects.

</p>

<p>

He has successfully led numerous projects by combining technical
expertise with operational excellence in procurement,
administration and project execution. His leadership philosophy
focuses on quality workmanship, customer satisfaction and
long-term business relationships.

</p>

<p>

Today he continues to guide Darshikha Infrastructure towards innovation,
sustainability and engineering excellence while building a
high-performing team capable of delivering world-class MEP
solutions.

</p>

</div>

</section>
      {/* Mohammed Sufiyan */}

      <section className="leader-card reverse">

        <div className="leader-image">

          <img src={sufiyan} alt="Mohammed Sufiyan" />

        </div>

        <div className="leader-content">

          <h2>Mohammed Sufiyan</h2>

          <h4>General Manager</h4>

          <div className="leader-info">

            <div>
              <h5>Qualification</h5>
              <span>M.Tech</span>
            </div>

            <div>
              <h5>Experience</h5>
              <span>15+ Years</span>
            </div>

          </div>

          <p>

            Mohammed Sufiyan brings over 15 years of extensive experience
            in project execution and pre-contract management across
            commercial, industrial and infrastructure projects. His
            engineering expertise enables him to successfully manage
            projects from conceptual planning through execution and final
            handover.

          </p>

          <p>

            He works closely with clients, consultants, vendors and site
            teams to ensure seamless coordination throughout every phase
            of the project. His excellent communication skills and
            technical knowledge help eliminate operational bottlenecks
            while maintaining the highest standards of quality.

          </p>

          <p>

            Apart from monitoring project execution, he keeps clients
            informed about project progress, anticipated risks and
            effective mitigation strategies. His commitment to timely
            delivery and engineering excellence continues to strengthen
            Darshikha Infrastructure's reputation in the MEP industry.

          </p>

        </div>

      </section>

      {/* D. Hemalatha */}

      <section className="leader-card">

        <div className="leader-image">

          <img src={hemalatha} alt="D. Hemalatha" />

        </div>

        <div className="leader-content">

          <h2>D. Hemalatha</h2>

          <h4>Accounts & Administration</h4>

          <div className="leader-info">

            <div>
              <h5>Qualification</h5>
              <span>B.Com</span>
            </div>

            <div>
              <h5>Experience</h5>
              <span>20+ Years</span>
            </div>

          </div>

          <p>

            D. Hemalatha has more than two decades of professional
            experience in administration, accounts and business
            operations. Beginning her career in 2001, she has developed
            strong expertise in accounts, billing, procurement, stock
            management and project coordination.

          </p>

          <p>

            At Darshikha Infrastructure Pvt Ltd, she plays a vital role in
            maintaining financial discipline and ensuring the smooth
            functioning of day-to-day administrative activities. Her
            organized approach and attention to detail contribute
            significantly to operational efficiency.

          </p>

          <p>

            Her dedication, reliability and collaborative work ethic make
            her an integral member of the Darshikha Infrastructure team. She continues to
            support the organization's growth while strengthening internal
            processes and delivering consistent operational excellence.

          </p>

        </div>

      </section>

      {/* Back Button */}

      <div className="leadership-btn">

        <button
          onClick={() => navigate("/")}
        >
          ← Back To Home
        </button>

      </div>

    </div>

  );

}

export default Leadership;