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
              Receipt of paid registration fee (Rs 3000)
            </li>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              Registration Forms can be collected by scheduling an appointment
              with Ms. Mehwish Faran for prospective Middle School applicants or
              Ms. Qudsia Kamal for prospective O’Level applicants.
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              While filling out the Registration Form, please ensure that all
              details are accurate as changes cannot be made at a later stage.
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              Once the complete Registration Form and registration payment has
              been submitted, the School Office will contact you regarding
              Admission Tests.
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              After your child has taken the Admission Tests, you will receive a
              phone call from the school within one week to let you know if your
              daughter has or has not passed.
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              If your daughter is offered admission, you will be requested to
              come and complete the rest of the registration procedure. This
              procedure entails signing a Letter of Acceptance, filling out a
              detailed Health Form, and paying the fee bill within one week of
              receiving the Letter of Acceptance. Once all this has been done,
              parents will return the Health Form along with a receipt of
              payment of the school fee; your daughter will then be enrolled in
              our school.
            </div>
          </div>
          <div className="admissions__content__section__card__admission__procedure proficieny__exams">
            <div className="admissions__content__section__card__admission__procedure__heading proficieny__exams proficieny__exams__heading">
              ADMISSION TESTS AND TEST DATES
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph proficieny__exams">
              For admission into Middle School, the student will be required to
              sit an English and Urdu proficiency test in addition to a
              Mathematics test. Students coming from abroad, who have limited
              knowledge of spoken or written Urdu, may be exempt from the Urdu
              test. However, if the child is a Pakistani citizen she will be
              required to take Urdu. Therefore, parents need to inform the
              school about the level of their child’s Urdu language skills.
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph proficieny__exams">
              For admission into O’Level, the student will initially be required
              to sit an English and Urdu proficiency test in addition to a
              Mathematics test. If the student passes these tests, she will then
              be called in for elective subject tests the following week. These
              tests will vary, depending on the subjects chosen by the student,
              i.e Sciences, Additional Mathematics or Art.
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph proficieny__exams">
              Admission Tests for the 2022-2023 academic year are scheduled for
              Saturday, 23th April, Saturday, 4th June, and Saturday, 6th
              August, 2022. Parents are required to have completed the
              registration process before the test date.
            </div>
          </div>
          <div className="admissions__content__section__card__admission__procedure">
            <div className="admissions__content__section__card__admission__procedure__heading">
              ADMISSION TEST REQUIREMENTS
            </div>
            <div
              style={{ fontSize: 18, fontWeight: 600, marginTop: 20 }}
              className="admissions__content__section__card__admission__procedure__paragraph"
            >
              English and Urdu
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              Creative Writing: Your child’s writing will be assessed on the
              following; relevance to topic, adequate content and detail, flow
              of ideas and imagination, organization, vocabulary, syntax,
              spelling and punctuation. Comprehension: Your child will be asked
              to read an age-appropriate un-seen passage and answer questions.
              The questions may be direct or inferential, she may be asked to
              give her opinion and support it with reasons, and she may be asked
              to sequence or synthesize the material in the passage.
            </div>
            <div
              style={{ fontSize: 18, fontWeight: 600, marginTop: 30 }}
              className="admissions__content__section__card__admission__procedure__paragraph"
            >
              Mathematics
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph">
              Your daughter will be required to take a Mathematics test, which
              will assess her number and problem-solving skills. On the day of
              the test, an adult will need to accompany the student to school
              and hand her over to the Administrator in charge of conducting the
              Admission Test. Please ensure that the student has had breakfast
              and has relevant stationery and a bottle of water with her.
            </div>
          </div>
          <div className="admissions__content__section__card__admission__procedure proficieny__exams">
            <div className="admissions__content__section__card__admission__procedure__heading proficieny__exams proficieny__exams__heading">
              A’LEVEL ADMISSION PROCEDURE
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph proficieny__exams">
              Registration Process begins May 5 2022! Once we receive the
              complete documents, a member of our Admission Office will get in
              touch for further processing.
            </div>
            <div className="admissions__content__section__card__admission__procedure__paragraph proficieny__exams">
              For any queries, contact the school office at info@lgsfsd.edu.pk.
              An appointment can be scheduled with our Head of A Levels by
              calling up A Level office: Mr Javed: +924235712566
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
