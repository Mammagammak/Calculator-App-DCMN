import React from 'react';
import Calculator from './components/Calculator';
import CalculationFunctions from './components/CalculationFunctions';
import './styles/App.css';

const App = () => (
  <CalculationFunctions>
    <Calculator />
  </CalculationFunctions>
);

export default App;