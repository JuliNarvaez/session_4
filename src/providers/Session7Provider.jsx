import { createContext, useState } from "react";
import { isEven } from "../utils/isEven";
import { isDivisibleByTen } from "../utils/isDivisibleByTen";

const initialNumber = {
    numValue: 0,
    isNumEven: false,
    isNumDivByTen: false,
    isShowing: false
};

export const Session7Context = createContext(initialNumber);

const Session7Provider = ({ children }) => {
    const [numValue, setNumValue] = useState(initialNumber.numValue);
    const [isNumEven, setNumEven] = useState(initialNumber.isNumEven);
    const [isNumDivByTen, setNumDivByTen] = useState(initialNumber.isNumDivByTen);
    const [isShowing, setIsShowing] = useState(initialNumber.isShowing);

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

    return (
        <Session7Context.Provider value={{ numValue, handleNum, isNumDivByTen, isNumEven, isShowing }}>
            {children}
        </Session7Context.Provider>
    )
}

export default Session7Provider;

