import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import campusPic from "../assets/campusPic.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import ReunionsPic from "../assets/ReunionsPic.png";
import overviewPic from "../assets/overviewPic.png";
import InterectivePic from "../assets/InterectivePic.png";

function CampusLifeCard({ title }) {
  return (
    <div className="campus__life__main__container__content__card">
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
    </div>
  );
}

export default function Alumini() {
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
                style={{ width: 230 }}
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
                Alumini
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers__content__section">
        <div className="careers__content__section__cards__wrapper">
          <div className="careers__content__section__card__public__speaking">
            <div className="careers__content__section__card__public__speaking__left">
              <div className="careers__content__section__card__public__speaking__left__heading">
                Overview
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                It has been almost forty years since LGS FSD opened its doors to
                a handful of students. Today, our Alums make Worldwide as they
                cover the globe in their active involvement in a diverse range
                of fields. Stay connected to your home at LGS through Annual
                Reunions, The Alumane Page, the Mashal, and social media, and
                contribute to networking opportunities as they arise. Come
                visit! Arrange a meeting with the Alumni Relations Society,
                mentor a current student, or simply drop in for a cup of coffee
                with Mrs. Shah to share your experiences of the real world! We
                would be absolutely delighted to see you and discover what you
                have been up to! Remember to show your Pride and always stay a
                Grammarian at heart.
              </div>
            </div>
            <img
              src={overviewPic}
              alt="overviewPic"
              className="careers__content__section__card__public__speaking__img"
            />
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
                ALUMNI RELATIONS SOCIETY
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                LGS FSD has produced a generation of ambitious and independent
                young women who have sought for success and accomplished their
                goals.
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                The Alumni Relations Society at LGS FSD enables us to keep in
                touch with our graduate students and ensures that every
                Grammarian legacy lives on. We take great pride in our alums and
                wish to keep them tied in this familial bond that every 55
                Mainer shares.
              </div>
            </div>
          </div>
          <div className="careers__content__section__card__community__service">
            <img
              src={ReunionsPic}
              alt="ReunionsPic"
              className="careers__content__section__card__community__service__img"
            />
            <div className="careers__content__section__card__community__service__right">
              <div className="careers__content__section__card__community__service__right__heading">
                THE REUNION
              </div>
              <div className="careers__content__section__card__community__service__right__paragraph">
                At LGS FSD, we celebrate Reunions in full bloom! Graduates from
                all over the country and around the world join us. Together we
                pay tribute to the institution we call home. Expectations are
                high, but so are our efforts in making our Reunions a success.
                The Alumni Relations Society and the Media Society join forces
                to form a special decorations committee who manage a fantastic
                job; handmade lamps and banners, LGS graffiti stickers, picture
                imprinted mugs, and a fabulous entrance and stage, all made
                possible with the tireless efforts of the Student Council. We
                also release iconic hoodies with the School’s Head
                Administrators serving as brand ambassadors! Each year we hope
                that our audience is reminded of all the wonderful memories a
                they made during their time at school. Whether that is during
                the teachers parodies or dance performances, the mood of the
                night is nostalgic. The Annual Reunion is a great reminder of
                some of the principles we learn at LGS: teamwork, respect for
                one another, and the collective celebration of our common love
                for the school. It reinforces that here at LGS, those that are
                gone are never forgotten!
              </div>
            </div>
          </div>
          <div className="careers__content__section__card__international__explore">
            <img
              src={AlumniRegistrationsPic}
              alt="AlumniRegistrationsPic"
              className="careers__content__section__card__international__explore__img"
            />
            <div className="careers__content__section__card__international__explore__overlay__new">
              <div
                style={{
                  color: "#000",
                  fontSize: 36,
                  display: "flex",
                  flexDirection: "column",
                }}
                className="careers__content__section__card__public__speaking__left__heading"
              >
                <span style={{ fontSize: 20 }}>THEME DINNER</span>
                COMING SOON
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="careers__content__section__campus__life">
        <div className="careers__content__section__campus__life__content">
          <CampusLifeCard title="Alumni Dinner '22" />
          <CampusLifeCard title="Alumni Dinner'21" />
          <CampusLifeCard title="Reunion'19" />
          <CampusLifeCard title="Reunion'18" />
        </div>
      </div>
    </>
  );
}
