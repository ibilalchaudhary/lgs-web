import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import eventPic from "../assets/eventPic.png";
import campusPic from "../assets/campusPic.png";
import addmission_bg from "../assets/addmission_bg.png";
import main_bg from "../assets/main_bg.png";

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

export default function Admissions() {
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
                Admissions
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admissions__content__section">
        <div className="admissions__content__section__cards__wrapper">
          <div className="admissions__content__section__card__admission__procedure">
            <div className="admissions__content__section__card__admission__procedure__heading">
              Middle and Senior Admission Procedure
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sunt impedit, esse quidem, cupiditate nihil facilis vel
              dolorum nobis accusantium illum quisquam. Sunt nam, eaque vitae,
              alias ad accusamus temporibus consequatur sed dolore aut iste
              porro placeat eligendi modi cupiditate inventore saepe ex
              architecto dignissimos quos? Et magni dignissimos ad maiores
              facere, quis, est sequi blanditiis reiciendis adipisci asperiores
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              porro placeat eligendi modi cupiditate inventore saepe ex
              architecto dignissimos quos? Et magni dignissimos ad maiores
              facere, quis, est sequi blanditiis reiciendis adipisci asperiores
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              architecto dignissimos quos? Et magni dignissimos ad maiores
              facere, quis, est sequi blanditiis reiciendis adipisci asperiores
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              porro placeat eligendi modi cupiditate inventore saepe ex
              architecto dignissimos quos? Et magni dignissimos ad maiores
              facere, quis, est sequi blanditiis reiciendis adipisci asperiores
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              Eum.
            </div>
          </div>
          <div className="admissions__content__section__card__admission__procedure proficieny__exams">
            <div className="admissions__content__section__card__admission__procedure__heading proficieny__exams proficieny__exams__heading">
              Proficiency Exam (A-Level Admission Procedure)
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph proficieny__exams">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sunt impedit, esse quidem, cupiditate nihil facilis vel
              dolorum nobis accusantium illum quisquam. Sunt nam, eaque vitae,
              alias ad accusamus temporibus consequatur sed dolore aut iste
              porro placeat eligendi modi cupiditate inventore saepe ex
              architecto dignissimos quos? Et magni dignissimos ad maiores
              facere, quis, est sequi blanditiis reiciendis adipisci asperiores
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              porro placeat eligendi modi cupiditate inventore saepe ex
              architecto dignissimos quos? Et magni dignissimos ad maiores
              facere, quis, est sequi blanditiis reiciendis adipisci asperiores
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              porro placeat eligendi modi cupiditate inventore saepe ex
              architecto dignissimos quos? Et magni dignissimos ad maiores
              facere, quis, est sequi blanditiis reiciendis adipisci asperiores
              dolor ea aperiam dolore dicta facilis architecto impedit sed sunt.
              Eum.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
