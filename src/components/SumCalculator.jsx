import React, { useState } from 'react';
import '../App.css';

/**
 * SumCalculator Component
 * A functional component that allows users to input two numbers and calculate their sum
 * Implements validation to handle empty inputs and non-numeric values
 */
const SumCalculator = () => {
  // State management using React Hooks
  const [number1, setNumber1] = useState(''); // First number input
  const [number2, setNumber2] = useState(''); // Second number input
  const [sum, setSum] = useState(null); // Calculated sum result
  const [error, setError] = useState(''); // Error message for validation

  /**
   * Handle input change for Number 1
   * @param {Event} e - The onChange event from the input field
   */
  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
  };

  /**
   * Handle input change for Number 2
   * @param {Event} e - The onChange event from the input field
   */
  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
  };

  /**
   * Calculate the sum of two numbers with validation
   * Validates that both inputs are provided and are valid numbers
   */
  const calculateSum = () => {
    // Reset previous states
    setError('');
    setSum(null);

    // Validation: Check if inputs are empty
    if (number1.trim() === '' || number2.trim() === '') {
      setError('Please enter both numbers');
      return;
    }

    // Validation: Check if inputs are valid numbers using regex
    // This regex allows integers, decimals, negative numbers, and leading zeros
    // But rejects strings with letters or invalid characters
    const numberPattern = /^-?\d+\.?\d*$/;
    
    if (!numberPattern.test(number1.trim()) || !numberPattern.test(number2.trim())) {
      setError('Please enter valid numbers');
      return;
    }

    // Convert strings to numbers
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    // Calculate and set the sum
    const result = num1 + num2;
    setSum(result);
  };

  /**
   * Handle Enter key press to calculate sum
   * @param {KeyboardEvent} e - The keyboard event
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateSum();
    }
  };

  /**
   * Reset all fields
   */
  const resetCalculator = () => {
    setNumber1('');
    setNumber2('');
    setSum(null);
    setError('');
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h1 className="calculator-title">🧮 Sum Calculator</h1>
        <p className="calculator-subtitle">Enter two numbers to calculate their sum</p>
        
        <div className="input-group">
          <label htmlFor="number1" className="input-label">
            Number 1:
          </label>
          <input
            type="text"
            id="number1"
            className="input-field"
            value={number1}
            onChange={handleNumber1Change}
            onKeyPress={handleKeyPress}
            placeholder="Enter first number"
            aria-label="First number"
          />
        </div>

        <div className="input-group">
          <label htmlFor="number2" className="input-label">
            Number 2:
          </label>
          <input
            type="text"
            id="number2"
            className="input-field"
            value={number2}
            onChange={handleNumber2Change}
            onKeyPress={handleKeyPress}
            placeholder="Enter second number"
            aria-label="Second number"
          />
        </div>

        <div className="button-group">
          <button
            className="calculate-button"
            onClick={calculateSum}
            aria-label="Calculate sum"
          >
            Calculate Sum
          </button>
          <button
            className="reset-button"
            onClick={resetCalculator}
            aria-label="Reset calculator"
          >
            Reset
          </button>
        </div>

        {/* Display error message if validation fails */}
        {error && (
          <div className="error-message" role="alert">
            ⚠️ {error}
          </div>
        )}

        {/* Display result when sum is calculated successfully */}
        {sum !== null && !error && (
          <div className="result-container">
            <h2 className="result-label">Result:</h2>
            <div className="result-value">{sum}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SumCalculator;
