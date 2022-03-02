import React from "react";
import main_bg from "../assets/main_bg.png";
import eventPic from "../assets/eventPic.png";
import schoolPic from "../assets/schoolPic.png";
import aboutPic from "../assets/aboutPic.png";
import campusPic from "../assets/campusPic.png";
import addmission_bg from "../assets/addmission_bg.png";

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

function CampusLifeCard() {
  return (
    <div className="campus__life__main__container__content__card">
      <img
        src={campusPic}
        alt="campusPic"
        className="campus__life__main__container__content__card__img"
      />
      <div className="campus__life__main__container__content__card__overlay">
        <div className="campus__life__main__container__content__card__overlay__heading">
          New Heading Here
        </div>
      </div>
    </div>
  );
}

export default function Home() {
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
              LAHORE GRAMMER SCHOOL
              <div className="home__main__container__overlay__content__heading__buttom__text">
                Faisalabad Compus
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
            <div className="about__main__container__content__right__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus nostrum praesentium quis explicabo voluptatum sequi
              earum cumque nulla atque architecto. Ab sapiente, quod saepe est
              dolore omnis sed repellendus voluptates repellat asperiores
              eligendi, porro dignissimos nesciunt sint a! Dicta dolorum
              consequuntur, ex nulla excepturi sint, veritatis hic at, nesciunt
              quasi nisi sit soluta! Dolorum magnam quaerat accusantium minima
              fugit nobis!
            </div>
          </div>
        </div>
      </div>
      <div className="campus__life__main__container">
        <div className="campus__life__main__container__heading">
          CAMPUS LIFE
        </div>
        <div className="campus__life__main__container__content">
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
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
            src={addmission_bg}
            alt="addmission_bg"
            className="addmission__main__container__content__img"
          />
          <div className="addmission__main__container__content__overlay">
            <div className="addmission__main__container__content__overlay__content">
              <div className="addmission__main__container__content__overlay__content__paragragh">
                If we think you are the right fit, the School Office will get in
                touch with you regarding relevant Admission Tests.
              </div>
              <input
                type="text"
                placeholder="Name"
                className="contact__us__main__container__overlay__content__form__input"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="contact__us__main__container__overlay__content__form__input"
              />{" "}
              <input
                type="text"
                placeholder="Class"
                className="contact__us__main__container__overlay__content__form__input"
              />
              <input
                type="text"
                placeholder="Address"
                className="contact__us__main__container__overlay__content__form__input"
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "flex-end",
                  marginTop: "1em",
                }}
              >
                <button className="primary__btn">Submit</button>
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
