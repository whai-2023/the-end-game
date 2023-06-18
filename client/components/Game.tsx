import Clouds from './Clouds'
import PlayerInGame from './PlayerInGame'
import Obstacle from './Obstacle'

const Game: React.FC = () => {
  return (
    <div>
      <Clouds />
      <Obstacle />
      <PlayerInGame />
    </div>
  )
}
export default Game
