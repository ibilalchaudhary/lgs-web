import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import eventPic from "../assets/eventPic.png";
import campusPic from "../assets/campusPic.png";
import addmission_bg from "../assets/addmission_bg.png";
import contactPic from "../assets/contactPic.png";

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
              Students’ Complaints
            </div>
            <div className="addmission__main__container__content__wrapper__paragraph">
              All concerns and complaints, even those which appear trivial, will
              be handled seriously and sensitively.
            </div>
            <div
              style={{ marginTop: "2em" }}
              className="addmission__main__container__content__wrapper__heading"
            >
              Anonymity
            </div>
            <div className="addmission__main__container__content__wrapper__paragraph">
              Anonymous complaints will be recorded accordingly. It is at the
              coordinator’s discretion as to what action, if any, will be taken
              in response to an anonymous complaint.
              <br />
              <br />
              If a student does not wish to be seen entering an administrator’s/
              coordinator’s office to lodge a complaint or raise an issue, she
              is welcome to email them at the addresses provided above.
              <br />
              <div style={{ width: "90%" }}>
                <b>
                  Note: In addition to the rules outlined in this document, any
                  action which puts or could put the reputation of the School in
                  jeopardy, or which impacts or could impact negatively on the
                  school community, will be regarded as a serious breach of
                  School Rules, whether on or off the school premises or during
                  or outside of school hours.
                </b>
              </div>
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
                  Students’ Complaints
                </div>
                <div className="addmission__main__container__content__wrapper__paragraph">
                  All concerns and complaints, even those which appear trivial,
                  will be handled seriously and sensitively.
                </div>
                <div
                  style={{ marginTop: "2em" }}
                  className="addmission__main__container__content__wrapper__heading"
                >
                  Anonymity
                </div>
                <div className="addmission__main__container__content__wrapper__paragraph">
                  Anonymous complaints will be recorded accordingly. It is at
                  the coordinator’s discretion as to what action, if any, will
                  be taken in response to an anonymous complaint.
                  <br />
                  <br />
                  If a student does not wish to be seen entering an
                  administrator’s/ coordinator’s office to lodge a complaint or
                  raise an issue, she is welcome to email them at the addresses
                  provided above.
                  <br />
                  <br />
                  <div style={{ width: "90%" }}>
                    <b>
                      Note: In addition to the rules outlined in this document,
                      any action which puts or could put the reputation of the
                      School in jeopardy, or which impacts or could impact
                      negatively on the school community, will be regarded as a
                      serious breach of School Rules, whether on or off the
                      school premises or during or outside of school hours.
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__us__main__container">
        <img
          src={contactPic}
          alt="contactPic"
          className="contact__us__main__container__img"
        />
        <div className="contact__us__main__container__overlay__new">
          <div className="contact__us__main__container__overlay__content__new">
            <div className="contact__us__main__container__overlay__content__new__para">
              Parents wishing to raise a concern may do so by contacting the
              relevant Administrator or Coordinator by email, telephone, or in
              person by appointment.
            </div>
            <div className="contact__us__main__container__overlay__content__new__entry__wrapper">
              <div className="contact__us__main__container__overlay__content__new__entry">
                <span>Principal</span>Imran Shahid–
                <a href="mailto:imranshahid@lgsfsd.edu.pk">
                  imranshahid@lgsfsd.edu.pk
                </a>
              </div>
              <div className="contact__us__main__container__overlay__content__new__entry">
                <span>Vice Principal</span>Irfana Aziz–
                <a href="mailto:irfanaaziz@lgsfsd.edu.pk">
                  irfanaaziz@lgsfsd.edu.pk
                </a>
              </div>
              <div className="contact__us__main__container__overlay__content__new__entry">
                <span>Middle School Coordinator (Girls)</span>Ayesha Gilani-
                <a href="mailto:ayeshagilani@lgsfsd.edu.pk">
                  ayeshagilani@lgsfsd.edu.pk
                </a>
              </div>
              <div className="contact__us__main__container__overlay__content__new__entry">
                <span>Middle School Coordinator (Boys)</span>Kiran Nabeel-
                <a href="mailto:kirannabeel@lgsfsd.edu.pk">
                  kirannabeel@lgsfsd.edu.pk
                </a>
              </div>
              <div className="contact__us__main__container__overlay__content__new__entry">
                <span>Pre and Primary School Head</span>Shazia Zabiullah-
                <a href="mailto:shaziaabiullah@lgsfsd.edu.pk">
                  shaziaabiullah@lgsfsd.edu.pk
                </a>
              </div>
              <div className="contact__us__main__container__overlay__content__new__entry">
                <span>Head of A Level</span>Sohail Haider-
                <a href="mailto:sohailhaider@lgsfsd.edu.pk">
                  sohailhaider@lgsfsd.edu.pk
                </a>
              </div>
              <div className="contact__us__main__container__overlay__content__new__entry">
                <span>Student Affairs Coordinato</span>Uzma Masood-
                <a href="mailto:studentaffairs@lgsfsd.edu.pk">
                  studentaffairs@lgsfsd.edu.pk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
