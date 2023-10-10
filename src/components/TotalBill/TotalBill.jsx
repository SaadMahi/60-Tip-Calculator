import React from 'react';

function TotalBill({ billAmount, tip }) {
  return (
    <h2>
      You pay total ${Math.round(billAmount + tip)} (${billAmount} + ${tip} tip)
    </h2>
  );
}

export default TotalBill;
