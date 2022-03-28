import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import eventPic from "../assets/eventPic.png";
import addmissionPic from "../assets/addmissionPic.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import aboutPic from "../assets/aboutPic.png";
import addmissionReqiurmentPic from "../assets/addmissionReqiurmentPic.png";
import addmissionReqiurmentPic2 from "../assets/addmissionReqiurmentPic2.png";
import Into5 from "../assets/Into5.pdf";
import Into6 from "../assets/Into6.pdf";
import Into7 from "../assets/Into7.pdf";
import Into8 from "../assets/Into8.pdf";
import Into9 from "../assets/Into9.pdf";
import GeneralScience from "../assets/GeneralScience.pdf";
import Chemistry from "../assets/Chemistry.pdf";
import Biology from "../assets/Biology.pdf";
import Physics from "../assets/Physics.pdf";
import AdmissionProcedure from "../assets/AdmissionProcedure.pdf";
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
                Registration / Admission Form
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
                  Admission Tests for the 2022-2023 academic year are scheduled
                  for Saturday
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
                  For admission into O’Level, the student will initially be
                  required to sit an English and Urdu proficiency test in
                  addition to a Mathematics test. If the student passes these
                  tests, she will then be called in for elective subject tests
                  the following week. These tests will vary, depending on the
                  subjects chosen by the student, i.e Sciences, Additional
                  Mathematics or Art.
                </div>
                <div className="about__main__container__content__right__addmissions">
                  Admission Tests for the 2022-2023 academic year are scheduled
                  for Saturday
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
            title="General Science"
          />
          <div className="addmission__requirment__line"></div>
          <AddmissionNav
            selectedAdmin={selectedAdmin}
            setSelectedAdmin={setSelectedAdmin}
            title="Physics/Chemistry/Biology"
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
                <b style={{ fontSize: 18 }}>Comprehension:</b>
                <br /> Your child will be asked to read an age-appropriate
                un-seen passage and answer questions. The questions may be
                direct or inferential, she may be asked to give her opinion and
                support it with reasons, and she may be asked to sequence or
                synthesize the material in the passage.
              </div>
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                <b style={{ fontSize: 18 }}>Creative Writing:</b>
                <br /> Your child’s writing will be assessed on the following;
                relevance to topic, adequate content and detail, flow of ideas
                and imagination, organization, vocabulary, syntax, spelling and
                punctuation. Comprehension: Your child will be asked to read an
                age-appropriate un-seen passage and answer questions. The
                questions may be direct or inferential, she may be asked to give
                her opinion and support it with reasons, and she may be asked to
                sequence or synthesize the material in the passage.
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
                <b style={{ fontSize: 18 }}>Mathematics:</b>
                <br />
                Your child will be required to take a Mathematics test, which
                will assess number and problem-solving skills. On the day of the
                test, an adult will need to accompany the student to school and
                hand over to the Administrator in charge of conducting the
                Admission Test. Please ensure that the student has had breakfast
                and has relevant stationery and a bottle of water.
              </div>
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                <li>
                  <a
                    href={Into5}
                    style={{
                      color: "#242424",
                    }}
                    target="_blank"
                  >
                    Class 4 into 5 Syllabus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-link"
                      style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={Into6} style={{ color: "#242424" }} target="_blank">
                    Class 5 into 6 Syllabus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-link"
                      style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={Into7} style={{ color: "#242424" }} target="_blank">
                    Class 6 into 7 Syllabus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-link"
                      style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={Into8} style={{ color: "#242424" }} target="_blank">
                    Class 7 into 8 Syllabus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-link"
                      style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={Into9} style={{ color: "#242424" }} target="_blank">
                    Class 8 into 9 Syllabus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-link"
                      style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </li>
              </div>
            </div>
          </div>
        ) : null}
        {selectedAdmin === "General Science" ? (
          <div className="addmission__requirment__section__content">
            <img
              src={addmissionReqiurmentPic}
              alt="addmissionReqiurmentPic"
              className="addmission__requirment__section__content__img"
            />
            <div className="addmission__requirment__section__content__right">
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                <b style={{ fontSize: 18 }}>General Science:</b>
                <br />
                General Science(Admissions into Grade 9)
                <br />
                <a
                  href={GeneralScience}
                  style={{ color: "#242424" }}
                  target="_blank"
                >
                  Click here for the General Science syllabus.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-link"
                    style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>
                <br />
                Science(Admissions into Grade 10)
              </div>
            </div>
          </div>
        ) : null}
        {selectedAdmin === "Physics/Chemistry/Biology" ? (
          <div className="addmission__requirment__section__content">
            <img
              src={addmissionReqiurmentPic}
              alt="addmissionReqiurmentPic"
              className="addmission__requirment__section__content__img"
            />
            <div className="addmission__requirment__section__content__right">
              <div className="addmission__requirment__section__content__right__para animate__animated animate__fadeInRight">
                <b style={{ fontSize: 18 }}>Physics:</b>
                <br />
                <a href={Physics} style={{ color: "#242424" }} target="_blank">
                  Click here for Physics
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-link"
                    style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>
                <br />
                <b style={{ fontSize: 18 }}>Chemistry:</b>
                <br />
                <a
                  href={Chemistry}
                  style={{ color: "#242424" }}
                  target="_blank"
                >
                  Click here for Chemistry
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-link"
                    style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>
                <br />
                <b style={{ fontSize: 18 }}>Biology:</b>
                <br />
                <a href={Biology} style={{ color: "#242424" }} target="_blank">
                  Click here for Biology
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-link"
                    style={{ marginLeft: ".5em", marginBottom: "-.15em" }}
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div
        style={{
          margin: "0em auto",
          width: "fit-content",
          marginBottom: "5em",
        }}
      >
        <ul>
          <li>
            Students appearing for Admission Test for Classes 6:{" "}
            <b>3 Hour Duration</b>
          </li>
          <li>
            Students appearing for Admission Test for Classes 7 and 8:{" "}
            <b>4 Hour Duration</b>
          </li>
          <li>
            Duration Students appearing for Admission Test for Classes 9-10:{" "}
            <b>4 Hour Duration</b>
          </li>
        </ul>
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
            <a
              href={AdmissionProcedure}
              className="section__btn__primary"
              style={{ marginTop: "1em", textDecoration: "none" }}
              target="_blank"
            >
              Click here
            </a>
          </div>
          <div className="a__level__addmission__content__entry">
            <div className="a__level__addmission__content__entry__row"></div>
            <div className="a__level__addmission__content__entry__para">
              Registration Process begins May 5 2022! Once we receive the
              complete documents, a member of our Admission Office will get in
              touch for further processing.
            </div>
            <button className="section__btn__primary">
              Registration / Admission Form
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
              style={{ color: "#F9CC09", margin: 0 }}
              className="a__level__addmission__content__entry__para"
            >
              Mrs. Kanwal
            </div>
            <a
              href="tel:+923348387824"
              className="a__level__addmission__content__entry__para__contact"
            >
              +923348387824
            </a>
            <br />
            <a
              href="mailto:kanwalshahbaz@lgsfsd.edu.pk"
              className="a__level__addmission__content__entry__para__contact"
            >
              kanwalshahbaz@lgsfsd.edu.pk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
