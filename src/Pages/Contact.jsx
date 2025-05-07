// import React from 'react'

// const Contact = () => {
//   return (
//     <div className="contact shadow-sm p-3 ">
//     <div className="container">
//       <h2 className="text-center mb-4">Contact Page</h2>
//       <div className="row d-flex justify-content-center shadow-sm p-3 m-3 bg-light rounded">
       
//         <div className="col-12 col-md-6 ">
//           <form>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name:</label>
//               <input type="text" className="form-control" id="name" placeholder="Your Name" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="mobile" className="form-label">Mobile No:</label>
//               <input type="tel" className="form-control" id="mobile" placeholder="Enter Mobile No" required autoComplete="on" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email:</label>
//               <input type="email" className="form-control" id="email" placeholder="Enter Email" required autoComplete="on" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="address" className="form-label">Address:</label>
//               <input type="text" className="form-control" id="address" placeholder="Enter Address" required autoComplete="on" />
//             </div>
//             <div className="mb-3">
//               <button className="btn btn-outline-primary">Submit</button>
//             </div>
//           </form>
//         </div>

      
//         <div className="col-12 col-md-6 mb-4">
//           <div className="map-responsive mb-3">
//             <iframe  title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.683566044761!2d78.3762712209009!3d10.893616670026013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa442d43776143%3A0x998a4676a35d3dfe!2sSathiyamangalam%2C%20Tamil%20Nadu%20639120!5e0!3m2!1sen!2sin!4v1744012134935!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//           </div>


//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }


// export default Contact



import React from 'react'

const Contact = () => {
  return (
    <div className="contact shadow-sm p-3">
      <div className="container">
        <h2 className="text-center mb-4">Contact Page</h2>
        <div className="row d-flex justify-content-center shadow-sm p-4  bg-light rounded">
            <div className="col-12 col-md-4   text-start ">
            <div className="contact1 mb-5 ps-2 ">
              <i className="fas fa-location-dot me-2"></i>
              <span className="ms-2">Sathyamangalam, Sathyamangalam Taluk,Erode District,Tamilnadu-638401,India</span>
            </div>
            <div className="contact1 mb-5 ps-2 ">
              <i className="fas fa-phone me-2"></i>
              <span className="ms-2">+91-9524336143</span>
            </div>
            <div className="contact1 mb-5 ps-2">
              <i className="fas fa-envelope me-2"></i>
              <span className="ms-2">abcde@gmail.com</span>
            </div>
            <div className="socialMedia   mb-3 ps-2">
              <i className="fab fa-facebook fa-lg me-4"></i>
              <i className="fab fa-instagram fa-lg me-4"></i>
              <i className="fab fa-youtube fa-lg"></i>
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="map-responsive mb-3">
              <iframe
                title="Google Map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.683566044761!2d78.3762712209009!3d10.893616670026013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa442d43776143%3A0x998a4676a35d3dfe!2sSathiyamangalam%2C%20Tamil%20Nadu%20639120!5e0!3m2!1sen!2sin!4v1744012134935!5m2!1sen!2sin" width="100%" height="300"style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact