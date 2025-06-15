import { useState } from 'react'

function App() {

  //save clicks of each button to its own state 
  const [good,setGood] = useState(6)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)

  function handleGoodClick(){
    setGood(good + 1)
  }
  function handleNeutralClick(){
    setNeutral(neutral + 1)
  }
  function handleBadClick(){
    setBad(bad + 1)
  }
  
  return (
  <div>
  <h1> Give FeedBack </h1> 
      <button onClick={handleGoodClick}> good </button>
      <button onClick={handleNeutralClick}> neutral </button>
      <button onClick={handleBadClick}> bad </button>

      <h2> Statistics </h2>

      <h4> good {good}</h4> 
      <h4> neutral {neutral}</h4> 
      <h4> bad {bad}</h4> 
      <h4> all {good + neutral + bad}</h4> 
      <h4> average {(good*1 + bad* -1)/(good + neutral + bad)}</h4> 
      <h4> positive {good *(100/(good+ neutral+bad))}%</h4> 
  </div>
  )
}

export default App
