// import React from 'react';
// import logo from '../assets/Images/logo.png';
// import '../css/navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar-custom">
//       <div className="logo">
//         <img src={logo} alt="logo" />
//       </div>

//       <div className="menu">
//         <span><p className="menuItem">Home</p></span>
//         <span><p className="menuItem"><a href="#about">About Us</a></p></span>
//         <span><p className="menuItem"><a href="#gallery">Gallery</a></p></span>
//         <span><p className="menuItem"><a href="#services">Services</a></p></span>
//         <span><p className="menuItem"><a href="#projects">Projects</a></p></span>
//         <button className="btn btn-outline-primary"><a href="#contact">Contact Us</a></button>
//       </div>

//       <div className="hamburger">
//         <i className="fa-solid fa-bars"></i>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import logo from '../assets/Images/logo.png';
import '../css/navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

const Navbar = () => {
 return (
  <div className="navbar navbar-expand-md  shadow-sm">
  <div className="container-xl">
    <img src={logo} alt="logo" className="nav-brands" />
    <button className="navbar-toggler" data-bs-target="#links" data-bs-toggle="collapse">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div id="links" className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Project</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-primary ms-lg-3" type="button">
              Contact Us
            </button>
          </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Navbar