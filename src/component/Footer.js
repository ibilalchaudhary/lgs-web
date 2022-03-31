import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer__main__container">
      <div className="footer__main__container__content">
        <div className="footer__main__container__content__entry__wrapper">
          <img
            src={logo}
            alt="logo"
            className="footer__main__container__content__entry__wrapper__img"
          />
          <div className="footer__main__container__content__entry__wrapper__social__wrapper">
            <a
              href="https://www.facebook.com/lgsfsdofficial"
              className="footer__main__container__content__entry__wrapper__social"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.252"
                height="21.999"
                viewBox="0 0 10.252 21.999"
              >
                <g
                  id="facebook-logo_1_"
                  data-name="facebook-logo (1)"
                  transform="translate(-125.619)"
                >
                  <path
                    id="Path_63"
                    data-name="Path 63"
                    d="M132.441,7.208v-1.9a4.176,4.176,0,0,1,.04-.661,1.283,1.283,0,0,1,.18-.461.736.736,0,0,1,.454-.314,3.231,3.231,0,0,1,.835-.087h1.9V0h-3.03a4.932,4.932,0,0,0-3.778,1.248,5.257,5.257,0,0,0-1.148,3.678V7.208h-2.27V11h2.269V22h4.552V11h3.03l.4-3.791Z"
                    transform="translate(0)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/lgsfaisalabad/"
              className="footer__main__container__content__entry__wrapper__social"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/school/lahore-grammar-school/"
              className="footer__main__container__content__entry__wrapper__social"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__main__container__content__entry__wrapper">
          <div className="footer__main__container__content__entry__heading">
            Links
          </div>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Home
          </Link>
          <Link
            to="/admissions"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Admissions
          </Link>
          <Link
            to="/careers"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Campus Life
          </Link>
          <Link
            to="/our-campus"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            LGS Societies
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Guide
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Blog
          </Link>
        </div>
        <div className="footer__main__container__content__entry__wrapper">
          <div className="footer__main__container__content__entry__heading">
            Support
          </div>
          <Link
            to="/faq"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            FAQ
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            How it Works
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Features
          </Link>
          <Link
            to="/contact-us"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Contact
          </Link>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="footer__main__container__content__entry__wrapper__entry"
          >
            Reporting
          </Link>
        </div>
        <div className="footer__main__container__content__entry__wrapper">
          <div className="footer__main__container__content__entry__heading">
            Contact Us
          </div>
          <a
            href=""
            className="footer__main__container__content__entry__wrapper__entry"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.907"
              height="17.907"
              viewBox="0 0 17.907 17.907"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#1a1a1a" />
                  <stop offset="1" stopColor="#373737" />
                </linearGradient>
              </defs>
              <path
                id="Icon_awesome-phone-alt"
                data-name="Icon awesome-phone-alt"
                d="M17.4,12.654l-3.917-1.679a.839.839,0,0,0-.979.241l-1.735,2.12a12.964,12.964,0,0,1-6.2-6.2L6.687,5.4a.837.837,0,0,0,.241-.979L5.25.508A.845.845,0,0,0,4.288.022L.651.861A.839.839,0,0,0,0,1.679,16.227,16.227,0,0,0,16.229,17.908a.839.839,0,0,0,.818-.651l.839-3.637a.85.85,0,0,0-.49-.965Z"
                transform="translate(0 0)"
                fill="url(#linear-gradient)"
              />
            </svg>
            041-241233-34
          </a>
          <a
            href=""
            className="footer__main__container__content__entry__wrapper__entry"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.824"
              height="14.732"
              viewBox="0 0 21.824 14.732"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#1a1a1a" />
                  <stop offset="1" stopColor="#373737" />
                </linearGradient>
              </defs>
              <path
                id="Icon_zocial-email"
                data-name="Icon zocial-email"
                d="M.072,17.495V5.373q0-.021.063-.4l7.134,6.1L.156,17.916a1.784,1.784,0,0,1-.084-.421ZM1.019,4.131a.907.907,0,0,1,.358-.063H20.591a1.192,1.192,0,0,1,.379.063l-7.155,6.124-.947.758-1.873,1.536L9.121,11.013l-.947-.758ZM1.04,18.737l7.176-6.882,2.778,2.252,2.778-2.252,7.176,6.882a1.01,1.01,0,0,1-.358.063H1.377a.953.953,0,0,1-.337-.063Zm13.679-7.66,7.113-6.1a1.256,1.256,0,0,1,.063.4V17.495a1.613,1.613,0,0,1-.063.421Z"
                transform="translate(-0.072 -4.068)"
                fill="url(#linear-gradient)"
              />
            </svg>
            info@lgsfsd.edu.pk
          </a>
          <a
            href=""
            className="footer__main__container__content__entry__wrapper__entry"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.463"
              height="30.77"
              viewBox="0 0 23.463 30.77"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#1a1a1a" />
                  <stop offset="1" stopColor="#373737" />
                </linearGradient>
              </defs>
              <path
                id="Icon_map-city-hall"
                data-name="Icon map-city-hall"
                d="M5.437,14.054H7.671V28.413h3.352V16.105h3.352V28.413h3.351V16.105h3.353V28.413h3.352V14.054h2.233a1.075,1.075,0,0,0,1.118-1.026,1,1,0,0,0-.466-.83l0,0-.017-.01-.029-.017L16.609,6.651V5.034c1.969.905,3.59-.654,6.144.283V1.746c-2.555-.937-4.176.621-6.144-.284V1.233a.56.56,0,0,0-1.116,0V6.651L4.83,12.168l-.029.017-.016.011v0a1,1,0,0,0-.464.83A1.074,1.074,0,0,0,5.437,14.054ZM6.554,29.439,4.32,31.49H27.783l-2.235-2.051Z"
                transform="translate(-4.32 -0.72)"
                fill="url(#linear-gradient)"
              />
            </svg>
            123-Canal Park, East Canal Road, Faisalabad
          </a>
        </div>
      </div>
      <div className="footer__main__container__content__buttom__content">
        <div className="footer__main__container__content__entry__wrapper__entry__copyright">
          Copyright & Design By @DSME GLOBAL
        </div>
        <div className="footer__main__container__content__entry__wrapper__right">
          <div className="footer__main__container__content__entry__wrapper__entry__link">
            Terms of use
          </div>
          <div className="footer__main__container__content__entry__wrapper__entry__link">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}
