import "./Services.css";

import { FaArrowRight } from "react-icons/fa";

import electrical from "../../assets/service-1.jpg";
import firealarm from "../../assets/service-2.jpg";
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

<div className="service-number">

01

</div>

<h3>

Electrical

<br/>

Systems

</h3>

<img src={electrical} alt="" />

<p>

Complete electrical installation,
power distribution and low voltage
solutions for commercial projects.

</p>

<button>

<FaArrowRight/>

</button>

</div>

{/* CARD 2 */}

<div className="service-card card-two">

<div className="service-number">

02

</div>

<h3>

Fire Alarm

<br/>

Systems

</h3>

<img src={firealarm} alt="" />

<p>

Advanced fire alarm and life
safety systems designed for
modern infrastructures.

</p>

<button>

<FaArrowRight/>

</button>

</div>

{/* CARD 3 */}

<div className="service-card card-three">

<div className="service-number">

03

</div>

<h3>

CCTV &

<br/>

Networking

</h3>

<img src={cctv} alt="" />

<p>

Integrated surveillance,
networking and monitoring
solutions with maximum security.

</p>

<button>

<FaArrowRight/>

</button>

</div>

{/* CARD 4 */}

<div className="service-card card-four">

<div className="service-number">

04

</div>

<h3>

Design

<br/>

Consultancy

</h3>

<img src={consultancy} alt="" />

<p>

Professional engineering
consultancy and planning for
high-quality project execution.

</p>

<button>

<FaArrowRight/>

</button>

</div>

{/* CARD 5 */}

<div className="service-card card-five">

<div className="service-number">

05

</div>

<h3>

Project

<br/>

Management

</h3>

<img src={project} alt="" />

<p>

End-to-end project management
from planning to successful
commissioning and delivery.

</p>

<button>

<FaArrowRight/>

</button>

</div>

</div>

</section>

    );

}

export default Services;