import React, { useState } from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import ReunionsPic from "../assets/ReunionsPic.png";
import internetExplorePic from "../assets/internetExplorePic.png";
import PhotoGallery from "../component/PhotoGallery";
import NoticeBoardCard from "../component/NoticeBoardCard";

export default function CanalCampus() {
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
                style={{ width: 400 }}
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
                CANAL CAMPUS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers__content__section">
        <div className="careers__content__section__cards__wrapper">
          <div className="careers__content__section__card__international__explore">
            <img
              src={internetExplorePic}
              alt="internetExplorePic"
              className="careers__content__section__card__international__explore__img"
            />
            <div className="careers__content__section__card__international__explore__overlay senior__content__section__cards__wrapper">
              <svg
                id="Group_218"
                data-name="Group 218"
                xmlns="http://www.w3.org/2000/svg"
                width="60.001"
                height="56.211"
                viewBox="0 0 60.001 56.211"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_210"
                      data-name="Rectangle 210"
                      width="60.001"
                      height="56.211"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_211"
                  data-name="Group 211"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_7976"
                    data-name="Path 7976"
                    d="M20.466,36.261c-.8-.623-1.531-1.138-2.2-1.728a17.575,17.575,0,0,1-6.2-13,1.882,1.882,0,0,0-.491-1.106,4.062,4.062,0,0,1-1.156-2.939c.016-1.409,0-2.818,0-4.227,0-1.87-.155-2.022-2.233-2.119q0,5.524,0,11.042c0,.469.014.94,0,1.409a2.157,2.157,0,0,1-2.222,2.278,2.123,2.123,0,0,1-2.084-2.294c-.019-4.154-.041-8.309.014-12.463.013-1.022-.217-1.582-1.3-1.755A8.327,8.327,0,0,1,0,8.412c.79-.244,1.576-.5,2.371-.73Q15.623,3.9,28.883.152A3.239,3.239,0,0,1,30.546.079Q44.8,4.087,59.035,8.164c.233.067.457.167.966.355-1.082.333-1.914.6-2.754.845-2.285.658-4.561,1.354-6.867,1.93a1.207,1.207,0,0,0-1.087,1.48c.073,1.514,0,3.034.027,4.551a4.159,4.159,0,0,1-1.275,3.218,1.344,1.344,0,0,0-.385.828,17.725,17.725,0,0,1-8.122,14.646.358.358,0,0,0-.115.14c2.044,1.222,4.168,2.3,6.084,3.674a28.165,28.165,0,0,1,9.916,13.112c.57,1.477.11,2.639-1.182,3.119-1.216.452-2.265-.133-2.845-1.585C48.37,46.9,43.133,41.645,35.141,39.57A22.319,22.319,0,0,0,10.667,49.725a39.551,39.551,0,0,0-2.385,4.721c-.671,1.481-1.684,2.09-2.93,1.589S3.68,54.39,4.277,52.87A28.351,28.351,0,0,1,19.433,36.736c.317-.143.632-.291,1.033-.475m22.674-13.4a56.2,56.2,0,0,1-13.281,1.476,57.525,57.525,0,0,1-13.285-1.467c.482,6.423,6.587,11.692,13.389,11.672,6.641-.02,12.759-5.385,13.177-11.68m.922-14.229.007-.247c-4.6-1.316-9.2-2.642-13.816-3.93a2.335,2.335,0,0,0-1.156.118c-2.224.609-4.442,1.237-6.659,1.869-2.26.644-4.517,1.3-7.066,2.034.588.214.875.338,1.172.423,2.6.741,5.275,1.278,7.78,2.257A14.811,14.811,0,0,0,35.5,11.133c2.773-1.054,5.706-1.686,8.567-2.506m.807,5.072c-.294.067-.571.117-.841.192-4.3,1.2-8.593,2.428-12.909,3.565a5.141,5.141,0,0,1-2.51-.006C24.291,16.313,20,15.08,15.7,13.886c-.287-.08-.586-.112-.98-.184a10.3,10.3,0,0,1-.013,1.543c-.157.947.257,1.374,1.111,1.746a33.74,33.74,0,0,0,27.007.448c2.348-.939,2.34-.96,2.154-3.5a1.528,1.528,0,0,0-.107-.243"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </g>
              </svg>

              <div className="careers__content__section__card__public__speaking__left__heading">
                Middle Schoo
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                In Middle School we aim to challenge our students, knowing they
                will rise to the occasion. We aspire to provide as many
                opportunities as possible to explore, make choices and learn
                about themselves and each other. We want them to learn to
                inquire, reflect and discuss; to think critically, ask
                meaningful questions, listen with an open mind and to learn the
                skills needed to find solutions and solve problems for
                themselves. Above all else, we want them to enjoy themselves and
                to be involved, responsible, respectful citizens of their class,
                school and society.
              </div>
            </div>
          </div>
          <div className="careers__content__section__card__international__explore">
            <img
              src={AlumniRegistrationsPic}
              alt="AlumniRegistrationsPic"
              className="careers__content__section__card__international__explore__img"
            />
            <div className="careers__content__section__card__international__explore__overlay">
              <svg
                id="Group_218"
                data-name="Group 218"
                xmlns="http://www.w3.org/2000/svg"
                width="60.001"
                height="56.211"
                viewBox="0 0 60.001 56.211"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_210"
                      data-name="Rectangle 210"
                      width="60.001"
                      height="56.211"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_211"
                  data-name="Group 211"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_7976"
                    data-name="Path 7976"
                    d="M20.466,36.261c-.8-.623-1.531-1.138-2.2-1.728a17.575,17.575,0,0,1-6.2-13,1.882,1.882,0,0,0-.491-1.106,4.062,4.062,0,0,1-1.156-2.939c.016-1.409,0-2.818,0-4.227,0-1.87-.155-2.022-2.233-2.119q0,5.524,0,11.042c0,.469.014.94,0,1.409a2.157,2.157,0,0,1-2.222,2.278,2.123,2.123,0,0,1-2.084-2.294c-.019-4.154-.041-8.309.014-12.463.013-1.022-.217-1.582-1.3-1.755A8.327,8.327,0,0,1,0,8.412c.79-.244,1.576-.5,2.371-.73Q15.623,3.9,28.883.152A3.239,3.239,0,0,1,30.546.079Q44.8,4.087,59.035,8.164c.233.067.457.167.966.355-1.082.333-1.914.6-2.754.845-2.285.658-4.561,1.354-6.867,1.93a1.207,1.207,0,0,0-1.087,1.48c.073,1.514,0,3.034.027,4.551a4.159,4.159,0,0,1-1.275,3.218,1.344,1.344,0,0,0-.385.828,17.725,17.725,0,0,1-8.122,14.646.358.358,0,0,0-.115.14c2.044,1.222,4.168,2.3,6.084,3.674a28.165,28.165,0,0,1,9.916,13.112c.57,1.477.11,2.639-1.182,3.119-1.216.452-2.265-.133-2.845-1.585C48.37,46.9,43.133,41.645,35.141,39.57A22.319,22.319,0,0,0,10.667,49.725a39.551,39.551,0,0,0-2.385,4.721c-.671,1.481-1.684,2.09-2.93,1.589S3.68,54.39,4.277,52.87A28.351,28.351,0,0,1,19.433,36.736c.317-.143.632-.291,1.033-.475m22.674-13.4a56.2,56.2,0,0,1-13.281,1.476,57.525,57.525,0,0,1-13.285-1.467c.482,6.423,6.587,11.692,13.389,11.672,6.641-.02,12.759-5.385,13.177-11.68m.922-14.229.007-.247c-4.6-1.316-9.2-2.642-13.816-3.93a2.335,2.335,0,0,0-1.156.118c-2.224.609-4.442,1.237-6.659,1.869-2.26.644-4.517,1.3-7.066,2.034.588.214.875.338,1.172.423,2.6.741,5.275,1.278,7.78,2.257A14.811,14.811,0,0,0,35.5,11.133c2.773-1.054,5.706-1.686,8.567-2.506m.807,5.072c-.294.067-.571.117-.841.192-4.3,1.2-8.593,2.428-12.909,3.565a5.141,5.141,0,0,1-2.51-.006C24.291,16.313,20,15.08,15.7,13.886c-.287-.08-.586-.112-.98-.184a10.3,10.3,0,0,1-.013,1.543c-.157.947.257,1.374,1.111,1.746a33.74,33.74,0,0,0,27.007.448c2.348-.939,2.34-.96,2.154-3.5a1.528,1.528,0,0,0-.107-.243"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </g>
              </svg>

              <div className="careers__content__section__card__public__speaking__left__heading">
                Senior School
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                Welcome to Senior School! We take great pride in the fact that
                we offer one of the broadest range of GCSE subject choices in
                Pakistan. Along with a renowned Science Department, a strong
                Liberal Arts Department with subjects such as Global
                Perspectives, World Affairs and English Literature, are the
                cornerstone of our program. These three years are particularly
                important as students sit their O Levels at the end of year 11.
                In Senior School, our aim is to help our girls discover their
                areas of interest and talent so that they may become
                well-rounded and well-informed individuals who are able to
                rationalize their thoughts, formulate opinions, make arguments
                and complement them with vigor and determination.
              </div>
            </div>
          </div>
          <div className="further__details__our__school__main__section__wrapper further__details__our__school__main__section__wrapper__policy__academic">
            <div className="further__details__our__school__main__section__wrapper__heading further__details__our__school__main__section__wrapper__policy__academic">
              Science and Technology
            </div>
            <div className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic">
              The Science Society here at LGS FSD encourages enthusiasm for
              Science through enquiry and experimentation. We enable students of
              all abilities to enjoy and understand different scientific
              concepts and take part in a diverse range of competitions and
              projects. From holding yearly science fairs to sending students to
              India for space camps such as Astrotrek, we try to develop passion
              for science amongst students at a very early age. We facilitate
              participation in well renowned International competitions such as
              the Google Science Fair, Intel and various Interschool
              competitions such as PSIFI. One of the most integral features of
              the extracurricular program at LGS FSD is the Asian Regional Space
              Settlement Design Competition held by NASA which we have won a
              record of four times! Here’s what some of our students have to say
              about their NASA experience: “Nobody could have prepared us for
              all the amazing things we were going to experience. The
              competition itself was what we expected – tough, gruesome, fast
              paced but at the same time, enjoyable. Apart from that, the people
              we met, the places we saw, the laughter we shared all made a
              lasting impression on us. We came back from that border as a
              stronger team and as better people. All of us would admit, in a
              heartbeat, that we would want to experience it all over again.” –
              Hooran Mumtaz
              <li
                style={{ marginTop: 10 }}
                className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic"
              >
                ICT Society
              </li>
              <li
                style={{ marginTop: -20 }}
                className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic"
              >
                SciMath Society
              </li>
            </div>
          </div>
          <div className="further__details__our__school__main__section__wrapper further__details__our__school__main__section__wrapper__policy__academic">
            <div className="further__details__our__school__main__section__wrapper__heading further__details__our__school__main__section__wrapper__policy__academic">
              Drama, Music, Languages and Drama:
            </div>
            <div className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic">
              LGS FSD Dramatics society, Lahore Grammar Stage, has a philosophy
              that is centered on the use of symbolism and abstract to
              deconstruct the fundamental principles of human existence, and to
              display them using drama as a medium. Theatre is a powerful tool
              of expression, one where boundaries have no place, and any idea
              can be utilized to portray an emotion and send a message to the
              masses. Lahore Grammar Stage takes pride in striving to be
              different and promoting areas of the performing arts that are
              neglected in this part of the world. Through performing arts, we
              challenge our society’s deepest assumptions and stereotypes while
              spreading awareness and preserving the art and cultural identity
              of Pakistan. We plan to involve the amateur artist in our dramatic
              society to build upon their artistic creation and expression, to
              spark new ideas through theatrical activities and workshops. Our
              expertise lies in experimental theatre, abstract mimes, dark
              comedies, street theatre, and shadow theatre. Lahore Grammar Stage
              reflects this ideology by performing numerous plays which include
              “Sultana ka Khawaab”, a feminist play set in a Matriarchal
              society, “Sun Dou Hazaar Ikaasi”, a play about an equal community
              set in a dystopian world, and “Death”, a dark comedy depicting the
              mind of a serial killer.
              <li
                style={{ marginTop: 10 }}
                className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic"
              >
                Urdu Literary Society
              </li>
              <li
                style={{ marginTop: -20 }}
                className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic"
              >
                English Literary Society
              </li>
              <li
                style={{ marginTop: -19 }}
                className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic"
              >
                Performing Arts Society
              </li>
              <li
                style={{ marginTop: -20 }}
                className="further__details__our__school__main__section__wrapper__paragraph further__details__our__school__main__section__wrapper__policy__academic"
              >
                Studio 55
              </li>
            </div>
          </div>

          <PhotoGallery />
          <div className="notice__board__section">
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
        </div>
      </div>
    </>
  );
}
