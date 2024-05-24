import React from 'react'
import CardHero from './CardHero'
import home from '../styles/home.module.css'


const AllHero = ({superheroes}) => {

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

export default AllHero