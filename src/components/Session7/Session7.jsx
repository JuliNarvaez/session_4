import { useState } from 'react';
import Scaffold from '../scaffold/Scaffold';
import { isEven } from '../../utils/isEven';
import { isDivisibleByTen } from '../../utils/isDivisibleByTen';
import InputConst from '../Inputs/InputConst';

export default function Session7() {
  const [numValue, setNumValue] = useState(0);
  const [isNumEven, setNumEven] = useState(false);
  const [isNumDivByTen, setNumDivByTen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  function handleNum({ code, target }) {
    if (isShowing) setIsShowing(false);
    if (code === 'Enter') {
      const numberValue = Number(target.value);

      setNumValue(numberValue);
      setNumDivByTen(isDivisibleByTen(numberValue));
      setNumEven(isEven(numberValue));
      setIsShowing(true);
    }
  }

  const evenMessage = () => {
    if (isNumEven) return <span className="color_true">EVEN</span>;

    return <span className="color_false">ODD</span>;
  };

  const divisibleMessage = () => {
    if (isNumDivByTen)
      return <span className="color_true"> is divisible by 10</span>;

    return <span className="color_false">isn't divisible by 10</span>;
  };

  return (
    <Scaffold subTitle="Mentorship - Session 7" mainTitle="Handling Events">
      <div className="main_container--center">
        <p>
          <strong>
            Introduce a number and check if is{' '}
            <span className="color_true">EVEN</span> or{' '}
            <span className="color_false">ODD</span> and if is divisible by 10.
          </strong>
        </p>
        <InputConst
          type="Number"
          placeholder="Enter a number"
          name="checkNumber"
          propFunc={handleNum}
        />
        <span>↵</span>
        {isShowing && (
          <div id="result">
            {`The number ${numValue} is`} {evenMessage()} and{' '}
            {divisibleMessage()}
          </div>
        )}
      </div>
    </Scaffold>
  );
}
