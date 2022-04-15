import { useContext } from 'react';
import Scaffold from '../scaffold/Scaffold';
import InputConst from '../Inputs/InputConst';
import { Session7Context } from '../../providers/Session7Provider';

export default function Session7() {
  const { handleNum, numValue, isShowing, isNumDivByTen, isNumEven } = useContext(Session7Context);

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
