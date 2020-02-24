import React, { useState, useEffect } from 'react';
import DropDownInput from './CalculatorComponents/DropDownInput';
import axios from 'axios';

const Calculator = props => {
  const test = {
    result: [
      {
        value: 'assd'
      },
      {
        value: 'ddd'
      }
    ],
    heatExchanger: [
      {
        value: 'Not dyed'
      },
      {
        value: 'Painted black'
      }
    ],
    boxMaterial: [
      {
        value: 'standard (galvanized steel box painted black)'
      },
      {
        value:
          'galvanized steel box painted with a wear-resistant matte dark gray color'
      },
      {
        value: 'stainless steel'
      },
      { value: 'black painted stainless steel' }
    ],
    frame: [
      {
        value: 'profile P, color: aluminum'
      },
      {
        value: 'profile P, color: light bronze'
      },
      {
        value: 'profile P, color: dark bronze'
      },
      {
        value: 'profile P, color: custom RAL'
      },
      {
        value: 'T profile, color: aluminum'
      },
      {
        value: 'T profile, color: light bronze'
      },
      {
        value: 'T profile, color: dark bronze'
      },
      {
        value: 'T profile, color: RAL custom'
      }
    ],
    connection: [
      {
        value: 'right'
      },
      {
        value: 'left'
      },
      {
        value: 'not standart'
      }
    ],
    note: [
      {
        value: 'standart model'
      },
      {
        value: 'not standard model'
      }
    ],
    fan: [
      {
        value: 20
      },
      { value: 40 },
      { value: 65 },
      { value: 100 }
    ]
  };
  const [generatedCode, setCode] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [fan, setFan] = useState('');
  const [coeficient, setCoeficient] = useState('');
  const [qw, setQw] = useState('');

  useEffect(() => {
    let url = '';
    props.isThereAFan
      ? (url =
          'http://18.189.49.66:3000/api/calculate/' +
          props.type.toLowerCase() +
          '/' +
          height +
          '/' +
          width +
          '/' +
          fan)
      : (url =
          'http://18.189.49.66:3000/api/calculate/' +
          props.type.toLowerCase() +
          '/' +
          height +
          '/' +
          width);

    axios.get(url).then(_result => {
      console.log('Duomenys: ' + JSON.stringify(_result));
      setCoeficient(_result.m);
      console.log(coeficient);
    });
  }, [length, width, height]);

  function handleChange() {
    let _height = document.getElementById('height').value;
    let _width = document.getElementById('width').value;
    let _length = document.getElementById('length').value;
    if (props.isThereAFan) {
      let _fan = document.getElementById('fan').value;
      setFan(_fan);
    }

    setHeight(_height);
    setLength(_length);
    setWidth(_width);
    console.log('handle Change activated');

    let T1 = document.getElementById('T1').value;
    let T2 = document.getElementById('T2').value;
    let Ti = document.getElementById('Ti').value;
    let heaterEx = document.getElementById('heaterEx').value;
    let material = document.getElementById('material').value;
    let frame = document.getElementById('frame').value;
    let connection = document.getElementById('connection').value;

    let note = document.getElementById('note').value;

    console.log('coef ' + coeficient);
    let T = Math.round((T1 + T2) / 2 - Ti);

    T = Math.round(T / 50, 2);
    console.log('T :' + T);
    let ptemp = Math.pow(parseFloat(T), parseFloat(coeficient));
    let P = Math.round(ptemp);
    console.log('P :' + P);
    let Q = Math.round(_length * P);
    // let QW = _length * coeficient;
    console.log(Q);

    document.getElementById('QW').value = Q;
    _height > 100 ? (_height = _height) : (_height = '0' + _height);
    _length > 1000 ? (_length = _length) : (_length = '0' + _length);
    let code = props.type + _height + width + _length;
    setCode(code);
  }

  return (
    <div style={{ width: '90%' }}>
      <h5>{props.title}</h5>
      <DropDownInput
        name="Height mm"
        inputid="height"
        options={props.height}
        simple={true}
        onChange={handleChange}
        theValue={height}
      ></DropDownInput>
      <DropDownInput
        name="Width mm"
        inputid="width"
        options={props.width}
        simple={true}
        onChange={handleChange}
        theValue={width}
      ></DropDownInput>
      <DropDownInput
        name="Length mm"
        inputid="length"
        options={null}
        simple={false}
        value={800}
        min={800}
        max={4800}
        step={100}
        type="number"
        onChange={handleChange}
        theValue={length}
      ></DropDownInput>
      <DropDownInput
        name="Input coolant temperature T1, °С"
        inputid="T1"
        options={null}
        simple={false}
        value={41}
        min={41}
        max={120}
        step={1}
        type="number"
        onChange={handleChange}
      ></DropDownInput>
      <DropDownInput
        name="The temperature of coolant at the outlet T2, °С"
        options={null}
        simple={false}
        inputid="T2"
        value={40}
        min={40}
        max={119}
        step={1}
        type="number"
        onChange={handleChange}
      ></DropDownInput>
      <DropDownInput
        name="Room temperature Ti, °С"
        options={null}
        simple={false}
        inputid="Ti"
        value={10}
        min={10}
        max={50}
        step={1}
        type="number"
        onChange={handleChange}
      ></DropDownInput>
      <DropDownInput
        inputid="heaterEx"
        name="Heat exchanger painting"
        options={test.heatExchanger}
        simple={true}
        onChange={handleChange}
      ></DropDownInput>
      {props.isThereAFan ? (
        <DropDownInput
          inputid="fan"
          name="Fan"
          options={test.fan}
          simple={true}
          onChange={handleChange}
        ></DropDownInput>
      ) : null}

      <DropDownInput
        inputid="material"
        name="Box material"
        options={test.boxMaterial}
        simple={true}
        onChange={handleChange}
      ></DropDownInput>
      <DropDownInput
        inputid="frame"
        name="Frame"
        options={test.frame}
        simple={true}
        onChange={handleChange}
      ></DropDownInput>
      <DropDownInput
        inputid="connection"
        name="Connection"
        options={test.connection}
        simple={true}
        onChange={handleChange}
      ></DropDownInput>
      <DropDownInput
        inputid="note"
        name="Note"
        options={test.note}
        simple={true}
        onChange={handleChange}
      ></DropDownInput>
      <DropDownInput
        inputid="QW"
        name="Convector heat transfer Q, W"
        options={null}
        simple={false}
        onChange={handleChange}
      ></DropDownInput>
      {/* <p>{height} {width} </p> */}
      <p>{generatedCode}</p>
      <p>GENERATED DESCRIPTION</p>

      <button>Print PDF</button>
    </div>
  );
};

export default Calculator;
