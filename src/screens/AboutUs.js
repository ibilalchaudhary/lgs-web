import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import campusPic from "../assets/campusPic.png";
import pricipal_pic from "../assets/pricipal_pic.png";
import director_pic from "../assets/director.jpg";
import { Link } from "react-router-dom";

function AluminiGalleryCard({ title }) {
  return (
    <Link
      to="/alumni-card-details"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="campus__life__main__container__content__card"
    >
      <img
        src={campusPic}
        alt="campusPic"
        className="campus__life__main__container__content__card__img"
      />
      <div className="campus__life__main__container__content__card__overlay">
        <div className="campus__life__main__container__content__card__overlay__heading">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default function AboutUs() {
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
              <svg
                style={{ width: 280 }}
                xmlns="http://www.w3.org/2000/svg"
                width="308"
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
              </svg>
              <div className="our__school__overlay__content__heading">
                About Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers__content__section">
        <div className="careers__content__section__cards__wrapper">
          <div
            className="careers__content__section__card__public__speaking"
            style={{ alignItems: "flex-start" }}
          >
            <div className="from__the__pricipal__container">
              <img
                src={director_pic}
                alt="pricipal_pic"
                className="from__the__pricipal__container__img"
              />
              <div className="from__the__pricipal__container__heading">
                NOTE FROM THE Director
              </div>
              <div className="from__the__pricipal__container__sub__heading">
                Mrs. Saltanat Bokhari
              </div>
              <div className="from__the__pricipal__container__para">
                I am delighted to offer you a warm welcome to LGS FSD. At LGS.
                FSD, we view diversity as our biggest strength. We aim to
                inspire in our students the curiosity to learn, the
                self-confidence to lead and the compassion to serve. Our primary
                source of insight and energy is our students’ validation,
                critique and innovative ideas. We mutually guide and encourage
                one another to understand the importance of not just academic
                achievement but also values of tolerance and respect. I hope our
                website gives you a sense of our purpose and vision. -
              </div>
            </div>
            <div className="from__the__pricipal__container">
              <img
                src={pricipal_pic}
                alt="pricipal_pic"
                className="from__the__pricipal__container__img"
              />
              <div className="from__the__pricipal__container__heading">
                NOTE FROM THE PRINCIPAL
              </div>
              <div className="from__the__pricipal__container__sub__heading">
                Imran Shahid
              </div>
              <div className="from__the__pricipal__container__para">
                It gives me immense pleasure and a feeling of sheer pride and
                accomplishment to address you as Principal of the prestigious
                Lahore Grammar school, Faisalabad, an institution that has
                striven to maintain high academic standards ever since its
                inception. Our commitment is to provide our students with an
                array of opportunities, both curricular and co-curricular, to
                help them attain their highest potentials.
                <br />
                <br /> Our aim is not just giving our students an education that
                entitles them to a job but to nurture in them lifelong love for
                learning and inculcate in them values that will help them become
                kind, caring and responsible individuals.
                <br />
                <br />I feel privileged to be working with highly qualified and
                dedicated faculty always striving to provide students with the
                latest skills and knowledge to help them stand out in this ever
                evolving and fiercely competitive world. Our school life is
                vibrant with a variety of activities, happy noises of learning
                and positive energy.
                <br />I welcome you to LGS, Faisalabad and assure you that it
                will be our endeavor to make our students’ school life an
                enriching and memorable experience!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
