import { Link } from 'react-router-dom'

export default function Startbutton() {
  return (
    <div className="startbuttonposition">
      <Link to={'/game'}>
        <button className="startbutton">Start Game</button>
      </Link>
    </div>
  )
}
