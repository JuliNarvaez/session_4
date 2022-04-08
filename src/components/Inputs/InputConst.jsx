import { Fragment } from 'react';

export default function TextInput({
  type,
  placeholder,
  name,
  val,
  propFunc,
  ...props
}) {
  return (
    <Fragment>
      {/*
        input: {
            type: type,
            name: name,
            value: val,
            onKeyUp: propFunc,
            placeholder: placeholder,
            ...props
        }
        */}
      <input
        type={type}
        name={name}
        value={val}
        onKeyUp={propFunc}
        placeholder={placeholder}
        {...props}
      />
    </Fragment>
  );
}

