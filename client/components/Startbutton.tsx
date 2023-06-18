import { Link } from 'react-router-dom'

export default function Startbutton() {
  return (
    <div className="button-position">
      <Link to={'/character'}>
        <button className="alternate-button">Start Game</button>
      </Link>
    </div>
  )
}
