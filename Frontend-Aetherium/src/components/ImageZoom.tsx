import React, { useRef } from "react"

const ImageZoom = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  const handleMouseMove = (e) => {
    const container = containerRef.current
    const image = imageRef.current

    if (container && image) {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      const xPercent = (x / width) * 100
      const yPercent = (y / height) * 100

      image.style.transformOrigin = `${xPercent}% ${yPercent}%`
    }
  }

  const handleMouseLeave = () => {
    if (imageRef.current) {imageRef.current.style.transformOrigin = "center"}
  }

  return (
    <div
      className="image-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/images/images/shrekZesty.jpg"
        alt="an shrek representaion with zoomable abilities"
        className="zoom-image"
        ref={imageRef}
      />
    </div>
  )
}

export default ImageZoom
