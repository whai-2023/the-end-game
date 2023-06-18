import { Link } from 'react-router-dom'

export default function CharacterButton() {
  return (
    <div>
      <Link to={'/character/game'}>
        <button className="character cat"></button>
      </Link>
      <Link to={'/character/game'}>
        <button className="character dog"></button>
      </Link>
    </div>
  )
}
