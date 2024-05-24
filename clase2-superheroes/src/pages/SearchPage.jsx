import React, { useState } from 'react'
import AllHero from '../components/AllHero'
import heroes from '../utils/heroes'

const SearchPage = () => {

  const [inputValue, setInputValue] = useState('')

  const valueOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const superheroesFiltrados = inputValue ? 
  heroes.filter((item) => item.superhero.toLowerCase().includes(inputValue.toLowerCase())) :
  heroes

  console.log(superheroesFiltrados);


  return (
    <>
      <form style={{paddingBottom: 8}}>
        <label>🔎</label>
        <input type="text" style={{padding:'2px 4px', fontSize: '17px', marginLeft: 4}}
        onChange={valueOnChange}
        />
      </form>
      <AllHero superheroes={superheroesFiltrados}/>
    </>
  )
}

export default SearchPage