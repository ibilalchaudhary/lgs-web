import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import sportsGallery6 from "../assets/sportsGallery6.png";
import PhotoGallery from "../component/PhotoGallery";

function SportsCard({ title }) {
  return (
    <div className="sports__section__main__container__content__card">
      <img
        src={sportsGallery6}
        alt="sportsGallery"
        className="events__main__container__content__card__img"
      />
      <div className="events__main__container__content__card__overlay">
        {title}
      </div>
    </div>
  );
}
export default function Sports() {
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
                style={{ width: 230 }}
                xmlns="http://www.w3.org/2000/svg"
                width="308"
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
                Sports
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events__main__container">
        <div className="sports__section__main__container__content">
          <SportsCard title="Cricket" />
          <SportsCard title="Badminton" />
          <SportsCard title="Futsal" />
          <SportsCard title="Table Tennist" />
          <SportsCard title="Basketball" />
          <SportsCard title="Fitness & Atheletics" />
          <SportsCard title="Badminton" />
          <SportsCard title="Hockey" />
          <SportsCard title="Badminton" />
          <SportsCard title="Hockey" />
        </div>
        <PhotoGallery />
      </div>
    </>
  );
}
