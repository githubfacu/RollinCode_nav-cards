import React from 'react'
import heroes from '../utils/heroes'
import AllHero from '../components/AllHero'

const DC = () => {

  const superheroesDc = heroes.filter((item) => item.publisher === 'DC Comics')

  return (
    <>
      <AllHero superheroes={superheroesDc}/>
    </>
  )
}

export default DC