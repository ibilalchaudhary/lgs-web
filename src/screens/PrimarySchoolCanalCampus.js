import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import multimediaPic from "../assets/multimediaPic.png";
import presentationPic from "../assets/presentationPic.png";
import libraryPic from "../assets/libraryPic.png";
import musicandArtPic from "../assets/musicandArtPic.png";
import schoolPic from "../assets/schoolPic.png";
import irfanaAziz from "../assets/irfanaAziz.jpg";
import shaziaZubiullah from "../assets/shaziaZubiullah.jpg";
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

export default function PrimarySchoolCanalCampus() {
  const [select, setSelect] = useState("Campus Life");
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
                img={shaziaZubiullah}
                title="Mrs. Shazia Zabiullah"
                designation="Head of Pre & Primary years"
                para="Our aim is to provide a meaningful child centred, play based environment that builds life skills, independence, confidence and resilience to support each child in achieving their potential and to make a smooth transition to school and society itself"
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
