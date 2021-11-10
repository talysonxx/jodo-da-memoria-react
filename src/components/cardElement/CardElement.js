import React from 'react'

export const CardElement = ({card, handleFlip}) => {
  return (
    <div onClick={() => handleFlip(card)} id={card.id} className={`card ${card.flipped ? 'flip' : ''}`}>
      <div className='card-front'>
        <img className='icon'
        src={`assets/images/${card.icon}.png`}
        alt={card.icon}/>
      </div>
      <div className='card-back'>
        {'</>'}
      </div>
    </div>
  )
}
