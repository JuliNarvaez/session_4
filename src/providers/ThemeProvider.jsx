import { createContext, useContext, useState } from 'react';

const themes = {
  theme: 'light',
};

const ThemeContext = createContext(themes);

export default function App() {
  return (
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  );
}

function ThemeProvider({ children }) {
  const [state, setState] = useState(themes);

  const updateState = (theme) => {
    setState({ ...state, theme });
  };

  return (
    <ThemeContext.Provider value={{ ...state, updateState }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      Este es el padre de ThemedButton: {theme}
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { updateState, theme } = useContext(ThemeContext);

  return (
    <>
      <button className={`button-${theme}`}>
        I am styled by theme context! {theme}
      </button>
      <button onClick={() => updateState('light')}>Ligth</button>
      <button onClick={() => updateState('dark')}>Dark</button>
    </>
  );
}
