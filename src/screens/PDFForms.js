import React, { useEffect, useState } from "react";
import Pdf from "react-to-pdf";
import AddmissionFormPDF from "../component/AddmissionFormPDF";
import ChallanComponent from "../component/ChallanComponent";
import RegistrationFormPDF from "../component/RegistrationFormPDF";

const options = {
  orientation: "landscape",
  unit: "in",
  format: [14, 14],
};
export default function PDFForms({ setIsPDF }) {
  const refChllanForm = React.createRef();
  const refRegistrationForm = React.createRef();
  const refAddmissionFrom = React.createRef();
  const [registerData, setRegisterData] = useState();
  console.log(registerData);
  useEffect(() => {
    setIsPDF(true);
    // console.log(localStorage.getItem("registerdata"));
    setRegisterData(JSON.parse(localStorage.getItem("registerdata")));

    return () => {
      setIsPDF(false);
    };
  }, []);

  return (
    <>
      <div className="challan__form__wrapper">
        <div className="challan__form__btn__wrapper">
          <Pdf
            targetRef={refChllanForm}
            options={options}
            filename="challan-form.pdf"
          >
            {({ toPdf }) => (
              <button onClick={toPdf} className="section__btn__primary">
                Challan Form PDF
              </button>
            )}
          </Pdf>
          <Pdf
            targetRef={refRegistrationForm}
            options={options}
            filename="challan-form.pdf"
          >
            {({ toPdf }) => (
              <button onClick={toPdf} className="section__btn__primary">
                Registration Form PDF
              </button>
            )}
          </Pdf>
          <Pdf
            targetRef={refAddmissionFrom}
            options={options}
            filename="challan-form.pdf"
          >
            {({ toPdf }) => (
              <button onClick={toPdf} className="section__btn__primary">
                Addmission Form PDF
              </button>
            )}
          </Pdf>
        </div>
        <div className="challan__container" ref={refRegistrationForm}>
          <RegistrationFormPDF data={registerData} />
        </div>
        <div className="challan__container" ref={refAddmissionFrom}>
          <AddmissionFormPDF data={registerData} />
        </div>
        <div className="challan__container" ref={refChllanForm}>
          <ChallanComponent type="Bank Copy" />
          <ChallanComponent type="School Copy" />
          <ChallanComponent type="Student Copy" />
        </div>
      </div>
    </>
  );
}
