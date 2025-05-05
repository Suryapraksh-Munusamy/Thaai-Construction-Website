import React, { useEffect, useState } from 'react'

function ScrollAndSocialButtons() {
  const [showButtons, setShowButtons] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.body.offsetHeight

      setShowButtons(scrollY > 300)

      // Hide social buttons if near footer
      const footerOffset = 200 
      if (windowHeight + scrollY >= documentHeight - footerOffset) {
        setIsNearFooter(true)
      } else {
        setIsNearFooter(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showButtons) return null

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="position-fixed end-0 bottom-0 m-4 btn btn-primary shadow"
        style={{ zIndex: 1000 }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Social-Icons */}
      {!isNearFooter && (
        <div
          className="position-fixed start-0 bottom-0 m-4 d-flex flex-column gap-3"
          style={{ zIndex: 1000 }}
        >
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook fa-2x text-primary"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter fa-2x text-info"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x text-danger"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube fa-2x text-danger"></i>
          </a>
        </div>
      )}
    </>
  )
}

export default ScrollAndSocialButtons;
