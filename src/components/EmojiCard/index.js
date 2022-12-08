// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, clicked} = props
  const {emojiUrl, id, emojiName} = details
  const click = () => {
    clicked(id)
  }
  return (
    <li>
      <button onClick={click} className="card">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
