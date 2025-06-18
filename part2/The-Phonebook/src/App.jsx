import { useEffect, useState } from "react"
import Filter from "../components/Filter"
import PersonForm from "../components/PersonForm"
import Persons from "../components/Persons"
import axios from "axios"


function App() {
 const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [toSearch, setToSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(()=> {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
        console.log(`fetching fulfilled`)
        setPersons(response.data)
      })
  },[])
  console.log(`persons `, persons)

  function handleSubmit(e){
    e.preventDefault()
   if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to Phonebook`)
    }else{
      setPersons(persons.concat({name: newName,number: newNumber}))
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
      <div> debug: {newName}</div>
  </div>
  )
}

export default App
