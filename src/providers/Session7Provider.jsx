import { createContext, useState } from "react";
import { isEven } from "../utils/isEven";
import { isDivisibleByTen } from "../utils/isDivisibleByTen";

const initialNumber = {
    numValue: 0,
    isNumEven: false,
    isNumDivByTen: false
};

export const Session7Context = createContext(initialNumber);

const Session7Provider = ({ children }) => {
    const [numValue, setNumValue] = useState(initialNumber.numValue);
    const [isNumEven, setNumEven] = useState(initialNumber.isNumEven);
    const [isNumDivByTen, setNumDivByTen] = useState(initialNumber.isNumDivByTen);

    function updateNumber(newNumb) {
        const numberValue = Number(newNumb);

        setNumValue(numberValue);
        setNumDivByTen(isDivisibleByTen(numberValue));
        setNumEven(isEven(numberValue));
    }

    return (
        <Session7Context.Provider value={{ numValue, updateNumber, isNumDivByTen, isNumEven }}>
            {children}
        </Session7Context.Provider>
    )
}

export default Session7Provider;

