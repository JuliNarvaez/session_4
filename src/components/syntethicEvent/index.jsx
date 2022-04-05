import { useState } from 'react';
import Scaffold from '../scaffold/Scaffold';

export default function Form() {
  // const [value, setValue] = useState('');
  // const [value2, setValue2] = useState('');

  // const handleChange = (event) => {
  //   // console.log('input', event);
  //   const { value: inputValue } = event.target;

  //   setValue(inputValue);
  // };

  // const handleChange2 = (event) => {
  //   const { value: inputValue } = event.target;

  //   setValue2(inputValue);
  // };
  const [values, setValues] = useState({
    input1: '',
    input2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <Scaffold>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          console.log('value in form', values);
        }}
      >
        <input
          type="text"
          name="input1"
          value={values.input1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="input2"
          value={values.input2}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Scaffold>
  );
}
