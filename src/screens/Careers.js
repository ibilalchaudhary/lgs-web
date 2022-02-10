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

export default function Careers() {
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
            <div className="our__school__overlay__content__heading">
              Campus life
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                vitae saepe nostrum officiis, at, praesentium cum deleniti
                deserunt itaque possimus sit voluptatibus ipsum consequuntur
                repellat corporis, esse ut laudantium perspiciatis pariatur vero
                suscipit architecto minima doloribus ipsa. Pariatur voluptate
                voluptates perspiciatis eaque maiores aut ratione dolorem qui
                sapiente cum modi, fugit ducimus, repellendus possimus! Quidem
                nemo laborum totam quos veritatis, molestiae accusamus, fugit
                porro et aperiam eaque nobis animi dignissimos.
              </div>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                vitae saepe nostrum officiis, at, praesentium cum deleniti
                deserunt itaque possimus sit voluptatibus ipsum consequuntur
                repellat corporis, esse ut laudantium perspiciatis pariatur vero
                suscipit architecto minima doloribus ipsa. Pariatur voluptate
                voluptates perspiciatis eaque maiores aut ratione dolorem qui
                sapiente cum modi, fugit ducimus, repellendus possimus! Quidem
                nemo laborum totam quos veritatis, molestiae accusamus, fugit
                porro et aperiam eaque nobis animi dignissimos.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                officiis nihil perspiciatis distinctio, animi eius tempora
                exercitationem sit, nam voluptates, dicta deserunt quidem facere
                repellat corporis et eveniet iste suscipit excepturi delectus
                molestias mollitia. Repudiandae iusto dolorum porro corporis
                reiciendis quos veritatis. Quisquam, corrupti unde optio
                consequuntur ipsam velit. Architecto.
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
