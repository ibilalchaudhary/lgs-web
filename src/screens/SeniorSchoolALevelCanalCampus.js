import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import PhotoGallery from "../component/PhotoGallery";
import NoticeBoardCard from "../component/NoticeBoardCard";
import FacultyCard from "../component/FacultyCard";
import pricipal_pic from "../assets/pricipal_pic.png";
import zunaira from "../assets/zunaira.jpeg";
import cannalCampusPricipalPic from "../assets/cannalCampusPricipalPic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  return <button className="cannal__campus__btn">{title}</button>;
}

function PricipalCard({ img, title, designation, para }) {
  return (
    <>
      <div className="cannal__campus__container__swiper__content">
        <div className="cannal__campus__container__wrapper__card__left">
          <div className="cannal__campus__container__wrapper__card__left__content">
            <img
              src={img}
              alt="pricipal_pic"
              className="cannal__campus__container__wrapper__card__left__content__img"
            />
            <div className="cannal__campus__container__wrapper__card__left__content__headings__wrapper">
              <div className="cannal__campus__container__wrapper__card__left__content__heading">
                {title}
              </div>
              <div className="cannal__campus__container__wrapper__card__left__content__para">
                {designation}
              </div>
            </div>
          </div>
        </div>
        <div className="cannal__campus__container__wrapper__card__right">
          "{para}"
        </div>
      </div>
    </>
  );
}

export default function SeniorSchoolALevelCanalCampus() {
  const [select, setSelect] = useState("Subject Choices");
  const subjectChoices = [
    "Urdu",
    "English",
    "Mathematics",
    "Science",
    "Pak Studies",
    "Islamiat",
    "Arabic",
    "Social Studies",
    "Physics",
    "Chemistry",
    "Biology",
  ];
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
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PricipalCard
                img={cannalCampusPricipalPic}
                title="Mrs. Saltanat Bokhari"
                designation="Director"
                para="I am delighted to offer you a warm welcome to LGS FSD. At LGS. FSD, we view diversity as our biggest strength. We aim to inspire in our students the curiosity to learn, the self-confidence to lead and the compassion to serve. Our primary source of insight and energy is our students’ validation, critique and innovative ideas. We mutually guide and encourage one another to understand the importance of not just academic achievement but also values of tolerance and respect. I hope our website gives you a sense of our purpose and vision."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={pricipal_pic}
                title="Mr. Principar"
                designation="Principal"
                para="I am delighted to offer you a warm welcome to LGS FSD. At LGS. FSD, we view diversity as our biggest strength. We aim to inspire in our students the curiosity to learn, the self-confidence to lead and the compassion to serve. Our primary source of insight and energy is our students’ validation, critique and innovative ideas. We mutually guide and encourage one another to understand the importance of not just academic achievement but also values of tolerance and respect. I hope our website gives you a sense of our purpose and vision."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={zunaira}
                title="Zunaira Amjad"
                designation="Director"
                para="I am delighted to offer you a warm welcome to LGS FSD. At LGS. FSD, we view diversity as our biggest strength. We aim to inspire in our students the curiosity to learn, the self-confidence to lead and the compassion to serve. Our primary source of insight and energy is our students’ validation, critique and innovative ideas. We mutually guide and encourage one another to understand the importance of not just academic achievement but also values of tolerance and respect. I hope our website gives you a sense of our purpose and vision."
              />
            </SwiperSlide>
          </Swiper>
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
          <div className="cannal__campus__btn__wrapper">
            {subjectChoices.map((subjectChoice) => (
              <SubjectBtn title={subjectChoice} />
            ))}
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
      </div>
    </>
  );
}
