import React, { useState } from "react";

function EducationalInfo() {
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

  return (
    <div className="educationalInfo">
      <h2>Educational Information</h2>
      <form id="educationForm">
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
      </form>
    </div>
  );
}

export default EducationalInfo;
