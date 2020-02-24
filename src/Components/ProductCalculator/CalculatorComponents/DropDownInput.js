import React, { useState, useEffect } from 'react';
//const [inputValue, setValue] = useState('');

const Input = props => {

  function handleChange() {
    // Here, we invoke the callback with the new value
    props.onChange();
    console.log("PROPS CHANGED")
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>{props.name}</p>

      {props.options !== null && props.simple ? (
        <select onChange={handleChange} id={props.inputid} >
          {props.options.map(result => {
            return <option value={result.value}>{result.value}</option>;
          })}
        </select>
      ) : (
        <input
          type={props.type}
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={handleChange}
          id={props.inputid}
          // onChange={event => props.heightValue(event.target.value)}
        ></input>
      )}
    </div>
  );
};

export default Input;
