import React, { useContext } from 'react';
import { CalculationCtx } from './CalculationFunctions';

const OperatorButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(CalculationCtx);

  return (
    <button type="button" onClick={() => handleSetCalcFunction(buttonValue)}>{ buttonValue }</button>
  );
};

export default OperatorButton;