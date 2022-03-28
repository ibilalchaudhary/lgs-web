import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
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
import irfanaAziz from "../assets/irfanaAziz.jpg";
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
  defaultPic,
  FatimaHaroon,
  FazeelNoor,
  FoziaBatool,
  HinaShakeel,
  HiraYameen,
  LubnaSharoon,
  MALIHARABBANI,
  MsAyeshaFarhan,
  MsFizzaIfftikhar,
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
    {
      img: "",
      name: "Anum Saeed",
      subject: "B. Com + M.A Eng + ACCA (2-Level)",
    },
    {
      img: "",
      name: "Asma Omer",
      subject: "B.A",
    },
    {
      img: "",
      name: "Attiya Jabbar",
      subject: "M.A Eng",
    },
    {
      img: "",
      name: "Ayesha Liaquat",
      subject: "M.A (TEFL)",
    },
    {
      img: "",
      name: "Ayesha Tahir",
      subject: "B.A",
    },
    {
      img: "",
      name: "Batool Iftikhar",
      subject: "M.SC Statistics + B. ED",
    },
    {
      img: "",
      name: "Chanda Rani",
      subject: "M.SC Economics",
    },
    {
      img: "",
      name: "Farhana Ejaz",
      subject: "M.A Islamiyat + B.ED Arabic",
    },
    {
      img: "",
      name: "Fatima Haroon",
      subject: "B.A (Hons) Mass Communication",
    },
    {
      img: "",
      name: "Firdous Rani",
      subject: "M.Sc. Socialogy  + B.ED",
    },
    {
      img: "",
      name: "Hafiza Hira Ajmal",
      subject: "BS. (Hons) Zoology",
    },
    {
      img: "",
      name: "Hina Shakeel",
      subject: "B.A",
    },
    {
      img: "",
      name: "Hira Yameen",
      subject: "Maters in Eng. Literature & Linguistics",
    },
    {
      img: "",
      name: "Parvez Masih",
      subject: "B.A",
    },
    {
      img: "",
      name: "Mamoona Komal",
      subject: "BS - IT",
    },
    {
      img: "",
      name: "Rida Sarwar",
      subject: "M. PHIL Bio Informatics + B. ED",
    },
    {
      img: "",
      name: "Sadia Sami Sahni",
      subject: "B.SC",
    },
    {
      img: "",
      name: "Saeeda Kaukab",
      subject: "M.A Eng + B. ED",
    },
    {
      img: "",
      name: "Saima Imdad",
      subject: "General Certificate of Education",
    },
    {
      img: "",
      name: "Saima Nawaz",
      subject: "M. Phil Education",
    },
    {
      img: "",
      name: "Saira Jahanzeb",
      subject: "B.A",
    },
    {
      img: "",
      name: "Saira Rauf",
      subject: "M.SC Pak Studies",
    },
    {
      img: "",
      name: "Samara Zahoor",
      subject: "M. SC Computer Science",
    },
    {
      img: "",
      name: "Shumaila Naz",
      subject: "B. SC Double Maths",
    },
    {
      img: "",
      name: "Sobia Ghulam Nabi",
      subject: "M.A Urdu Lit + B. ED",
    },
    {
      img: "",
      name: "Somia Anwar",
      subject: "B.A + B. ED",
    },
    {
      img: "",
      name: "Zunaira Arshad",
      subject: "M.Sc Mathematics",
    },
    {
      img: "",
      name: "Mrs. Munaza",
      subject: "",
    },
    {
      img: "",
      name: "Khurram Yasmin",
      subject: "B.Sc.",
    },
    {
      img: "",
      name: "Aizah Razi",
      subject: "MBA (Finance)",
    },
    {
      img: "",
      name: "Bakhtawar Tariq",
      subject: "B. SC Double Maths & Physics",
    },
    {
      img: "",
      name: "Faiza Saeed",
      subject: "B.A",
    },
    {
      img: "",
      name: "Ghazala Shaheen",
      subject: "M.A Eng + M. ED + M.A TEFL",
    },
    {
      img: "",
      name: "Horeb Nauman",
      subject: "",
    },
    {
      img: "",
      name: "Iqra Khalid",
      subject: "BS. Psychology",
    },
    {
      img: "",
      name: "Irum Yawar",
      subject: "M.SC + B. ED",
    },
    {
      img: "",
      name: "Mehwash Sultan",
      subject: "M. Phil Eng Literature",
    },
    {
      img: "",
      name: "Nazish Arif",
      subject: "B.SC, M. Phill Education",
    },
    {
      img: "",
      name: "Noreen Raheel Faisal",
      subject: "B. SC + B. ED",
    },
    {
      img: "",
      name: "Rabia Azam",
      subject: "M. Phil Bio Chemistry",
    },
    {
      img: "",
      name: "Sadia Noreen",
      subject: "B. SC- M.A (Urdu) + B. ED",
    },
    {
      img: "",
      name: "Shamim Tahir",
      subject: "M.A + B. ED",
    },
    {
      img: "",
      name: "Tahreem Shaukat",
      subject: "M.A Urdu + B. ED",
    },
    {
      img: "",
      name: "Tooba Ijaz",
      subject: "",
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
              <div className="cannal__campus__sub__heading">105 CAMPUS</div>
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
                img={MsFizzaIfftikhar}
                title="Ms Fizza Iftikhar"
                designation="Preschool coordinator"
                para="Preschool is the first step of child in learning process. A child is limited to schooling but the learner is for life.LGS empower children to become a lifelong learners by nurturing a learner's mindset. We facilitate their learning process by providing the necessary environment and resources, monitoring progress, and encouraging learners to become problems solvers. We are a community of lifelong learners where teachers are facilitators not instructors."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={defaultPic}
                title="Ms Mamona Rasheed"
                designation="Class 3_4 coordinator"
                para="The progress of any country depends on the thinking style of the students and their specific attitude towards discipline and learning. Discipline in learner's life ensures peace and harmony which in turn offers impetus to the forces of progress and prosperity. At LGS , the idea of basic education is learning by doing. Activity based learning relieves the tension of adolescence and enable the students to be a productive member of the society. LGS has proved that education is an act of acquiring knowledge. Academics of LGS open new ways of thinking and meditation for students."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={MsAyeshaFarhan}
                title="Ayesha Farhan"
                designation="Branch Head"
                para='Lahore Grammar School Faisalabad shares the vision  " ILM SAY DIL O DEMAG ROSHAN"- knowledge enlightens the heart and mind. To turn this vision into a reality, we at LGS provide quality education to our learners.

                Learning is not about memorising, learning is about being mindful and inorder to achieve this goal, school offers activity based learning in an encouraging and friendly environment,  supervised by professionally trained teachers. A comprehensively structured curriculum covering all the basic subjects is taught in well equipped classrooms.
                
                A meaningful education is not only about academic achievements, its also about polishing the unique potential of every child on his way to becoming a confident, successful and happy individual, who can meet the challenges of a rapidly changing world.
                
                At LGS, students not only excel in academics but they also receive a well rounded exposure. Students have the opportunity to participate on the stage ,work in the IT labs, performing STEM activities and learning interactively, in the sports fields and on the debate platforms, winning laurels for the school.
                
                With every passing day, we, as a team, are establishing our position in winning the confidence of our parent body. The outstanding achievements, both academics and extra curricular, are a proof. We hope this journey and progress continues.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <PricipalCard
                img={MsMunazaGill}
                title="Ms Munazza"
                designation="Class 1_2 coordinator"
                para="learning is a process that leads to change, which occurs as a result of experience and increases the potential for improved performance and future learning. The change in the learner may happen at the level of knowledge, attitude of behavior. As a result of learning learners come to see concepts, ideas,
                and/or the world differently. Learning is not something done to students, but rather something students themselves do. It is the direct result of how students interpret and respond to their experiences.
                At The Lahore Grammar School we are trying to move one step ahead towards making our children independent. We are trying to motivate our students to be a critical thinker, a good analyzer and more important to be a productive citizen of this ever changing global- society.
                The school is striving hard to make the best possible efforts to develop strong values with the combination of curricular and co-curricular activities in the children. The school is fully devoted to groom the students for the challenges of tomorrow  by providing them practical based education."
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
