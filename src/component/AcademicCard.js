import React from "react";

export default function AcademicCard({ month, date, voca }) {
  return (
    <div className="academic__main__container__content__entry__card">
      <div className="academic__main__container__content__entry__card__para">
        {month}
      </div>
      <div className="academic__main__container__content__entry__card__heading">
        {date}
      </div>
      <div
        style={{ color: "#FACD09" }}
        className="academic__main__container__content__entry__card__para"
      >
        {voca}
      </div>
    </div>
  );
}
