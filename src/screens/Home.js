import React, { useState } from "react";
import main_bg from "../assets/main_bg.png";
import eventPic from "../assets/eventPic.png";
import schoolPic from "../assets/schoolPic.png";
import aboutPic from "../assets/aboutPic.png";
import campusPic from "../assets/campusPic.png";
import communityServiceImg from "../assets/comunityService.png";
import internationalExposure from "../assets/internationalExposure.png";
import publicSpeaking from "../assets/publicSpeaking.png";
import DRAMA from "../assets/DRAMA.png";
import SPORTS from "../assets/SPORTS.png";
import MEDIA from "../assets/MEDIA.png";
import tech from "../assets/tech.png";
import FORM from "../assets/FORM.png";
import { Link } from "react-router-dom";

function EventCard() {
  return (
    <div className="events__main__container__content__card">
      <img
        src={eventPic}
        alt="eventPic"
        className="events__main__container__content__card__img"
      />
      <div className="events__main__container__content__card__overlay">
        News Heading Here
      </div>
    </div>
  );
}

function CampusLifeCard({ title, subtitle, img }) {
  return (
    <Link
      to="/campus-life-details"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="campus__life__main__container__content__card"
    >
      <img
        src={img ? img : campusPic}
        alt="campusPic"
        className="campus__life__main__container__content__card__img"
      />
      <div className="campus__life__main__container__content__card__overlay">
        <div className="campus__life__main__container__content__card__overlay__heading">
          {title}
          <span>{subtitle}</span>
        </div>
      </div>
    </Link>
  );
}

function NavLink({ title, selected, setSelected }) {
  return (
    <button
      onClick={() => {
        setSelected(title);
      }}
      className={
        selected === title
          ? "about__main__container__content__right__nav__selected about__main__container__content__right__nav"
          : "about__main__container__content__right__nav"
      }
    >
      {title}
    </button>
  );
}

export default function Home() {
  const [selected, setSelected] = useState("Middle School");
  return (
    <>
      <div className="home__main__container">
        <img
          src={main_bg}
          alt="main_bg"
          className="home__main__container__img"
        />
        <div className="home__main__container__overlay">
          <div className="home__main__container__overlay__content">
            <div className="home__main__container__overlay__content__heading">
              <span>Welcome To</span>
              LAHORE GRAMMAR SCHOOL
              <div className="home__main__container__overlay__content__heading__buttom__text">
                Faisalabad Campus
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events__main__container">
        <div className="events__main__container__heading">News & Events</div>
        <div className="events__main__container__content">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <div className="news__main__section">
        <div className="news__main__section__content">
          <div className="news__main__section__header">
            <div className="news__main__section__heading">LATEST NEWS</div>
            <div className="news__main__section__date">7 Dec 2022</div>
          </div>
          <div className="news__main__section__paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            esse quod ullam dolores quisquam cupiditate libero quia ratione?
            Voluptatem pariatur debitis eveniet ut placeat eaque eligendi
            tempora sunt facilis. Veniam, facilis delectus. Tempore eaque magni
            earum unde minus dolores quisquam qui reprehenderit, odit neque
            porro! Voluptatum voluptates sunt sint id. Consequuntur aperiam
            dicta amet vero nisi voluptates sint veniam quam.
          </div>
        </div>
      </div>
      <div className="our__school__main__container">
        <div className="our__school__main__container__content">
          <div className="our__school__main__container__left">
            <div className="our__school__main__container__heading">
              OUR SCHOOL
            </div>
            <div className="our__school__main__container__paragragh">
              In 1979, Lahore Grammar School opened its doors to a handful of
              students with 55 Main established as its first branch. We’ve come
              a long way since then! From the very beginning, however, the
              philosophy of the school has been to combine collaborative
              learning, critical and logical thinking skills and a diverse
              co-curricular program to help create a more balanced, well-rounded
              individual, with interests and ideas, a questioning mind and a
              genuine love for learning. Today, Lahore Grammar School provides
              education to girls till A Level. It has extended its network to
              cater to the needs of the middle-income group in its Landmark
              Schools. LGS has branches in Islamabad, Karachi, Peshawar, Quetta,
              Multan, Gujranwala, Sialkot, Faisalabad and Gujrat. It offers
              quality education to the low-income group through the Lahore
              Education Society School, entirely supported and funded by LGS.
              However, please note that this website caters only to schools
              under the stewardship of Director and Principal, Mrs. Nasrene
              Shah- namely LGS 31 FCC, LGS 30 Main and LGS 55 Main.
            </div>
          </div>
          <div className="our__school__main__container__right">
            <img
              src={schoolPic}
              alt="schoolPic"
              className="our__school__main__container__right__img"
            />
          </div>
        </div>
      </div>
      <div className="about__main__container">
        <div className="about__main__container__content">
          <img
            src={aboutPic}
            alt="aboutPic"
            className="about__main__container__content__img"
          />
          <div className="about__main__container__content__right">
            <div className="about__main__container__content__right__heading">
              ABOUT LGS
            </div>
            <div className="about__main__container__content__right__nav__wrapper">
              <NavLink
                title="Middle School"
                selected={selected}
                setSelected={setSelected}
              />
              <NavLink
                title="Senior School"
                selected={selected}
                setSelected={setSelected}
              />
              <NavLink
                title="A-Levels"
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            {selected === "Middle School" ? (
              <>
                <div className="about__main__container__content__right__paragraph">
                  In Middle School we aim to challenge our students, knowing
                  they will rise to the occasion. We aspire to provide as many
                  opportunities as possible to explore, make choices and learn
                  about themselves and each other. We want them to learn to
                  inquire, reflect and discuss; to think critically, ask
                  meaningful questions, listen with an open mind and to learn
                  the skills needed to find solutions and solve problems for
                  themselves. Above all else, we want them to enjoy themselves
                  and to be involved, responsible, respectful citizens of their
                  class, school and society.
                </div>
                {/* <div className="about__main__container__content__right__enrollment__wrapper">
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      433
                    </div>
                    <span>Enrollments</span>
                    <span>2021</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      42
                    </div>
                    <span>Enrollments</span>
                    <span>2020</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      123
                    </div>
                    <span>Enrollments</span>
                    <span>2019</span>
                  </div>
                </div> */}
              </>
            ) : null}
            {selected === "Senior School" ? (
              <>
                <div className="about__main__container__content__right__paragraph">
                  In Senior School we aim to challenge our students, knowing
                  they will rise to the occasion. We aspire to provide as many
                  opportunities as possible to explore, make choices and learn
                  about themselves and each other. We want them to learn to
                  inquire, reflect and discuss; to think critically, ask
                  meaningful questions, listen with an open mind and to learn
                  the skills needed to find solutions and solve problems for
                  themselves. Above all else, we want them to enjoy themselves
                  and to be involved, responsible, respectful citizens of their
                  class, school and society.
                </div>
                {/* <div className="about__main__container__content__right__enrollment__wrapper">
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      474
                    </div>
                    <span>Enrollments</span>
                    <span>2021</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      145
                    </div>
                    <span>Enrollments</span>
                    <span>2020</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      73
                    </div>
                    <span>Enrollments</span>
                    <span>2019</span>
                  </div>
                </div> */}
              </>
            ) : null}
            {selected === "A-Levels" ? (
              <>
                <div className="about__main__container__content__right__paragraph">
                  In A-Levels we aim to challenge our students, knowing they
                  will rise to the occasion. We aspire to provide as many
                  opportunities as possible to explore, make choices and learn
                  about themselves and each other. We want them to learn to
                  inquire, reflect and discuss; to think critically, ask
                  meaningful questions, listen with an open mind and to learn
                  the skills needed to find solutions and solve problems for
                  themselves. Above all else, we want them to enjoy themselves
                  and to be involved, responsible, respectful citizens of their
                  class, school and society.
                </div>
                {/* <div className="about__main__container__content__right__enrollment__wrapper">
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      421
                    </div>
                    <span>Enrollments</span>
                    <span>2021</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      142
                    </div>
                    <span>Enrollments</span>
                    <span>2020</span>
                  </div>
                  <div className="about__main__container__content__right__enrollment">
                    <div className="about__main__container__content__right__enrollment__title">
                      521
                    </div>
                    <span>Enrollments</span>
                    <span>2019</span>
                  </div>
                </div> */}
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="campus__life__main__container">
        <div className="campus__life__main__container__heading">
          CAMPUS LIFE
        </div>
        <div className="campus__life__main__container__content">
          <CampusLifeCard
            img={internationalExposure}
            title="International"
            subtitle="Exposure"
          />
          <CampusLifeCard
            img={publicSpeaking}
            title="Public"
            subtitle="Speaking"
          />
          <CampusLifeCard
            img={communityServiceImg}
            title="Community Service"
            subtitle="And The Enviroment"
          />
          <CampusLifeCard
            img={tech}
            title="Science and"
            subtitle="Technology"
          />
          <CampusLifeCard
            img={DRAMA}
            title="Drama, Music,"
            subtitle="And Languages"
          />
          <CampusLifeCard img={SPORTS} title="Sports" />
          <CampusLifeCard
            img={MEDIA}
            title="Media"
            subtitle="and Publications"
          />
        </div>
      </div>
      <div className="addmission__main__container">
        <div className="addmission__main__container__content__wrapper__headings__wrapper">
          <div className="addmission__main__container__content__wrapper__heading">
            ADMISSIONS
          </div>
          <div className="addmission__main__container__content__wrapper__paragraph">
            Could LGS FSD be right for you? We seek to admit optimistic,
            energetic, and engaged students who are ready to take advantage of
            the world of endless opportunities and challenges we provide to our
            students. LGS FSD offers a rigorous yet flexible curriculum enriched
            by a wide variety of interdisciplinary courses and activities.
          </div>
          <div className="addmission__main__container__content__wrapper__paragraph">
            To apply to our branch, parents must visit the school with all
            required documents to complete the Admission Application Form. If we
            think you are the right fit, the School Office will get in touch
            with you regarding relevant Admission Tests.
          </div>
        </div>
        <div className="addmission__main__container__content">
          <img
            src={FORM}
            alt="addmission_bg"
            className="addmission__main__container__content__img"
          />
          <div className="addmission__main__container__content__overlay__new">
            <div className="addmission__main__container__content__overlay__content__new">
              <div className="addmission__main__container__content__overlay__content__new__enrollment__wrapper">
                <div className="addmission__main__container__content__overlay__content__new__enrollment">
                  23 APR
                  <span>Early Admission</span>
                  <span>Test</span>
                </div>
                <div className="addmission__main__container__content__overlay__content__new__enrollment">
                  4 JUN
                  <span>Regular Admission</span>
                  <span>Test I</span>
                </div>
                <div className="addmission__main__container__content__overlay__content__new__enrollment">
                  6 AUG
                  <span>Regular Admission</span>
                  <span>Test II</span>
                </div>
              </div>
            </div>

            <div className="addmission__main__container__content__wrapper"></div>
            <div className="addmission__main__container__content__wrapper__headings__container">
              <div className="addmission__main__container__content__wrapper__heading">
                ADMISSIONS
              </div>
              <div className="addmission__main__container__content__wrapper__paragraph">
                Could LGS FSD be right for you? We seek to admit optimistic,
                energetic, and engaged students who are ready to take advantage
                of the world of endless opportunities and challenges we provide
                to our students. LGS FSD offers a rigorous yet flexible
                curriculum enriched by a wide variety of interdisciplinary
                courses and activities.
              </div>
              <div className="addmission__main__container__content__wrapper__paragraph">
                To apply to our branch, parents must visit the school with all
                required documents to complete the Admission Application Form.
                If we think you are the right fit, the School Office will get in
                touch with you regarding relevant Admission Tests.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
