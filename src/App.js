import React, { useState } from "react";

import Form from "./Components/Form";
import DisplayInfo from "./Components/DisplayInfo";

function App() {
  const [personal, setPersonal] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <div className="App">
      <Form setPersonal={setPersonal} personal={personal} />
      <DisplayInfo personal={personal} />
    </div>
  );
}

export default App;
