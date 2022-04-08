import Scaffold from "../scaffold/Scaffold";
import { isEven } from "../../utils/isEven";
import { isDivisibleByTen } from "../../utils/isDivisibleByTen";
import InputConst from "../Inputs/InputConst";
import { useState } from "react";

export default function Session7() {

    const [numValue, setNumValue] = useState(0);
    const [isNumEven, setNumEven] = useState(null)
    const [isNumDivByTen, setNumDivByTen] = useState(null)


    function handleNum({ code, target }) {
        if (code === 'Enter') {
            setNumValue(target.value);
            setNumEven(isEven(target.value));
            setNumDivByTen(isDivisibleByTen(target.value));
        }
    }
    const isShowing = isNumEven !== null && isNumDivByTen !== null

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
                <InputConst type="Number" placeholder="Enter a number" name="checkNumber" propFunc={handleNum} />
                <span>↵</span>
                {isShowing && <div id="result">
                    The number {numValue} is {' '}
                    {isNumEven ? <span className="color_true">EVEN</span> : <span className="color_false">ODD</span>}
                    {' '}and{' '}
                    {isNumDivByTen ? <span className="color_true"> is divisible by 10</span>
                        : <span className="color_false">isn't divisible by 10</span>}
                </div>}
            </div>
        </Scaffold>)
}

