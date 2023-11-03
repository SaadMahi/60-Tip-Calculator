import React from 'react';

function ResetBtn({ resetFunc }) {
  return (
    <button
      onClick={() => {
        resetFunc();
      }}
    >
      Reset
    </button>
  );
}

export default ResetBtn;
