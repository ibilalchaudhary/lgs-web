import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import eventPic from "../assets/eventPic.png";
import campusPic from "../assets/campusPic.png";
import primarySchool from "../assets/primarySchool.png";
import middleSchool from "../assets/middleSchool.png";
import seniorSchoolO from "../assets/seniorSchoolO.png";
import seniorSchoolA from "../assets/seniorLevelA.png";
import main_bg from "../assets/main_bg.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

function SportsCard() {
  return (
    <div className="sports__main__container__content__card">
      <img
        src={eventPic}
        alt="eventPic"
        className="sports__main__container__content__card__img"
      />
      <div className="sports__main__container__content__card__overlay">
        Football
      </div>
    </div>
  );
}

export default function OurCampus() {
  return (
    <>
      <div className="our__school__container">
        <img
          src={ourCampusBg}
          alt="ourCampusBg"
          className="home__main__container__img"
        />
        <div className="home__main__container__overlay">
          <div className="our__school__container__overlay__content">
            <div className="our__school__overlay__content__heading__wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="598"
                height="42"
                viewBox="0 0 598 42"
              >
                <rect
                  id="Rectangle_190"
                  data-name="Rectangle 190"
                  width="598"
                  height="42"
                  rx="21"
                  fill="#ec5700"
                />
              </svg>
              <div className="our__school__overlay__content__heading">
                OUR CAMPUS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events__main__container">
        <div className="campus__main__container__content">
          <div className="campus__main__container__content__left">
            <div className="campus__main__container__content__left__heading">
              Canal Campus
            </div>
            <div className="campus__main__container__content__left__content">
              <Link
                to="/canal-campus-primary-school"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="campus__main__container__content__left__entry campus__main__container__content__left__entry__senior"
              >
                <img src={primarySchool} alt="primarySchool" />
                Primary School
              </Link>
              <Link
                to="/canal-campus-middle-school"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="campus__main__container__content__left__entry"
              >
                <img src={middleSchool} alt="middleSchool" />
                Middle School
              </Link>
              <Link
                to="/canal-campus-senior-school-o-level"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="campus__main__container__content__left__entry campus__main__container__content__left__entry__o__level"
              >
                <img src={seniorSchoolA} alt="seniorSchoolA" />
                Senior School(O-Level)
              </Link>

              <Link
                to="/canal-campus-Matric-school"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="campus__main__container__content__left__entry campus__main__container__content__left__entry__o__level"
              >
                <img src={middleSchool} alt="middleSchool" />
                Matric School
              </Link>

              <Link
                to="/canal-campus-senior-school-a-level"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="campus__main__container__content__left__entry campus__main__container__content__left__entry__a__level"
              >
                <img src={seniorSchoolO} alt="seniorSchoolO" />
                Senior School(A-Level)
              </Link>
            </div>
          </div>
          <div className="campus__main__container__content__right">
            <div className="campus__main__container__content__left__heading">
              105-C Campus
            </div>
            <div className="campus__main__container__content__left__content">
              <Link
                to="/105-c-campus-primary-school"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="campus__main__container__content__left__entry campus__main__container__content__left__entry__senior"
              >
                <img src={primarySchool} alt="primarySchool" />
                Primary School
              </Link>

              <Link
                to="/105-c-campus-middle-school"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="campus__main__container__content__left__entry"
              >
                <img src={middleSchool} alt="middleSchool" />
                Middle School
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
