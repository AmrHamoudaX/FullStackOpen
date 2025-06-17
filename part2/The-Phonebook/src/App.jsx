import { useState } from "react"


function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  function handleSubmit(e){
    e.preventDefault()
   if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to Phonebook`)
    }else{
      setPersons(persons.concat({name: newName,number: newNumber}))
      setNewName('')
      setNewNumber('')
    }

  }

  function handleNewName(e){
    setNewName(e.target.value)
  }

  function handleNewNumber(e){
    setNewNumber(e.target.value)

  }

  return(
  <div>
      <h2> Phonebook </h2>
      <form onSubmit={handleSubmit}>
        <div>
        name: <input value={newName} onChange={handleNewName}/>
        number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
        <button type='submit'> add </button>
        </div>
      </form>
      <h2>Number</h2>

      {persons.map(person=> 
        <li key={person.name}> {person.name}: {person.number} </li>
      )}






      <div> debug: {newName}</div>
  </div>
  )
}

export default App
