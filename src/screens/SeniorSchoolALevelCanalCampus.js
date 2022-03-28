import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import PhotoGallery from "../component/PhotoGallery";
import NoticeBoardCard from "../component/NoticeBoardCard";
import FacultyCard from "../component/FacultyCard";
import pricipal_pic from "../assets/pricipal_pic.png";
import irfanaAziz from "../assets/irfanaAziz.jpg";
import zunaira from "../assets/zunaira.jpeg";
import cannalCampusPricipalPic from "../assets/cannalCampusPricipalPic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  AmmaraMohsin,
  JunaidAkram,
  KanwalShabaz,
  NailaSalman,
  Rabeeaomer,
  RohanTariq,
  SohailHaider,
  TahirNaushad,
  ZahidHussain,
} from "../assets";

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
    "Accounting",
    "IT",
    "Computer Science",
    "English Language",
    "Global Perspectives",
    "Biology",
    "Art & Design",
    "Business",
    "Economics",
    "Thinking Skills",
    "Environmental Management (AS)",
    "Literature in English",
    "Further Mathematics",
    "Politics (Edexcel)",
    "History",
    "Urdu",
    "Islamic Studies",
    "Media Studies",
    "Law",
    "Psychology",
    "Chemistry",
    "Physics",
    "Sociology",
  ];
  const facultyList = [
    {
      img: SohailHaider,
      name: "Sohail Haider",
      subject:
        "A- Level Academic Coordinator, Qualification: MPhil in English Literature, Experience: 19 years, Subjects: Sociology A Level & English Language (IGCSE, GCE & A Levels)",
    },
    {
      img: JunaidAkram,
      name: "Junaid Akram",
      subject:
        "Accounting/Business 8 years of teaching experience in IGCSE, O level and A level",
    },
    {
      img: RohanTariq,
      name: "Rohan Tariq",
      subject: "Mathematics(O Levels & A Levels) Experience 8 Years",
    },
    {
      img: TahirNaushad,
      name: "Tahir Naushad",
      subject: "Urdu O & A-Level 21 years experience",
    },
    {
      img: KanwalShabaz,
      name: "Kanwal Shabazz",
      subject: "Phycology 8 years",
    },
    {
      img: ZahidHussain,
      name: "ZAHID HUSSAIN",
      subject: "BIOLOGY 18 YEARS",
    },
    {
      img: AmmaraMohsin,
      name: "Ammara Mohsin",
      subject: "Chemistry O & A Level 6 years of experience",
    },
    {
      img: Rabeeaomer,
      name: "Rabeea omer",
      subject:
        "Economics/ Business studies M-phill Economics 13 years of teaching experience in University  & O/A levels",
    },
    {
      img: NailaSalman,
      name: "Naila Salman",
      subject: "Chemistry O/A level 12 years",
    },
    {
      img: "",
      name: "Ghulam Abbas Saqib",
      subject: "Mathematics O and A level  experience 15 years",
    },
    {
      img: "",
      name: "Ali Nadeem Shibli",
      subject: "Law English Lang and Literature 6 years O/A levels",
    },
    {
      img: "",
      name: "Umar Bilal",
      subject: "Business 14 years O/A Levels",
    },
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
              delay: 8500,
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
                img={pricipal_pic}
                title="Mr. Imran Shahid"
                designation="Principal"
                para="It gives me immense pleasure and a feeling of sheer pride and accomplishment to address you as Principal of the prestigious Lahore Grammar school, Faisalabad, an institution that has striven to maintain high academic standards ever since its inception. Our commitment is to provide our students with an array of opportunities, both curricular and co-curricular, to help them attain their highest potentials.  

                Our aim is not just giving our students an education that entitles them to a job but to nurture in them lifelong love for learning and inculcate in them values that will help them become kind, caring and responsible individuals.
                
                I feel privileged to be working with highly qualified and dedicated faculty always striving to provide students with the latest skills and knowledge to help them stand out in this ever evolving and fiercely competitive world. Our school life is vibrant with a variety of activities, happy noises of learning and positive energy.  
                
                I welcome you to LGS, Faisalabad and assure you that it will be our endeavour to make our students’ school life an enriching and memorable experience!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={irfanaAziz}
                title="Mrs. Irfana Aziz"
                designation="Vice Principal"
                para="Welcome to the official website of Lahore Grammar School, Faisalabad; a prestigious institution that has been providing high quality learning opportunities and experiences to young minds of the city for more than two decades.            

                We at LGS, Faisalabad strive to make education an enjoyable and enlightening process. Our school life is an excellent amalgamation of analytical, intellectual, and healthy physical growth of our students along with inculcating human values in them.
                
                We are also proud to have a faculty comprising of highly qualified individuals always doing their best to develop and nurture the young minds of today into well-rounded global citizens of tomorrow!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={cannalCampusPricipalPic}
                title="Mr. Sohail Haider"
                designation="A-Levels Coordinator"
                para="We live in exciting and rapidly changing times; these times mean that education is more important than ever. Education that prepares young people to be able to be life-long learners, to be able to adapt and adjust to the many changes they will face in their future. 

                At LGS, the growth of each individual student is a focus, we recognise that as we 'work together and learn together' students will be best able to achieve their potential.  The co-operative effort of students, parents and teachers is at the heart of the learning pathways followed by our students and the outcomes they achieve.
                
                We firmly believe that every student can experience success and go on to graduate as a responsible, resilient and confident young adult, well prepared to take charge of their future and to become a productive member of the country.
                Our school prides itself on the 'multiple learning outcomes' curricular and co-curricular programs available to students, on the highly positive attitude and behavior of our students and on the constant focus by our professional staff on developing, personalising and transforming teaching approaches to best meet the needs of students."
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
              {facultyList.map((item) => (
                <FacultyCard data={item} />
              ))}
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
