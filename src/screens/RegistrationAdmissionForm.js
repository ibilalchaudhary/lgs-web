import React from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import campusPic from "../assets/campusPic.png";
import AlumniRegistrationsPic from "../assets/AlumniRegistrationsPic.png";
import ReunionsPic from "../assets/ReunionsPic.png";
import overviewPic from "../assets/overviewPic.png";
import { Link } from "react-router-dom";
import InputField from "../component/InputField";
import CheckBox from "react-checkbox-css";
import { useState } from "react";
import { X } from "react-feather";

function Upload() {
  const [image, setImage] = useState("");
  return (
    <div className="start__up__container__form__input__box__content__upload__wrapper">
      <div className="start__up__container__form__input__box__content__upload">
        <input
          type="file"
          className="start__up__container__form__input__box__content__upload__btn"
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        Choose Image
      </div>
      {image === "" ? null : (
        <div className="start__up__container__form__input__box__content__upload__uploaded">
          <button
            className="start__up__container__form__input__box__content__upload__uploaded__close"
            onClick={() => {
              setImage("");
            }}
          >
            <X size={15} color="currentColor" />
          </button>
          <img
            src={image}
            alt={image}
            className="start__up__container__form__input__box__content__upload__uploaded__img"
          />
        </div>
      )}
    </div>
  );
}

export default function Alumini() {
  const genderOption = [
    {
      label: "Male",
    },
    {
      label: "Female",
    },
  ];
  const [isChecked, setIschecked] = useState(false);
  return (
    <>
      <div className="our__school__container" style={{ height: "300px" }}>
        <img
          src={ourCampusBg}
          alt="ourCampusBg"
          className="home__main__container__img"
        />
        <div className="home__main__container__overlay">
          <div className="our__school__container__overlay__content">
            <div
              className="our__school__overlay__content__heading"
              style={{ marginTop: "5em", textAlign: "center", fontSize: 30 }}
            >
              Registration & Admission Form
            </div>
          </div>
        </div>
      </div>
      <div
        className="career__section__content"
        style={{ marginBottom: "5em", marginTop: "5em" }}
      >
        <div className="career__section__content__input__row">
          <InputField
            label="Child's full name (in capital letters)"
            required={true}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Exact date of birth" required={true} />
          <div className="start__up__container__form__input__box">
            <div className="start__up__container__form__input__box__label">
              Gender
              <div className="start__up__container__form__input__box__label__required">
                *
              </div>
            </div>
            <div
              className="start__up__container__form__input__box__content"
              style={{ marginTop: "1em" }}
            >
              <CheckBox
                value={isChecked === "Male"}
                label="Male"
                labelColor="#242424"
                checkedColor="#005dff"
                unCheckedColor="#f6f6f6"
                iconColor="#ffffff"
                onChange={() => {
                  setIschecked("Male");
                }}
              />
              <div style={{ marginRight: "2em" }}></div>
              <CheckBox
                value={isChecked === "Female"}
                label="Female"
                labelColor="#242424"
                checkedColor="#005dff"
                unCheckedColor="#f6f6f6"
                iconColor="#ffffff"
                onChange={() => {
                  setIschecked("Female");
                }}
              />
            </div>
          </div>
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Place of Birth" required={true} />
          <InputField
            label="Class in which admission is desired"
            required={true}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Father's name and address" required={true} />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Father's profession / occupation"
            required={true}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Tel" required={true} />
          <InputField label="Tel off" />
          <InputField label="Mob" />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Father's CNIC" required={true} />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Mother's name and address" required={true} />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Mother's profession / occupation"
            required={true}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Tel" required={true} />
          <InputField label="Tel off" />
          <InputField label="Mob" />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Mother's CNIC" required={true} />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Guardian's name and address" />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Guardian's profession / occupation" />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Tel" />
          <InputField label="Tel off" />
          <InputField label="Mob" />
        </div>
        <div className="career__section__content__input__row">
          <InputField label="Nationality of parents" required={true} />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Name of previous nursery / school"
            required={true}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Class previously studying in and date of promotion"
            required={true}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Brother/sister studying in any LGS branch"
            required={true}
          />
          <InputField
            label="Class of Brother/sister studying in any LGS branch"
            required={true}
          />
        </div>
        <div className="career__section__content__input__row">
          <div className="start__up__container__form__input__box">
            <div className="start__up__container__form__input__box__label">
              Upload Birth certificate
              <div className="start__up__container__form__input__box__label__required">
                *
              </div>
            </div>
            <div
              className="start__up__container__form__input__box__content"
              style={{ marginTop: ".5em" }}
            >
              <Upload />
            </div>
          </div>
          <div className="start__up__container__form__input__box">
            <div className="start__up__container__form__input__box__label">
              Upload Leaving certificate
              <div className="start__up__container__form__input__box__label__required">
                *
              </div>
            </div>
            <div
              className="start__up__container__form__input__box__content"
              style={{ marginTop: ".5em" }}
            >
              <Upload />
            </div>
          </div>
        </div>
        <div
          className="career__section__content__header"
          style={{
            marginTop: "1em",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            class="section__btn__primary"
            style={{ padding: "1em 3em", marginRight: "0em" }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
