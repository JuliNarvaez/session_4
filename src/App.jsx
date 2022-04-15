import Session2 from './components/session2/Session2';
import Session3 from './components/session3/Session3';
// import StatefulComponent from './components/statefulComponent';
import NumberHandler from './components/NumberHandler/NumberHandler';
/* import Form from './components/syntethicEvent'; */
import Session7 from './components/Session7/Session7';
import AppProvider from './providers/AppProvider';
// import ThemeProvider from './providers/ThemeProvider';
import Session7Provider from './providers/Session7Provider';

function App() {
  return (
    <div className="container">
      <Session2 />
      <Session3 />
      {/* <StatefulComponent /> */}
      <AppProvider>
        <NumberHandler />
      </AppProvider>
      {/* <Form /> */}
      <Session7Provider>
        <Session7 />
      </Session7Provider>
      {/* <ThemeProvider /> */}
    </div>
  );
}

export default App;
