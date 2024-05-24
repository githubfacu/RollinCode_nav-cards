import React from 'react'
import heroes from '../utils/heroes'
import home from '../styles/home.module.css'
import CardHero from '../components/CardHero'


const DC = () => {

  const superheroesDc = heroes.filter((item) => item.publisher === 'DC Comics')

  console.log(superheroesDc);

  return (
    <div className={home.container}>
        {
            superheroesDc.map((heroe, index) => {
                return <article key={index} className={home.article}>
                    <CardHero superheroe={heroe}/>
                </article>
            })
        }
    </div>
  )
}

export default DC