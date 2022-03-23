import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ContactUsSection from "./component/ContactUsSection";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Admissions from "./screens/Admissions";
import ContactUs from "./screens/ContactUs";
import FAQ from "./screens/FAQ";
import FaqDetails from "./screens/FAQDetails";
import Home from "./screens/Home";
import Alumini from "./screens/Alumini";
import OurCampus from "./screens/OurCampus";
import OurSchool from "./screens/OurSchool";
import Sports from "./screens/Sports";
import Complaints from "./screens/Complaints";
import CampusLife from "./screens/CampusLife";
import Career from "./screens/Career";
import CounsellingCenter from "./screens/CounsellingCenter";
import PrimarySchoolCanalCampus from "./screens/PrimarySchoolCanalCampus";
import MiddleSchoolCanalCampus from "./screens/MiddleSchoolCanalCampus";
import SeniorSchoolALevelCanalCampus from "./screens/SeniorSchoolALevelCanalCampus";
import SeniorSchoolOLevelCanalCampus from "./screens/SeniorSchoolOLevelCanalCampus";

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
        <Route path="/CampusLife" element={<CampusLife />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq-details" element={<FaqDetails />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route
          path="/canal-campus-senior-school-a-level"
          element={<SeniorSchoolALevelCanalCampus />}
        />
        <Route
          path="/canal-campus-senior-school-o-level"
          element={<SeniorSchoolOLevelCanalCampus />}
        />
        <Route
          path="/canal-campus-middle-school"
          element={<MiddleSchoolCanalCampus />}
        />
        <Route
          path="/canal-campus-primary-school"
          element={<PrimarySchoolCanalCampus />}
        />
        <Route path="/career" element={<Career />} />
        <Route path="/counselling-center" element={<CounsellingCenter />} />
      </Routes>
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default App;
