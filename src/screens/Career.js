import React from "react";
import ourCampusBg from "../assets/ourCampusBg.png";
import InputBox from "../component/InputBox";
import InputField from "../component/InputField";
import InputFile from "../component/InputFile";
import InputRadio from "../component/InputRadio";

const genderOption = [
  {
    label: "Male",
  },
  {
    label: "Female",
  },
];

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
          <div className="career__section__content__header">
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
            <InputField placeholder="Enter Name" label="Name" required={true} />
            <InputField
              placeholder="Enter Email"
              label="Email"
              type="email"
              required={true}
            />
          </div>

          <div className="career__section__content__input__row">
            <InputField
              placeholder="Enter Phone"
              label="Phone"
              type="tel"
              required={true}
            />
            <InputField placeholder="Enter City" label="City" required={true} />
          </div>
          <InputField
            placeholder="Enter Address"
            label="Address"
            required={true}
          />
          <InputRadio
            options={genderOption}
            placeholder="Gender"
            label="Gender"
            required={true}
          />
          <InputFile label="Upload Picture" required={true} />

          <div className="input__form__headings">Academic History</div>
          <div className="input__form__sub__heading">Schooling</div>
          <div className="career__section__content__input__row">
            <InputField
              placeholder="Enter Name"
              label="Name of School"
              required={true}
            />
            <InputField
              placeholder="Enter Classes"
              label="Attended Classes"
              required={true}
            />
          </div>
          <InputField
            placeholder="Enter Classes"
            label="Years Attended"
            required={true}
            type="date"
          />
        </div>
      </div>
    </>
  );
}
