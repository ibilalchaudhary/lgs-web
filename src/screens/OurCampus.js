import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import eventPic from "../assets/eventPic.png";
import campusPic from "../assets/campusPic.png";
import addmission_bg from "../assets/addmission_bg.png";
import main_bg from "../assets/main_bg.png";
import { Link } from "react-router-dom";

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
          <Link
            to="/canal-campus"
            className="campus__main__container__content__card"
          >
            <div className="campus__main__container__content__card__heading">
              CANAL CAMPUS
            </div>
            <div className="campus__main__container__content__card__entry">
              Primary School
            </div>
            <div className="campus__main__container__content__card__entry">
              Middle School
            </div>
            <div className="campus__main__container__content__card__sub__entry">
              Student Choices
            </div>
            <div className="campus__main__container__content__card__sub__entry">
              Student Resources
            </div>
            <div className="campus__main__container__content__card__sub__entry">
              Student life & Choice
            </div>
            <div className="campus__main__container__content__card__sub__entry">
              Notice Board
            </div>
          </Link>
          <Link
            to="/senior-school"
            className="campus__main__container__content__card"
          >
            <div className="campus__main__container__content__card__heading campus__main__container__content__card__entry__white">
              SENIOR SCHOOL
            </div>
            <div className="campus__main__container__content__card__entry__center campus__main__container__content__card__entry__white">
              Primary School
            </div>
            <div className="campus__main__container__content__card__entry__center campus__main__container__content__card__entry__white">
              Middle School
            </div>
            <div className="campus__main__container__content__card__entry__center campus__main__container__content__card__entry__white">
              Student Choices
            </div>
          </Link>
          <Link
            to="/a-levels"
            className="campus__main__container__content__card"
          >
            <div className="campus__main__container__content__card__heading campus__main__container__content__card__entry__white">
              A- lEVELS
            </div>
            <div className="campus__main__container__content__card__entry campus__main__container__content__card__entry__white">
              Student Resources
            </div>
            <div className="campus__main__container__content__card__entry campus__main__container__content__card__entry__white">
              Global Perspective & Thinking Skill
            </div>
            <div className="campus__main__container__content__card__entry campus__main__container__content__card__entry__white">
              Student Choices
            </div>
            <div className="campus__main__container__content__card__entry campus__main__container__content__card__entry__white">
              Student Resources
            </div>
            <div className="campus__main__container__content__card__entry campus__main__container__content__card__entry__white">
              Student life & Choice
            </div>
            <div className="campus__main__container__content__card__entry campus__main__container__content__card__entry__white">
              Notice Board
            </div>
          </Link>
        </div>
      </div>
      <div className="our__campus__banner__section">
        <img
          src={main_bg}
          alt="main_bg"
          className="our__campus__banner__section"
        />
      </div>
    </>
  );
}
