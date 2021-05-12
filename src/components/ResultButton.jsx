import React, { useContext } from 'react';
import { CalculationCtx } from './CalculationFunctions';

const ResultButton = () => {
  const { calculate }  = useContext(CalculationCtx);
    return (
      <button type="button" className="btn--equals" onClick={ () => calculate() }>=</button>
    );
};

export default ResultButton;