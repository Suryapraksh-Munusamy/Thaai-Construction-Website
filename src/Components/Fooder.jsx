import '../css/Footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-light  p-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="logo">
            <i className="fas fa-industry fa-2x"></i>
          </div>

          <div className="contact text-center ">
            <div className="contact1 mb-2 ">
              <i className="fas fa-phone me-2 "></i>
              <span>+91-1234567890</span>
            </div>
            <div className="contact1">
              <i className="fas fa-location-dot me-2"></i>
              <span>10, Vivekanandhar Street, Cross Street, Dubai</span>
            </div>
          </div>

          <div className="socialMedia mt-3 mt-md-0">
            <i className="fab fa-square-facebook fa-lg me-3"></i>
            <i className="fab fa-square-instagram fa-lg me-3"></i>
            <i className="fab fa-youtube fa-lg"></i>
          </div>
         

      </div>
    </footer>
  )
}

export default Footer