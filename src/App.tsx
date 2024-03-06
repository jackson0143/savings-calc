import { useState } from 'react'
import './App.css'
import CalculateSavings from '../components/CalculateSavings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Jackson's savings interest calculator</h1>
      <CalculateSavings/>
      <div className="card">

     
        
      </div>
      




    </>
  )
}

export default App
