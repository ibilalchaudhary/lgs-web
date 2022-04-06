import React from "react";

export default function InputField({
  label,
  placeholder,
  required,
  description,
  type,
  onChange,
  list,
  listName,
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
          type={type ? type : "text"}
          required={required}
          onChange={onChange}
          placeholder={placeholder ? placeholder : "Enter " + label}
          className="start__up__container__form__input__box__field"
          list={listName + "s"}
          name={listName}
          id={listName}
        />
        <datalist id={listName + "s"}>
          {list && list.map((item) => <option value={item} />)}
        </datalist>
      </div>
    </div>
  );
}
