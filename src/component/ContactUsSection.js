import React from "react";
import contactPic from "../assets/contactPic.png";

export default function ContactUsSection() {
  return (
    <div className="contact__us__main__container">
      <img
        src={contactPic}
        alt="contactPic"
        className="contact__us__main__container__img"
      />
      <div className="contact__us__main__container__overlay">
        <div className="contact__us__main__container__overlay__content">
          <form
            action=""
            className="contact__us__main__container__overlay__content__form"
          >
            <div className="contact__us__main__container__overlay__content__form__heading">
              Contact Us!
            </div>
            <div className="contact__us__main__container__overlay__content__form__paragraph">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered alteration.
            </div>
            <input
              type="text"
              placeholder="Name"
              className="contact__us__main__container__overlay__content__form__input"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="contact__us__main__container__overlay__content__form__input"
            />
            <input
              type="text"
              placeholder="Subject Info"
              required
              className="contact__us__main__container__overlay__content__form__input"
            />
            <textarea
              type="text"
              placeholder="Message"
              rows="5"
              className="contact__us__main__container__overlay__content__form__input"
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "flex-end",
                marginTop: "1em",
              }}
            >
              <button className="primary__btn">Submit</button>
            </div>
          </form>
          <div className="contact__us__main__container__overlay__content__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d870143.0614934689!2d73.2308772!3d31.5791484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268e32412f851%3A0xd441d41668a45797!2sLahore%20Grammar%20School!5e0!3m2!1sen!2s!4v1648135880375!5m2!1sen!2s"
              style={{ borderRadius: 30, border: "none" }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="contact__us__main__container__overlay__content__office__hours">
          School Time <span>8 AM - 2 PM</span>
        </div>
        <div className="contact__us__main__container__overlay__content__contact__wrapper">
          <div className="contact__us__main__container__overlay__content__contact__line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.387"
              height="21.387"
              viewBox="0 0 21.387 21.387"
            >
              <path
                id="Icon_awesome-phone-alt"
                data-name="Icon awesome-phone-alt"
                d="M20.777,15.114,16.1,13.108a1,1,0,0,0-1.17.288l-2.072,2.531a15.483,15.483,0,0,1-7.4-7.4L7.987,6.454a1,1,0,0,0,.288-1.17L6.27.606A1.009,1.009,0,0,0,5.121.026l-4.344,1A1,1,0,0,0,0,2.005,19.38,19.38,0,0,0,19.383,21.388a1,1,0,0,0,.977-.777l1-4.344a1.015,1.015,0,0,0-.585-1.153Z"
                transform="translate(0 0)"
                fill="#f7c902"
              />
            </svg>
            <div style={{ marginLeft: ".5em" }}>
              <b>Boys Canal Campus:</b>
              <br />
              Tel: 041-241233-34
            </div>
          </div>
          <div className="contact__us__main__container__overlay__content__contact__line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.387"
              height="21.387"
              viewBox="0 0 21.387 21.387"
            >
              <path
                id="Icon_awesome-phone-alt"
                data-name="Icon awesome-phone-alt"
                d="M20.777,15.114,16.1,13.108a1,1,0,0,0-1.17.288l-2.072,2.531a15.483,15.483,0,0,1-7.4-7.4L7.987,6.454a1,1,0,0,0,.288-1.17L6.27.606A1.009,1.009,0,0,0,5.121.026l-4.344,1A1,1,0,0,0,0,2.005,19.38,19.38,0,0,0,19.383,21.388a1,1,0,0,0,.977-.777l1-4.344a1.015,1.015,0,0,0-.585-1.153Z"
                transform="translate(0 0)"
                fill="#f7c902"
              />
            </svg>
            <div style={{ marginLeft: ".5em" }}>
              <b>Girls Canal Campus:</b>
              <br />
              Tel: 041-2421231-32
            </div>
          </div>
          <div className="contact__us__main__container__overlay__content__contact__line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.387"
              height="21.387"
              viewBox="0 0 21.387 21.387"
            >
              <path
                id="Icon_awesome-phone-alt"
                data-name="Icon awesome-phone-alt"
                d="M20.777,15.114,16.1,13.108a1,1,0,0,0-1.17.288l-2.072,2.531a15.483,15.483,0,0,1-7.4-7.4L7.987,6.454a1,1,0,0,0,.288-1.17L6.27.606A1.009,1.009,0,0,0,5.121.026l-4.344,1A1,1,0,0,0,0,2.005,19.38,19.38,0,0,0,19.383,21.388a1,1,0,0,0,.977-.777l1-4.344a1.015,1.015,0,0,0-.585-1.153Z"
                transform="translate(0 0)"
                fill="#f7c902"
              />
            </svg>
            <div style={{ marginLeft: ".5em" }}>
              <b>105-C,Peoples Colony, Junior Branch:</b>
              <br />
              Tel: 041-8542438, 8714283, 8540935
            </div>
          </div>
          <div className="contact__us__main__container__overlay__content__contact__line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.116"
              height="18.979"
              viewBox="0 0 28.116 18.979"
            >
              <path
                id="Icon_zocial-email"
                data-name="Icon zocial-email"
                d="M.072,21.366V5.749q0-.027.081-.515L9.345,13.1.18,21.908a2.3,2.3,0,0,1-.108-.542ZM1.292,4.149a1.168,1.168,0,0,1,.461-.081H26.507A1.535,1.535,0,0,1,27,4.149l-9.218,7.89-1.22.976-2.413,1.979-2.413-1.979-1.22-.976Zm.027,18.817L10.565,14.1,14.144,17l3.579-2.9,9.246,8.866a1.3,1.3,0,0,1-.461.081H1.753a1.228,1.228,0,0,1-.434-.081ZM18.943,13.1l9.164-7.863a1.618,1.618,0,0,1,.081.515V21.366a2.078,2.078,0,0,1-.081.542Z"
                transform="translate(-0.072 -4.068)"
                fill="#f7c902"
              />
            </svg>
            info@lgsfsd.edu.pk
          </div>
        </div>
      </div>
    </div>
  );
}
