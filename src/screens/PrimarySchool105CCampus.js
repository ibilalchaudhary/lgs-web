import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import multimediaPic from "../assets/multimediaPic.png";
import presentationPic from "../assets/presentationPic.png";
import libraryPic from "../assets/libraryPic.png";
import musicandArtPic from "../assets/musicandArtPic.png";
import schoolPic from "../assets/schoolPic.png";
import SUBJECT from "../assets/SUBJECT.png";
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
import {
  AmarZia,
  AmbrinAsghar,
  AsmaUmer,
  AyeshaLiaqat,
  FatimaHaroon,
  FazeelNoor,
  FoziaBatool,
  HinaShakeel,
  HiraYameen,
  LubnaSharoon,
  MALIHARABBANI,
  MsAyeshaFarhan,
  MsMunazaGill,
  MsShaziaMubashir,
  RidaNadeem,
  RizwanaKhalid,
  RobinaAtif,
  SaadiaNaz,
  SaimaNawaz,
  SairaJahanzaib,
  SairaNasir,
  SAJIDATARIQ,
  ShumailaNaz,
  SobiaGulamNabi,
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

export default function PrimarySchool105CCampus() {
  const [select, setSelect] = useState("Campus Life");
  const facultyList = [
    {
      img: AsmaUmer,
      name: "ASMA OMER",
      subject: "B.A",
    },
    {
      img: AyeshaLiaqat,
      name: "AYESHA LIAQUAT",
      subject: "M.A (TEFL)",
    },
    {
      img: FatimaHaroon,
      name: "FATIMA HAROON",
      subject: "B.A (Hons) Mass Communication",
    },
    {
      img: HinaShakeel,
      name: "HINA SHAKEEL",
      subject: "B.A",
    },
    {
      img: "",
      name: "FIRDOUS RANI",
      subject: "M.SC Socialogy + B.ED",
    },
    {
      img: MsAyeshaFarhan,
      name: "AYESHA FARHAN",
      subject: "Masters in English Literature",
    },
    {
      img: MsShaziaMubashir,
      name: "SHAZIA MUBASHAR",
      subject: "Masters in Education",
    },
    {
      img: MsMunazaGill,
      name: "MUNAZZA",
      subject: "B.A + B. ED, Masters in Polical Science",
    },
    {
      img: SaimaNawaz,
      name: "SAIMA NAWAZ",
      subject: "M. Phil Education",
    },
    {
      img: SairaJahanzaib,
      name: "SAIRA JAHANZEB",
      subject: "B.A",
    },
    {
      img: ShumailaNaz,
      name: "SHUMAILA NAZ",
      subject: "B. SC Double Maths",
    },
    {
      img: SobiaGulamNabi,
      name: "SOBIA GHULAM NABI",
      subject: "M.A Urdu Lit + B. ED",
    },
    {
      img: HiraYameen,
      name: "HIRA YAMEEN",
      subject: "Maters in Eng. Literature & Linguistics",
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
              <div className="cannal__campus__sub__heading">105-C CAMPUS</div>
              <div
                style={{ color: "#F9CC09" }}
                className="cannal__campus__heading"
              >
                Primary School
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cannal__campus__container">
        <div
          style={{ background: "#FFD934" }}
          className="cannal__campus__container__wrapper__card"
        >
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
        <div
          style={{ background: "#022B43" }}
          className="cannal__campus__senior__nav__wrapper"
        >
          <CampusNav
            select={select}
            setSelect={setSelect}
            title="Campus Life"
          />
          <CampusNav title="Gallery" select={select} setSelect={setSelect} />
          <CampusNav
            title="Holistic Approach"
            select={select}
            setSelect={setSelect}
          />
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
        {select === "Campus Life" ? (
          <div className="cannal__campus__primary__container">
            <div className="cannal__campus__senior__container__card">
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__primary__container__card__left__heading">
                  Exploratorium
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph">
                  Based on the concept of discovery learning, this is one of the
                  favorite rooms in the school. Here children get a chance to
                  carry on hands-on activities and do experiments and make
                  collective projects related to social science themes.
                </div>
              </div>
              <img
                src={SUBJECT}
                alt="addmissionPic"
                className="cannal__campus__senior__container__card__left__img"
              />
            </div>
            <div className="cannal__campus__senior__container__card__reverse">
              <img
                src={multimediaPic}
                alt="multimediaPic"
                className="cannal__campus__primary__container__card__left__img"
              />
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__primary__container__card__left__heading__reverse">
                  Multimedia
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph__reverse">
                  The Multimedia facility is used to show documentaries and
                  video clips of topics related to their work. Children find
                  these fascinating and we feel this is an enriching experience,
                  away from the typical cartoon and animated movies that most
                  children are exposed to.
                </div>
              </div>
            </div>
            <div className="cannal__campus__senior__container__card">
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__primary__container__card__left__heading">
                  Library
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph">
                  We have a well stocked library with a range of books in both
                  English and Urdu. We also offer karate, gymnastics and dance.
                </div>
              </div>
              <img
                src={libraryPic}
                alt="libraryPic"
                className="cannal__campus__senior__container__card__left__img"
              />
            </div>
            <div
              style={{ background: "#1C1C1C" }}
              className="cannal__campus__senior__container__card__reverse"
            >
              <img
                src={libraryPic}
                alt="libraryPic"
                className="cannal__campus__primary__container__card__left__img"
              />
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__primary__container__card__left__heading__reverse">
                  Computers
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph__reverse">
                  A well equipped computer lab for classes Nursery to Class 1.
                  Children work on-line, learning through various interactive
                  educational software. Our mathematics program is also computer
                  based and is effective in further sharpening students’
                  computational ability and developing their computer skills.
                </div>
              </div>
            </div>
            <div className="cannal__campus__senior__container__card">
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__primary__container__card__left__heading">
                  Art & Music
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph">
                  Art work is not limited to working in the art room alone. We
                  encourage students to express themselves using different
                  mediums. Our students have ample opportunity to go outdoors
                  and use sidewalk chalk and paint brushes to help develop their
                  fine motor skills.
                  <br />
                  <br />
                  The much loved songs, nursery rhymes and poems, both in
                  English and Urdu are incorporated in our music curriculum.
                  Besides developing a sense of rhythm and harmony, poems are a
                  wonderful tool for language development. The selection of
                  songs and rhymes are based on the different themes covered in
                  the curriculum.
                </div>
              </div>
              <img
                src={musicandArtPic}
                alt="musicandArtPic"
                className="cannal__campus__senior__container__card__left__img"
              />
            </div>
            <div
              style={{ background: "#F9CC09" }}
              className="cannal__campus__senior__container__card__reverse"
            >
              <img
                src={libraryPic}
                alt="libraryPic"
                className="cannal__campus__primary__container__card__left__img"
              />
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__primary__container__card__left__heading__reverse__yellow">
                  Puppet Class
                </div>
                <div
                  style={{ color: "#2B2B2B" }}
                  className="admissions__content__section__card__admission__procedure__paragraph__reverse"
                >
                  Children enjoy the world of make believe and are fascinated by
                  the movement of the puppets and the exciting stories they get
                  to hear in the puppet class.
                </div>
              </div>
            </div>
            <div className="cannal__campus__senior__container__card">
              <div className="cannal__campus__senior__container__card__left">
                <div className="cannal__campus__primary__container__card__left__heading">
                  Presentations
                </div>
                <div className="admissions__content__section__card__admission__procedure__paragraph">
                  We believe that the ability to share and express ideas and
                  experiences with their teachers and peers is an important
                  aspect of child’s development process. At LGS, children
                  regularly give class presentations on a range of curriculum
                  based topics. We feel it’s never too early to start; even the
                  playgroups have circle time for ‘show and tell’.
                </div>
              </div>
              <img
                src={presentationPic}
                alt="presentationPic"
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
        {select === "Holistic Approach" ? (
          <div className="global__skill__section">
            <div className="heroistic__section__heading">
              Welcome to our website!
            </div>

            <div
              style={{ marginTop: "3em" }}
              className="cannal__campus__senior__container__card"
            >
              <div className="cannal__campus__senior__container__card__left">
                <div className="heroistic__section__heading__para">
                  We hope that this site not only provides you with useful
                  information, but also acts as a window to what makes LGS a
                  unique school.
                </div>
                <div className="heroistic__section__heading__para">
                  We believe that children should be exposed to as many ideas
                  and opportunities as possible and given the freedom to explore
                  and question them. We want our students to form their own
                  opinions and make their own choices. We strongly encourage our
                  students to take part in extra curricular activities and
                  community service projects as well. We aim to provide a
                  learning environment that enables our children to be thinking,
                  socially responsible, well rounded individuals.
                </div>
                <div className="heroistic__section__heading__para">
                  At LGS we aim to foster that kind of independence and
                  self-belief. We encourage our young children to learn by doing
                  and to discover things for themselves. We appreciate
                  children’s creativity and are not looking for a perfect
                  product. We look at the process of learning and making
                  connections; this is what we feel has real value.
                </div>
              </div>
              <img
                src={schoolPic}
                alt="schoolPic"
                className="cannal__campus__senior__container__card__left__img"
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
