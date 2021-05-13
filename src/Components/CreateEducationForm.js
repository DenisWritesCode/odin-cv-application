import React from "react";

function CreateEducationForm({ id, handleDelete, handleStudyHere }) {
  const formID = id;
  console.log(formID);
  return (
    <div key={formID} className="education">
      <form>
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
            onClick={() => {
              handleStudyHere(formID);
            }}
          />
        </label>

        <label
          htmlFor="educationEndDate"
          className="educationEndDateClass"
          id={`educationEndDateID${formID}`}
        >
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
      <button
        onClick={() => {
          handleDelete(formID);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CreateEducationForm;
