import React, { useState } from 'react';
import './style.css';
import { ResultIcone } from './resultIcone';
import { LigneOfButton } from './ligneOfButton';
import calculate from '../logic/calculate';
/* eslint-disable */ 
const CalculatorDesign = () => {
  const displayResult = () => {
    if (Object.keys(dataObject).length === 0) {
      return 0;
    }
    if (dataObject.total) {
      if (!dataObject.operation) {
        return dataObject.total;
      }
      if (!dataObject.next) {
        if (!prev) {
            return dataObject.operation;
        }
        return dataObject.total;
      }
      return dataObject.next;
    }
    if (dataObject.operation) {
      return dataObject.operation;
    }
    if (dataObject.next) {
      return dataObject.next;
    }
    return 0;

  };
  const [dataObject, setDataObject] = useState({});
  const [prev, setPrev] = useState(null);
  const handleClick = (e) => {
    const target = e.target;
    const child = target.children;
    let targetElem;
    if ( child.length > 0) {
      targetElem = child[0];
    } else {
      targetElem = target;
    }
    const buttonName = targetElem.textContent;
    setDataObject(calculate(dataObject, buttonName));
    setPrev(dataObject.next);
  };

  return (
    <div className ="container">
        <h2>Let's do some math!</h2>
        <div className="calculator-container">
          <ResultIcone total={displayResult()}/>
          <LigneOfButton textBtns={['AC', '+/-', '%', '÷']} order={2} handler={handleClick} />
          <LigneOfButton textBtns={['7', '8', '9', 'x']} order={3} handler={handleClick} />
          <LigneOfButton textBtns={['4', '5', '6', '-']} order={4} handler={handleClick} />
          <LigneOfButton textBtns={['1', '2', '3', '+']} order={5} handler={handleClick} />
          <LigneOfButton textBtns={['0', '.','=']} order={6} handler={handleClick} />
        </div>
      </div>
  );
};
export { CalculatorDesign };
