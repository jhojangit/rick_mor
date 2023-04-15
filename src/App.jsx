import './App.css'
import { useRef, useState } from 'react'
import useFetch from './hooks/useFetch'
import LocationInfo from './assets/components/LocationInfo'
import getRandonLocation from './utils/getRandonLocation'
import ResidentCard from './assets/components/ResidentCard'


function App() {


  const [inputValue, setInputValue] = useState(getRandonLocation());
  const [numberErr, setNumberErr] = useState(false);


  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const locations = useFetch(url)


  const inputLocation = useRef()

  const handleSubmit = (e) => {
    setNumberErr(false)
    e.preventDefault()
    if (inputLocation.current.value > 0 && inputLocation.current.value < 127) {
      setInputValue(inputLocation.current.value)
    } else {
      setNumberErr(true)
    }
    inputLocation.current.value = ''
  }




  return (
    <div className="App">
      <header>
        <div className="header__img"></div>
      </header>

      <div className="location__container">
        <h3>Search a location</h3>
        <form onSubmit={handleSubmit} action="">
          <input ref={inputLocation} type="number" name="" id="" placeholder='Type a number' required />
          <button type="submit">Submit</button>
        </form >
        {
          numberErr && <h2>you must write a number between 1 and 126</h2>
        }
        {
          LocationInfo &&
          <LocationInfo location={locations} />
        }
      </div>

      <div className='container_residents'>
        {
          locations &&
          locations.residents.map(url => (
            <ResidentCard
              key={url}
              url={url}
            />
          ))
        }
      </div>



    </div>
  )
}

export default App
