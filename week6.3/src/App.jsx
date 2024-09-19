import { memo, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});

  const [bankData, setBankData] = useState({});

  console.log("hey");

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);

  // assume it is income {income :100}

  useEffect(() => {
    setTimeout(() => {
      setExchangeData1({
        returns: 100,
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData2({
        returns: 100,
      });
    }, 1000);
  }, []);

  // use memo caches the results and prevent
  // re renders until it changes
  // use Callback is not about memoization
  // it is about not rendering the child component
  // until the fn has changed which can be a prop
  // or a normal function  in which
  // use callback is used

  const cryptoReturns = memo(() => {
    console.log("hi there");
    return parseInt(exchangeData1.returns + exchangeData2.returns);
  }, [exchangeData1, exchangeData2]);
  cryptoReturns.displayName = "cryptoReturns";

  const incomeTax = parseInt(cryptoReturns + bankData.income) * 0.3;

  return (
    <>
      <div>Your income tax is {incomeTax}</div>
    </>
  );
}

export default App;
