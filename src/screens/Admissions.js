import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import eventPic from "../assets/eventPic.png";
import addmissionPic from "../assets/addmissionPic.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import aboutPic from "../assets/aboutPic.png";
import addmissionReqiurmentPic from "../assets/addmissionReqiurmentPic.png";
import addmissionReqiurmentPic2 from "../assets/addmissionReqiurmentPic2.png";
import "animate.css";

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

function NavLink({ title, selected, setSelected }) {
  return (
    <button
      onClick={() => {
        setSelected(title);
      }}
      className={
        selected === title
          ? "about__main__container__content__right__nav__selected about__main__container__content__right__nav"
          : "about__main__container__content__right__nav"
      }
    >
      {title}
    </button>
  );
}

function AddmissionNav({ title, selectedAdmin, setSelectedAdmin }) {
  return (
    <button
      onClick={() => {
        setSelectedAdmin(title);
      }}
      className="addmission__requirment__section__nav__wrapper__entry__container"
    >
      <div
        className={
          selectedAdmin === title
            ? "addmission__requirment__section__nav__wrapper__entry__selected"
            : "addmission__requirment__section__nav__wrapper__entry"
        }
      ></div>
      <div className="addmission__requirment__section__nav__wrapper__entry__label">
        {title}
      </div>
    </button>
  );
}

export default function Admissions() {
  const [selected, setSelected] = useState("Middle School");
  const [selectedAdmin, setSelectedAdmin] = useState("Mathematics");
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
        <div className="admissions__content__section__card__admission__procedure">
          <div className="admissions__content__section__card__admission__procedure__left">
            <div className="admissions__content__section__card__admission__procedure__heading">
              MIDDLE AND SENIOR SCHOOL ADMISSION PROCEDURE
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              To apply to our branch, parents must visit the school with the
              following documents to complete the Registration Form.
            </div>
            <li className="admissions__content__section__card__admission__procedure__paragraph">
              NADRA Birth Certificate or B-Form or copy of valid Passport
            </li>
            <li className="admissions__content__section__card__admission__procedure__paragraph">
              Most current report card
            </li>
            <li className="admissions__content__section__card__admission__procedure__paragraph">
              Two recent passport sized photographs
            </li>
            <li className="admissions__content__section__card__admission__procedure__paragraph">
              Receipt of paid registration fee (Rs 2000)
            </li>
            <div className="admissions__content__section__btn__wrapper">
              <button className="section__btn__primary">
                Add Registration Form
              </button>
              <button className="section__btn__scondary">
                Add Admission Form
              </button>
            </div>
          </div>
          <img
            src={addmissionPic}
            alt="addmissionPic"
            className="admissions__content__section__card__admission__procedure__img"
          />
        </div>
        <div className="registration__overlay__card">
          <img
            src={AlumniRegistrationsPic}
            alt="AlumniRegistrationsPic"
            className="registration__overlay__card__img"
          />
          <div className="registration__overlay">
            <li className="registration__overlay__para">
              Registration Forms can be collected by scheduling an appointment
              with Mrs. Kanwal for prospective School applicants.
            </li>
            <li className="registration__overlay__para">
              While filling out the Registration Form, please ensure that all
              details are accurate as changes cannot be made at a later stage.
            </li>
            <li className="registration__overlay__para">
              Once the complete Registration Form and registration payment has
              been submitted, the School Office will contact you regarding
              Admission Tests.
            </li>
            <li className="registration__overlay__para">
              After your child has taken the Admission Tests, you will receive a
              phone call from the school within one week to let you know if your
              daughter has or has not passed.
            </li>
            <li className="registration__overlay__para">
              If your child is offered admission, you will be requested to come
              and complete the rest of the registration procedure. This
              procedure entails signing a Letter of Acceptance, filling out a
              detailed Health Form, and paying the fee bill within one week of
              receiving the Letter of Acceptance. Once all this has been done,
              parents will return the Health Form along with a receipt of
              payment of the school fee; your daughter will then be enrolled in
              our school.
            </li>
          </div>
        </div>
      </div>
      <div className="about__main__container">
        <div className="about__main__container__content">
          <img
            src={aboutPic}
            alt="aboutPic"
            className="about__main__container__content__img"
          />
          <div className="about__main__container__content__right">
            <div className="about__main__container__content__right__heading">
              ADMISSION TESTS AND TEST DATES(2022-2023)
            </div>
            <div
              style={{ width: "42%" }}
              className="about__main__container__content__right__nav__wrapper"
            >
              <NavLink
                title="Middle School"
                selected={selected}
                setSelected={setSelected}
              />
              <NavLink
                title="O-Levels"
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            {selected === "Middle School" ? (
              <>
                <div className="about__main__container__content__right__paragraph">
                  For admission into Middle School, the student will be required
                  to sit an English and Urdu proficiency test in addition to a
                  Mathematics test. Students coming from abroad, who have
                  limited knowledge of spoken or written Urdu, may be exempt
                  from the Urdu test. However, if the child is a Pakistani
                  citizen she will be required to take Urdu. Therefore, parents
                  need to inform the school about the level of their child’s
                  Urdu language skills.
                </div>
                <div className="about__main__container__content__right__addmissions">
                  Admission Tests for the 2022-2023 academic year
                </div>
                <div className="about__main__container__content__right__paragraph">
                  Parents are required to have completed the registration
                  process before the test date.
                </div>
                <div className="about__main__container__content__right__enrollment__wrapper">
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      23th
                    </div>
                    <span>April</span>
                    <span>2022</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      4th
                    </div>
                    <span>June</span>
                    <span>2022</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      6th
                    </div>
                    <span>August</span>
                    <span>2022</span>
                  </div>
                </div>
              </>
            ) : null}

            {selected === "O-Levels" ? (
              <>
                <div className="about__main__container__content__right__paragraph">
                  In A-Levels we aim to challenge our students, knowing they
                  will rise to the occasion. We aspire to provide as many
                  opportunities as possible to explore, make choices and learn
                  about themselves and each other. We want them to learn to
                  inquire, reflect and discuss; to think critically, ask
                  meaningful questions, listen with an open mind and to learn
                  the skills needed to find solutions and solve problems for
                  themselves. Above all else, we want them to enjoy themselves
                  and to be involved, responsible, respectful citizens of their
                  class, school and society.
                </div>
                <div className="about__main__container__content__right__addmissions">
                  Admission Tests for the 2022-2023 academic year
                </div>
                <div className="about__main__container__content__right__paragraph">
                  Parents are required to have completed the registration
                  process before the test date.
                </div>
                <div className="about__main__container__content__right__enrollment__wrapper">
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      23th
                    </div>
                    <span>April</span>
                    <span>2022</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      4th
                    </div>
                    <span>June</span>
                    <span>2022</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      6th
                    </div>
                    <span>August</span>
                    <span>2022</span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="addmission__requirment__section">
        <div className="addmission__requirment__section__heading">
          ADMISSION TEST REQUIREMENTS
        </div>
        <div className="addmission__requirment__section__nav__wrapper">
          <AddmissionNav
            selectedAdmin={selectedAdmin}
            setSelectedAdmin={setSelectedAdmin}
            title="English and Urdu"
          />
          <div className="addmission__requirment__line"></div>
          <AddmissionNav
            selectedAdmin={selectedAdmin}
            setSelectedAdmin={setSelectedAdmin}
            title="Mathematics"
          />
          <div className="addmission__requirment__line"></div>
          <AddmissionNav
            selectedAdmin={selectedAdmin}
            setSelectedAdmin={setSelectedAdmin}
            title="Math’s"
          />
        </div>
        {selectedAdmin === "English and Urdu" ? (
          <div className="addmission__requirment__section__content">
            <img
              src={addmissionReqiurmentPic}
              alt="addmissionReqiurmentPic"
              className="addmission__requirment__section__content__img"
            />
            <div className="addmission__requirment__section__content__right">
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                Comprehension: Your child will be asked to read an
                age-appropriate un-seen passage and answer questions. The
                questions may be direct or inferential, she may be asked to give
                her opinion and support it with reasons, and she may be asked to
                sequence or synthesize the material in the passage.
              </div>
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                Creative Writing: Your child’s writing will be assessed on the
                following; relevance to topic, adequate content and detail, flow
                of ideas and imagination, organization, vocabulary, syntax,
                spelling and punctuation. Comprehension: Your child will be
                asked to read an age-appropriate un-seen passage and answer
                questions. The questions may be direct or inferential, she may
                be asked to give her opinion and support it with reasons, and
                she may be asked to sequence or synthesize the material in the
                passage.
              </div>
            </div>
          </div>
        ) : null}
        {selectedAdmin === "Mathematics" ? (
          <div className="addmission__requirment__section__content">
            <img
              src={addmissionReqiurmentPic2}
              alt="addmissionReqiurmentPic"
              className="addmission__requirment__section__content__img"
            />
            <div className="addmission__requirment__section__content__right">
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                Comprehension: Your child will be asked to read an
                age-appropriate un-seen passage and answer questions. The
                questions may be direct or inferential
              </div>
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                Creative Writing: Your child’s writing will be assessed on the
                following; relevance to topic, adequate content and detail, flow
                of ideas and imagination, organization, vocabulary, syntax,
                spelling and punctuation. Comprehension: Your child will be
                asked Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium at nihil, ullam sequi molestiae officiis inventore
                impedit aliquid. Blanditiis velit cumque perferendis ducimus
                adipisci qui voluptatibus optio animi nihil quas!
              </div>
            </div>
          </div>
        ) : null}
        {selectedAdmin === "Math’s" ? (
          <div className="addmission__requirment__section__content">
            <img
              src={addmissionReqiurmentPic}
              alt="addmissionReqiurmentPic"
              className="addmission__requirment__section__content__img"
            />
            <div className="addmission__requirment__section__content__right">
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                Comprehension: Your child will be asked to read an
                age-appropriate un-seen passage and answer questions. The
                questions may be direct or inferential, she may be asked to give
                her opinion and support it with reasons, and she may be asked to
                sequence or synthesize the material in the passage.
              </div>
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                Creative Writing: Your child’s writing will be assessed on the
                following; relevance to topic, adequate content and detail, flow
                of ideas and imagination, organization, vocabulary, syntax,
                spelling and punctuation. Comprehension:
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="a__level__addmission">
        <div
          style={{ textAlign: "center" }}
          className="international__explore__contain__new__left__heading"
        >
          A’LEVEL
          <span>ADMISSION PROCEDURE</span>
        </div>
        <div className="a__level__addmission__content">
          <div className="a__level__addmission__content__entry">
            <div className="a__level__addmission__content__entry__row"></div>
            <div className="a__level__addmission__content__entry__para">
              A1 ADMISSION PROCEDURE (Academic Year 2021-22)
            </div>
            <button className="section__btn__primary">Click here</button>
          </div>
          <div className="a__level__addmission__content__entry">
            <div className="a__level__addmission__content__entry__row"></div>
            <div className="a__level__addmission__content__entry__para">
              Registration Process begins May 5 2022! Once we receive the
              complete documents, a member of our Admission Office will get in
              touch for further processing.
            </div>
            <button className="section__btn__primary">
              Add Admission Form
            </button>
          </div>
          <div className="a__level__addmission__content__entry">
            <div className="a__level__addmission__content__entry__row"></div>
            <div className="a__level__addmission__content__entry__para">
              For any queries, contact the school office at info@lgsfsd.edu.pk.
              An appointment can be scheduled with our Admission Head by calling
              up A Level office:
            </div>
            <div
              style={{ color: "#F9CC09" }}
              className="a__level__addmission__content__entry__para"
            >
              Mrs. Kanwal: +923348387824
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
