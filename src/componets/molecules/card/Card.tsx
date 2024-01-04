import { FC } from 'react'
import { AnimeDataInterface } from '../../../interfaces/challengeAnime';
import './card.scss';

interface cardProps {
    animeData: AnimeDataInterface
}

const Card: FC<cardProps> = (props) => {
    const { animeData } = props;

    return (

        <div
            className='card'
            style={{ backgroundImage: `url(${animeData.images.jpg.image_url})` }}
        >
            <div className="card__info">
                <span>Title: {animeData.title}</span>
                <span>Recommendation: {animeData.recommendation}</span>
            </div>
            <span className='card__score'>Score: {animeData.score}</span>
        </div>
    )
}

export default Card