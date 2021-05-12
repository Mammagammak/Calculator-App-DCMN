import React from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import ClearButton from './ClearButton';
import CalculatorScreen from './CalculatorScreen';
import ResultButton from './ResultButton';
import BackspaceButton from './BackspaceButton';
import ToggleNegPosButton from './ToggleNegPosButton';

const Calculator = () => {
  return (
    <div className = "calculator">
      <>
          <CalculatorScreen />
      </>

      <>
        <div className="calculator__btns">

          <>
            <div className="btn__row--1">
              <ClearButton />
              <BackspaceButton />
              <ToggleNegPosButton />
              <OperatorButton buttonValue = "/" />
            </div>
          </>

          <>
            <div className="btn__row--2">
              <NumberButton buttonValue = { 7 } />
              <NumberButton buttonValue = { 8 } />
              <NumberButton buttonValue = { 9 } />
              <OperatorButton buttonValue = "*" />
            </div>
          </>

          <>
            <div className="btn__row--3">
              <NumberButton buttonValue = { 4 } />
              <NumberButton buttonValue = { 5 } />
              <NumberButton buttonValue = { 6 } />
              <OperatorButton buttonValue = "-" />
            </div>
          </>

          <>
            <div className="btn__row--4">
              <NumberButton buttonValue = { 1 } />
              <NumberButton buttonValue = { 2 } />
              <NumberButton buttonValue = { 3 } />
              <OperatorButton buttonValue = "+" />
            </div>
          </>

          <>
            <div className="btn__row--5">
              <NumberButton buttonValue = { 0 } />
              <NumberButton buttonValue = "." />
              <ResultButton/>
            </div>
          </>
        </div>
      </>
    </div>
  )
}

export default Calculator;