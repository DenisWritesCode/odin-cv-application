import React, { useState } from "react";

function WorkInfo() {
  const [workCount, setWorkCount] = useState(0);

  function handleWorkHere(id) {
    const study = document.querySelector(`input#workHere${id}`);
    const end = document.querySelector(`.jobEndDateClass${id}`);

    if (study.checked) {
      end.classList.add("hidden");
      console.log("Added class");
    } else {
      end.classList.remove("hidden");
      console.log("Removed class");
    }
  }

  function handleDelete(id) {
    const workInfo = document.querySelector(".workInfo");
    const form = document.querySelector(`#form${id}`);

    workInfo.removeChild(form);
  }

  function createForm(formNumber) {
    setWorkCount((prevCount) => {
      return prevCount + 1;
    });

    const form = document.createElement("FORM");
    //<form id={`workForm${formNumber}`}>
    form.setAttribute("id", `form${formNumber}`);
    form.innerHTML = `

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
        id='workHere${formNumber}'
        />
    </label>
    <label htmlFor="jobEndDate" class="jobEndDateClass${formNumber}">
      End Date
      <input
        type="month"
        name="jobEndDate"
        id="jobEndDate"
        class="jobEndDateClass${formNumber}"
        required
      />
    </label>
<button id='delete${formNumber}'>Delete</button>
      `;

    const workInfo = document.querySelector(".workInfo");
    workInfo.appendChild(form);

    const check = document.querySelector(`input#workHere${formNumber}`);
    check.onclick = function () {
      handleWorkHere(formNumber);
    };

    const deleteButton = document.querySelector(`#delete${formNumber}`);
    deleteButton.onclick = function () {
      handleDelete(formNumber);
    };
  }

  return (
    <div className="workInfo">
      <h2>Work Information</h2>
      <button
        onClick={() => {
          createForm(workCount);
        }}
      >
        Add Work Experience
      </button>
    </div>
  );
}

export default WorkInfo;
