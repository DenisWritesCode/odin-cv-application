import React, { useState } from "react";

function DisplayInfo({ personal }) {
  return (
    <div>
      <p>{personal.fullName}</p>
      <p>{personal.email}</p>
      <p>{personal.phoneNumber}</p>
    </div>
  );
}

export default DisplayInfo;
