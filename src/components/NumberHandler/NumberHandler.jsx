import { useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';
import NumberButton from '../NumberButton/NumberButton';
import CountDisplay from '../CountDisplay/CountDisplay';
import Scaffold from '../scaffold/Scaffold';

export default function NumberHandler() {
  const { incrementCount, decreaseCount } = useContext(AppContext);

  return (
    <Scaffold
      subTitle="Mentorship - Session 6:"
      mainTitle="useState and useEffect"
    >
      <div className="main_container--center">
        <CountDisplay />
        <NumberButton buttonName="Increase Number" onClick={incrementCount} />
        <NumberButton buttonName="Decrease Number" onClick={decreaseCount} />
      </div>
    </Scaffold>
  );
}
