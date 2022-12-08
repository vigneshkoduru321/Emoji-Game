/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {win: false, playing: true, clickedId: [], score: 0, topScore: 0}

  click = id => {
    const {clickedId, playing} = this.state
    if (clickedId.includes(id)) {
      this.setState(prevState => ({playing: !prevState}))
    } else {
      this.setState(prevState => ({clickedId: [...prevState.clickedId, id]}))
      const lengthh = clickedId.length
      this.setState({score: lengthh + 1})
      if (clickedId.length === 11) {
        this.setState(prevState => ({win: !prevState.win, playing: !playing}))
      }
    }
  }

  play = score => {
    const {topScore, clickedId, win} = this.state
    this.setState(prevState => ({
      clickedId: [],
      playing: !prevState.playing,
      score: 0,
      win: !prevState.win,
    }))
    if (topScore < score) {
      this.setState({topScore: score})
    }
  }

  render() {
    const {clickedId, playing, score, topScore, win} = this.state
    const detailsNav = {score, topScore}
    const detailsWinLose = {score, win}
    console.log(clickedId)
    console.log(playing)
    console.log(score)

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {emojisList} = this.props

    const emojisLList = shuffledEmojisList()
    return (
      <div>
        <NavBar details={detailsNav} />
        <ul>
          {playing && (
            <div className="main-background">
              <div className="background">
                {emojisLList.map(each => (
                  <EmojiCard
                    clicked={this.click}
                    details={each}
                    key={each.id}
                  />
                ))}
              </div>
            </div>
          )}
          {!playing && (
            <WinOrLoseCard play={this.play} details={detailsWinLose} />
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
