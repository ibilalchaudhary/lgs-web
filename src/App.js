import React, { useState } from "react";
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
import MiddleSchool105CCampus from "./screens/MiddleSchool105CCampus";
import PrimarySchool105CCampus from "./screens/PrimarySchool105CCampus";
import AluminiCardDetails from "./screens/AluminiCardDetails";
import CampusLifeCardDetails from "./screens/CampusLifeCardDetails";
import MediaAndPublicationDetails from "./screens/MediaAndPublicationDetails";
import MetricSchoolCanalCampus from "./screens/MetricSchoolCanalCampus";
import MetricSchool105CCampus from "./screens/MetricSchool105CCampus";
import AboutUs from "./screens/AboutUs";
import EventCardDetail from "./screens/EventCardDetail";
import RegistrationAdmissionForm from "./screens/RegistrationAdmissionForm";
import PDFForms from "./screens/PDFForms";

function App() {
  const [isPDF, setIsPDF] = useState(false);
  return (
    <>
      {isPDF ? null : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-school" element={<OurSchool />} />
        <Route path="/our-campus" element={<OurCampus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route
          path="/admissions/form"
          element={<RegistrationAdmissionForm />}
        />
        <Route path="/campus-life" element={<CampusLife />} />
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
          path="/105-c-campus-middle-school"
          element={<MiddleSchool105CCampus />}
        />
        <Route
          path="/canal-campus-metric-school"
          element={<MetricSchoolCanalCampus />}
        />
        <Route
          path="/105-c-campus-metric-school"
          element={<MetricSchool105CCampus />}
        />
        <Route
          path="/canal-campus-primary-school"
          element={<PrimarySchoolCanalCampus />}
        />
        <Route
          path="/105-c-campus-primary-school"
          element={<PrimarySchool105CCampus />}
        />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/counselling-center" element={<CounsellingCenter />} />
        <Route path="/alumni-card-details" element={<AluminiCardDetails />} />
        <Route path="/event_detail" element={<EventCardDetail />} />
        <Route
          path="/campus-life-details"
          element={<CampusLifeCardDetails />}
        />
        <Route
          path="/media-publications-details"
          element={<MediaAndPublicationDetails />}
        />
        <Route path="/forms" element={<PDFForms setIsPDF={setIsPDF} />} />
      </Routes>
      {isPDF ? null : <ContactUsSection />}
      {isPDF ? null : <Footer />}
    </>
  );
}

export default App;
