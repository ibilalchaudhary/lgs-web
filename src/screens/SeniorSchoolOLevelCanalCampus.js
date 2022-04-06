import React, { useState } from "react";
import PhotoGallery from "../component/PhotoGallery";
import NoticeBoardCard from "../component/NoticeBoardCard";
import FacultyCard from "../component/FacultyCard";
import uzmaMasood from "../assets/uzmaMasood.jpeg";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import creativePic from "../assets/creativePic.png";
import addmissionPic from "../assets/SUBJECT.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  AmarZia,
  AmbrinAsghar,
  Ehsanulhaq,
  FazeelNoor,
  FoziaBatool,
  LubnaSharoon,
  MALIHARABBANI,
  RidaNadeem,
  RizwanaKhalid,
  RobinaAtif,
  SaadiaNaz,
  SairaNasir,
  SAJIDATARIQ,
  SeemabAdnan,
  TahiraSajjad,
  TayyabaJabeen,
  ZahidHussain,
  ZUBARIYAUMBREENABID,
} from "../assets";

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
              <div
                style={{ color: "#fff" }}
                className="cannal__campus__container__wrapper__card__left__content__heading"
              >
                {title}
              </div>
              <div
                style={{ color: "#fff" }}
                className="cannal__campus__container__wrapper__card__left__content__para"
              >
                {designation}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ color: "#fff" }}
          className="cannal__campus__container__wrapper__card__right"
        >
          "{para}"
        </div>
      </div>
    </>
  );
}

function SubjectBtn({ title }) {
  return <button className="cannal__campus__btn">{title}</button>;
}

export default function SeniorSchoolOLevelCanalCampus() {
  const [select, setSelect] = useState("O-Level Subject Choices");
  const matricCompalsorySubjectChoices = [
    "English",
    "Urdu",
    "Mathematics",
    "Islamiat",
    "Pakistan Studies",
  ];
  const matricScienceSubjectChoices = [
    "Physics",
    "Chemistry",
    "Biology/Computer Sciences",
  ];
  const facultyList = [
    {
      img: MALIHARABBANI,
      name: "MALIHA RABBANI",
      subject: "MSC PHYSICS 15 YEARS",
    },
    {
      img: SAJIDATARIQ,
      name: "SAJIDA TARIQ",
      subject:
        "M.A  (URDU & ISLAMIYAT). URDU O LEVEL SYLLABUS A & B. 10 YEAR Teaching Experience",
    },
    {
      img: ZUBARIYAUMBREENABID,
      name: "ZUBARIYA UMBREEN ABID",
      subject: "Msc.Geography (PU) 25 years teaching experience",
    },
    {
      img: SairaNasir,
      name: "Saira Nasir",
      subject: "MSC Zoology, LLb. Teaching Experience: 13 years (O' level )",
    },
    {
      img: AmbrinAsghar,
      name: "Ambrin Asghar",
      subject: "M Sc.Chemistry B.Ed More than 18 years teaching experience",
    },
    {
      img: LubnaSharoon,
      name: "Lubna Sharoon",
      subject: "MA English Literature 17 years of teaching O levels",
    },
    {
      img: RizwanaKhalid,
      name: "Rizwana Khalid",
      subject: "M.A.(Urdu..Islamic Studies....Arabic..and B ed.) 15 years",
    },
    {
      img: RobinaAtif,
      name: "Robina Atif",
      subject: "M.A Education  M.ed, M.A Urdu B.ed Experience: 20 years",
    },
    {
      img: TahiraSajjad,
      name: "Tahira Sajjad",
      subject:
        "Coordinator matric M.A English, B.ed, Dip Tefl Experience years 15",
    },
    {
      img: AmarZia,
      name: "Amar Zia",
      subject: "MBA (IT) 14 year’s experience",
    },
    {
      img: FoziaBatool,
      name: "Fozia Batool",
      subject: "3. M.Phil (HRM) Experience! 10 Years in teaching",
    },
    {
      img: SaadiaNaz,
      name: "Saadia naz",
      subject: "MSC zoology 6 years of experience",
    },
    {
      img: RidaNadeem,
      name: "Rida Nadeem",
      subject: "MPhil Chemistry (specialisation in Organic Chemistry). 5 years",
    },
    {
      img: FazeelNoor,
      name: "Fazeel Noor",
      subject:
        "Electrical Engineer Specialised subjects Mathematics and Physics of O Level and Matriculation",
    },
    {
      img: TayyabaJabeen,
      name: "Tayyaba Jabeen",
      subject: "Masters in English +B.Ed 15 years",
    },
    {
      img: ZahidHussain,
      name: "Zahid hussain",
      subject: "Teaching experience 18 years",
    },
    {
      img: Ehsanulhaq,
      name: "Ehsan ul haq",
      subject: "B.Ed , M.Ed, B.Sc Hons. 30 year’s experience",
    },
    {
      img: SeemabAdnan,
      name: "Seemab Adnan",
      subject: "Mathematics Experience : 18years",
    },
    {
      img: "",
      name: "Tahira Tabassum",
      subject: "",
    },
    {
      img: "",
      name: "Uzma Jafar",
      subject: "",
    },
    {
      img: "",
      name: "Ashab Feryaz Ahmed",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Fazeel Noor",
      subject: "B.S (Elect. Engg)",
    },
    {
      img: "",
      name: "Junaid Akram",
      subject: "B.A",
    },
    {
      img: "",
      name: "Kashif Manzoor",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Lubna Sharoon",
      subject: "M.A (Eng)",
    },
    {
      img: "",
      name: "Muhammad Furqan",
      subject: "Master in (Eng. History) B.Ed",
    },
    {
      img: "",
      name: "Muhammad Salman Ali",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Muhammad Shameel",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Muhammad Umer Virk",
      subject: "MBA (HRM)",
    },
    {
      img: "",
      name: "Muhammad Waseem Akhtar",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Sajid Mahmood",
      subject: "M.A (Isl & Arabic), B.Ed",
    },
    {
      img: "",
      name: "Sehrish Alvi",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Javaid Iqbal",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Maleeha Rabbani",
      subject: "MSC Physics",
    },
    {
      img: "",
      name: "Naila Salman",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Rizwana Kausar",
      subject: "M.A (Urdu, Islamiyat, Arabic) B.Ed",
    },
    {
      img: "",
      name: "Saima Moazam",
      subject: "M.A (Islamiyat), MBA",
    },
    {
      img: "",
      name: "Saira Nasir",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Sumara Hanif",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Syeda Maryyum",
      subject: "M.Sc (Math), B.Ed",
    },
    {
      img: "",
      name: "Tehmina Hanif",
      subject: "M.A (Eng)",
    },
    {
      img: "",
      name: "Zubaria Umbreen Abid",
      subject: "B.Sc.",
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
              <div className="cannal__campus__para">O-Level/Matric</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cannal__campus__container">
        <div
          style={{ background: "#005DFF" }}
          className="cannal__campus__container__wrapper__card"
        >
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
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
            <SwiperSlide>
              <PricipalCard
                img={uzmaMasood}
                title="Mrs. Uzma Masood"
                designation="O Levels - Matric Coordinator"
                para="The true role of education transcends much beyond awarding the degree and so is LGS; it strongly believes in the wholesome growth of students, turning them into potential individuals, capable of facing challenges around the globe. We strive to facilitate our learners to earn activity-based knowledge in maintaining a balance between theory and practice. LGS inculcates creativity and considerable communication skills to play a positive role in the well-being of society at large. 
                Joining Lahore Grammar School will broaden your horizon, make a remarkable difference in your personality and enhance your career opportunities."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="cannal__campus__senior__nav__wrapper">
          <CampusNav
            select={select}
            setSelect={setSelect}
            title="O-Level Subject Choices"
          />
          <CampusNav
            select={select}
            setSelect={setSelect}
            title="Matric Subject Choices"
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
        {select === "O-Level Subject Choices" ? (
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
        {select === "Matric Subject Choices" ? (
          <>
            <div
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 40,
                marginBottom: -30,
              }}
            >
              Compulsory Subjects
            </div>
            <div className="cannal__campus__btn__wrapper">
              {matricCompalsorySubjectChoices.map((subjectChoice) => (
                <SubjectBtn title={subjectChoice} />
              ))}
            </div>
            <div
              style={{ fontSize: 16, fontWeight: "bold", marginBottom: -30 }}
            >
              Science Subjects
            </div>
            <div className="cannal__campus__btn__wrapper">
              {matricScienceSubjectChoices.map((subjectChoice) => (
                <SubjectBtn title={subjectChoice} />
              ))}
            </div>
          </>
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
