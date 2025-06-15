import { useState } from 'react'

function Statistics({good, bad, neutral}){
  return(
  <div className='statistics'>
      <h2> Statistics </h2>
      <p> good {good}</p> 
      <p> neutral {neutral}</p> 
      <p> bad {bad}</p> 
      <p> all {good + neutral + bad}</p> 
      <p> average {(good*1 + bad* -1)/(good + neutral + bad)}</p> 
      <p> positive {good *(100/(good+ neutral+bad))}%</p> 
      </div>
  )
}

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
      <Statistics good={good} bad={bad} neutral={neutral}/>
  </div>
  )
}

export default App
