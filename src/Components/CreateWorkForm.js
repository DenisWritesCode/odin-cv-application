import React, { useState } from "react";

function CreateWorkForm({ formID, handleDeleteWork, handleWorkHere }) {
  return (
    <div className="Work">
      <form>
        <label htmlFor="companyName">
          Company
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Company Name"
            required
          />
        </label>
        <label htmlFor="positionTitle">
          Position Title
          <input
            type="text"
            name="positionTitle"
            id="positionTitl"
            placeholder="Job Title"
            required
          />
        </label>
        <label htmlFor="tasks">
          Main Tasks
          <input
            type="text"
            name="tasks"
            id="tasks"
            placeholder="Main Tasks"
            required
          />
        </label>
        <label htmlFor="jobStartDate">
          Start Date
          <input type="month" name="jobStartDate" id="jobStartDate" required />
        </label>

        <label htmlFor="workHere">
          I currently Work Here
          <input
            type="checkbox"
            name="workHere"
            id="workHere"
            onClick={() => {
              handleWorkHere(formID);
            }}
          />
        </label>
        <label
          htmlFor="jobEndDate"
          className="jobEndDateClass"
          id={`jobEndDateID${formID}`}
        >
          End Date
          <input type="month" name="jobEndDate" id="jobEndDate" required />
        </label>
      </form>
      <button
        onClick={() => {
          handleDeleteWork(formID);
        }}
      >
        Delete Work
      </button>
      <hr />
    </div>
  );
}

export default CreateWorkForm;
