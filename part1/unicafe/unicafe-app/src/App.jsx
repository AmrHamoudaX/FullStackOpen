import { useState } from 'react'

function StatisticLine({text, value}){
return( 
    <>
      <tr>
    <td> {text}</td>
        <td> {value}</td>
    </tr>
    </>
  )
}

function Statistics({good, bad, neutral}){
  if(good === 0 && bad === 0 && neutral === 0){
    return(
      <div className='statistics'>
        <h2> Statistics </h2>
        <p> No feedback given </p>
      </div>
    )

  }else{

  return(
  <div className='statistics'>
      <h2> Statistics </h2>
        <table>
          <tbody>
    <StatisticLine text='good' value={good} />
    <StatisticLine text='neutral' value={neutral} />
    <StatisticLine text='bad' value={bad} />
    <StatisticLine text='all' value={good + neutral + bad} />
    <StatisticLine text='average' value={(good*1 + bad* -1)/(good + neutral + bad)} />
    <StatisticLine text='positive' value={good *(100/(good+ neutral+bad)) + '%'} />
          </tbody>
    </table>
      </div>
  )
  }
}

function App() {
  //save clicks of each button to its own state 
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Button text='good' onClick={handleGoodClick}/>
      <Button text='neutral' onClick={handleNeutralClick}/>
      <Button text='bad' onClick={handleBadClick}/>
      <Statistics good={good} bad={bad} neutral={neutral} />
  </div>
  )
}
function Button({text, onClick}){
  return(<button onClick={onClick}> {text} </button>)
}

export default App
