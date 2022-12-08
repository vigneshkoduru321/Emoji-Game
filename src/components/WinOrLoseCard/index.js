// Write your code here.
const WinOrLoseCard = props => {
  const {details, play} = props
  const {score, win} = details
  const playClick = () => {
    play(score)
  }
  return (
    <div className="main-background">
      {!win && (
        <li className="background">
          <div className="score-info">
            <h1>You Lose</h1>
            <p>Score</p>
            <p>{score}/12</p>
            <button onClick={playClick}>Play Again</button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
            />
          </div>
        </li>
      )}
      {win && (
        <li className="background">
          <div className="score-info">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>{score}/12</p>
            <button onClick={playClick}>Play Again</button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
            />
          </div>
        </li>
      )}
    </div>
  )
}

export default WinOrLoseCard
