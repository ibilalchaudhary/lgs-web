import React from "react";
import facultyPic from "../assets/facultyPic.png";

export default function FacultyCard() {
  return (
    <button className="faculty__section__card">
      <div className="faculty__section__card__filler"></div>
      <img
        src={facultyPic}
        alt="facultyPic"
        className="faculty__section__card__img"
      />

      <div className="faculty__section__card__para__wrapper">
        <div className="faculty__section__card__heading">
          Ms. Natasha Sohail
        </div>
        <div className="faculty__section__card__para">
          <span>Subject:</span> Psychology
        </div>
        <div className="faculty__section__card__para">
          BS Honours in Applied Psychology, Beaconhouse National University
        </div>
      </div>
    </button>
  );
}