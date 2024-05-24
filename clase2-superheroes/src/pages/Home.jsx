import React from 'react'
import heroes from '../utils/heroes'
import home from '../styles/home.module.css'
import CardHero from '../components/CardHero'


const Home = () => {

    const superheroes = heroes

  return (

    <div className={home.container}>
        {
            superheroes.map((heroe, index) => {
                return <article key={index} className={home.article}>
                    <CardHero superheroe={heroe}/>
                </article>
            })
        }
    </div>
  )
}

export default Home