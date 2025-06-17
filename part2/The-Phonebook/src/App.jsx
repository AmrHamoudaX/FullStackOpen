import { useState } from "react"


function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    setPersons(persons.concat({name: newName}))
    setNewName('')

  }

  function handleNewName(e){
    console.log(`im input`,e.target.value)
    setNewName(e.target.value)
  }

  return(
  <div>
      <h2> Phonebook </h2>
      <form onSubmit={handleSubmit}>
        <div>
        name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
        <button type='submit'> add </button>
        </div>
      </form>
      <h2>Number</h2>

      {persons.map(person=> 
        <li key={person.name}> {person.name} </li>
      )}






      <div> debug: {newName}</div>
  </div>
  )
}

export default App
