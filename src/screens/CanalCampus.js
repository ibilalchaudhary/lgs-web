import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import ReunionsPic from "../assets/ReunionsPic.png";
import cannalCampusPricipalPic from "../assets/cannalCampusPricipalPic.png";
import PhotoGallery from "../component/PhotoGallery";
import NoticeBoardCard from "../component/NoticeBoardCard";

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

export default function CanalCampus() {
  const [select, setSelect] = useState("cannal__campus__nav");
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
                  Mr. Principal
                </div>
                <div className="cannal__campus__container__wrapper__card__left__content__para">
                  Director
                </div>
              </div>
            </div>
          </div>
          <div className="cannal__campus__container__wrapper__card__right">
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
        <div className="cannal__campus__nav__wrapper">
          <CampusNav
            select={select}
            setSelect={setSelect}
            title="Subject choices"
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
        {select === "Subject choices" ? (
          <div className="cannal__campus__btn__wrapper">
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
            <SubjectBtn />
          </div>
        ) : null}
        {select === "Gallery" ? <PhotoGallery /> : null}
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
