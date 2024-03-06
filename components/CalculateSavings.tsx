import {useEffect, useState } from "react"


function CalculateSavings(){



    const [init, setInit] = useState(0)
    const [regular, setRegular] = useState(0)
    const [frequency, setFrequency] = useState(0)
    const [years, setYears] = useState(1)
    const [rate, setRate] = useState(0)
    const [result, setResult] = useState(0)


    /* renders */
    useEffect(() => {
      handleResult()})

    const handleInitChange = (event) => {
      setInit(parseFloat(event.target.value)  )
      handleResult()
    }
    
    const handleRegularChange = (event) => {
      setRegular(parseFloat(event.target.value))
      handleResult()
      
    }

    const handleFrequencyChange = (event) => {
      setFrequency(parseFloat(event.target.value))
      handleResult()
    }

    const handleYearsChange = (event) => {
      setYears(parseFloat(event.target.value))
      handleResult()
    }

    const handleRateChange = (event) => {
      setRate(parseFloat(event.target.value))
      handleResult()
    }

    const handleResult = () => {

      let result = init;
      let interest = 0;
      for (let i = 0; i < (years*12); i++) {
        interest = result*(rate/100)/12
        result += interest;
      }
      
     
      
     
      setResult(result)
  
    }


  
   
    return (
    <>
    <p>Initial deposit:</p>
      <input value = {init} onChange = {handleInitChange}></input>

      <p>Regular deposit:</p>
      <input value = {regular} onChange = {handleRegularChange}></input>
     

      <p>Deposit frequency:</p>
      <input value = {frequency} onChange = {handleFrequencyChange}></input>

     
      <p>Number of years:</p>
      <input value = {years} onChange = {handleYearsChange}></input>
   

      <p>Interest rate:</p>
      <input value = {rate} onChange = {handleRateChange}></input>
      
    

      
      <br></br>

      <p>Result : {result}</p>
      <button>Calculate Savings</button>

      </>
    )
}



export default CalculateSavings;