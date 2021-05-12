import React, { useContext } from 'react';
import { CalculationCtx } from './CalculationFunctions';

const CalculatorScreen = () => {
  const { number, storedNumber, operatorType } = useContext(CalculationCtx);

  return (
    <div className="row__display">
      <div >
        {!number.length && !storedNumber ? '0' : number || storedNumber }
      </div>

      <div>
        {!storedNumber ? 'Calculation summary:' : `${ storedNumber } ${ operatorType } ${ number }`}
      </div>
    </div>
  );
};

export default CalculatorScreen;