import { useState } from "react";
import NumberButton from "../NumberButton/NumberButton";
import NumberDisplay from "../NumberDisplay/NumberDisplay";
import Scaffold from "../scaffold/Scaffold";

export default function NumberHandler () {
    const [count,setCount] = useState(0);
    const incrementCount = () => {
        setCount((prevNumber) => prevNumber +1)
    }
    const decreaseCount = () => {
        setCount((prevNumber) => prevNumber -1)
    }

    return (
        <Scaffold subTitle="Mentorship - Session 6:" mainTitle="useState and useEffect">
            <div className="main_container--center">
                <NumberDisplay number={count} >
                </NumberDisplay>
                <NumberButton buttonName='Increase Number' funcType={incrementCount}>
                </NumberButton>
                <NumberButton buttonName='Decrease Number' funcType={decreaseCount}>
                </NumberButton>
            </div>
        </Scaffold>
    )
}