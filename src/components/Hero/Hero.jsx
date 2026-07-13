import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";

function Hero() {
  return (
    <section className="hero">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        loop={true}
        speed={1400}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="heroSwiper"
      >

        {/* ---------------- Slide 1 ---------------- */}

        <SwiperSlide>

          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${hero1})` }}
          >

            <div className="overlay"></div>

            <div className="container hero-content">

              <div className="hero-text">

                <span className="hero-tag">
                  Welcome to RCube Electrical & Engineers
                </span>

                <h1>
                  Powering Tomorrow
                  <br />
                  Through Engineering Excellence
                </h1>

                <p>
                  Delivering reliable Electrical Systems,
                  Project Management, Design Consultancy
                  and Engineering Solutions for commercial,
                  industrial and infrastructure projects.
                </p>

                <div className="hero-buttons">

                  

                </div>



              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* ---------------- Slide 2 ---------------- */}

        <SwiperSlide>

          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${hero2})` }}
          >

            <div className="overlay"></div>

            <div className="container hero-content">

              <div className="hero-text">

                <span className="hero-tag">
                  Trust • Quality • Safety
                </span>

                <h1>
                  Complete Electrical,
                  <br />
                  Fire Alarm &
                  CCTV Solutions
                </h1>

                <p>
                  Providing Fire Alarm Systems,
                  CCTV Surveillance,
                  Networking Infrastructure and
                  Electrical Installations with
                  uncompromised quality.
                </p>

                <div className="hero-buttons">

                </div>

              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* ---------------- Slide 3 ---------------- */}

        <SwiperSlide>

          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${hero3})` }}
          >

            <div className="overlay"></div>

            <div className="container hero-content">

              <div className="hero-text">

                <span className="hero-tag">
                  ISO 9001 : 2015 Certified
                </span>

                <h1>
                  Smart Engineering
                  <br />
                  For Modern Infrastructure
                </h1>

                <p>
                  RCube Electrical & Engineers
                  delivers complete turnkey
                  Electrical & Engineering
                  solutions with innovation,
                  integrity and excellence.
                </p>

                <div className="hero-buttons">

                </div>

              </div>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default Hero;