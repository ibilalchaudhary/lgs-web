import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import pricipal_pic from "../assets/pricipal_pic.png";
import irfanaAziz from "../assets/irfanaAziz.jpg";
import AyeshaGillani from "../assets/AyeshaGillani.jpeg";
import kiran from "../assets/kiran.jpeg";
import PhotoGallery from "../component/PhotoGallery";
import NoticeBoardCard from "../component/NoticeBoardCard";
import FacultyCard from "../component/FacultyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Aneelapervaiz,
  FatimaShahid,
  FatimaTahir,
  MsShaistaChaudhary,
  Saimamoazzam,
  SanaHashmi,
  SobiaIram,
  TabassumYounas,
  TahiraAbbas,
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

export default function MiddleSchoolCanalCampus() {
  const [select, setSelect] = useState("Subject Choices");
  const facultyList = [
    {
      img: TabassumYounas,
      name: "Tabassum Younas",
      subject: "M. A Urdu and Iqbaliat 12 years experience",
    },
    {
      img: FatimaShahid,
      name: "Fatima Shahid",
      subject: "BS ( Hons) in English literature and language .MA TEFL, B.Ed",
    },
    {
      img: TahiraAbbas,
      name: "Tahira Abbas",
      subject: "BS hons zoology, b.ed 4 years of experience",
    },
    {
      img: Aneelapervaiz,
      name: "Aneela pervaiz",
      subject: "M.A Islamiat M.A Urdu(B.Ed,M.Ed) More than 10 year experience",
    },
    {
      img: SobiaIram,
      name: "Sobia Iram",
      subject:
        "Masters in English literature Masters in English linguistics Experience 9Years",
    },
    {
      img: MsShaistaChaudhary,
      name: "Ms Shaista Chaudhary",
      subject: "Masters in Secondary Education & English Literature",
    },
    {
      img: SanaHashmi,
      name: "Sana Hashmi",
      subject: "M.A(Education) 14 years of experience",
    },
    {
      img: Saimamoazzam,
      name: "Saima moazzam",
      subject: "Islamiat 19 years  experience",
    },
    {
      img: FatimaTahir,
      name: "Fatima Tahir",
      subject:
        "B.S(Hons), Certifications in MIS and Soft Skills, Programming in C, C++ and Data Management Experience:  8 year",
    },
    {
      img: "",
      name: "Amir Zia",
      subject: "MBA (IT)",
    },
    {
      img: "",
      name: "Asmara Inayat Niazi",
      subject: "Master in Economics, B.Ed",
    },
    {
      img: "",
      name: "Fazeel Noor",
      subject: "B.S (Elect. Engg)",
    },
    {
      img: "",
      name: "Nimra Riaz",
      subject: "M.Phil (Microbiology)",
    },
    {
      img: "",
      name: "Sobia Iram",
      subject: "M.A (Eng), M.A (Eng Lit & Ling)",
    },
    {
      img: "",
      name: "Sonia Umair",
      subject: "M.Sc (Chem), B.Ed",
    },
    {
      img: "",
      name: "Ayesha Gillani",
      subject: "",
    },
    {
      img: "",
      name: "Hafiza Saima Tahir",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Ismat Tahira",
      subject: "B.Sc (Chem Botnay) MA (Education)",
    },
    {
      img: "",
      name: "Kausar Naeem",
      subject: "B.Sc Math, MBA HRM, B.Ed",
    },
    {
      img: "",
      name: "Sabir Ali",
      subject: "F.A",
    },
    {
      img: "",
      name: "Sadia Kausar",
      subject: "M.A (Eng. Lit. & Lang.), B.Ed",
    },
    {
      img: "",
      name: "Sadia Naz",
      subject: "M.Sc. (Bio) B,Ed",
    },
    {
      img: "",
      name: "Shabana Razzaq",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Shaista Chaudhary",
      subject: "M.A (Eng Lit. &  Secondary Edu)",
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
              <div
                style={{ color: "#F9CC09" }}
                className="cannal__campus__heading"
              >
                Middle School
              </div>
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
                img={AyeshaGillani}
                title="Mrs. Ayesha Gillani"
                designation="Middle School Coordinator (Girls)"
                para="Middle Section! The physical and emotional heart of a school, here students are encouraged to become lifelong learners who can solve problems, think creatively and critically, communicate effectively and act ethically.

                LGS middle school includes the best aspects of teaching and learning and curriculum is designed, keeping High school expectations in mind.
                
                Comprehensive academics programmes, co & extracurricular activities, helping students to build a strong foundation for a successful future. Our aim to ensure the groundwork is firmly laid for the examination pressure to come in later years, whilst maintaining age-appropriate teaching techniques for maximize learning.
                
                Grammarians are encouraged to participate enthusiastically in a variety of academic, sporting, musical and social activities to support classroom work with much more regular events such as Science quiz and projects, Drama Day, sports day and display their creativity through open house Projects and Artwork"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={kiran}
                title="Mrs. Kiran Nabeel"
                designation="Middle School Coordinator (Boys)"
                para="Lahore Grammar School is one of the most reputable schools of Pakistan with branches all over the country. The school is famous for providing highest quality education to the students. LGS meets all the educational needs of students and offers the best curriculum as well as aspires to create an environment where quality teaching and learning can take place. Such environment, managed with fairness and firmness, promotes the growth and development of the whole person, allowing each student in our care to develop personally, educationally, and socially. In Middle School we aim to challenge our students, knowing they will rise to the occasion. providing them as many opportunities as possible to explore, make choices and learn about themselves and each other. We want them to learn to inquire, reflect and discuss; to think critically, ask meaningful questions, listen with an open mind and to learn the skills needed to find solutions and solve problems for themselves. Above all, we want them to enjoy themselves and become a responsible, respectful citizens of their class, school and society."
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
