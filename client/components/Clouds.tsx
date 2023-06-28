import React, { useEffect } from 'react'
import cloudImage from '../../public/cloud/1.png' // Update the image file path
import '../main.css' // Import the CSS file

const Clouds: React.FC = () => {
  useEffect(() => {
    const setInitialCloudPosition = () => {
      const cloud = document.querySelector('.clouds') as HTMLImageElement
      const container = document.querySelector('.container') as HTMLDivElement

      if (cloud && container) {
        const containerWidth = container.offsetWidth
        const cloudWidth = cloud.offsetWidth

        cloud.style.animationDuration = '10s' // Animation duration in seconds
        cloud.style.animationName = 'slide'
        cloud.style.animationIterationCount = 'infinite' // Repeat the animation indefinitely
        cloud.style.right = `calc(${containerWidth}px - ${cloudWidth}px)`
      }
    }

    setInitialCloudPosition()

    window.addEventListener('resize', setInitialCloudPosition)

    return () => {
      window.removeEventListener('resize', setInitialCloudPosition)
    }
  }, [])

  return (
    <div className="container">
      <img src={cloudImage} alt="Clouds" className="clouds" />
    </div>
  )
}

export default Clouds
