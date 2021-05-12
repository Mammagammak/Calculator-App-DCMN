import React, { useContext } from 'react';
import { CalculationCtx } from './CalculationFunctions';

const BackspaceButton = () => {
  const { handleBackButton } = useContext(CalculationCtx); //in here numbercontext supposedly provides the context information

  return(
    <button type="button" onClick={() => handleBackButton()}>&#8592;</button>
  );
};

export default BackspaceButton;