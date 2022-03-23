import React, { useState } from "react";

export default function InputRadio({
  label,
  placeholder,
  required,
  description,
  options,
}) {
  const [focus, setFocus] = useState(false);
  return (
    <div className="start__up__container__form__input__box">
      <div
        className="start__up__container__form__input__box__label"
        style={description ? { marginBottom: ".3em" } : null}
      >
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
        {options.map((item) => {
          return (
            <>
              <input
                type="radio"
                onChange={(e) => {
                  e.target.checked && item.label === "Other:"
                    ? setFocus(true)
                    : setFocus(false);
                }}
                name={
                  "start__up__container__form__input__box__radio__label" +
                  placeholder
                }
                id={
                  "start__up__container__form__input__box__radio__label" +
                  item.label
                }
                className="start__up__container__form__input__box__radio__input"
              />
              <label
                htmlFor={
                  "start__up__container__form__input__box__radio__label" +
                  item.label
                }
                className="start__up__container__form__input__box__radio__label"
                // style={
                //   item.label === "Other:"
                //     ? {
                //         display: "flex",
                //         alignItems: "center",
                //         whiteSpace: "nowrap",
                //       }
                //     : null
                // }
              >
                {item.label}
                {item.label === "Other:" ? (
                  <input
                    type="text"
                    disabled={!focus}
                    placeholder={placeholder}
                    className="start__up__container__form__input__box__field"
                    autoFocus
                    style={
                      !focus
                        ? {
                            flex: 1,
                            marginLeft: 20,
                            borderWidth: "1px",
                            opacity: 0.5,
                          }
                        : { flex: 1, marginLeft: 20, borderWidth: 2 }
                    }
                  />
                ) : null}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
