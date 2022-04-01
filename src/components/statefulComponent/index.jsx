import { Component, useEffect, useState } from 'react';
import Scaffold from '../scaffold/Scaffold';

export default function StatefulComponent() {
  const [count, setCount] = useState(0);
  const [modifyTitle, setModifyTitle] = useState(false);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (modifyTitle) document.title = `Times clicked: ${count}`;
  }, [modifyTitle, count]); // React Hook useEffect has a missing dependency: 'count'. Either include it or remove the dependency array

  return (
    <Scaffold>
      <p>{count}</p>
      <button onClick={incrementCount}>Haz click</button>
      <button onClick={() => setModifyTitle(!modifyTitle)}>Actualizame</button>
    </Scaffold>
  );
}

export class StatefulComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modifyTitle: false,
    };

    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.modifyTitle !== this.state.modifyTitle) {
      document.title = `Times clicked: ${this.state.count}`;
      this.setState({
        modifyTitle: false,
      });
    }
  }

  render() {
    return (
      <Scaffold>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Haz click</button>
        <button onClick={() => this.setState({ modifyTitle: true })}>
          Actualizame
        </button>
      </Scaffold>
    );
  }
}
