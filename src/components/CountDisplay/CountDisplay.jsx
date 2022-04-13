import { useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';

export default function CountDisplay() {
  const { count } = useContext(AppContext);
  return (
    <span className="color_number">
      <strong>
        <h3>{count}</h3>
      </strong>
    </span>
  );
}
