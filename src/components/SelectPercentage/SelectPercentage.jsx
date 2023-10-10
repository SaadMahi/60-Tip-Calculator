import React from 'react';
import PercentageStructure from './PercentageStructure/PercentageStructure';

function SelectPercentage({
  children: serviceReview,
  percentage,
  setPercentage,
}) {
  return (
    <>
      <label>{serviceReview}</label>
      <PercentageStructure
        setPercentage={setPercentage}
        percentage={percentage}
      />
      <br />
    </>
  );
}

export default SelectPercentage;
