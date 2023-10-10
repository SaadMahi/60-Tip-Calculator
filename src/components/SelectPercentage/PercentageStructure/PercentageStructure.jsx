import React from 'react';

function PercentageStructure({ percentage, setPercentage }) {
  const optionHandler = (e) => {
    setPercentage(Number(e.target.value));
  };

  return (
    <select value={percentage} onChange={optionHandler}>
      <option value='0'>Dissatisfied (0%)</option>
      <option value='5'>it was okay (5%)</option>
      <option value='10'>it was good (10%)</option>
      <option value='20'>Absolutely amazing (20%)</option>
    </select>
  );
}

export default PercentageStructure;
