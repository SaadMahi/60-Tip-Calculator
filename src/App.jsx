import { useState } from 'react';

import Bill from './components/Bill/Bill';
import SelectPercentage from './components/SelectPercentage/SelectPercentage';
import TotalBill from './components/TotalBill/TotalBill';
import ResetBtn from './components/ResetBtn/ResetBtn';

import './App.css';

function App() {
  // * pull userInput bill from Bill.jsx
  const [billPuller, setBillPuller] = useState(0);
  // // console.log('pulled from build ' + billPuller);

  // * pull two percentage value from PercentageStructure.jsx
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  // * calculate tip using bill and percentage values
  const tip = billPuller * ((percentage1 + percentage2) / 2 / 100);
  // //console.log(tip);

  // * reset function handler
  const resetHandler = () => {
    setBillPuller(0);
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <>
      <Bill pullBill={setBillPuller} billAmount={billPuller} />

      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you liked the service?
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend liked the service?
      </SelectPercentage>

      <TotalBill billAmount={billPuller} tip={tip} />

      {billPuller > 0 && <ResetBtn resetFunc={resetHandler} />}
    </>
  );
}

export default App;
