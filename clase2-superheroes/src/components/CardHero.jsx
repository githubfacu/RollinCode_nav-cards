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
              height: '100%'
          }}
          cover={<img alt={superheroe.alter_ego} src={superheroe.url} height={350}
          style={{
            objectFit: 'cover',
            objectPosition: 'top'
          }}/>}
        >
          <Meta title={superheroe.superhero} description={superheroe.alter_ego} />
          <h4 style={{fontWeight: '500', textAlign: 'center', marginBottom: 0, color: '#484848', fontSize: '14px'}}>Ver detalle</h4>
        </Card>
    </>
  )
}

export default CardHero