import React, { useState } from "react";
import "animate.css";

export default function () {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  return (
    <>
      {isNoticeOpen ? (
        <>
          <button
            onClick={() => {
              setIsNoticeOpen(false);
            }}
            className="notice__board__section__content__card"
          >
            <div className="notice__board__section__content__card__header">
              <div className="notice__board__section__content__card__heading">
                Class Ones 1st Term Newsletetr (24th Aug- 24th December’ 2021)
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-up"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </div>
            <div className="notice__board__section__content__card__paragraph animate__animated  animate__fadeInDown">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              enim eius earum animi exercitationem deleniti amet, quis nam
              ratione ex aspernatur placeat? Excepturi repudiandae adipisci vel
              dolor quas accusantium, optio iusto magnam voluptatibus,
              asperiores beatae. Vitae enim eius earum animi exercitationem
              deleniti amet, quis nam ratione ex aspernatur placeat? Excepturi
              repudiandae adipisci vel dolor quas accusantium, optio iusto
              magnam voluptatibus, asperiores beatae. earum animi exercitationem
              deleniti amet, quis nam ratione ex aspernatur placeat? Excepturi
              repudiandae adipisci vel dolor quas accusantium, optio iusto
              magnam voluptatibus, asperiores beatae.
            </div>
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setIsNoticeOpen(true);
          }}
          className="notice__board__section__content__card"
        >
          <div className="notice__board__section__content__card__header">
            <div className="notice__board__section__content__card__heading">
              Class Ones 1st Term Newsletetr (24th Aug- 24th December’ 2021)
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
