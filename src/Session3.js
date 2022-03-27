import { isEven } from "./isEven.js";
import { isDivisibleByTen } from "./isDivisibleByTen.js";

function Session3() {
  return (
    <div className="main">
      <h3 className="main_subtitle">Mentorship - Session 3:</h3>
      <h1 className="main_title">JS Basics and ES6</h1>
      <div className="main_container">
        <p>
          <strong>
            Introduce a number and check if is{" "}
            <span className="result_true">EVEN</span> or{" "}
            <span className="result_false">ODD</span> and if is divisible by 10.
          </strong>
        </p>
        <input
          type="number"
          placeholder="Enter a number"
          id="numberValue"
          onKeyUp={handleKeyUp}
        />
        <span>↵</span>
        <div id="result"></div>
      </div>
    </div>
  );
}

function handleKeyUp(e) {
  if (e.key === "Enter") {
    const inputValue = e.target.value;
    reportResult(detectNumber(numberObject(inputValue)));
    const numberProps = numberObject(inputValue);
    console.log(numberProps);
    const numberPropsTwo = { ...numberProps };
    numberPropsTwo.number = 8;
    numberPropsTwo.isEven = false;
    console.log(numberProps);
    console.log(numberPropsTwo);
  }
}

function numberObject(number) {
  return {
    number: number,
    isEven: isEven(number),
    isDivisibleByTen: isDivisibleByTen(number),
  };
}

function detectNumber(object) {
  return `The number <span class="result_number">${object.number}</span> is ${
    object.isEven
      ? '<span class="result_true">EVEN</span>'
      : '<span class="result_false">ODD</span>'
  } and ${
    object.isDivisibleByTen
      ? '<span class="result_true"> is divisible by 10</span>'
      : '<span class="result_false">isn\'t divisible by 10</span>'
  }.`;
}

function reportResult(resultText) {
  document.getElementById("result").innerHTML = `<p>${resultText}</p>`;
}

export default Session3;
