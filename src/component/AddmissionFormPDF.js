import React from "react";
import logo from "../assets/logo.svg";

export default function AddmissionFormPDF() {
  return (
    <div className="registration__form">
      <div className="registration__form__header">
        <img
          src={logo}
          alt="logo"
          className="registration__form__header__img"
        />
        <div className="registration__form__header__content">
          <div className="registration__form__header__content__heading">
            LAHORE GRAMMAR SCHOOL
          </div>
          <div className="registration__form__header__content__sub__heading">
            ADDMISSION FORM
          </div>
        </div>
      </div>
      <div className="registration__form__name">
        Name of Branch:
        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
      </div>
      <table className="registration__form__table">
        <div className="registration__form__table__entry">
          Child’s full name (in capital letters):
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Gender:
          <span>Male</span>
        </div>
        <div className="registration__form__table__entry">
          Exact date of birth:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Place of birth:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Class in which admission is desired:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Father’s name and address:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Father’s Profession / Occupation:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Tel:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
          <div className="registration__form__table__entry__secondary">
            <div className="registration__form__table__entry__secondary__entry">
              Off:
              <span>+92344 3928200</span>
            </div>
            <div className="registration__form__table__entry__secondary__entry">
              Mob:
              <span>+92344 3928200</span>
            </div>
          </div>
        </div>
        <div className="registration__form__table__entry">
          Father’s CNIC:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Mother’s name and address:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Mother’s Profession / Occupation:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Tel(Res):
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
          <div className="registration__form__table__entry__secondary">
            <div className="registration__form__table__entry__secondary__entry">
              Off:
              <span>+92344 3928200</span>
            </div>
            <div className="registration__form__table__entry__secondary__entry">
              Mob:
              <span>+92344 3928200</span>
            </div>
          </div>
        </div>
        <div className="registration__form__table__entry">
          Mother’s CNIC:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Guardian’s name and address:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Guardian’s Profession / Occupation:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Tel(Res):
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
          <div className="registration__form__table__entry__secondary">
            <div className="registration__form__table__entry__secondary__entry">
              Off:
              <span>+92344 3928200</span>
            </div>
            <div className="registration__form__table__entry__secondary__entry">
              Mob:
              <span>+92344 3928200</span>
            </div>
          </div>
        </div>
        <div className="registration__form__table__entry">
          Nationality of parents:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Name of previous Nursery / School:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Class previously studying in and date of promotion:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </div>
        <div className="registration__form__table__entry">
          Brother / Sister studying in any LGS branch:
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
          <div className="registration__form__table__entry__secondary">
            <div className="registration__form__table__entry__secondary__entry">
              Class:
              <span>Lorem ipsum dolor sit amet</span>
            </div>
          </div>
        </div>
        <div className="registration__form__table__entry">
          Birth certificate / Leaving certificate has been attached:
          <span>Yes</span>
        </div>
      </table>
      <div className="registration__form__undertaking">
        <div className="registration__form__undertaking__heading">
          UNDERTAKING
        </div>
        <div className="registration__form__undertaking__para">
          I shall abide by the Rules and Regulation of the School in force and
          undertake to play the fee for the entire year including the quarter
          July- September
        </div>
      </div>
      <div className="registration__form__middle__content">
        <div className="registration__form__date__table">
          <div className="registration__form__table__entry">
            Date:
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </div>
        <div className="registration__form__signature__table">
          <div className="registration__form__signature__table__content">
            Signature of Prents / Guardian
          </div>
        </div>
      </div>
    </div>
  );
}
