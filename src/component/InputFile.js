import React, { useState } from "react";

export default function InputFile({
  label,
  placeholder,
  required,
  description,
  options,
  style,
}) {
  const [image, setImage] = useState("");
  return (
    <div style={style} className="start__up__container__form__input__box">
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
        <div className="start__up__container__form__input__box__file__btn">
          <input
            type="file"
            name="start__up__container__form__input__box__file"
            id=""
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
            }}
            className="start__up__container__form__input__box__file"
          />
          <div className="start__up__container__form__input__box__file__btn__content">
            {image === "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            ) : (
              <>
                <button
                  style={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    borderRadius: 50,
                    width: 30,
                    height: 30,
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setImage("");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0a264e"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <img
                  src={image}
                  alt="img"
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
