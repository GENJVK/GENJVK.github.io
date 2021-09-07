import logo from "../images/bear_360.pmg";
import "../";
import { useState } from "react";

function App() {
  const [name, setName] = useState("unknown");
  function handleChangeName(name) {
    setName(name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>
        <Input handleChangeName={handleChangeName} text="try"></Input>
      </header>
    </div>
  );
}

export default App;
