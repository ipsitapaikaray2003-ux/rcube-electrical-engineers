import "./FloatingWhatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/919108146948?text=Hello%20Darshikha%20Infrastructure%2C%20I%20would%20like%20to%20enquire%20about%20your%20electrical%20engineering%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsapp;