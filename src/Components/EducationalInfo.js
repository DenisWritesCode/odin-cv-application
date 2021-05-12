import React, { useState } from "react";

function EducationalInfo() {
  const [educationNumber, setEducationNumber] = useState(0);
  const [education, setEducation] = useState([]);

  // Fix this
  const educationInfo = document.querySelector(".educationalInfo");

  function handleStudyHere(e) {
    const study = document.querySelector("#studyHere");
    const end = document.querySelector(".educationEndDateClass");

    if (study.checked) {
      end.classList.add("hidden");
      console.log("Added class");
    } else {
      end.classList.remove("hidden");
      console.log("Removed class");
    }
  }

  function handleAddEducation(educationNumber) {
    createForm(educationNumber);
    setEducationNumber((prevNumber) => {
      return prevNumber + 1;
    });
  }

  function createForm(formNumber) {
    const parentDiv = document.querySelector(".educationalInfo");
    const form = document.createElement("FORM");
    form.setAttribute("id", `education${formNumber}`);

    form.innerHTML = `
        <label htmlFor="school">
          School Name
          <input type="text" name="school" id="school" required />
        </label>
        <label htmlFor="study">
          Study
          <input type="text" name="study" id="study" required />
        </label>
        <label htmlFor="educationStartDate">
          Start Date
          <input
            type="month"
            name="educationStartDate"
            id="educationStartDate"
            required
          />
        </label>

        <label htmlFor="studyHere">
          I currently Study Here
          <input
            type="checkbox"
            name="studyHere"
            id="studyHere"
            onClick={handleStudyHere}
          />
        </label>

        <label htmlFor="educationEndDate" className="educationEndDateClass">
          End Date
          <input
            type="month"
            name="educationEndDate"
            id="educationEndDate"
            className="educationEndDateClass"
            required
          />
        </label>
`;

    setEducation((prevEducation) => {
      return prevEducation.concat(form);
    });
  }

  return (
    <div className="educationalInfo">
      <h2>Educational Information</h2>
      {education.forEach((form, index) => {
        educationInfo.appendChild(form);
        return 0;
      })}
      <hr />
      <button onClick={() => handleAddEducation(educationNumber)}>
        Add Education
      </button>
    </div>
  );
}

export default EducationalInfo;
