function createForm(formNumber) {
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

  const btn = document.createElement("BUTTON");
  btn.innerText = "Delete";
  btn.onclick = function () {
    handleDeleteEdu(form.id);
  };
  form.appendChild(btn);

  setEducation((prevEducation) => {
    return prevEducation.concat(form);
  });

  console.log("create", education);
}
