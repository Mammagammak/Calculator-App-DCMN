import React, { useState } from 'react';
// import styled, {css} from 'styled-components';

//styling 


export const CalculationCtx = React.createContext(); //created the context and stored it in NumberContext in ordeer to use the theme in the necessary components

//all the functions possible with the calculator
const CalculationFunctions = props => {
    //destructured
  const [ number, setNumber ] = useState(''); //current number and setNumber is the function that updates the current number 
  const [ storedNumber, setStoredNumber ] = useState(''); //the stored number in the memory
  const [ operatorType, setOperatorType ] = useState(''); // the function to perform

  //setting the new value on the display
  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) { //if current number on the display does not include . or if there isn't only dot on the display, and if the number entered on has digits less than 8, then set the setNumber to: number (current number) and the num (the new entered number) are added and assigned to num.
      setNumber(`${(number + num).replace(/^0+/, '')}`); //if there is a 0 in the beginning of the resulting value replace it with "", null.
    }  
  };
  
  //storing the current value in the memory, so to be able to go back when the new value is entered
  const handleSetStoredNumber = () => {
    setStoredNumber(number);
    setNumber(''); // current number's state is brought to null
  };
  
  //clearing everything, current, stored, and the function type
  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setOperatorType('');
  };

  //when backbutton is used
  const handleBackButton = () => {
    if (number !== '') {  //is the current number has a value different than null
      const deletedNumber = number.slice(0, number.length - 1); //number is an array, .slice takes the input as (start, end) element of the array. so the last element in the array is removed
      setNumber(deletedNumber); //the new number is assigned to current number
    }
  };

  //assigning the function type to be executed
  const handleSetCalcFunction = type => {
    if (number) {
      setOperatorType(type); // if there is anything other than null as the currrent number, and the one of the function type is entered than register the function type
      handleSetStoredNumber(); //running the function that passes the current number to the memory
    }
    if (storedNumber) { //if there is anything other than null as the stored number, and the one of the function type is entered than register the function type
      setOperatorType(type);
    }
  };

  //handling negative numbers
  const handleToggleSign = () => {
    if (number) { // if there is anything other than null as the current number
      if (number > 0) { // if the number is positive
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      } 
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const calculate = () => {
    if (number && storedNumber) {
      switch(operatorType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return(
    <CalculationCtx.Provider value = {{
      calculate,
      operatorType,
      handleBackButton,
      handleClearValue,
      handleSetCalcFunction,
      handleSetDisplayValue,
      handleSetStoredNumber,
      handleToggleSign,
      number,
      storedNumber,
      setNumber,
    }}
    >
      { props.children }
    </CalculationCtx.Provider>
  );
  
  };


export default CalculationFunctions;