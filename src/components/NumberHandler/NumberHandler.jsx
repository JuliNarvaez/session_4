import { useState } from "react";
import NumberButton from "../NumberButton/NumberButton";
import NumberDisplay from "../NumberDisplay/NumberDisplay";
import Scaffold from "../scaffold/Scaffold";

export default function NumberHandler () {
    const [count,setCount] = useState(0);
    return (
        <Scaffold subTitle="Mentorship - Session 6:" mainTitle="useState and useEffect">
            <div className="main_container--center">
            <NumberDisplay number={12} >
            </NumberDisplay>
            <NumberButton>
            </NumberButton>
            </div>
        </Scaffold>
    )
}