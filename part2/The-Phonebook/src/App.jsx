import { useEffect, useState } from "react"
import Filter from "../components/Filter"
import PersonForm from "../components/PersonForm"
import Person from "../components/Person"
import personService from './services/persons'


function App() {
 const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [toSearch, setToSearch] = useState('')

  useEffect(()=> {
    personService
    .getAll()
    .then(response => {
        setPersons(response.data)
      })
  },[])

  function handleSubmit(e){
    e.preventDefault()
    const existingContact = persons.find(person => person.name === newName)
    const editedContact = {...existingContact, number:newNumber}
   if(persons.includes(existingContact)){
    //Update an already existing user
      personService
      .update(existingContact.id, editedContact)
      .then(()=> {
          setPersons(persons.map(p => {
            if(p.id === existingContact.id){
              return {...p, number:newNumber}
            }else{
              return {...p}
            }
          }))
          setNewName('')
          setNewNumber('')
        })
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
    const newSearch = e.target.value
    setToSearch(newSearch)
  }

  const contactsToShow = persons.filter(person => {
    return toSearch.toLowerCase() == person.name.slice(0,toSearch.length).toLowerCase()})
  

  function handleDeleteOf(id) {
    const filterRestOfData = persons.filter(p=> p.id !== id)
    window.confirm('you sure you wanna del that?')
    personService
    .deleteId(id)
    .then(() => {
        console.log(`Deleted post with ID: ${id}`)
        setPersons(filterRestOfData)
      })
    .catch(error => {
        console.error(error)
      })
  }

  return(
  <div>
      <h2> Phonebook </h2>
      <Filter toSearch={toSearch} handleToSearch={handleToSearch}/>
          <h2> Add a new </h2>
      <PersonForm newNumber={newNumber} handleNewNumber={handleNewNumber} newName={newName} handleNewName={handleNewName}  handleSubmit={handleSubmit} />
      <h2>Number</h2>

      <div> 
        {contactsToShow.map(person => 
            <Person key={person.id} person={person} handleDelete={() => handleDeleteOf(person.id)}/>
        )}
      </div>
      <div> toSearch: {toSearch} </div>
  </div>
  )
}

export default App
