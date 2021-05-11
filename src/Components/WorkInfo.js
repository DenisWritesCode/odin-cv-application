import React, { useState } from "react";

function WorkInfo() {
  function handleWorkHere(e) {
    console.log(e.target);
  }

  return (
    <div className="workInfo">
      <form id="workForm">
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
            onClick={handleWorkHere}
          />
        </label>
        <label htmlFor="jobEndDate">
          End Date
          <input type="month" name="jobEndDate" id="jobEndDate" required />
        </label>
      </form>
    </div>
  );
}

export default WorkInfo;
