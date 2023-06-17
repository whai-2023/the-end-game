import { Link } from 'react-router-dom'

export default function CharacterButton() {
  return (
    <div>
      <Link to={'/character/game'}>
        <button>Charcter 1</button>
      </Link>
      <Link to={'/character/game'}>
        <button>Charcter 2</button>
      </Link>
      <Link to={'/character/game'}>
        <button>Charcter 3</button>
      </Link>
      <Link to={'/character/game'}>
        <button>Charcter 4</button>
      </Link>
      <Link to={'/character/game'}>
        <button>Charcter 5</button>
      </Link>
    </div>
  )
}
