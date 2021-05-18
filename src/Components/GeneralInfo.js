import React from "react";

function GeneralInfo({ personal, setPersonal }) {
  function handleGeneralSubmit(e) {
    e.preventDefault();

    const fullName = document.querySelector("#fullName").value;
    const email = document.querySelector("#email").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;

    setPersonal({ fullName, email, phoneNumber });
  }

  function handleChange(e) {
    if (e.target.name === "fullName") {
      setPersonal({
        ...personal,
        fullName: e.target.value,
      });
    } else if (e.target.name === "email") {
      setPersonal({
        ...personal,
        email: e.target.value,
      });
    } else {
      setPersonal({
        ...personal,
        phoneNumber: e.target.value,
      });
    }
  }
  return (
    <div className="generalInfo">
      <h2>Personal Information</h2>
      <form id="generalForm" onSubmit={handleGeneralSubmit}>
        <label htmlFor="fullName">
          Name
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="First Second"
            value={personal.fullName}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            value={personal.email}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="254-12-345-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
            value={personal.phoneNumber}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
          <small>Format: 254-12-345-678</small>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
