import { createContext, useState } from "react";
import { isEven } from "../utils/isEven";
import { isDivisibleByTen } from "../utils/isDivisibleByTen";

const initialNumber = {
    numValue: 0,
};

export const Session7Context = createContext(initialNumber);

const Session7Provider = ({ children }) => {
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
        <Session7Context.Provider value={{ ...numValue, handleNum, evenMessage, divisibleMessage, isShowing }}>
            {children}
        </Session7Context.Provider>
    )
}

export default Session7Provider;

