import React from "react";
import Header from "../component/Header";
import main_bg from "../assets/main_bg.png";
import eventPic from "../assets/eventPic.png";
import schoolPic from "../assets/schoolPic.png";
import aboutPic from "../assets/aboutPic.png";
import campusPic from "../assets/campusPic.png";
import contactPic from "../assets/contactPic.png";
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
      <Header />
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea
              beatae odit quaerat laboriosam, quis laudantium eum error officia
              est deleniti odio itaque recusandae ullam. Consectetur aliquam,
              mollitia qui quibusdam est facere fuga provident enim, quasi vero
              saepe adipisci suscipit ex quam? Fugiat ratione porro neque fugit
              perspiciatis facere maiores labore corrupti? Sed nostrum iusto
              consectetur culpa delectus deleniti blanditiis, minima corporis
              itaque nihil unde eum officiis numquam eveniet sunt iure
              perspiciatis repellat ipsa architecto quae commodi voluptatem
              facere ex. Modi nam, consequuntur ut aliquam dolores voluptatem
              labore quibusdam consequatur velit officia natus voluptatibus
              quidem sint doloribus ullam placeat molestiae!
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea
              beatae odit quaerat laboriosam, quis laudantium eum error officia
              est deleniti odio itaque recusandae ullam. Consectetur aliquam,
              mollitia qui quibusdam est facere fuga provident enim, quasi vero
              saepe adipisci suscipit ex quam? Fugiat ratione porro neque fugit
              perspiciatis facere maiores labore corrupti? Sed nostrum iusto
              consectetur culpa delectus deleniti blanditiis, minima corporis
              itaque nihil unde eum officiis numquam eveniet sunt iure
              perspiciatis repellat ipsa architecto quae commodi voluptatem
              facere ex. Modi nam, consequuntur ut aliquam dolores voluptatem
              labore quibusdam consequatur velit officia natus voluptatibus
              quidem sint doloribus ullam placeat molestiae!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            voluptatem rem deserunt delectus velit quo quam praesentium est
            commodi quasi, atque blanditiis vero soluta cumque. Illo magni
            labore ipsa, eaque consectetur quisquam perferendis eius
            accusantium, repellendus iure expedita necessitatibus commodi
            recusandae doloribus voluptates? Reprehenderit, vitae quibusdam?
            Labore. cumque. Illo magni labore ipsa, eaque consectetur quisquam
            perferendis eius accusantium, repellendus iure expedita
            necessitatibus commodi recusandae doloribus voluptates?
            Reprehenderit, vitae quibusdam? Labore.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, ex optio suscipit impedit itaque beatae inventore
                perferendis officia tenetur fuga!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur voluptatem rem deserunt delectus velit quo quam
                praesentium est commodi quasi, atque blanditiis vero soluta
                cumque. Illo magni labore ipsa, eaque consectetur quisquam
                perferendis eius accusantium, repellendus iure expedita
                necessitatibus commodi recusandae doloribus voluptates?
                Reprehenderit, vitae quibusdam? Labore. cumque. Illo magni
                labore ipsa, eaque consectetur quisquam perferendis eius
                accusantium, repellendus iure expedita necessitatibus commodi
                recusandae doloribus voluptates? Reprehenderit, vitae quibusdam?
                Labore.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__us__main__container">
        <img
          src={contactPic}
          alt="contactPic"
          className="contact__us__main__container__img"
        />
        <div className="contact__us__main__container__overlay">
          <div className="contact__us__main__container__overlay__content">
            <form
              action=""
              className="contact__us__main__container__overlay__content__form"
            >
              <div className="contact__us__main__container__overlay__content__form__heading">
                Contact Us!
              </div>
              <div className="contact__us__main__container__overlay__content__form__paragraph">
                There are many variations of passages of Lorem Ipsum but the
                majority have suffered alteration.
              </div>
              <input
                type="text"
                placeholder="Name"
                className="contact__us__main__container__overlay__content__form__input"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="contact__us__main__container__overlay__content__form__input"
              />
              <input
                type="text"
                placeholder="Subject Info"
                required
                className="contact__us__main__container__overlay__content__form__input"
              />
              <textarea
                type="text"
                placeholder="Message"
                rows="5"
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
            </form>
            <div className="contact__us__main__container__overlay__content__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1151111002946!2d73.10139811514794!3d31.410954431405937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922680e447c274b%3A0x9c84073af7e37170!2sLahore%20Grammar%20School%2C%20Shahrahe%20Faisal%2C%20D%20Ground%20Block%20B%20People&#39;s%20Colony%20No%201%2C%20Faisalabad%2C%20Punjab!5e0!3m2!1sen!2s!4v1644349815423!5m2!1sen!2s"
                style={{ borderRadius: 30, border: "none" }}
              />
            </div>
          </div>
          <div className="contact__us__main__container__overlay__content__office__hours">
            Office Hours <span>9am - 5pm</span>
          </div>
          <div className="contact__us__main__container__overlay__content__contact__wrapper">
            <div className="contact__us__main__container__overlay__content__contact__line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.387"
                height="21.387"
                viewBox="0 0 21.387 21.387"
              >
                <path
                  id="Icon_awesome-phone-alt"
                  data-name="Icon awesome-phone-alt"
                  d="M20.777,15.114,16.1,13.108a1,1,0,0,0-1.17.288l-2.072,2.531a15.483,15.483,0,0,1-7.4-7.4L7.987,6.454a1,1,0,0,0,.288-1.17L6.27.606A1.009,1.009,0,0,0,5.121.026l-4.344,1A1,1,0,0,0,0,2.005,19.38,19.38,0,0,0,19.383,21.388a1,1,0,0,0,.977-.777l1-4.344a1.015,1.015,0,0,0-.585-1.153Z"
                  transform="translate(0 0)"
                  fill="#f7c902"
                />
              </svg>
              +92 345 7225510
            </div>
            <div className="contact__us__main__container__overlay__content__contact__line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.116"
                height="18.979"
                viewBox="0 0 28.116 18.979"
              >
                <path
                  id="Icon_zocial-email"
                  data-name="Icon zocial-email"
                  d="M.072,21.366V5.749q0-.027.081-.515L9.345,13.1.18,21.908a2.3,2.3,0,0,1-.108-.542ZM1.292,4.149a1.168,1.168,0,0,1,.461-.081H26.507A1.535,1.535,0,0,1,27,4.149l-9.218,7.89-1.22.976-2.413,1.979-2.413-1.979-1.22-.976Zm.027,18.817L10.565,14.1,14.144,17l3.579-2.9,9.246,8.866a1.3,1.3,0,0,1-.461.081H1.753a1.228,1.228,0,0,1-.434-.081ZM18.943,13.1l9.164-7.863a1.618,1.618,0,0,1,.081.515V21.366a2.078,2.078,0,0,1-.081.542Z"
                  transform="translate(-0.072 -4.068)"
                  fill="#f7c902"
                />
              </svg>
              ahmadarshad17@gmail.com
            </div>
            <div className="contact__us__main__container__overlay__content__contact__line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.487"
                height="30.8"
                viewBox="0 0 23.487 30.8"
              >
                <path
                  id="Icon_map-city-hall"
                  data-name="Icon map-city-hall"
                  d="M5.438,14.067H7.675V28.44H11.03V16.12h3.355V28.44H17.74V16.12H21.1V28.44h3.355V14.067h2.236a1.076,1.076,0,0,0,1.119-1.027,1,1,0,0,0-.466-.83l0,0-.017-.01-.029-.017L16.622,6.657V5.038c1.971.906,3.594-.655,6.15.284V1.747c-2.558-.938-4.18.621-6.15-.284v-.23a.561.561,0,0,0-1.117,0V6.657L4.83,12.18,4.8,12.2l-.016.011v0a1,1,0,0,0-.465.83A1.075,1.075,0,0,0,5.438,14.067Zm1.118,15.4L4.32,31.52H27.807l-2.238-2.053Z"
                  transform="translate(-4.32 -0.72)"
                  fill="#f7c902"
                />
              </svg>
              Islamabad, Pakistan
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
