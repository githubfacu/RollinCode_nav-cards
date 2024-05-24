import React from 'react'
import heroes from '../utils/heroes'
import { useNavigate, useParams } from 'react-router-dom'

const Detalle = () => {

    window.scrollTo(0,0)

    const { id } = useParams()
    const navigate = useNavigate()

    const irAtras = () => {
        navigate(-1)
    }

    const superheroeArr = heroes.filter((item) => item.id === id)
    const superheroe = superheroeArr[0]


    console.log(superheroe);

  return (
    <section style={{display: 'flex', backgroundColor: 'beige'}} className='detalleSection'>
        <img src={superheroe.url} style={{minWidth: 290, maxWidth: 650}}   alt="" />

        <div style={{display: 'flex', flexDirection: 'column'}} className='detalleSectionDiv'>
            <h2 style={{fontSize: '32px', margin: '8px'}}>{superheroe.superhero}</h2>
            <h3 style={{margin: '2px 8px', fontWeight: '500'}}>{superheroe.characters}</h3>
            <h3 style={{margin: '2px 8px'}}>Primera aparicion: <span style={{fontWeight: '500'}}>{superheroe.first_appearance}</span></h3>
            <h3 style={{margin: '2px 8px'}}>Publicado por: <span style={{fontWeight: '500'}}>{superheroe.publisher}</span></h3>

            <button
            onClick={irAtras}
            style={{backgroundColor: '#1890ff',
            cursor: 'pointer',
            fontSize:'16px',
            margin: '24px',
            width: '80px',
            padding: '8px',
            color: 'white',
            border: 'none',
            borderRadius: 3}}>
                Volver
            </button>
        </div>

    </section>
  )
}

export default Detalle