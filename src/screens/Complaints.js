import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import eventPic from "../assets/eventPic.png";
import campusPic from "../assets/campusPic.png";
import addmission_bg from "../assets/addmission_bg.png";
import main_bg from "../assets/main_bg.png";

export default function Complaints() {
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
                COMPLAINTS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="complaints__main__container">
        <div className="addmission__main__container">
          <div className="addmission__main__container__content__wrapper__headings__wrapper">
            <div className="addmission__main__container__content__wrapper__heading">
              COMPLAINTS
            </div>
            <div className="addmission__main__container__content__wrapper__paragraph">
              Parents wishing to raise a concern may do so by contacting the
              relevant Administrator or Coordinator by email, telephone, or in
              person by appointment.
              <li className="addmission__main__container__content__wrapper__paragraph">
                Principal
              </li>
              <li className="addmission__main__container__content__wrapper__paragraph">
                Middle School Coordinator 
              </li>
              <li className="addmission__main__container__content__wrapper__paragraph">
                Middle School Administrator
              </li>
              <li className="addmission__main__container__content__wrapper__paragraph">
                O Level Academic Coordinato
              </li>
              <li className="addmission__main__container__content__wrapper__paragraph">
                Senior School Administrator
              </li>
              <li className="addmission__main__container__content__wrapper__paragraph">
                Head of A Level 
              </li>
              <li className="addmission__main__container__content__wrapper__paragraph">
                Student Affairs Coordinator
              </li>
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
                  All concerns and complaints, even those which appear trivial,
                  will be handled seriously and sensitively.
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
                  Parents wishing to raise a concern may do so by contacting the
                  relevant Administrator or Coordinator by email, telephone, or
                  in person by appointment.
                  <li
                    style={{ marginTop: 10 }}
                    className="addmission__main__container__content__wrapper__paragraph"
                  >
                    Principal
                  </li>
                  <li className="addmission__main__container__content__wrapper__paragraph">
                    Middle School Coordinator 
                  </li>
                  <li className="addmission__main__container__content__wrapper__paragraph">
                    Middle School Administrator
                  </li>
                  <li className="addmission__main__container__content__wrapper__paragraph">
                    O Level Academic Coordinato
                  </li>
                  <li className="addmission__main__container__content__wrapper__paragraph">
                    Senior School Administrator
                  </li>
                  <li className="addmission__main__container__content__wrapper__paragraph">
                    Head of A Level 
                  </li>
                  <li className="addmission__main__container__content__wrapper__paragraph">
                    Student Affairs Coordinator
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
