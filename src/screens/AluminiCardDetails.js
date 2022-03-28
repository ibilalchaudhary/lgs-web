import React from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import campusPic from "../assets/campusPic.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import ReunionsPic from "../assets/ReunionsPic.png";
import overviewPic from "../assets/overviewPic.png";
import PhotoGallery from "../component/PhotoGallery";

export default function AluminiCardDetails() {
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
                style={{ width: 330 }}
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
              <div
                style={{ fontSize: 34 }}
                className="our__school__overlay__content__heading"
              >
                Alumni Gallery
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers__content__section">
        <div className="careers__content__section__cards__wrapper">
          <div className="careers__content__section__card__public__speaking">
            <div className="careers__content__section__card__public__speaking__left">
              <div className="careers__content__section__card__public__speaking__left__heading">
                Overview
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                It has been almost forty years since LGS FSD opened its doors to
                a handful of students. Today, our Alums make Worldwide as they
                cover the globe in their active involvement in a diverse range
                of fields. Stay connected to your home at LGS through Annual
                Reunions, The Alumane Page, the Mashal, and social media, and
                contribute to networking opportunities as they arise. Come
                visit! Arrange a meeting with the Alumni Relations Society,
                mentor a current student, or simply drop in for a cup of coffee
                with Mrs. Shah to share your experiences of the real world! We
                would be absolutely delighted to see you and discover what you
                have been up to! Remember to show your Pride and always stay a
                Grammarian at heart.
              </div>
            </div>
            <img
              src={overviewPic}
              alt="overviewPic"
              className="careers__content__section__card__public__speaking__img"
            />
          </div>
        </div>
      </div>

      <div className="alumini__photo__gallery__wrapper">
        <PhotoGallery />
      </div>
    </>
  );
}
