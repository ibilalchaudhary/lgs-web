import React from "react";
import ourCampusBg from "../assets/ourCampusBg.jpg";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [branchName, setBranchName] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBrith, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [classInWhichAdmission, setClassInWhichAdmission] = useState("");
  const [fatherNameAddress, setFatherNameAddress] = useState("");
  const [fatherProfession, setFatherProfession] = useState("");
  const [fatherTel, setFatherTel] = useState("");
  const [fatherOff, setFatherOff] = useState("");
  const [fatherMob, setFatherMob] = useState("");
  const [fatherCNIC, setFatherCNIC] = useState("");
  const [motherNameAddress, setMotherNameAddress] = useState("");
  const [motherProfession, setMotherProfession] = useState("");
  const [motherTel, setMotherTel] = useState("");
  const [motherOff, setMotherOff] = useState("");
  const [motherMob, setMotherMob] = useState("");
  const [motherCNIC, setMotherCNIC] = useState("");
  const [guardianNameAddress, setGuardianNameAddress] = useState("");
  const [guardianProfession, setGuardianProfession] = useState("");
  const [guardianTel, setGuardianTel] = useState("");
  const [guardianOff, setGuardianOff] = useState("");
  const [guardianMob, setGuardianMob] = useState("");
  const [guardianCNIC, setGuardianCNIC] = useState("");
  const [nationalityOfParents, setNationalityOfParents] = useState("");
  const [nameOfPreviousSchool, setNameOfPreviousSchool] = useState("");
  const [previousClass, setPreviousClass] = useState("");
  const [siblingInLGS, setSiblingInLGS] = useState("");
  const [siblingInLGSClass, setSiblingInLGSClass] = useState("");

  function handleSubmit() {
    localStorage.setItem(
      "registerdata",
      JSON.stringify([
        {
          branchName: branchName,
          name: name,
          gender: gender,
          dateOfBrith: dateOfBrith,
          placeOfBirth: placeOfBirth,
          classInWhichAdmission: classInWhichAdmission,
          fatherNameAddress: fatherNameAddress,
          fatherProfession: fatherProfession,
          fatherTel: fatherTel,
          fatherOff: fatherOff,
          fatherMob: fatherMob,
          fatherCNIC: fatherCNIC,
          motherNameAddress: motherNameAddress,
          motherProfession: motherProfession,
          motherTel: motherTel,
          motherOff: motherOff,
          motherMob: motherMob,
          motherCNIC: motherCNIC,
          guardianNameAddress: guardianNameAddress,
          guardianProfession: guardianProfession,
          guardianTel: guardianTel,
          guardianOff: guardianOff,
          guardianMob: guardianMob,
          guardianCNIC: guardianCNIC,
          nationalityOfParents: nationalityOfParents,
          nameOfPreviousSchool: nameOfPreviousSchool,
          previousClass: previousClass,
          siblingInLGS: siblingInLGS,
          siblingInLGSClass: siblingInLGSClass,
        },
      ])
    );
    console.log("ok");
    console.log(localStorage.getItem("registerdata"));
    navigate("/forms");
  }

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
      <form
        className="career__section__content"
        style={{ marginBottom: "5em", marginTop: "5em" }}
      >
        <div className="career__section__content__input__row">
          <InputField
            label="Name Of Branch"
            required={true}
            onChange={(e) => {
              setBranchName(e.target.value);
            }}
            listName="nameofbranch"
            list={["Canal Campus", "105 Campus"]}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Child's full name (in capital letters)"
            required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            type="date"
            label="Exact date of birth"
            required={true}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
          />
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
                value={gender === "Male"}
                label="Male"
                labelColor="#242424"
                checkedColor="#005dff"
                unCheckedColor="#f6f6f6"
                iconColor="#ffffff"
                onChange={() => {
                  setGender("Male");
                }}
              />
              <div style={{ marginRight: "2em" }}></div>
              <CheckBox
                value={gender === "Female"}
                label="Female"
                labelColor="#242424"
                checkedColor="#005dff"
                unCheckedColor="#f6f6f6"
                iconColor="#ffffff"
                onChange={() => {
                  setGender("Female");
                }}
              />
            </div>
          </div>
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Place of Birth"
            required={true}
            onChange={(e) => {
              setPlaceOfBirth(e.target.value);
            }}
          />
          <InputField
            label="Class in which admission is desired"
            required={true}
            onChange={(e) => {
              setClassInWhichAdmission(e.target.value);
            }}
            listName="classDesiered"
            list={[
              "Playgroup",
              "Prep",
              "One",
              "Two",
              "Three",
              "Four",
              "Five",
              "Six",
              "Seven",
              "Eighth",
              "Matric",
              "O Level",
              "As",
              "A2",
            ]}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Father's name and address"
            required={true}
            onChange={(e) => {
              setFatherNameAddress(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Father's profession / occupation"
            required={true}
            onChange={(e) => {
              setFatherProfession(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Father's Tel"
            required={true}
            onChange={(e) => {
              setFatherTel(e.target.value);
            }}
          />
          <InputField
            label="Father's Tel off"
            onChange={(e) => {
              setFatherOff(e.target.value);
            }}
          />
          <InputField
            label="Father's Mob"
            onChange={(e) => {
              setFatherMob(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Father's CNIC"
            required={true}
            onChange={(e) => {
              setFatherCNIC(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Mother's name and address"
            required={true}
            onChange={(e) => {
              setMotherNameAddress(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Mother's profession / occupation"
            required={true}
            onChange={(e) => {
              setMotherProfession(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Mother's Tel"
            required={true}
            onChange={(e) => {
              setMotherTel(e.target.value);
            }}
          />
          <InputField
            label="Mother's Tel off"
            onChange={(e) => {
              setMotherOff(e.target.value);
            }}
          />
          <InputField
            label="Mother's Mob"
            onChange={(e) => {
              setMotherMob(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Mother's CNIC"
            required={true}
            onChange={(e) => {
              setMotherCNIC(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Guardian's name and address"
            onChange={(e) => {
              setGuardianNameAddress(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Guardian's profession / occupation"
            onChange={(e) => {
              setGuardianProfession(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Guardian's Tel"
            onChange={(e) => {
              setGuardianTel(e.target.value);
            }}
          />
          <InputField
            label="Guardian's Tel off"
            onChange={(e) => {
              setGuardianOff(e.target.value);
            }}
          />
          <InputField
            label="Guardian's Mob"
            onChange={(e) => {
              setGuardianMob(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Nationality of parents"
            required={true}
            onChange={(e) => {
              setNationalityOfParents(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Name of previous nursery / school"
            required={true}
            onChange={(e) => {
              setNameOfPreviousSchool(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Class previously studying in and date of promotion"
            required={true}
            onChange={(e) => {
              setPreviousClass(e.target.value);
            }}
          />
        </div>
        <div className="career__section__content__input__row">
          <InputField
            label="Brother/sister studying in any LGS branch"
            required={true}
            onChange={(e) => {
              setSiblingInLGS(e.target.value);
            }}
            listName="nameofbranch"
            list={["Canal Campus", "105 Campus"]}
          />
          <InputField
            label="Class of Brother/sister studying in any LGS branch"
            required={true}
            onChange={(e) => {
              setSiblingInLGSClass(e.target.value);
            }}
            listName="classOfSibling"
            list={[
              "Playgroup",
              "Prep",
              "One",
              "Two",
              "Three",
              "Four",
              "Five",
              "Six",
              "Seven",
              "Eighth",
              "Matric",
              "O Level",
              "As",
              "A2",
            ]}
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
            onClick={handleSubmit}
            className="section__btn__primary"
            style={{ padding: "1em 3em", marginRight: "0em" }}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
