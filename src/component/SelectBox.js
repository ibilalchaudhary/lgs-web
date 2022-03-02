import React from "react";

export default function SelectBox({ placeholder }) {
  return (
    <>
      <input
        list="ice-cream-flavors"
        id="ice-cream-choice"
        name="ice-cream-choice"
        placeholder={placeholder}
        className="contact__us__main__container__overlay__content__form__input__dark"
      />

      <datalist id="ice-cream-flavors">
        <option value="Chocolate" />
        <option value="Coconut" />
        <option value="Mint" />
        <option value="Strawberry" />
        <option value="Vanilla" />
      </datalist>
    </>
  );
}
