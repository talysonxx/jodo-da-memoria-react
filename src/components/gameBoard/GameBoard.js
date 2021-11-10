import React from 'react'
import {CardElement} from '../cardElement'

export const GameBoard = ({cards, handleFlip}) => {
  return (
    <div id='game-board'>
      {cards.map((card, index) =>
        <CardElement handleFlip={handleFlip} key={index} card={card}/>
      )}
    </div>
  )
} 
