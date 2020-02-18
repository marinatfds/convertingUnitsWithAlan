import React from "react";
import "./styles.css";
import { Button } from "./Button";

const INPUT_ID = "my-input";

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2
});

export default function App() {
  // const [colorToConvert, setColorToConvert] = React.useState("");
  const [colorConverted, setColorConverted] = React.useState({});

  const convert = React.useCallback(
    function() {
      // setColorConverted(colorToConvert / 100);
      // setColorToConvert(""); //sets colorToConvert to null in order to reset
      const input = document.getElementById(INPUT_ID);

      if (input && input.value) {
        setColorConverted({
          km: input.value / 1000,
          hm: input.value / 100,
          dam: input.value / 10,
          dm: input.value * 10,
          cm: input.value * 100,
          mm: input.value * 1000,
          in: formatter.format((input.value * 100) / 2.54)
        });
        input.value = "";
      }
    },
    // [colorToConvert]
    []
  );

  const reset = React.useCallback(function() {
    setColorConverted({});
  }, []);

  const keyDownHandler = React.useCallback(
    function(event) {
      // const { value } = event.target;

      if (event.key === "Enter") {
        //received any value then Enter
        // event.target.value = ""; //return null to input
        convert();
      }
    },
    [convert]
  );

  // const changeHandler = React.useCallback(function(event) {
  //   const { value } = event.target; //value receives what is in the input
  //   setColorToConvert(value); //colorToConvert will receive value
  // }, []); //now value is stored

  return (
    <div className="app">
      <h1>Converting Units</h1>
      <div>
        Value in Meters:
        <input
          className="input"
          id={INPUT_ID}
          onKeyDown={keyDownHandler}
          // onChange={changeHandler}
          // value={colorToConvert}
        />
        <Button onClick={convert}>Convert!</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
      <div>
        <table>
          <tr className="tr1">
            <td>In Kilometers:</td>
            <td>{colorConverted.km} km</td>
          </tr>
          <tr>
            <td>In Hectometers:</td>
            <td>{colorConverted.hm} hm</td>
          </tr>
          <tr className="tr1">
            <td>In Decameters:</td>
            <td>{colorConverted.dam} dam</td>
          </tr>
          <tr>
            <td>In Decimeters:</td>
            <td>{colorConverted.dm} dm</td>
          </tr>
          <tr className="tr1">
            <td>In Centimeters:</td>
            <td>{colorConverted.cm} cm</td>
          </tr>
          <tr>
            <td>In Milimeters:</td>
            <td>{colorConverted.mm} mm</td>
          </tr>
          <tr className="tr1">
            <td>In Inches:</td>
            <td>{colorConverted.in} in</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
