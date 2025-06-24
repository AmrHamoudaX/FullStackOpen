import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [chosenCountry, setChosenCountry] = useState(null)
  const [allCountries, setAllCountries] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const showCountries = allCountries
    ? allCountries.filter(country=> 
    country.slice(0,searchValue.length).toLowerCase() === searchValue.toLowerCase())
    : null


  useEffect(()=> {
    if(showCountries && showCountries.length ===1 ){
      axios .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${showCountries[0].toLowerCase()}`)
      .then(response => {
          const countryData = response.data
          setChosenCountry({
            name:countryData.name.common,
            capital: countryData.capital[0],
            area: countryData.area,
            flag: countryData.flags.png,
            languages: countryData.languages
          })
        })
    }
  },[searchValue])

  useEffect(()=> {
        axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all#')
        .then(response => {
          const countries = response.data.map(p => p.name.common)
          setAllCountries(countries)
        }
        )
  },[])
//
    function handleSearch(e){
    setSearchValue(e.target.value)
    }

  function handleShow(key){
    setSearchValue(key)
  }


  return(
  <>
      find countries <input value={searchValue} onChange={handleSearch} />

      {(showCountries && showCountries.length <=9 && showCountries.length >1) 
        ? showCountries.map(country => {
         return( <div key={country}>
            <p> {country}
              <button onClick={()=> handleShow(country)}> Show </button>
            </p>
            </div>)
        })
        : null
      }

      {showCountries && showCountries.length === 1 && chosenCountry
      ? <>
      <h1> {chosenCountry.name} </h1>
      <p>Capital {chosenCountry.capital} </p>
      <p> Area {chosenCountry.area} </p>

      <h2> Languages </h2>
      <ul>
        {Object.values(chosenCountry.languages).map(language=> {
          return <li key={language}> {language} </li>
        })}
      </ul>
          <img src={chosenCountry.flag} />
      </>
      :null
      } 
      
  </>

  )
}

export default App
