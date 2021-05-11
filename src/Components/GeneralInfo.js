import React, { useState } from "react";

function GeneralInfo() {
  return (
    <div className="generalInfo">
      <h2>Personal Information</h2>
      <form id="generalForm">
        <label htmlFor="fullName">
          Name
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
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
            required
          />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+254-12-345-678"
            required
          />
        </label>
      </form>
    </div>
  );
}

export default GeneralInfo;
