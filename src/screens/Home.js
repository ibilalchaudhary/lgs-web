import React from "react";
import Header from "../component/Header";
import main_bg from "../assets/main_bg.png";
import eventPic from "../assets/eventPic.png";
import schoolPic from "../assets/schoolPic.png";
import aboutPic from "../assets/aboutPic.png";
import campusPic from "../assets/campusPic.png";

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
    </>
  );
}
