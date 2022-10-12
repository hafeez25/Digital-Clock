import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  setInterval(() => {
    setDateTime({
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });
  }, 1000);

  return (
    <div id="main">
      <div className="date-time">
        <div className="date">{dateTime.date}</div>
        <div className="time">{dateTime.time}</div>
      </div>
    </div>
  );
};

export default App;
