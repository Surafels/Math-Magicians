import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';
import InputButton from './button';
import InputText from './InputText';

const Calculator = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (btn) => {
    const newData = calculate(value, btn);
    setValue(newData);
  };

  return (
    <section>
      <div className="Container">
        <InputText type="text" value={value.next || value.total || '0'} className="output grid-element" />
        <InputButton className="grid-element" type="button" value="AC" onClick={() => handleButtonClick('AC')} />
        <InputButton className="grid-element" type="button" value="+/-" onClick={() => handleButtonClick('+/-')} />
        <InputButton className="grid-element" type="button" value="%" onClick={() => handleButtonClick('%')} />
        <InputButton className="grid-element operator" type="button" value="÷" onClick={() => handleButtonClick('÷')} />
        <InputButton className="grid-element" type="button" value="7" onClick={() => handleButtonClick('7')} />
        <InputButton className="grid-element" type="button" value="8" onClick={() => handleButtonClick('8')} />
        <InputButton className="grid-element" type="button" value="9" onClick={() => handleButtonClick('9')} />
        <InputButton className="grid-element operator" type="button" value="x" onClick={() => handleButtonClick('x')} />
        <InputButton className="grid-element" type="button" value="4" onClick={() => handleButtonClick('4')} />
        <InputButton className="grid-element" type="button" value="5" onClick={() => handleButtonClick('5')} />
        <InputButton className="grid-element" type="button" value="6" onClick={() => handleButtonClick('6')} />
        <InputButton className="grid-element operator" type="button" value="-" onClick={() => handleButtonClick('-')} />
        <InputButton className="grid-element" type="button" value="1" onClick={() => handleButtonClick('1')} />
        <InputButton className="grid-element" type="button" value="2" onClick={() => handleButtonClick('2')} />
        <InputButton className="grid-element" type="button" value="3" onClick={() => handleButtonClick('3')} />
        <InputButton className="grid-element operator" type="button" value="+" onClick={() => handleButtonClick('+')} />
        <InputButton className="grid-element zero-button" type="button" value="0" onClick={() => handleButtonClick('0')} />
        <InputButton className="grid-element" type="button" value="." onClick={() => handleButtonClick('.')} />
        <InputButton className="grid-element equal-sign" type="button" value="=" onClick={() => handleButtonClick('=')} />

      </div>
    </section>
  );
};

export default Calculator;
