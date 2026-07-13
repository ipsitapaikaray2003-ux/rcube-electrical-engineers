import "./Navbar.css";

import { useState, useEffect } from "react";
import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

import logo from "../../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => {

    setMenuOpen(false);

    setAboutOpen(false);

    setContactOpen(false);

  };

  const goToServices = () => {

    closeMenu();

    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {

        document
          .getElementById("services")
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }, 200);

    } else {

      document
        .getElementById("services")
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }

  };

  const goToProjects = () => {

    closeMenu();

    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {

        document
          .getElementById("projects")
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }, 200);

    } else {

      document
        .getElementById("projects")
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }

  };

  return (

    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="nav-container">

        {/* ================= LOGO ================= */}

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="RCube Logo"
          />

        </NavLink>

        {/* ================= NAVIGATION ================= */}

        <ul
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >          {/* ================= HOME ================= */}

          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          {/* ================= ABOUT ================= */}

          <li
            className="dropdown"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >

            <div
              className="dropdown-title"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              <FaChevronDown className={aboutOpen ? "rotate" : ""} />
            </div>

            <ul className={aboutOpen ? "dropdown-menu show" : "dropdown-menu"}>

              <li>
                <NavLink to="/company-profile" onClick={closeMenu}>
                  Company Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/vision-mission" onClick={closeMenu}>
                  Vision & Mission
                </NavLink>
              </li>

              <li>
                <NavLink to="/why-choose-us" onClick={closeMenu}>
                  Why Choose RCube
                </NavLink>
              </li>

              <li>
                <NavLink to="/core-values" onClick={closeMenu}>
                  Core Values
                </NavLink>
              </li>

              <li>
                <NavLink to="/our-process" onClick={closeMenu}>
                  Our Process
                </NavLink>
              </li>

            </ul>

          </li>

          {/* ================= SERVICES ================= */}

          <li>
            <button
              className="nav-btn"
              onClick={goToServices}
            >
              Services
            </button>
          </li>

          {/* ================= PROJECTS ================= */}

          <li>
            <button
              className="nav-btn"
              onClick={goToProjects}
            >
              Projects
            </button>
          </li>

          {/* ================= CONTACT ================= */}

          <li
            className="dropdown"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >

            <div
              className="dropdown-title"
              onClick={() => setContactOpen(!contactOpen)}
            >
              Contact
              <FaChevronDown className={contactOpen ? "rotate" : ""} />
            </div>

            <ul className={contactOpen ? "dropdown-menu show" : "dropdown-menu"}>

              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                  Contact Us
                </NavLink>
              </li>

             <li>

  <NavLink
    to="/quote-request"
    onClick={closeMenu}
  >
     Quote request
  </NavLink>

</li>

              <li>
                <NavLink to="/support" onClick={closeMenu}>
  Support & Service
</NavLink>
              </li>

              <li>
                <NavLink to="/careers" onClick={closeMenu}>
  Careers
</NavLink>
              </li>

            </ul>

          </li>

          {/* ================= GET QUOTE ================= */}

          <li className="quote-item">
  <NavLink
    to="/quote-request"
    className="quote-btn"
    onClick={closeMenu}
  >
    Get Quote
  </NavLink>
</li>
        </ul>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

    </header>

  );

}

export default Navbar;