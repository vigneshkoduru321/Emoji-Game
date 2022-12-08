// Write your code here.

import './index.css'

const NavBar = props => {
  const {details} = props
  const {score, topScore} = details
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        alt="emoji logo"
      />
      <h1>Emoji Game</h1>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </nav>
  )
}

export default NavBar
