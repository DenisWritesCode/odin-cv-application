import React, { useState } from "react";

import CreateEducationForm from "./CreateEducationForm";

function EducationalInfo() {
  const [formCount, setFormCount] = useState(0);
  const [forms, setForms] = useState([]);

  function handleStudyHere(ID) {
    const label = `#educationEndDateID${ID}`;
    const endDate = document.querySelector(label);
    endDate.classList.toggle("hidden");
  }

  function handleDelete(key) {
    setForms(forms.filter((id) => id !== key));
  }

  function addForm(count) {
    setForms((forms) => forms.concat(count));

    setFormCount((formCount) => formCount + 1);
  }

  return (
    <div className="educationalInfo">
      <h2>Educational Information</h2>
      <hr />
      <div className="forms">
        {forms.map((formID) => {
          return (
            <CreateEducationForm
              key={formID}
              id={formID}
              handleDelete={handleDelete}
              handleStudyHere={handleStudyHere}
            />
          );
        })}
      </div>
      <hr />
      <button
        onClick={() => {
          addForm(formCount);
        }}
      >
        Add Education
      </button>
    </div>
  );
}

export default EducationalInfo;
