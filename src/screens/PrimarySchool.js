import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import ReunionsPic from "../assets/ReunionsPic.png";
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
        select === title ? "cannal__campus__nav__select" : "cannal__campus__nav"
      }
    >
      {title}
    </button>
  );
}
function SubjectBtn({ title }) {
  return <button className="cannal__campus__btn">Accounting</button>;
}

export default function PrimarySchool() {
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
              <div className="cannal__campus__sub__heading">CaNAL CAMPUS</div>
              <div className="cannal__campus__heading">Senior School</div>
              <div className="cannal__campus__para">A Levels</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cannal__campus__container">
        <div className="cannal__campus__container__wrapper__card">
          <div className="cannal__campus__container__wrapper__card__left">
            <div className="cannal__campus__container__wrapper__card__left__content">
              <img
                src={cannalCampusPricipalPic}
                alt="pricipal_pic"
                className="cannal__campus__container__wrapper__card__left__content__img"
              />
              <div className="cannal__campus__container__wrapper__card__left__content__headings__wrapper">
                <div className="cannal__campus__container__wrapper__card__left__content__heading">
                  Mrs. Saltanat Bokhari
                </div>
                <div className="cannal__campus__container__wrapper__card__left__content__para">
                  Director
                </div>
              </div>
            </div>
          </div>
          <div className="cannal__campus__container__wrapper__card__right">
            " I am delighted to offer you a warm welcome to LGS FSD. At LGS.
            FSD, we view diversity as our biggest strength. We aim to inspire in
            our students the curiosity to learn, the self-confidence to lead and
            the compassion to serve. Our primary source of insight and energy is
            our students’ validation, critique and innovative ideas. We mutually
            guide and encourage one another to understand the importance of not
            just academic achievement but also values of tolerance and respect.
            I hope our website gives you a sense of our purpose and vision. "
          </div>
        </div>
        <div className="cannal__campus__nav__wrapper">
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
        </div>
        {select === "Subject Choices" ? (
          <>
            <div className="primary__school__content">
              <div className="primary__school__content__left">
                <div className="primary__school__content__left__para">
                  The subjects that are compulsory at the O-Level are:
                </div>
                <li className="primary__school__content__left__para">
                  English
                </li>
                <li className="primary__school__content__left__para">Urdu</li>
                <li className="primary__school__content__left__para">
                  Pakistan Studies
                </li>
                <li className="primary__school__content__left__para">Math</li>
                <li className="primary__school__content__left__para">
                  Physics
                </li>
                <li className="primary__school__content__left__para">
                  Biology
                </li>
              </div>
              <div className="primary__school__content__right">
                <div className="primary__school__content__right__para">
                  Students are required to choose one subject from each group
                  given above. If Art, ICT or Add. Maths clash with another
                  subject a student wishes to take, extra classes may be made
                  available after school if at least 12 students wish to take
                  the respective subject. Students may not be allowed to drop
                  out of after school classes once they have been scheduled.
                </div>
              </div>
            </div>
            <div className="primary__school__content__card">
              <div className="primary__school__content__card__para">
                In addition, Class 9 students are required to study World
                Affairs. <br />
                The elective subject choices available to Class 9 are broken
                into three groups:
              </div>
              <li className="primary__school__content__card__li">
                {" "}
                Group 1: Physics or Sociology or Environmental Management
              </li>
              <li className="primary__school__content__card__li">
                {" "}
                Group 2: Chemistry or Art or Economics
              </li>
              <li className="primary__school__content__card__li">
                {" "}
                Group 3: Biology or Additional Maths or ICT
              </li>
              <div className="primary__school__content__card__para">
                At the beginning of Class 10, students must finalise a minimum
                of 8 O-Level subjects. In addition to the elective subjects
                offered in Class 9, English Literature, World Affairs and Global
                Perspectives are available as free-floating subjects that can be
                taken with any combination.
              </div>
            </div>
          </>
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
      </div>
    </>
  );
}
