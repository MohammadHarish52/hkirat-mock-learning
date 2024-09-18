import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [exchangeData, setExchangeData] = useState({});
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
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  }, []);

  const incomeTax = parseInt(bankData.income + exchangeData.returns) * 0.3;

  return (
    <>
      <div>Your income tax is {incomeTax}</div>
    </>
  );
}

export default App;
