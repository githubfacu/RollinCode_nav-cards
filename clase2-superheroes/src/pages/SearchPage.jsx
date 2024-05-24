import React, { useEffect, useState } from 'react'
import AllHero from '../components/AllHero'
import heroes from '../utils/heroes'

const SearchPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [superheroesFiltrados, setSuperheroesFiltrados] = useState([])

  const valueOnChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {

    setSuperheroesFiltrados(heroes)

    const heroesFiltrados = heroes.filter((item) => 
      item.superhero.toLowerCase().includes(inputValue.toLowerCase()))
      
    setSuperheroesFiltrados(heroesFiltrados)             
    
  }, [inputValue])


  return (
    <div>
      <form style={{paddingBottom: 8}}>
        <label>🔎</label>
        <input type="text" style={{padding:'2px 4px', fontSize: '17px', marginLeft: 4}}
        onChange={valueOnChange}
        />
      </form>
      <AllHero superheroes={superheroesFiltrados}/>

      {
        superheroesFiltrados.length === 0 && <p>No se encontraron resultados</p>
      }
    </div>
  )
}

export default SearchPage