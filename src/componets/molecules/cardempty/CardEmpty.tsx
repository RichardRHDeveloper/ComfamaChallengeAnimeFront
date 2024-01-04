import { FC } from 'react'
import './cardEmpty.scss'
import LoadingSpinner from '../../atoms/loading/LoadingSpinner'

const CardEmpty: FC = () => {
  return (
    <div className='card_empty'>
        <LoadingSpinner/>
    </div>
  )
}

export default CardEmpty