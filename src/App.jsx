import Session2 from './components/session2/Session2';
import Session3 from './components/session3/Session3';
import StatefulComponent from './components/statefulComponent';
import NumberHandler from './components/NumberHandler/NumberHandler';

function App() {
  return (
    <div className="container">
      <Session2 />
      <Session3 />
      {/* <StatefulComponent /> */}
      <NumberHandler></NumberHandler>
    </div>
  );
}

export default App;
