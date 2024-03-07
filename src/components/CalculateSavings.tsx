import { useEffect, useState } from "react";
import Graph from "./graph";
function CalculateSavings() {
  const [init, setInit] = useState(0);
  const [regular, setRegular] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [years, setYears] = useState(1);
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);

  /* renders */
  useEffect(() => {
    handleResult();
  });

  const handleInitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInit(parseFloat(event.target.value) || 0);
    handleResult();
  };

  const handleRegularChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegular(parseFloat(event.target.value) || 0);
    handleResult();
  };

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
    handleResult();
  };

  const handleYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYears(parseFloat(event.target.value) || 0);
    handleResult();
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRate(parseFloat(event.target.value) || 0);
    handleResult();
  };

  const handleResult = () => {
    const P = init;
    const r = rate / 100;
    const n = 12;
    const t = years;

    const t2 = frequency;

    let C = 0;
    const A = P * (1 + r / n) ** (n * t);

    let temp = (1 + r / t2) ** t2 - 1;
    if (regular != 0) {
      if (temp != 0) {
        C = (regular / (r / t2)) * ((1 + r / t2) ** t2 - 1);
      } else {
        C = regular * t2;
      }
    }

    const result = A + C;
    setResult(Math.round(result * 100) / 100);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-10 col-sm-4 pt-4">
            <div className="row mb-5">
              <label className="col-4 col-form-label">Initial deposit</label>
              <div className="col-sm-6">
                <input
                  className="form-control"
                  value={init}
                  onChange={handleInitChange}
                ></input>
              </div>
            </div>

            <div className="row mb-5">
              <label className="col-4 col-form-label">Initial deposit</label>
              <div className="col-sm-6">
                <input
                  value={regular}
                  className="form-control"
                  onChange={handleRegularChange}
                ></input>
              </div>
            </div>

            <div className="row mb-5">
              <label className="col-4 col-form-label">Deposit Frequency</label>
              <div className="col-sm-6">
                <select
                  value={frequency}
                  className="form-select"
                  onChange={handleFrequencyChange}
                >
                  <option value={0}>Select an option</option>
                  <option value={52}>Week</option>
                  <option value={26}>Fortnight</option>
                  <option value={12}>Month</option>
                  <option value={1}>Year</option>
                </select>
              </div>
            </div>

            <div className="row mb-5">
              <label className="col-4 col-form-label">Number of years</label>
              <div className="col-sm-6">
                <input
                  value={years}
                  className="form-control"
                  onChange={handleYearsChange}
                ></input>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-4 col-form-label">Interest Rate</label>
              <div className="col-sm-6">
                <input
                  value={rate}
                  className="form-control"
                  onChange={handleRateChange}
                ></input>
              </div>
            </div>
            <p className="h1">Result : {result}</p>
          </div>

          <div className="col-12 col-sm-8">
            <Graph />
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculateSavings;
