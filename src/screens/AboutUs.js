import React from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import pricipal_pic from "../assets/pricipal_pic.png";
import director_pic from "../assets/director.jpg";
import AliaRehman from "../assets/AliaRehman.jpeg";
import MeenaGul from "../assets/MeenaGul.jpeg";
import irfanaAziz from "../assets/irfanaAziz.jpg";

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
                Mrs. Saltanat Bokhari - DIRECTOR
              </div>
            </div>
            <div className="from__the__pricipal__container">
              <img
                src={MeenaGul}
                alt="pricipal_pic"
                className="from__the__pricipal__container__img"
              />

              <div className="from__the__pricipal__container__heading">
                Ms. Meena Gul - Regional Director
              </div>
              <div className="from__the__pricipal__container__para">
                With an experience of more than 35 years as an educationist, Ms.
                Meena Gul serves as a Regional Director at LGS Group of
                Colleges. Through her leadership, Ms. Meena has been organising
                and implementing training programs for staff aimed at achieving
                their academic goals by the end of the year. Through weekly,
                monthly and annual staff evaluation reports, a systematic
                approach is taken while mentoring and training the staff members
                of LGS Group of Colleges.
              </div>
            </div>
            <div className="from__the__pricipal__container">
              <img
                src={AliaRehman}
                alt="pricipal_pic"
                className="from__the__pricipal__container__img"
              />

              <div className="from__the__pricipal__container__heading">
                Mrs. Alia Rehman - Regional Coordinator
              </div>
              <div className="from__the__pricipal__container__para">
                What sets Lahore Grammar School Faisalabad apart is that its
                students exude a strong commitment in developing a personal
                responsibility in all pursuits and endeavours, striving to
                achieve academic success, sporting prowess, artistic and
                creative excellence and develop social as well as moral mind
                set. Here, the student’s potential is nurtured in a stimulating
                educational environment, inspiring them to achieve their goals.
                Our students are encouraged to be resilient in their learning
                and we at Lahore Grammar School, ensure that they are valued and
                cared for.
              </div>
            </div>
            <div className="from__the__pricipal__container">
              <img
                src={pricipal_pic}
                alt="pricipal_pic"
                className="from__the__pricipal__container__img"
              />

              <div className="from__the__pricipal__container__heading">
                Imran Shahid - PRINCIPAL
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

            <div className="from__the__pricipal__container">
              <img
                src={irfanaAziz}
                alt="irfanaAziz"
                className="from__the__pricipal__container__img"
              />

              <div className="from__the__pricipal__container__heading">
                Mrs. Irfana Aziz - VICE PRINCIPAL
              </div>
              <div className="from__the__pricipal__container__para">
                Welcome to the official website of Lahore Grammar School,
                Faisalabad; a prestigious institution that has been providing
                high quality learning opportunities and experiences to young
                minds of the city for more than two decades. We at LGS,
                Faisalabad strive to make education an enjoyable and
                enlightening process. Our school life is an excellent
                amalgamation of analytical, intellectual, and healthy physical
                growth of our students along with inculcating human values in
                them. We are also proud to have a faculty comprising of highly
                qualified individuals always doing their best to develop and
                nurture the young minds of today into well-rounded global
                citizens of tomorrow!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
