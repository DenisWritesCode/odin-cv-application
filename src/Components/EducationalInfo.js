import React, { useState } from "react";

function EducationalInfo() {
  const [formCount, setFormCount] = useState(0);
  const [forms, setForms] = useState([]);
  const formDiv = document.querySelector(".forms");

  function handleDelete(key) {
    setForms(forms.filter((id) => id !== key));
  }

  function addForm(count) {
    // const form = document.createElement("FORM");
    // form.setAttribute("id", `form${count}`);
    // const schoolName = document.createElement("INPUT");
    // schoolName.value = `School ${count}`;

    // const deleteBtn = document.createElement("BUTTON");
    // deleteBtn.innerText = "Delete";
    // deleteBtn.type = "button";
    // deleteBtn.onclick = function () {
    //   handleDelete(form.id);
    // };

    // form.appendChild(schoolName);
    // form.appendChild(deleteBtn);

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
            <div key={formID} className="create">
              <form action="#">
                <label htmlFor="school">
                  School Name
                  <input type="text" name="school" id="school" required />
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
