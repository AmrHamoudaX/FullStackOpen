import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  console.log(votes)

  function incrementVote(){
    const newVotes = votes.map((vote,index) => {
      if(index === selected){
        return vote + 1
      } else {
        return vote
      }
    })
    setVotes(newVotes)
  }

  function TopVotes(){
    const topVote = votes.findIndex(vote => {
       return vote === Math.max(...votes)
    }) 
    const topAnecdote = anecdotes[topVote]
    console.log(Math.max(...votes))
    console.log(topAnecdote)
    return(
    <p> {topAnecdote} has {votes[topVote]} votes </p>
    )
  }
  TopVotes()
  
  function randomAnecdote(){
    setSelected(Math.floor(Math.random() * anecdotes.length ))
  }

  return (
    <div>
      <h2> Anecdote of the day </h2>
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes </p>
      <button onClick={incrementVote}> vote </button>
      <button onClick={randomAnecdote}>
        next anecdote
      </button>
      <h2> Anectode with most votes </h2>
      <TopVotes />
    </div>
  )
}

export default App
