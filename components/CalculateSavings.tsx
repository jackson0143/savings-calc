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

    const handleInitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInit(parseFloat(event.target.value) || 0 )
      handleResult()
    }
    
    const handleRegularChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRegular(parseFloat(event.target.value)|| 0 )
      handleResult()
      
    }

    const handleFrequencyChange = (event) => {
      setFrequency(event.target.value)
      handleResult()
    }

    const handleYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setYears(parseFloat(event.target.value)|| 0 )
      handleResult()
    }

    const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRate(parseFloat(event.target.value)|| 0 )
      handleResult()
    }

    const handleResult = () => {

        const P = init
        const r = rate/100
        const n = 12
        const t = years

        const t2 = frequency


        let C = 0
        const A = P*(1+(r/n))**(n*t)

        
        if (regular != 0){
          C = (regular/(r/t2))*   ((1+(r/t2))**(t2)-1)
        }
      
     
      
        const result = A+C
      setResult(Math.round(result*100)/100)
  
    }


  
    return (
      <>
    <div>
    <p>Initial deposit:</p>
      <input value = {init} onChange = {handleInitChange}></input>

      <p>Regular deposit:</p>
      <input value = {regular} onChange = {handleRegularChange}></input>
     

      <p>Deposit frequency:</p>
      <select value = {frequency} onChange = {handleFrequencyChange}>
        <option value={0}>Select an option</option>
        <option value={52  }>Week</option>
        <option value={26}>Fortnight</option>
        <option value={12}>Month</option>
        <option value={1}>Year</option>
      </select>
     
      <p>Number of years:</p>
      <input value = {years} onChange = {handleYearsChange}></input>
   

      <p>Interest rate:</p>
      <input value = {rate} onChange = {handleRateChange}></input>
      
    

      
      <br></br>

      <p className = "result">Result : {result}</p>
  

      </div>

      </>
    )
}



export default CalculateSavings;