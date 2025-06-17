import { useState } from "react"


function App() {
 const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [toSearch, setToSearch] = useState('')
  const [filtered, setFiltered] = useState(persons.filter(person => {
   return toSearch == person.name.slice(0,toSearch.length)  
    })
  )

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
  
  function handleToSearch(e){
    const newSearch = e.target.value.toLowerCase()
    setToSearch(newSearch)
    setFiltered(persons.filter(person => {
   return newSearch == person.name.slice(0,newSearch.length).toLowerCase()  
    }))
  }

  return(
  <div>
      <h2> Phonebook </h2>
          <p> filter shown with <input value={toSearch} onChange={handleToSearch} /> </p>
      <form onSubmit={handleSubmit}>
        <div>
          <h2> Add a new </h2>
        name: <input value={newName} onChange={handleNewName}/>
        number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
        <button type='submit'> add </button>
        </div>
      </form>
      <h2>Number</h2>
      <div> 
        {filtered.map(person => 

          <li key={person.id}> {person.name}: {person.number} </li>
        )}
      </div>
<div> toSearch: {toSearch} </div>
     {/*{query === '' ? 
      //persons.map(person=> 
      //  <li key={person.id}> {person.name}: {person.number} </li>
      //)
      //:persons.find(person=> {
      //    return person.name === query
      //  <li key={person.id}> {person.name}: {person.number} </li>
      //
      //  })
      //}
      {}


*/} 



      <div> debug: {newName}</div>
  </div>
  )
}

export default App
