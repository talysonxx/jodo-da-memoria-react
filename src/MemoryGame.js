import {Fragment, useState, useEffect} from 'react'
import {GameBoard, GameOver} from './components'
import game from './game/game'

function MemoryGame() {
  const [gameOver, setGameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.createCardsFromTechs())
  }, [])

  function restart() {
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
  }
  function handleFlip(card) {
    game.flipCard(card.id, 
      // gameOverCallBack
      () => {setGameOver(true)}, 
      // noMatchCallBack
      () => {setCards([...game.cards])})

      setCards([...game.cards])
  }

  return (
    <Fragment>
      <GameBoard cards={cards} handleFlip={handleFlip}/>
      <GameOver show={gameOver} restart={restart}/>
    </Fragment>
  )
}

export default MemoryGame
