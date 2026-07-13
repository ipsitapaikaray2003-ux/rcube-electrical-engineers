import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import AboutPreview from "../../components/AboutPreview/AboutPreview";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import FloatingWhatsapp from "../../components/FloatingWhatsapp/FloatingWhatsapp";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
       <section id="services">
  <Services />
</section>
        <section id="projects">
  <Projects />
</section>
        <ContactSection />
         <Footer />
         <FloatingWhatsapp />
      
      
    </>
  );
}

export default Home;
