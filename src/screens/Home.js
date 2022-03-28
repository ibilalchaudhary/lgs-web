import React, { useState } from "react";
import main_video from "../assets/main_video.gif";
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
import glits from "../assets/glits.jpeg";
import Colorfestival from "../assets/Colorfestival.jpeg";
import springbreak from "../assets/springbreak.jpeg";
import alevelplacement from "../assets/alevelplacement.jpeg";
import internationplacement from "../assets/internationplacement.jpeg";
import { Link, useNavigate } from "react-router-dom";

function EventCard({ title, img, to }) {
  const navigate = useNavigate();
  return (
    <div
      className="events__main__container__content__card"
      onClick={() => {
        navigate(to);
      }}
    >
      <img
        src={img}
        alt="eventPic"
        className="events__main__container__content__card__img"
      />
      <div className="events__main__container__content__card__overlay">
        {title}
      </div>
    </div>
  );
}

function CampusLifeCard({ title, subtitle, img, href }) {
  return (
    <Link
      to="/campus-life"
      onClick={() => {
        setTimeout(() => {
          document.getElementById(href).scrollIntoView();
        }, 100);
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
          src={main_video}
          alt="main_video"
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
          <EventCard
            title="Spring break"
            img={springbreak}
            to="/event_detail"
          />
          <EventCard
            title="A levels farewell"
            img={internationplacement}
            to="/event_detail"
          />
          <EventCard
            title="Color festival"
            img={Colorfestival}
            to="/event_detail"
          />
          <EventCard
            title="International placements"
            img={alevelplacement}
            to="/event_detail"
          />
          <EventCard title="Glits" img={glits} to="/event_detail" />
        </div>
      </div>
      <div className="news__main__section">
        <div className="news__main__section__content">
          <div className="news__main__section__header">
            <div className="news__main__section__heading">LATEST NEWS</div>
            <div className="news__main__section__date">24 MAR 2022</div>
          </div>
          <div className="news__main__section__paragraph">
            Spring Break from 25th March to 4th April, 2022.
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
              students. We’ve come a long way since then! From the very
              beginning, however, the philosophy of the school has been to
              combine collaborative learning, critical and logical thinking
              skills and a diverse co-curricular program to help create a more
              balanced, well-rounded individual, with interests and ideas, a
              questioning mind and a genuine love for learning. Today, Lahore
              Grammar School provides education to students till A Level. It has
              extended its network to cater to the needs of the middle-income
              group in its Landmark Schools. LGS has branches in Islamabad,
              Karachi, Peshawar, Quetta, Multan, Gujranwala, Sialkot, Faisalabad
              and Gujrat. It offers quality education to the low-income group
              through the Lahore Education Society School, entirely supported
              and funded by LGS.
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
            href="international"
          />
          <CampusLifeCard
            img={publicSpeaking}
            title="Public"
            subtitle="Speaking"
            href="public"
          />
          <CampusLifeCard
            img={communityServiceImg}
            title="Community Service"
            subtitle="And The Enviroment"
            href="community"
          />
          <CampusLifeCard
            img={tech}
            title="Science and"
            subtitle="Technology"
            href="science"
          />
          <CampusLifeCard
            img={DRAMA}
            title="Drama, Music,"
            subtitle="And Languages"
            href="drama"
          />
          <CampusLifeCard img={SPORTS} title="Sports" href="sports" />
          <CampusLifeCard
            img={MEDIA}
            title="Media"
            subtitle="and Publications"
            href="media"
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
