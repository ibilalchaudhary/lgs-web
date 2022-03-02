import React from "react";

export default function InputBox({ placeholder, type, onClick }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onClick={onClick}
      className="contact__us__main__container__overlay__content__form__input__dark"
    />
  );
}
