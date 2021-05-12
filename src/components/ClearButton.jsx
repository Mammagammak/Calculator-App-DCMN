import React, {useContext} from 'react';
import { CalculationCtx } from './CalculationFunctions';

const ClearButton = () => {
  const { handleClearValue } = useContext(CalculationCtx);
  
  return (
    <button type="button" onClick={() => handleClearValue()}>C</button>
  );
};

export default ClearButton;