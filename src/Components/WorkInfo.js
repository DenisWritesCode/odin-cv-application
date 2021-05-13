import React, { useState } from "react";
import CreateWorkForm from "./CreateWorkForm";

function WorkInfo() {
  const [workCount, setWorkCount] = useState(0);
  const [work, setWork] = useState([]);

  function createWorkForm(workID) {
    setWork((work) => work.concat(workID));
    setWorkCount((prevWorkCount) => prevWorkCount + 1);
  }

  function handleWorkHere(id) {
    const label = `#jobEndDateID${id}`;
    const study = document.querySelector(label);
    study.classList.toggle("hidden");
  }

  function handleDeleteWork(id) {
    setWork(work.filter((work) => work !== id));
  }

  return (
    <div className="workInfo">
      <h2>Work Information</h2>
      {work.map((id) => {
        return (
          <CreateWorkForm
            key={id}
            formID={id}
            handleDeleteWork={handleDeleteWork}
            handleWorkHere={handleWorkHere}
          />
        );
      })}
      <button
        onClick={() => {
          createWorkForm(workCount);
        }}
      >
        Add Work Experience
      </button>
    </div>
  );
}

export default WorkInfo;
