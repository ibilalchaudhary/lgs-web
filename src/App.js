import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ContactUsSection from "./component/ContactUsSection";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Admissions from "./screens/Admissions";
import Careers from "./screens/Careers";
import ContactUs from "./screens/ContactUs";
import FAQ from "./screens/FAQ";
import FaqDetails from "./screens/FAQDetails";
import Home from "./screens/Home";
import Alumini from "./screens/Alumini";
import OurCampus from "./screens/OurCampus";
import OurSchool from "./screens/OurSchool";
import Sports from "./screens/Sports";
import Complaints from "./screens/Complaints";
import CanalCampus from "./screens/CanalCampus";
import SeniorSchool from "./screens/SeniorSchool";
import ALevels from "./screens/ALevels";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-school" element={<OurSchool />} />
        <Route path="/our-campus" element={<OurCampus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq-details" element={<FaqDetails />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/canal-campus" element={<CanalCampus />} />
        <Route path="/senior-school" element={<SeniorSchool />} />
        <Route path="/a-levels" element={<ALevels />} />
      </Routes>
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default App;
