import { useEffect, useState } from "react"
import Filter from "../components/Filter"
import PersonForm from "../components/PersonForm"
import Persons from "../components/Persons"
import personService from './services/persons'


function App() {
 const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [toSearch, setToSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(()=> {
    personService
    .getAll()
    .then(response => {
        setPersons(response.data)
      })
  },[])

  function handleSubmit(e){
    e.preventDefault()
   if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to Phonebook`)
    }else{
      const newContact = {name: newName,number: newNumber}

      personService
        .create(newContact)
        .then(response => {
        setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
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
      <Filter toSearch={toSearch} handleToSearch={handleToSearch}/>
          <h2> Add a new </h2>
      <PersonForm newNumber={newNumber} handleNewNumber={handleNewNumber} newName={newName} handleNewName={handleNewName}  handleSubmit={handleSubmit} />
      <h2>Number</h2>
      <Persons filtered={filtered} toSearch={toSearch} persons={persons} />
      <div> toSearch: {toSearch} </div>
  </div>
  )
}

export default App
