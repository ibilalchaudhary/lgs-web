import React from "react";
import Pdf from "react-to-pdf";
import ChallanComponent from "../component/ChallanComponent";

const options = {
  orientation: "landscape",
  unit: "in",
  format: [14, 12],
};
export default function ChallanForm() {
  const ref = React.createRef();
  return (
    <>
      <Pdf targetRef={ref} options={options} filename="challan-form.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div className="challan__container" ref={ref}>
        <ChallanComponent type="Bank Copy" />
        <ChallanComponent type="School Copy" />
        <ChallanComponent type="Student Copy" />
      </div>
    </>
  );
}
