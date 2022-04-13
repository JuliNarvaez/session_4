import { createContext, useState } from 'react';

const initialState = {
  count: 0,
};
export const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const incrementCount = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };

  const decreaseCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, incrementCount, decreaseCount }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
