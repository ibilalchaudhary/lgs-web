import React from "react";
import facultyPic from "../assets/facultyPic.png";

export default function FacultyCard({ data }) {
  return (
    <button className="faculty__section__card">
      <div className="faculty__section__card__filler"></div>
      <img
        src={
          data.img !== ""
            ? data.img
            : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2UwZTBlMDt9LmJ7ZmlsbDojYzRjNGM0O30uY3tmaWxsOm5vbmU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5hdmF0YXItMjwvdGl0bGU+PHBhdGggY2xhc3M9ImEiIGQ9Ik02MCwzMEEzMCwzMCwwLDEsMSwzMCwwLDMwLDMwLDAsMCwxLDYwLDMwIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik00MC4zNSwyNy4wOWE5LjgyLDkuODIsMCwxLDEtOS44MS05LjgzLDkuODIsOS44MiwwLDAsMSw5LjgxLDkuODMiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTI5LjE3LDQwLjg1YTkuMjMsOS4yMywwLDAsMCwyLjcxLDAsMTEuOSwxMS45LDAsMCwxLTEuMzQuMDdBMTIuMzIsMTIuMzIsMCwwLDEsMjkuMTcsNDAuODVaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0zOS4yNSwzNy44M2ExMy43NywxMy43NywwLDAsMS03LjM3LDMsOS4yMyw5LjIzLDAsMCwxLTIuNzEsMCwxMy42NiwxMy42NiwwLDAsMS03LjM1LTNBMjEsMjEsMCwwLDAsMTAuMDYsNTIuMzdhMjkuOSwyOS45LDAsMCwwLDQwLjc2LS44QTIxLDIxLDAsMCwwLDM5LjI1LDM3LjgzWiIvPjwvc3ZnPg=="
        }
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
