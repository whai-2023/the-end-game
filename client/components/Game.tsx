import React, { useEffect } from 'react'

const Game: React.FC = () => {
  useEffect(() => {
    const moveObject = () => {
      const movingObject = document.getElementById(
        'moving-object'
      ) as HTMLElement

      let position = 0 // Initial position
      const speed = 2 // Movement speed in pixels per frame

      const interval = setInterval(() => {
        position += speed
        movingObject.style.left = position + 'px'
      }, 16) // Run the code every ~16ms for smooth animation (60fps)

      // Clean up the interval on component unmount
      return () => {
        clearInterval(interval)
      }
    }

    moveObject()
  }, [])

  return (
    <div>
      <div
        id="moving-object"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
        }}
      ></div>
    </div>
  )
}

export default Game
