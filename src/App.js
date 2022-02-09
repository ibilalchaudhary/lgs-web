import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./screens/Home";
import OurCampus from "./screens/OurCampus";
import OurSchool from "./screens/OurSchool";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-school" element={<OurSchool />} />
        <Route path="/our-campus" element={<OurCampus />} />
      </Routes>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
