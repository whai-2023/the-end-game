import { useEffect, useState } from 'react'

const RUNNING_IMAGES = [6, 5, 4, 3, 2, 1]
const MAX_INDEX = RUNNING_IMAGES.length - 1

const PlayerInGame: React.FC = () => {
  const [isJumping, setIsJumping] = useState(false)
  const [positionY, setPositionY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' && !isJumping) {
        setIsJumping(true)
        jump()
      }
    }

    const jump = () => {
      const jumpHeight = 200
      const jumpDuration = 800
      const startPositionY = positionY

      let begin: number | null = null

      function animateJump(timestamp: number) {
        if (begin === null) begin = timestamp
        const progress = timestamp - begin
        const elapsedTime = Math.min(progress, jumpDuration)
        const percentageComplete = elapsedTime / jumpDuration
        const translateY =
          jumpHeight * percentageComplete * (1 - percentageComplete)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1 > MAX_INDEX ? 0 : index + 1))
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [isJumping])

  const imageToRender = isJumping ? 5 : RUNNING_IMAGES[currentImageIndex]

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
        {/* Render the moving cat */}
        <img
          src={`/catMoving/${imageToRender}.png`}
          alt="cat"
          style={{
            position: 'absolute',
            bottom: positionY,
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
