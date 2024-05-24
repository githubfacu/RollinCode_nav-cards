import React from 'react'
import heroes from '../utils/heroes'
import AllHero from '../components/AllHero'

const Marvel = () => {

  const superheroesMarvel = heroes.filter((item) => item.publisher === 'Marvel Comics')


  return (

    <>
      <AllHero superheroes={superheroesMarvel}/>
    </>
  )
}

export default Marvel