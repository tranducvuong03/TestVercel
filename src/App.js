import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ip, setIp] = useState("Loading...");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unable to fetch IP"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Địa chỉ IP hiện tại :))))</h1>
        <p className="text-lg">{ip}</p>
      </header>
    </div>
  );
}

export default App;