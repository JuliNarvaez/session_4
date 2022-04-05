import { useState } from 'react';
import NumberButton from '../NumberButton/NumberButton';
import NumberDisplay from '../NumberDisplay/NumberDisplay';
import Scaffold from '../scaffold/Scaffold';

export default function NumberHandler() {
  const [count, setCount] = useState(0);
  // const [specialObject, setSpecialObject] = useState({ key1: 'hello' });

  // const modifyObject = () =>
  //   setSpecialObject((prevObject) => {
  //     return { ...prevObject, key2: 'world' };
  //   });
  const incrementCount = (e) => {
    console.log(e);
    setCount((prevNumber) => prevNumber + 1);
  };

  const decreaseCount = (e) => {
    setCount((prevNumber) => (prevNumber <= 0 ? 0 : prevNumber - 1));
  };

  return (
    <Scaffold
      subTitle="Mentorship - Session 6:"
      mainTitle="useState and useEffect"
    >
      <div className="main_container--center">
        <NumberDisplay>{count}</NumberDisplay>
        <NumberButton buttonName="Increase Number" funcType={incrementCount} />
        <NumberButton buttonName="Decrease Number" funcType={decreaseCount} />
      </div>
    </Scaffold>
  );
}
