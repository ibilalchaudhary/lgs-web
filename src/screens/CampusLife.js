import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import campusPic from "../assets/campusPic.png";
import publicSpeakingPic from "../assets/publicSpeakingPic.png";
import internetExplorePic from "../assets/internetExplorePic.png";
import communitySevicePic from "../assets/communitySevicePic.png";

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

export default function CampusLife() {
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
              </svg>
              <div className="our__school__overlay__content__heading">
                Campus life
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
                Public Speaking
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                In the Model United Nations Society at LGS FSD, we aim to
                educate our students about current events, conflicts in
                international relations, and the structure and agenda of the
                United Nations. Students are provided an opportunity to step
                into the shoes of various ambassadors and empathise with their
                given country’s stance. Popular topics include peace and
                security, human rights, the environment, economic development
                and globalization. We take immense pride in our MUNers who have
                won Best Delegate and Outstanding Speaker Awards at both
                national and international conferences in India and Germany. To
                get in touch with the MUN Representatives at mun@lgsfsd.edu.pk
              </div>
              <li
                style={{ marginTop: 20 }}
                className="careers__content__section__card__public__speaking__left__paragraph"
              >
                MUN Society
              </li>
              <li className="careers__content__section__card__public__speaking__left__paragraph">
                English Debate Society
              </li>
              <li className="careers__content__section__card__public__speaking__left__paragraph">
                Urdu Debate Society
              </li>
              <li className="careers__content__section__card__public__speaking__left__paragraph">
                Law Society
              </li>
              <li className="careers__content__section__card__public__speaking__left__paragraph">
                Business and Economic Society
              </li>
            </div>
            <img
              src={publicSpeakingPic}
              alt="publicSpeakingPic"
              className="careers__content__section__card__public__speaking__img"
            />
          </div>
          <div className="careers__content__section__card__international__explore">
            <img
              src={internetExplorePic}
              alt="internetExplorePic"
              className="careers__content__section__card__international__explore__img"
            />
            <div className="careers__content__section__card__international__explore__overlay">
              <div className="careers__content__section__card__public__speaking__left__heading">
                Internet Explore
              </div>
              <div className="careers__content__section__card__public__speaking__left__paragraph">
                At LGS FSD, we believe in learning through a rich diversity of
                experiences beyond the classroom. With ever increasing
                technological advances and economic and social interdependence,
                the world has transformed into a global village. Providing
                exposure plays an integral part in fulfilling our aim of
                developing and nurturing global citizens. Whether a Model UN
                conference, NASA’s Space Competition, camp at the Seeds of Peace
                headquarters, a cultural exchange, or simply a recreational
                trip, we facilitate and provide endless adventures and
                opportunities for our students to travel and gain international
                exposure. Hover over the red dots to learn more about our
                experiences!
              </div>
            </div>
          </div>
          <div className="careers__content__section__card__community__service">
            <img
              src={communitySevicePic}
              alt="communitySevicePic"
              className="careers__content__section__card__community__service__img"
            />
            <div className="careers__content__section__card__community__service__right">
              <div className="careers__content__section__card__community__service__right__heading">
                Community Services
              </div>
              <div className="careers__content__section__card__community__service__right__paragraph">
                The Community Service and Environment Society aims to mobilize
                the student body of LGS FSD so they can become responsible and
                empathetic individuals. We collaborate with multiple NGOs
                throughout the year to engage our students with the community
                outside school. Some notable collaborations include visits to
                Heavens Old Home and the Todd’s Welfare animal shelter. We also
                invite organizations such as Project Pehchaan and Gender
                Guardian to hold seminars discussing the marginalization of the
                transgender community. Over the last two years, through bake
                sales and selling merchandise/tickets, members of the society
                were successfully able to raise more than Rs.434,400 (Rs.132,000
                of the total amount was for Pink Ribbon). The society also
                hosted its own 55’s Carnival, a fundraising event which provided
                an opportunity for 55 Main’s students to enjoy a fun day of
                festivities whilst contributing to charity. A total of Rs.
                280,988 was collected which is used to fund activities of the
                society. One such activity is the weekly fruit drives at Doors
                of Awareness School to remind their students of the importance
                of a healthy diet. Our students also plan engaging arts and
                crafts activities for each fruit drive. Since we believe charity
                begins at home, we also enthusiastically run the 50 Rupee
                Campaign to generate funds each month for our janitorial and
                custodial staff to support and assist them with tuition fees,
                books and uniforms for their children.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers__content__section__campus__life">
        <div className="careers__content__section__campus__life__content">
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
          <CampusLifeCard />
        </div>
      </div>
    </>
  );
}
