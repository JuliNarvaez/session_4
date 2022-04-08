import Session2 from './components/session2/Session2';
import Session3 from './components/session3/Session3';
// import StatefulComponent from './components/statefulComponent';
import NumberHandler from './components/NumberHandler/NumberHandler';
/* import Form from './components/syntethicEvent'; */
import Session7 from './components/Session7/Session7';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  return (
    <div className="container">
      <Session2 />
      <Session3 />
      {/* <StatefulComponent /> */}
      <NumberHandler></NumberHandler>
      {/* <Form /> */}
      <Session7 />
      <ThemeProvider />
    </div>
  );
}

export default App;
