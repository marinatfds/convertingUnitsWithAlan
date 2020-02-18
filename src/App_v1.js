import React from "react";
import "./styles.css";
import { Button } from "./Button";

const INPUT_ID = "my-input";

export default function App() {
  const [colorToConvert, setColorToConvert] = React.useState("");
  const [colorConverted, setColorConverted] = React.useState("");

  const convert = React.useCallback(
    function() {
      setColorConverted(colorToConvert / 100);
      setColorToConvert(""); //sets colorToConvert to null in order to reset
      const input = document.getElementById(INPUT_ID);

      if (input && input.value) {
        setColorConverted(input.value / 100);
        input.value = "";
      }
    },
    [colorToConvert]
  );

  const keyDownHandler = React.useCallback(
    function(event) {
      const { value } = event.target;

      if (event.key === "Enter") {
        //received any value then Enter
        event.target.value = ""; //return null to input
        convert();
      }
    },
    [convert]
  );

  const changeHandler = React.useCallback(function(event) {
    const { value } = event.target; //value receives what is in the input
    setColorToConvert(value); //colorToConvert will receive value
  }, []); //now value is stored

  return (
    <div className="App">
      <h1>Coverting Units</h1>
      <h2>
        Value in Meters:
        <input
          className="input"
          onKeyDown={keyDownHandler}
          onChange={changeHandler}
          value={colorToConvert}
        />
        <Button onClick={convert}>Convert!</Button>
      </h2>
      <div>Value in Centimeters: {colorConverted}</div>
    </div>
  );
}
