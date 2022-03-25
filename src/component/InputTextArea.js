import React from "react";

export default function InputTextArea({
  label,
  placeholder,
  required,
  description,
}) {
  return (
    <div className="start__up__container__form__input__box">
      <div className="start__up__container__form__input__box__label">
        {label}{" "}
        <div className="start__up__container__form__input__box__label__required">
          {required ? "*" : null}
        </div>
      </div>
      {description ? (
        <div className="start__up__container__form__input__box__label__explain">
          {description}
        </div>
      ) : null}
      <div className="start__up__container__form__input__box__content">
        <textarea
          name=""
          id=""
          rows="10"
          placeholder={placeholder}
          className="start__up__container__form__input__box__text__area"
        ></textarea>
      </div>
    </div>
  );
}
