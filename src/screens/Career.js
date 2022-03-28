import React from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import InputField from "../component/InputField";
import InputFile from "../component/InputFile";
import InputRadio from "../component/InputRadio";
import InputTextArea from "../component/InputTextArea";
import SelectBox from "../component/SelectBox";

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
        <div
          className="career__section__content"
          style={{ marginBottom: "5em" }}
        >
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
          <div className="input__form__sub__header">
            <div className="input__form__sub__heading">Schooling</div>
            <button className="input__form__sub__header__btn">Add</button>
          </div>

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
            placeholder="Enter year"
            label="Years Attended"
            required={true}
            type="date"
          />
          <div className="input__form__sub__header">
            <div className="input__form__sub__heading">College/University</div>
            <button className="input__form__sub__header__btn">Add</button>
          </div>

          <div className="career__section__content__input__row">
            <InputField
              placeholder="Enter title"
              label="Degree/Diploma attained"
              required={true}
            />
            <InputField
              placeholder="Enter Name"
              label="Name of Institiution"
              required={true}
            />
          </div>
          <InputField
            placeholder="Enter years"
            label="Years Attended"
            required={true}
            type="date"
          />
          <div className="input__form__sub__header">
            <div className="input__form__sub__heading">Experience</div>
            <button className="input__form__sub__header__btn">Add</button>
          </div>
          <div className="career__section__content__input__row">
            <InputField
              placeholder="Enter Name"
              label="Institution"
              required={true}
            />
            <InputField
              placeholder="Enter Address"
              label="Address"
              required={true}
            />
          </div>
          <div className="career__section__content__input__row">
            <InputField
              placeholder="Enter Date"
              label="Date of Employment"
              required={true}
              type="date"
            />
            <InputField
              placeholder="Enter reason"
              label="Reason for Leaving"
              required={true}
            />
          </div>
          <InputField
            placeholder="Enter subjects"
            label="What subject would you like to teach?"
            required={true}
          />
          <SelectBox
            required={true}
            placeholder="Select choice"
            label="At what level would you like to teach?"
          />
          <InputTextArea
            placeholder="Enter Details"
            label="Additional Information:"
            required={true}
          />
          <div
            style={{ width: "30%" }}
            className="career__section__content__input__row"
          >
            <InputFile label="Cover Letter" required={true} />
            <InputFile label="Upload CV" required={true} />
          </div>
          <div className="input__form__btn__wrapper">
            <button className="input__form__btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
