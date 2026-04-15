import { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        if (input.includes("/0")) {
          setInput("Error");
        } else {
          setInput(eval(input).toString());
        }
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <Keypad onClick={handleClick} />
    </div>
  );
}

export default App;