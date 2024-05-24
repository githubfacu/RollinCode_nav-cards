import React from 'react'
import heroes from '../utils/heroes'
import home from '../styles/home.module.css'
import CardHero from '../components/CardHero'

const Marvel = () => {

  const superheroesMarvel = heroes.filter((item) => item.publisher === 'Marvel Comics')


  return (

    <div className={home.container}>
        {
            superheroesMarvel.map((heroe, index) => {
                return <article key={index} className={home.article}>
                    <CardHero superheroe={heroe}/>
                </article>
            })
        }
    </div>
  )
}

export default Marvel