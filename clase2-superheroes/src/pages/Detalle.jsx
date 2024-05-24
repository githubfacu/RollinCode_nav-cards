import React from 'react'
import heroes from '../utils/heroes'
import { useNavigate, useParams } from 'react-router-dom'

const Detalle = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const irAtras = () => {
        navigate(-1)
    }

    const superheroeArr = heroes.filter((item) => item.id === id)
    const superheroe = superheroeArr[0]


    console.log(superheroe);

  return (
    <section style={{display: 'flex'}}>
        <img src={superheroe.url} width={240} alt="" />

        <div>
            <h2>{superheroe.superhero}</h2>

            <button
            onClick={irAtras}
            style={{backgroundColor: 'transparent', cursor: 'pointer'}}>
                Ir atrás
            </button>
        </div>

    </section>
  )
}

export default Detalle