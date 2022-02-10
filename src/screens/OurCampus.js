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
            <div className="our__school__overlay__content__heading">
              OUR CAMPUS
            </div>
          </div>
        </div>
      </div>
      <div className="events__main__container">
        <div className="campus__main__container__content">
          <div className="campus__main__container__content__card">
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
          </div>
          <div className="campus__main__container__content__card">
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
          </div>
          <div className="campus__main__container__content__card">
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
          </div>
        </div>
      </div>

      <div className="addmission__main__container">
        <div className="addmission__main__container__content__wrapper__headings__wrapper">
          <div className="addmission__main__container__content__wrapper__heading">
            ADMISSIONS
          </div>
          <div className="addmission__main__container__content__wrapper__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptatem rem deserunt delectus velit quo quam praesentium est
            commodi quasi, atque blanditiis vero soluta cumque. Illo magni
            labore ipsa, eaque consectetur quisquam perferendis eius
            accusantium, repellendus iure expedita necessitatibus commodi
            recusandae doloribus voluptates? Reprehenderit, vitae quibusdam?
            Labore. cumque. Illo magni labore ipsa, eaque consectetur quisquam
            perferendis eius accusantium, repellendus iure expedita
            necessitatibus commodi recusandae doloribus voluptates?
            Reprehenderit, vitae quibusdam? Labore.
          </div>
        </div>
        <div className="addmission__main__container__content">
          <img
            src={addmission_bg}
            alt="addmission_bg"
            className="addmission__main__container__content__img"
          />
          <div className="addmission__main__container__content__overlay">
            <div className="addmission__main__container__content__overlay__content">
              <div className="addmission__main__container__content__overlay__content__paragragh">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, ex optio suscipit impedit itaque beatae inventore
                perferendis officia tenetur fuga!
              </div>
              <input
                type="text"
                placeholder="Name"
                className="contact__us__main__container__overlay__content__form__input"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="contact__us__main__container__overlay__content__form__input"
              />{" "}
              <input
                type="text"
                placeholder="Class"
                className="contact__us__main__container__overlay__content__form__input"
              />
              <input
                type="text"
                placeholder="Address"
                className="contact__us__main__container__overlay__content__form__input"
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "flex-end",
                  marginTop: "1em",
                }}
              >
                <button className="primary__btn">Submit</button>
              </div>
            </div>
            <div className="addmission__main__container__content__wrapper"></div>
            <div className="addmission__main__container__content__wrapper__headings__container">
              <div className="addmission__main__container__content__wrapper__heading">
                COMPLAINTS
              </div>
              <div className="addmission__main__container__content__wrapper__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur voluptatem rem deserunt delectus velit quo quam
                praesentium est commodi quasi, atque blanditiis vero soluta
                cumque. Illo magni labore ipsa, eaque consectetur quisquam
                perferendis eius accusantium, repellendus iure expedita
                necessitatibus commodi recusandae doloribus voluptates?
                Reprehenderit, vitae quibusdam? Labore. cumque. Illo magni
                labore ipsa, eaque consectetur quisquam perferendis eius
                accusantium, repellendus iure expedita necessitatibus commodi
                recusandae doloribus voluptates? Reprehenderit, vitae quibusdam?
                Labore.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sports__main__container">
        <div className="sports__main__container__heading">Sports</div>
        <div className="sports__main__container__heading__content">
          <SportsCard />
          <SportsCard />
          <SportsCard />
          <SportsCard />
          <SportsCard />
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
