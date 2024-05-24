import React from 'react'
import heroes from '../utils/heroes'
import AllHero from '../components/AllHero'


const Home = () => {

    const superheroes = heroes

  return (
    <>
        <AllHero superheroes={superheroes}/>
    </>
  )
}

export default Home