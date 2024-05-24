import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useNavigate } from 'react-router-dom'

const CardHero = ({superheroe}) => {

  const navigate = useNavigate()

  const navegarADetalle = () => {
    navigate(`/detalle/${superheroe.id}`)
  }

  return (
    <>
        <Card
        onClick={navegarADetalle}
        hoverable
        style={{
            width: 240,
            margin: '15px'
        }}
        cover={<img alt={superheroe.alter_ego} src={superheroe.url} height={350} style={{objectFit: 'cover'}}/>}
        
        >
        <Meta title={superheroe.superhero} description={superheroe.alter_ego} />
        <h3>Ver más...</h3>
        </Card>
    </>
  )
}

export default CardHero