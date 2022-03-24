import React from "react";
import facultyPic from "../assets/facultyPic.png";

export default function FacultyCard({ data }) {
  return (
    <button className="faculty__section__card">
      <div className="faculty__section__card__filler"></div>
      <img
        src={facultyPic}
        alt="facultyPic"
        className="faculty__section__card__img"
      />

      <div className="faculty__section__card__para__wrapper">
        <div className="faculty__section__card__heading">{data.name}</div>
        <div className="faculty__section__card__para">{data.subject}</div>
      </div>
    </button>
  );
}
