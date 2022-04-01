import { isEven } from '../../utils/isEven.js';
import { isDivisibleByTen } from '../../utils/isDivisibleByTen.js';
import Scaffold from '../scaffold/Scaffold';

function Session3() {
  return (
    <Scaffold subTitle="Mentorship - Session 3:" mainTitle="JS Basics and ES6">
      <div className="main_container--center">
        <p>
          <strong>
            Introduce a number and check if is{' '}
            <span className="color_true">EVEN</span> or{' '}
            <span className="color_false">ODD</span> and if is divisible by 10.
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
    </Scaffold>
  );
}

function handleKeyUp(e) {
  if (e.key === 'Enter') {
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
  return `The number <span class="color_number">${object.number}</span> is ${
    object.isEven
      ? '<span class="color_true">EVEN</span>'
      : '<span class="color_false">ODD</span>'
  } and ${
    object.isDivisibleByTen
      ? '<span class="color_true"> is divisible by 10</span>'
      : '<span class="color_false">isn\'t divisible by 10</span>'
  }.`;
}

function reportResult(resultText) {
  document.getElementById('result').innerHTML = `<p>${resultText}</p>`;
}

export default Session3;
