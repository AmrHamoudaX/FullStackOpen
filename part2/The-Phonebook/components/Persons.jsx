function Persons({filtered, toSearch,persons}){


    return(
      <div> 
        {toSearch === ''? 
        persons.map(person => 
          <li key={person.id}> {person.name}: {person.number} </li>
        )
        :filtered.map(person => 
          <li key={person.id? person.id: person.name}> {person.name}: {person.number} </li>
        )}
      </div>
    )

        }

export default Persons
