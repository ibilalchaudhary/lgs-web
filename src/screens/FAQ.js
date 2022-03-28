import React from "react";
import { Link } from "react-router-dom";
import ourCampusBg from "../assets/ourCampusBg.jpg";

function FAQQuestions({ data }) {
  return (
    <>
      <Link
        to="/faq-details"
        className="faq__container__content__questions__container__left__para"
      >
        <svg
          style={{ marginRight: ".5em" }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-file-text"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        {data.question}
      </Link>
    </>
  );
}
export default function FAQ() {
  const FAQs = [
    {
      question: "How to get started with LGS",
    },
    {
      question: "How to register with LGS",
    },
    {
      question: "How to communicate with candidates",
    },
    {
      question: "How to get screening or recruitment assistance?",
    },
    {
      question: "Why LGS",
    },
    {
      question: "How to communicate with candidates",
    },
    {
      question: "Why LGS",
    },
    {
      question: "Fees",
    },
    {
      question: "How to communicate with candidates",
    },
    {
      question: "How to communicate with candidates",
    },
    {
      question: "How to communicate with candidates",
    },
    {
      question: "How to communicate with candidates",
    },
    {
      question: "How to communicate with candidates",
    },
  ];
  return (
    <>
      <div className="faq__container">
        <img
          src={ourCampusBg}
          alt="ourCampusBg"
          className="faq__container__img"
        />
        <div className="faq__container__overlay">
          <div className="faq__container__content">
            <div className="faq__container__content__left">
              <div className="faq__container__content__heading">
                Frequently Asked Questions
              </div>
              <>
                <div className="faq__container__content__questions__container">
                  <div className="faq__container__content__questions__container__card">
                    {FAQs.map((item) => (
                      <FAQQuestions data={item} />
                    ))}
                  </div>
                </div>
              </>
            </div>
            <div className="faq__container__content__right">
              <div className="faq__container__content__right__content__heading">
                Other questions?
              </div>
              <div className="faq__container__content__right__content__text">
                Simply fill in the contact form. We’ll get back to you asap.
              </div>
              <Link to="/contact-us" className="primary__btn__faq">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
