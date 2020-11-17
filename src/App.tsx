import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Replace Character Within An Array</h1>
        <div className="content">
          <h4> Explanation:</h4>
          <p>1. Find the total number of occurrences of the searched value.</p>
          <p>
            2. If there is more than one occurrence, determine the final length:
          </p>
          <i>initialLength + total * (replaceLength - 1) </i>
          <p>3. For each item within the array (initial length):</p>
          <code>
            {" "}
            If: An item matches the search value swap at the final index and
            then decrement the final index.
          </code>
          <p></p>
          <code>
            Else: Swap the final index at the original index and then decrement
            the final index.
          </code>
          <p>5. Return data.</p>
          <img
            className="image"
            alt="Diagram"
            src="https://i.imgur.com/qFe1wFO.png"
          />
          <h4>Time Complexity: O(n)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
