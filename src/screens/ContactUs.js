import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";

export default function ContactUs() {
  return (
    <>
      <div className="our__school__container">
        <img
          src={ourCampusBg}
          alt="ourCampusBg"
          className="home__main__container__img"
        />
        <div className="contact__main__container__overlay">
          <div className="our__school__container__overlay__content">
            <div className="our__school__overlay__content__heading">
              CONTACT US
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
