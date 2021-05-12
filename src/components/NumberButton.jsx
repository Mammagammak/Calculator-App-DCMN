import React, { useContext } from 'react';
import { CalculationCtx } from './CalculationFunctions';

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(CalculationCtx);

  return (
    <button  type="button" onClick={() => handleSetDisplayValue(buttonValue)}>{ buttonValue }</button>
  );
};

export default NumberButton;