import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import pricipal_pic from "../assets/pricipal_pic.png";
import contactPic from "../assets/contactPic.png";

function ChoiceBtn({ title, select, setSelect, id }) {
  return (
    <button
      id={id}
      onClick={() => {
        setSelect(id);
      }}
      className={
        select === id
          ? "personalized__section__form__container__left__content__right__btn__select"
          : "personalized__section__form__container__left__content__right__btn"
      }
    >
      {title}
    </button>
  );
}

export default function CounsellingCenter() {
  const [select, setSelect] = useState("");
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
            <div className="our__school__overlay__content__heading__wrapper">
              {/* <svg
                style={{ width: 550 }}
                xmlns="http://www.w3.org/2000/svg"
                width="598"
                height="42"
                viewBox="0 0 598 42"
              >
                <rect
                  id="Rectangle_190"
                  data-name="Rectangle 190"
                  width="598"
                  height="42"
                  rx="21"
                  fill="#ec5700"
                />
              </svg> */}
              <div
                style={{ fontSize: 30, textAlign: "center" }}
                className="our__school__overlay__content__heading"
              >
                Counseling & Wellness Center
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events__main__container">
        <div className="campus__main__container__content">
          <div className="campus__main__container__content__heading">
            introduction <span>Meet our Counselors</span>
          </div>
          <div className="campus__main__container__content__counselling">
            <button className="campus__main__container__content__counselling__card">
              <img
                src={pricipal_pic}
                alt="pricipal_pic"
                className="campus__main__container__content__counselling__card__img"
              />
              <div className="campus__main__container__content__counselling__card__heading">
                Kanwal Shahbaz
              </div>
              <div
                style={{ color: "#005DFF", fontWeight: "500 " }}
                className="campus__main__container__content__counselling__card__para"
              >
                Career and Wellbeing Counselor
              </div>
              <div className="campus__main__container__content__counselling__card__para">
                Kanwal Shahbaz is a Careerv Counsellor, Psychologist, a social
                scientist, and a Lecturer. She is a licensed CBT practitioner by
                Mills Psychology Canada. Currently, she is serving in the Lahore
                Grammar School as a Career & Wellbeing Counselor.
              </div>
            </button>
            <button className="campus__main__container__content__counselling__card">
              <img
                src={pricipal_pic}
                alt="pricipal_pic"
                className="campus__main__container__content__counselling__card__img"
              />
              <div className="campus__main__container__content__counselling__card__heading">
                Zunair Amjad
              </div>
              <div
                style={{ color: "#005DFF", fontWeight: "500 " }}
                className="campus__main__container__content__counselling__card__para"
              >
                Career Counselor
              </div>
              <div className="campus__main__container__content__counselling__card__para">
                Zunaira Amjad is an IB certified counselor directly dealing the
                educational and industrial activity-based profile of the
                students.
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="personalized__section__wrapper">
        <div className="personalized__section__wrapper__content">
          <div className="personalized__section__wrapper__content__entry">
            <div
              style={{ color: "#F9CC09" }}
              className="personalized__section__wrapper__content__entry__heading"
            >
              Personalized Counseling
            </div>
            <div className="personalized__section__wrapper__content__entry__para">
              A process of self-discovery and growth. It can help increase
              self-confidence, improve relationships, solve problems, achieve
              educational goals, and make good decisions for emotional,
              intellectual, physical, and spiritual well-being.{" "}
            </div>
          </div>
          <div className="personalized__section__wrapper__content__entry">
            <div
              style={{ color: "#00B1FF" }}
              className="personalized__section__wrapper__content__entry__heading"
            >
              We are offering
            </div>
            <div className="personalized__section__wrapper__content__entry__para">
              School based counseling Adolescent Counseling Socio-emotional
              Adjustment
            </div>
          </div>
          <div className="personalized__section__wrapper__content__entry">
            <div
              style={{ color: "#FF6AE6" }}
              className="personalized__section__wrapper__content__entry__heading"
            >
              Come and share with us
            </div>
            <div className="personalized__section__wrapper__content__entry__para">
              School adjustment Emotional disturbances and changes Peer pressure
              Behavioral concerns, personal growth and overall development
              Psychosexual adjustment Family Siblings rivalry Academic concerns
              Social adjustment Sleep problems Dreaming
            </div>
          </div>
        </div>
      </div>
      <div className="personalized__section__form__container">
        <div className="personalized__section__form__container__left">
          <div className="personalized__section__form__container__left__heading">
            Mood swings check your mood
          </div>
          <div className="personalized__section__form__container__left__content">
            <div className="personalized__section__form__container__left__content__heading">
              I am pleasant most of the time
            </div>
            <div className="personalized__section__form__container__left__content__right">
              <ChoiceBtn
                id="1"
                title="1"
                select={select}
                setSelect={setSelect}
              />
              <ChoiceBtn
                id="2"
                title="2"
                select={select}
                setSelect={setSelect}
              />
            </div>
          </div>
          <div className="personalized__section__form__container__left__content">
            <div className="personalized__section__form__container__left__content__heading">
              I feel good most of the time
            </div>
            <div className="personalized__section__form__container__left__content__right">
              <ChoiceBtn
                id="3"
                title="1"
                select={select}
                setSelect={setSelect}
              />
              <ChoiceBtn
                id="4"
                title="2"
                select={select}
                setSelect={setSelect}
              />
            </div>
          </div>
          <div className="personalized__section__form__container__left__content">
            <div className="personalized__section__form__container__left__content__heading">
              I like meeting people
            </div>
            <div className="personalized__section__form__container__left__content__right">
              <ChoiceBtn
                id="5"
                title="1"
                select={select}
                setSelect={setSelect}
              />
              <ChoiceBtn
                id="6"
                title="2"
                select={select}
                setSelect={setSelect}
              />
            </div>
          </div>
          <div className="personalized__section__form__container__left__content">
            <div className="personalized__section__form__container__left__content__heading">
              I like high gatherings
            </div>
            <div className="personalized__section__form__container__left__content__right">
              <ChoiceBtn
                id="7"
                title="1"
                select={select}
                setSelect={setSelect}
              />
              <ChoiceBtn
                id="8"
                title="2"
                select={select}
                setSelect={setSelect}
              />
            </div>
          </div>
          <div className="personalized__section__form__container__left__content">
            <div className="personalized__section__form__container__left__content__heading">
              I understand changes happening around
            </div>
            <div className="personalized__section__form__container__left__content__right">
              <ChoiceBtn
                id="10"
                title="1"
                select={select}
                setSelect={setSelect}
              />
              <ChoiceBtn
                id="11"
                title="2"
                select={select}
                setSelect={setSelect}
              />
            </div>
          </div>
          <div className="personalized__section__form__container__left__footer">
            Score 6 and above means pleasant mood Score 5 and below means sad
            mood-Recommendation meet the psychologist.
          </div>
        </div>
        <div className="personalized__section__form__container__right">
          <div className="personalized__section__form__container__right__heading">
            <span> Make an </span>
            appointment!
          </div>
          <input
            type="text"
            placeholder="Name"
            className="personalized__section__form__container__right__input"
          />
          <input
            type="text"
            placeholder="Contact"
            className="personalized__section__form__container__right__input"
          />
          <textarea
            id=""
            placeholder="Issues to be discussed"
            rows="5"
            cols="14"
            className="personalized__section__form__container__right__input"
          ></textarea>
          <div className="personalized__section__form__btn__wrapper">
            <button className="personalized__section__form__btn">Submit</button>
          </div>
        </div>
      </div>
      <div className="learning__developmet__section">
        <div className="learning__developmet__section__heading">
          Learning & Development
        </div>
        <div className="learning__developmet__section__para">
          Workshops And Programs
        </div>
        <div className="learning__developmet__section__content">
          <div className="learning__developmet__section__content__card">
            <div className="learning__developmet__section__content__card__heading">
              Confidence Boosters Of <span>Personality</span>
            </div>
            <div className="learning__developmet__section__content__card__entry">
              Date <span>3 April, 2022</span>
            </div>
            <div className="learning__developmet__section__content__card__entry">
              Time <span>10:00 Am</span>
            </div>
            <div className="learning__developmet__section__content__card__entry">
              Venue <span>Lgs Auditorium 1</span>
            </div>
            <div className="learning__developmet__section__content__card__entry">
              Speaker <span>Dr. Phillips Baide</span>
            </div>
            <div className="learning__developmet__section__content__card__entry">
              Registration <span>1000 Pkr</span>
            </div>
          </div>
          <div
            style={{ background: "#2B2B2B" }}
            className="learning__developmet__section__content__card"
          >
            <div className="learning__developmet__section__content__card__heading__white">
              Confidence Boosters Of <span>Personality</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Date <span>3 April, 2022</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Time <span>10:00 Am</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Venue <span>Lgs Auditorium 1</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Speaker <span>Dr. Phillips Baide</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Registration <span>1000 Pkr</span>
            </div>
          </div>
          <div
            style={{ background: "#005DFF" }}
            className="learning__developmet__section__content__card"
          >
            <div className="learning__developmet__section__content__card__heading__white">
              Confidence Boosters Of <span>Personality</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Date <span>3 April, 2022</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Time <span>10:00 Am</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Venue <span>Lgs Auditorium 1</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Speaker <span>Dr. Phillips Baide</span>
            </div>
            <div className="learning__developmet__section__content__card__entry__white">
              Registration <span>1000 Pkr</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" international__office__container">
        <img
          src={contactPic}
          alt="contactPic"
          className="international__office__img"
        />
        <div className="contact__us__main__container__overlay__new">
          <div className="contact__us__main__container__overlay__content__new">
            <div
              style={{ color: "#fff" }}
              className="learning__developmet__section__heading"
            >
              International Office
            </div>
            <div
              style={{ color: "#F9CC09" }}
              className="learning__developmet__section__para"
            >
              Workshops And Programs
            </div>
            <div className="international__office__content">
              <div className="international__office__content__left">
                <div className="international__office__content__left__heading">
                  <span>Career Counseling</span> Counseling
                </div>
                <div className="international__office__content__left__para">
                  A process that will help you to know and understand yourself
                  and the world of work in order to make career, educational,
                  and life decisions. Career development is more than just
                  deciding on a major and what job you want to get when you
                  graduate.
                </div>

                <div style={{ marginTop: "2em" }}>
                  <div className="international__office__content__left__heading">
                    <span> SEEK HELP </span>
                    DURING OFFICE HOURS
                  </div>
                  <div className="international__office__content__left__para">
                    Counseling & Wellness Center
                  </div>
                  <div className="international__office__content__left__sub__para">
                    123 Lahore Grammar School, Canal Park, East Canal Campus,
                    canal Road Faisalabad
                  </div>

                  <div className="international__office__content__left__sub__para">
                    <span>Email:</span> psykanwal@gmail.com
                  </div>
                  <div className="international__office__content__left__sub__para">
                    <span>Mon-Fri:</span> 08:00 AM - 2:30 PM
                  </div>
                  <div className="international__office__content__left__sub__para">
                    You can make offline appointment Visiting hours
                  </div>
                </div>
              </div>
              <div className="international__office__content__right">
                <div className="international__office__content__left__heading">
                  <span>University</span>
                  Placements
                </div>
                <div className="international__office__content__left__para">
                  Our International Office offers potential national and
                  international university placements to Grammarian family with
                  scholarships and financial aids. Our aim is to develop a
                  student and university fit. We are dealing with admission in
                  USA, Canada, UK, Italy, Ireland, Dubai, Europe, Turkey &
                  Russia.
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="international__office__content__left__para__input"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  className="international__office__content__left__para__input"
                />
                <textarea
                  id=""
                  placeholder="Issues to be discussed"
                  rows="5"
                  cols="14"
                  className="international__office__content__left__para__input"
                ></textarea>
                <div className="personalized__section__form__btn__wrapper">
                  <button className="international__office__content__left__btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
