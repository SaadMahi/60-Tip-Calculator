import React from 'react';

function Bill({ pullBill, billAmount }) {
  console.log(billAmount);

  return (
    <>
      <label>How much was the bill?</label>
      <input
        onChange={(e) => pullBill(Number(e.target.value))}
        type='number'
        placeholder='enter bill amount'
        value={billAmount ? +billAmount : ''}
      />
      <br />
    </>
  );
}

export default Bill;
