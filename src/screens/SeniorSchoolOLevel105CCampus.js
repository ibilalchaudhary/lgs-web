import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import creativePic from "../assets/creativePic.png";
import addmissionPic from "../assets/addmissionPic.png";
import cannalCampusPricipalPic from "../assets/cannalCampusPricipalPic.png";
import PhotoGallery from "../component/PhotoGallery";
import NoticeBoardCard from "../component/NoticeBoardCard";
import FacultyCard from "../component/FacultyCard";

function CampusNav({ title, select, setSelect }) {
  return (
    <button
      onClick={() => {
        setSelect(title);
      }}
      className={
        select === title
          ? "cannal__campus__senior__nav__select cannal__campus__nav__senior"
          : "cannal__campus__nav__senior"
      }
    >
      {title}
    </button>
  );
}

export default function SeniorSchoolOLevel105CCampus() {
  const [select, setSelect] = useState("Subject Choices");
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
            <div className="cannal__campus__heading__wrapper">
              <div className="cannal__campus__sub__heading">105-C CAMPUS</div>
              <div className="cannal__campus__heading">Senior School</div>
              <div className="cannal__campus__para">O Levels</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cannal__campus__container">
        <div
          style={{ background: "#005DFF" }}
          className="cannal__campus__container__wrapper__card"
        >
          <div className="cannal__campus__container__wrapper__card__left">
            <div className="cannal__campus__container__wrapper__card__left__content">
              <img
                src={cannalCampusPricipalPic}
                alt="pricipal_pic"
                className="cannal__campus__container__wrapper__card__left__content__img"
              />
              <div className="cannal__campus__container__wrapper__card__left__content__headings__wrapper">
                <div
                  style={{ color: "#fff" }}
                  className="cannal__campus__container__wrapper__card__left__content__heading"
                >
                  Uzma Mahmood
                </div>
                <div
                  style={{ color: "#fff" }}
                  className="cannal__campus__container__wrapper__card__left__content__para"
                >
                  Director
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ color: "#fff" }}
            className="cannal__campus__container__wrapper__card__right"
          >
            We live in exciting and rapidly changing times; these times mean
            that education is more important than ever. Education that prepares
            young people to be able to be life-long learners, to be able to
            adapt and adjust to the many changes they will face in their future.{" "}
            <br />
            At LGS, the growth of each individual student is a focus, we
            recognise that as we 'work together and learn together' students
            will be best able to achieve their potential. The co-operative
            effort of students, parents and teachers is at the heart of the
            learning pathways followed by our students and the outcomes they
            achieve. We firmly believe that every student can experience success
            and go on to graduate as a responsible, resilient and confident
            young adult, well prepared to take charge of their future and to
            become a productive member of the country. Our school prides itself
            on the 'multiple learning outcomes' curricular and co-curricular
            programs available to students, on the highly positive attitude and
            behaviour of our students and on the constant focus by our
            professional staff on developing, personalising and transforming
            teaching approaches to best meet the needs of students
          </div>
        </div>
        <div className="cannal__campus__senior__nav__wrapper">
          <CampusNav
            select={select}
            setSelect={setSelect}
            title="Subject Choices"
          />
          <CampusNav title="Gallery" select={select} setSelect={setSelect} />
          <CampusNav
            title="Faculty Profiles"
            select={select}
            setSelect={setSelect}
          />
          <CampusNav
            title="Notice board"
            select={select}
            setSelect={setSelect}
          />
          <CampusNav
            title="Global perspectives & Thinking skills"
            select={select}
            setSelect={setSelect}
          />
        </div>
        {select === "Subject Choices" ? (
          <div className="cannal__campus__senior__container">
            <div className="cannal__campus__senior__container__card">
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__senior__container__card__left__heading">
                  Subject choices
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph">
                  Many colleges require student transcripts from Class 9
                  onwards, so it is very important that students approach these
                  three years with seriousness and hard work. Students must sit
                  for at least 8 subjects (5 compulsory and 3 elective) for
                  their O Level examination in order to be eligible for the
                  equivalency certificate from the Inter-Board Committee of
                  Chairman (IBCC).
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph">
                  We do not encourage students with foreign passports to exempt
                  themselves from Pakistan Studies, Urdu or Islamiat. Those
                  determined to do so should refer to this document.
                </div>

                <div className="admissions__content__section__btn__wrapper">
                  <button className="section__btn__primary">Download</button>
                </div>
              </div>
              <img
                src={addmissionPic}
                alt="addmissionPic"
                className="cannal__campus__senior__container__card__left__img"
              />
            </div>
            <div className="cannal__campus__senior__choices__card__wrapper">
              <div className="cannal__campus__senior__choices__card__wrapper__card">
                <div className="cannal__campus__senior__choices__card__heading">
                  SCIENCE/HUMANITIES
                </div>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Environmental Management
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  ICT
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Global Perspectives
                </li>
              </div>
              <div className="cannal__campus__senior__choices__card__wrapper__card cannal__campus__senior__choices__card__wrapper__card__2nd">
                <div className="cannal__campus__senior__choices__card__heading">
                  PURE SCIENCES
                </div>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Physics
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Science
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  English
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Mathematices
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Urdu
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Additional Mathematics
                </li>
              </div>
              <div className="cannal__campus__senior__choices__card__wrapper__card cannal__campus__senior__choices__card__wrapper__card__3rd">
                <div className="cannal__campus__senior__choices__card__heading">
                  SCIENCE/HUMANITIES
                </div>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Physics
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Science
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  English
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Mathematices
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Urdu
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Physics
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Science
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  English
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Mathematices
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Urdu
                </li>
                <li className="cannal__campus__senior__choices__card__heading__para">
                  Additional Mathematics
                </li>
              </div>
            </div>
            <div className="cannal__campus__senior__container__card__subject">
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__senior__container__card__subject__heading">
                  <span>Subject Pre-Requisites </span>
                  and Requirements
                </div>
                <li className="cannal__campus__senior__container__card__subject__para">
                  To be able to take any of the three pure sciences it is
                  important for the student to have achieved a minimum average
                  score of 65% while for Add. Maths the requirement is an
                  average score of 75% in Class 8.
                </li>
                <li className="cannal__campus__senior__container__card__subject__para">
                  Before the student is allowed to opt for Art,the art teacher
                  will be consulted. It is recommended for students opting for
                  Biology to also take Chemistry, as
                </li>
                <li className="cannal__campus__senior__container__card__subject__para">
                  there is an element of biochemistry which requires an
                  understanding of chemistry throughout the course.
                </li>
                <li className="cannal__campus__senior__container__card__subject__para">
                  It is recommended for students opting for Envionmental
                  Management to also take Biology and Chemistry.
                </li>
                <li className="cannal__campus__senior__container__card__subject__para">
                  Any parent or student seeking additional information or advice
                  on subject choices should make an appointment with Student
                  Advising at the following email address:
                </li>
              </div>
              <img
                src={addmissionPic}
                alt="addmissionPic"
                className="cannal__campus__senior__container__card__left__img"
              />
            </div>
          </div>
        ) : null}
        {select === "Gallery" ? <PhotoGallery /> : null}
        {select === "Faculty Profiles" ? (
          <>
            <div className="faculty__section__heading">Faculty Profiles</div>
            <div className="faculty__section__card__wrapper">
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
              <FacultyCard />
            </div>
          </>
        ) : null}
        {select === "Notice board" ? (
          <div style={{ marginTop: "4em" }} className="notice__board__section">
            <div className="notice__board__section__content__heading">
              NOTICE BOARD
            </div>
            <div className="notice__board__section__content__paragraph">
              Important Notices will be uploaded here whenever possible.
              However, please make sure that your current cell number has been
              entered in the School database as our primary means of
              communication with parents and students is via SMS.Prep Curriculum
              Outline
            </div>
            <NoticeBoardCard />
            <NoticeBoardCard />
            <NoticeBoardCard />
            <NoticeBoardCard />
            <NoticeBoardCard />
            <NoticeBoardCard />
            <NoticeBoardCard />
            <NoticeBoardCard />
          </div>
        ) : null}
        {select === "Global perspectives & Thinking skills" ? (
          <div className="global__skill__section">
            <div className="global__skill__section__heading">
              Global perspectives & Thinking skills
            </div>
            <div className="global__skill__section__para">
              Interested in taking a ground-breaking course stretching across
              traditional subject boundaries? Explore IGCSE Global Perspectives!
            </div>
            <div className="global__skill__section__para">
              There is no magic formula for getting selected for Global
              Perspectives.{" "}
            </div>
            <div className="global__skill__section__card">
              <div className="global__skill__section__card__left">
                <div className="global__skill__section__card__left__para">
                  However, you have a great chance of getting selected if you
                </div>
                <li className="global__skill__section__card__left__para">
                  Have taken full advantage of the curricular and
                  extracurricular opportunities available to you in school.
                </li>
                <li className="global__skill__section__card__left__para">
                  Have achieved above average grades in all subjects since Grade
                  7 Have the ability to think and work independently
                </li>
                <li className="global__skill__section__card__left__para">
                  Can empathize with the needs and rights of others Can manage
                  your time effectively
                </li>
                <li className="global__skill__section__card__left__para">
                  Are able to think critically about a range of global issues
                  where there are more than just one points of view Have well-
                  developed essay writing skills
                </li>
                <li className="global__skill__section__card__left__para">
                  Can analyze, evaluate and develop facts, ideas and opinions
                  Have the tools and skills to research effectively
                </li>
                <li className="global__skill__section__card__left__para">
                  Use a range of appropriate vocabulary
                </li>
                <li className="global__skill__section__card__left__para">
                  Can communicate clearly, fluently and purposefully as an
                  individual and in a team.
                </li>
              </div>
              <div className="global__skill__section__card__right">
                <img
                  src={creativePic}
                  alt="creativePic"
                  className="global__skill__section__card__right__img"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
