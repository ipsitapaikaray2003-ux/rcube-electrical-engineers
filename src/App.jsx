import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

/* About Pages */

import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
import VisionMission from "./pages/VisionMission/VisionMission";
import WhyChoose from "./pages/WhyChoose/WhyChoose";
import CoreValues from "./pages/CoreValues/CoreValues";
import Process from "./pages/Process/Process";
import Consultation from "./pages/Consultation/Consultation";
import QuoteRequest from "./pages/QuoteRequest/QuoteRequest";
import Support from "./pages/Support/Support";
import Careers from "./pages/Careers/Careers";
import Leadership from "./pages/Leadership/Leadership";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/company-profile" element={<CompanyProfile />} />

        <Route path="/vision-mission" element={<VisionMission />} />

        <Route path="/why-choose-us" element={<WhyChoose />} />

        <Route path="/core-values" element={<CoreValues />} />

        <Route path="/our-process" element={<Process />} />

      <Route
  path="/quote-request"
  element={<QuoteRequest />}
 />
        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
        <Route
    path="/consultation"
    element={<Consultation />}
/>
<Route
  path="/support"
  element={<Support />}
/>
<Route path="/careers" element={<Careers />} />
<Route path="/leadership" element={<Leadership />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;