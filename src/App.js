import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [calculated, setCalculated] = useState([]);

  const addValue = (v) => {
    try {
      setValue(v);
      setCalculated((calculated) => [...calculated, v]);
    } catch (e) {
      console.log(e);
    }
  };

  const getResult = () => {
    try {
      const finalVal = calculated.join("").split(/(\D)/g);
      const finalArray = finalVal.map((val) => {
        if (val.match(/\d/g)) {
          return Number(val);
        } else {
          return val;
        }
      });
      console.log(finalArray);
      const result = finalArray.reduce((total, v, index, array) => {
        console.log(
          "total: ",
          total,
          "v: ",
          v,
          "index: ",
          index,
          "array: ",
          array
        );
        switch (v) {
          case "+":
            return (total = total + array[index + 1]);
          case "-":
            return (total = total - array[index + 1]);
          case "*":
            return (total = total * array[index + 1]);
          case "/":
            return (total = total / array[index + 1]);
          default:
            return total === 0 ? v : total;
        }
      }, 0);
      console.log(result);
      setCalculated(result);
      setTimeout(() => {
        setCalculated("");
      }, 3000);
      setValue("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <center>
        <h1>Calculator</h1>
        <form id="forms">
          <p id="calcText">{value}</p>
          {calculated}
          <br />
          <br />
          <button type="button" value="1" onClick={() => addValue(1)}>
            1
          </button>
          <button type="button" value="2" onClick={() => addValue(2)}>
            2
          </button>
          <button type="button" value="3" onClick={() => addValue(3)}>
            3
          </button>
          <button type="button" value="*" onClick={() => addValue("*")}>
            *
          </button>
          <button type="button" value="/" onClick={() => addValue("/")}>
            /
          </button>
          <br />
          <button type="button" value="4" onClick={() => addValue(4)}>
            4
          </button>
          <button type="button" value="5" onClick={() => addValue(5)}>
            5
          </button>
          <button type="button" value="6" onClick={() => addValue(6)}>
            6
          </button>
          <button type="button" value="+" onClick={() => addValue("+")}>
            +
          </button>
          <button type="button" value="-" onClick={() => addValue("-")}>
            -
          </button>
          <br />
          <button type="button" value="7" onClick={() => addValue(7)}>
            7
          </button>
          <button type="button" value="8" onClick={() => addValue(8)}>
            8
          </button>
          <button type="button" value="9" onClick={() => addValue(9)}>
            9
          </button>
          <button type="button" value="0" onClick={() => addValue(0)}>
            0
          </button>
          <button type="button" value="=" onClick={() => getResult()}>
            =
          </button>
          <br />
        </form>
      </center>
    </div>
  );
}

export default App;
