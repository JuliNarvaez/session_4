import { createContext, useState } from 'react';
import { isEven } from '../utils/isEven';
import { isDivisibleByTen } from '../utils/isDivisibleByTen';

const initialNumber = {
  numValue: 0,
  isNumEven: false,
  isNumDivByTen: false,
};

export const Session7Context = createContext(initialNumber);

const Session7Provider = ({ children }) => {
  const [state, setState] = useState(initialNumber);
  // const [numValue, setNumValue] = useState(initialNumber.numValue);
  // const [isNumEven, setNumEven] = useState(initialNumber.isNumEven);
  // const [isNumDivByTen, setNumDivByTen] = useState(initialNumber.isNumDivByTen);

  function updateNumber(newNumb) {
    const numberValue = Number(newNumb);
    const isNumberDivisible = isDivisibleByTen(numberValue);
    const isNumberEven = isEven(numberValue);

    setState((prevState) => ({
      ...prevState,
      numValue: numberValue,
      isNumEven: isNumberEven,
      isNumDivByTen: isNumberDivisible,
    }));

    // setNumValue(numberValue);
    // setNumDivByTen(isDivisibleByTen(numberValue));
    // setNumEven(isEven(numberValue));
  }

  return (
    <Session7Context.Provider
      // value={{ numValue, updateNumber, isNumDivByTen, isNumEven }}
      value={{ ...state, updateNumber }}
    >
      {children}
    </Session7Context.Provider>
  );
};

export default Session7Provider;
