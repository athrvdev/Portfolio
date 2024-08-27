import React from 'react'
import '../styles/Card.css'

const Card = ({
    image,
    name,
    surname,
    subtitle,
    description,
    onProfile,
    onFollow
}) => {
  return (
    <div className='card'>
        <img src={image} />
        <div>
            <h1 className="tracking-tighter">{name}</h1>
            <h1 className="tracking-wider font-whisper whisper-regular">{surname}</h1>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            <div className='buttons'>
                <button onClick={onProfile}>
                    Profile
                </button>
                <button onClick={onFollow} className='primary'>
                    Follow
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card