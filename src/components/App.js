import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString()
  );

  setInterval(() => {
    setDateTime(
      new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString()
    );
  }, 1000);

  return (
    <div id="main">
      <div className="date-time">{dateTime}</div>
    </div>
  );
};

export default App;
