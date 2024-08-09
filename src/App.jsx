import "./App.css";
import { useState } from "react";
import Numbtn from "./components/numbtn";
import Equalbtn from "./components/equalbtn";
import Specialbtn from "./components/specialbtn";

function App() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [operation, setOperation] = useState(null);
  const [hist, setHist] = useState([]);

  function addendToDisplay(value) {
    // Handle adding the number or operator to the display
    if (!isNaN(value) || value === ".") {
      setCurrent(current === 0 ? value : current + value);
    } else {
      setPrev(current);
      setCurrent(0);
      setOperation(value);
    }
  }

  function clearDisplay() {
    setCurrent(0);
    setPrev(0);
    setOperation(null);
  }

  function calculateResult() {
    let result;
    switch (operation) {
      case "+":
        result = parseFloat(prev) + parseFloat(current);
        break;
      case "-":
        result = parseFloat(prev) - parseFloat(current);
        break;
      case "X":
        result = parseFloat(prev) * parseFloat(current);
        break;
      case "/":
        result = parseFloat(prev) / parseFloat(current);
        break;
      case "%":
        result = parseFloat(prev) % parseFloat(current);
        break;
      default:
        return;
    }
    setCurrent(result);
    setPrev(result);
    setOperation(null);

    let resultStr = `${prev} ${operation} ${current} = ${result}`;
    setHist((hist) => [...hist, resultStr]);
  }

  function toggleSidebar() {
    const sidebar = document.getElementById("history");
    sidebar.classList.toggle("visible")

    if (sidebar.classList.contains("visible")) {
      sidebar.style.left = "0rem";
    } else {
      sidebar.style.left = "-18rem";
    }
  }

  return (
    <>
      <div
        id="body"
        className="h-screen w-full bg-indigo-400 flex items-center justify-center font-Lexend"
      >
        <div
          id="history"
          className="bg-white rounded-r-xl shadow-lg fixed -left-72 w-72 h-screen duration-300 ease-in-out"
        >
          <ul>
            {hist.map((histItem, index) => (
              <li key={index} className="m-2 bg-slate-300 p-2 rounded-lg">{histItem}</li>
            ))}
          </ul>
        </div>
        <button
          className="bg-slate-200 rounded-xl flex top-3 right-3 fixed p-2 px-4"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
          History
        </button>
        <div
          id="calculator"
          className="w-96 bg-white shadow-xl rounded-xl px-4 py-4"
        >
          <div id="output" className="w-full h-24 bg-slate-300 rounded-lg">
            <div id="previous" className="text-right mx-2 text-xl">
              {prev}
            </div>
            <div
              id="current"
              className="text-right text-3xl mx-2 font-semibold"
            >
              {current}
            </div>
          </div>
          <div id="buttons" className="flex gap-3 w-full flex-col">
            <div id="row-1" className="flex flex-row gap-3 w-full mt-10">
              <Specialbtn num="C" onClick={() => setCurrent(0)} />
              <Specialbtn num="AC" onClick={clearDisplay} />
              <Specialbtn num="%" onClick={() => addendToDisplay("%")} />
              <Specialbtn num="/" onClick={() => addendToDisplay("/")} />
            </div>
            <div id="row-2" className="flex flex-row gap-3 w-full">
              <Numbtn num="7" onClick={() => addendToDisplay("7")} />
              <Numbtn num="8" onClick={() => addendToDisplay("8")} />
              <Numbtn num="9" onClick={() => addendToDisplay("9")} />
              <Specialbtn num="X" onClick={() => addendToDisplay("X")} />
            </div>
            <div id="row-3" className="flex flex-row gap-3 w-full">
              <Numbtn num="4" onClick={() => addendToDisplay("4")} />
              <Numbtn num="5" onClick={() => addendToDisplay("5")} />
              <Numbtn num="6" onClick={() => addendToDisplay("6")} />
              <Specialbtn num="-" onClick={() => addendToDisplay("-")} />
            </div>
            <div id="row-4" className="flex flex-row gap-3 w-full">
              <Numbtn num="1" onClick={() => addendToDisplay("1")} />
              <Numbtn num="2" onClick={() => addendToDisplay("2")} />
              <Numbtn num="3" onClick={() => addendToDisplay("3")} />
              <Specialbtn num="+" onClick={() => addendToDisplay("+")} />
            </div>
            <div id="row-5" className="flex flex-row gap-3 w-full">
              <Numbtn num="." onClick={() => addendToDisplay(".")} />
              <Numbtn num="0" onClick={() => addendToDisplay("0")} />
              <Equalbtn onClick={calculateResult} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
