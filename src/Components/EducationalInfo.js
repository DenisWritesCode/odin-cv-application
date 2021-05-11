import React, { useState } from "react";

function EducationalInfo() {
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
        <label htmlFor="startDate">
          Start Date
          <input type="month" name="startDate" id="startDate" required />
        </label>
        <label htmlFor="endDate">
          End Date
          <input type="month" name="endDate" id="endDate" required />
        </label>
      </form>
    </div>
  );
}

export default EducationalInfo;
