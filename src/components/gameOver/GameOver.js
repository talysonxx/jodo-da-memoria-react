import React, {Fragment} from 'react'

export const GameOver = ({show, restart}) => {
  return (
    show ? 
      <div id='game-over'>
        <div>
        &lt;&lt;Congratulations!!!&gt;&gt; You finished the game
        </div>
        <button id="restart" onClick={restart}>Restart</button>
      </div> : <Fragment></Fragment>
  )
}
