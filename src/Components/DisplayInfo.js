import React, { useState } from "react";

function DisplayInfo({ personal }) {
  return (
    <div>
      <p>{personal.fullName}</p>
    </div>
  );
}

export default DisplayInfo;
