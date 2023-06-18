import { useEffect, useState } from 'react'

const PlayerInGame: React.FC = () => {
  const [isJumping, setIsJumping] = useState(false)
  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' && !isJumping) {
        setIsJumping(true)
        jump()
      }
    }

    const jump = () => {
      const jumpHeight = 200
      const jumpDuration = 500

      let begin: number | null = null
      const startPositionY = positionY
      const gravity = 0.002 // Adjust gravity to control jump arc

      function animateJump(timestamp: number) {
        if (begin === null) begin = timestamp
        const progress = timestamp - begin
        const elapsedTime = Math.min(progress, jumpDuration)
        const percentageComplete = elapsedTime / jumpDuration
        const translateY =
          -jumpHeight * percentageComplete * (1 - percentageComplete)
        setPositionY(startPositionY + translateY)

        if (progress < jumpDuration) {
          requestAnimationFrame(animateJump)
        } else {
          setPositionY(startPositionY)
          setIsJumping(false)
        }
      }

      requestAnimationFrame(animateJump)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isJumping, positionY])

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Render the object */}
        <img
          src="../client/public/catMoving/2.png"
          alt="Object"
          style={{
            position: 'absolute',
            bottom: -positionY,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '50px',
          }}
        />
      </div>
    </div>
  )
}

export default PlayerInGame
