import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import InputBox from "../component/InputBox";
import SelectBox from "../component/SelectBox";

export default function Career() {
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
                width="498"
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
              <div
                style={{
                  textAlign: "center",
                }}
                className="our__school__overlay__content__heading"
              >
                Careers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="career__section">
        <div className="career__section__content">
          <div className="career__section__content__input__row">
            <div
              style={{ marginBottom: 20, fontSize: 14 }}
              className="career__section__content__para"
            >
              If you are interested in applying for a job at Lahore Grammar
              School, 55 Main Gulberg, Lahore, please fill in the form below and
              attach your photograph and your resume.
            </div>
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Name" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Email" type="email" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Phone" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="City" type="tel" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Address" type="text" />
          </div>
          <div className="career__section__content__input__row">
            <SelectBox placeholder="Gender" />
          </div>
          <div className="career__section__content__input__row__heading">
            Academic History
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="School Name" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Classes Completed" type="text" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Year Attended" type="text" />
          </div>
          <div className="career__section__content__input__row__heading">
            Experience 1
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Institute" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Address" type="tel" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Date of Emplyment" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Reason for Leaving" type="tel" />
          </div>
          <div className="career__section__content__input__row__heading">
            Academic History
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="School Name" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Classes Completed" type="text" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Year Attended" type="text" />
          </div>
          <div className="career__section__content__input__row__heading">
            Experience 2
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Institute" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Address" type="tel" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Date of Emplyment" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Reason for Leaving" type="tel" />
          </div>
          <div className="career__section__content__input__row__heading">
            Academic History
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="School Name" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Classes Completed" type="text" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Year Attended" type="text" />
          </div>
          <div className="career__section__content__input__row__heading">
            Experience 3
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Institute" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Address" type="tel" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Date of Emplyment" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Reason for Leaving" type="tel" />
          </div>
          <div className="career__section__content__input__row__heading">
            College/University
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="School Name" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Classes Completed" type="text" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Year Attended" type="text" />
          </div>
          <div className="career__section__content__input__row__heading">
            Experience
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Institute" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Address" type="tel" />
          </div>
          <div className="career__section__content__input__row">
            <InputBox placeholder="Date of Emplyment" type="text" />
            <div className="career__section__content__input__row__spacer"></div>
            <InputBox placeholder="Reason for Leaving" type="tel" />
          </div>
          <div className="career__section__content__input__row__heading">
            Further Info
          </div>
          <div className="career__section__content__input__row">
            <InputBox
              placeholder="What subject would you like to teach"
              type="text"
            />
            <div className="career__section__content__input__row__spacer"></div>
            <SelectBox placeholder="At what level would you like to teach" />
          </div>
          <div className="career__section__content__input__row">
            <textarea
              style={{ marginTop: 10 }}
              type="text"
              placeholder="Additional Information"
              rows="5"
              className="contact__us__main__container__overlay__content__form__input__dark"
            />
          </div>
          <div className="career__section__content__input__row__heading">
            Upload Cover Letter
          </div>
          <div
            style={{ marginTop: 20 }}
            className="career__section__content__input__row"
          >
            <input
              type="file"
              src=""
              alt=""
              className="contact__us__main__container__overlay__content__form__input__dark"
            />
          </div>
          <div
            style={{ marginTop: 20 }}
            className="career__section__content__input__row__heading"
          >
            Upload CV
          </div>
          <div className="career__section__content__input__row">
            <input
              type="file"
              src=""
              alt=""
              className="contact__us__main__container__overlay__content__form__input__dark"
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4em",
            }}
          >
            <button className="primary__btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
