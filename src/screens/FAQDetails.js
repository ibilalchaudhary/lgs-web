import React from "react";
import { Link } from "react-router-dom";
import ourCampusBg from "../assets/ourCampusBg.png";

export default function FaqDetails() {
  return (
    <>
      <div className="faq__container">
        <img
          src={ourCampusBg}
          alt="ourCampusBg"
          className="home__main__container__img"
        />
        <div className="faq__container__overlay">
          <div className="faq__container__content">
            <div className="faq__container__content__left">
              <Link to="/faq" className="faq__container__content__left__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Back
              </Link>
              <div className="faq__container__content__sub__heading">
                What does LGS do?
              </div>
              <div className="faq__container__content__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                dolores voluptas! Magnam excepturi quam in aut odit dolorum,
                eveniet dicta. Et corrupti soluta ducimus inventore itaque
                harum! Quibusdam, ab perspiciatis.
              </div>

              <div className="faq__container__content__sub__heading">
                Who are the founders of LGS?
              </div>
              <div className="faq__container__content__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                exercitationem error, natus ipsam vitae, nam quos reprehenderit
                labore ducimus ab incidunt libero laboriosam assumenda
                recusandae. Expedita deleniti ullam eveniet deserunt, odit modi
                itaque unde architecto nobis temporibus doloremque magnam,
                placeat minus perspiciatis consequatur libero earum dolorem sunt
                quia nesciunt aliquam. Qui praesentium illum quis odio tenetur.
                Amet, eos corporis eius suscipit laboriosam fuga pariatur sit
                illo voluptate quae. Iusto reprehenderit molestiae dolores
                voluptatem natus odio ducimus autem iste perferendis optio
                cupiditate laboriosam, earum mollitia minima ratione tempore
                officia quidem dolorum expedita accusantium sint, fugit dolor
                nam? Magni quam corrupti adipisci.
                <img
                  src="https://cdn.shrm.org/image/upload/c_crop%2ch_682%2cw_1213%2cx_0%2cy_38/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Organizational%20and%20Employee%20Development/organize_af0qp3?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjM4LCJ4MiI6MTIxMywieTIiOjcxOSwidyI6MTIxMywiaCI6NjgyfX0%3d"
                  alt="img"
                  className="faq__container__content__img"
                />
              </div>

              <div className="faq__container__content__sub__heading">
                Who are the founders of LGS?
              </div>
              <div className="faq__container__content__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                exercitationem error, natus ipsam vitae, nam quos reprehenderit
                labore ducimus ab incidunt libero laboriosam assumenda
                recusandae. Expedita deleniti ullam eveniet deserunt, odit modi
                itaque unde architecto nobis temporibus doloremque magnam,
                placeat minus perspiciatis consequatur libero earum dolorem sunt
                quia nesciunt aliquam. Qui praesentium illum quis odio tenetur.
                Amet, eos corporis eius suscipit laboriosam fuga pariatur sit
                illo voluptate quae. Iusto reprehenderit molestiae dolores
                voluptatem natus odio ducimus autem iste perferendis optio
                cupiditate laboriosam, earum mollitia minima ratione tempore
                officia quidem dolorum expedita accusantium sint, fugit dolor
                nam? Magni quam corrupti adipisci.
              </div>
              <img
                src="https://cdn.shrm.org/image/upload/c_crop%2ch_682%2cw_1213%2cx_0%2cy_38/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Organizational%20and%20Employee%20Development/organize_af0qp3?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjM4LCJ4MiI6MTIxMywieTIiOjcxOSwidyI6MTIxMywiaCI6NjgyfX0%3d"
                alt="img"
                className="faq__container__content__img"
              />
              <div className="faq__container__content__sub__heading">
                Who are the founders of LGS?
              </div>
              <div className="faq__container__content__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                exercitationem error, natus ipsam vitae, nam quos reprehenderit
                labore ducimus ab incidunt libero laboriosam assumenda
                recusandae. Expedita deleniti ullam eveniet deserunt, odit modi
                itaque unde architecto nobis temporibus doloremque magnam,
                placeat minus perspiciatis consequatur libero earum dolorem sunt
                quia nesciunt aliquam. Qui praesentium illum quis odio tenetur.
                Amet, eos corporis eius suscipit laboriosam fuga pariatur sit
                illo voluptate quae. Iusto reprehenderit molestiae dolores
                voluptatem natus odio ducimus autem iste perferendis optio
                cupiditate laboriosam, earum mollitia minima ratione tempore
                officia quidem dolorum expedita accusantium sint, fugit dolor
                nam? Magni quam corrupti adipisci.
              </div>
            </div>
            <div className="faq__container__content__right">
              <div className="faq__container__content__right__content__heading">
                Other questions?
              </div>
              <div className="faq__container__content__right__content__text">
                Simply fill in the contact form. We’ll get back to you asap.
              </div>
              <Link
                to="/contact"
                className="primary__btn__faq"
                style={{
                  width: "100%",
                  height: 45,
                  fontSize: 15,
                  margin: "0px auto",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
