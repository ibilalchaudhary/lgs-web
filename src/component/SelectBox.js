import React from "react";

export default function InputField({
  label,
  placeholder,
  required,
  description,
  type,
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
        <input
          list="ice-cream-flavors"
          id="ice-cream-choice"
          name="ice-cream-choice"
          placeholder={placeholder}
          className="start__up__container__form__input__box__field"
        />

        <datalist id="ice-cream-flavors">
          <option value="Primary Level" />
          <option value="Junior Level" />
          <option value="Middle Level" />
          <option value="O Level" />
          <option value="A Level" />
        </datalist>
      </div>
    </div>
  );
}
