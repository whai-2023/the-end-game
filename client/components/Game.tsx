import { useEffect, useState } from 'react'

const Game: React.FC = () => {
  const [isJumping, setIsJumping] = useState(false)
  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        if (!isJumping) {
          setIsJumping(true)
          jump()
        }
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        setIsJumping(false)
      }
    }

    const jump = () => {
      const jumpHeight = 100
      const jumpDuration = 1500

      let begin: number | null = null
      const startPositionY = 0
      function animateJump(timestamp: number) {
        if (begin === null) begin = timestamp
        const progress = timestamp - begin
        const translateY = Math.min(
          (progress / jumpDuration) * jumpHeight,
          jumpHeight / 2
        )
        setPositionY(startPositionY - translateY)
        document.body.style.backgroundPositionY = `calc(50% + ${translateY}px)`
        if (progress < jumpDuration) {
          requestAnimationFrame(animateJump)
        } else {
          setPositionY(startPositionY)
        }
      }

      requestAnimationFrame(animateJump)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
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
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Render the object */}
        <div
          style={{
            position: 'absolute',
            bottom: positionY,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '50px',
            backgroundColor: 'red',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Game
