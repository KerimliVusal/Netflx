import React from 'react'

function Footer() {
  return (
   <div style={{backgroundColor:"#000"}}>
      <div className='container'>
      <div className="row py-70 justify-content-center">
        <div className="col-md-8">
        <h4 className='hero-text text-center text-white'>Ready to watch? Enter your email to create or restart your membership.</h4>
        <div className=' d-flex justify-content-center'>
        <div className="mt-3 inputGroup">
          <input type="text" className="form-control w-100 h-100" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn btn-danger" type="button" id="button-addon2">GET STARTED</button>
        </div>
        </div>

       <ul className='d-flex social-icons justify-content-center mt-3'>
          <li >
            <a className='social-links' href="#"><i className="fa-brands fa-facebook-f"></i></a>
          </li>
          <li >
            <a className='social-links' href="#"><i className="fa-brands fa-youtube"></i></a>
          </li>
          <li >
            <a className='social-links' href="#"><i className="fa-brands fa-twitter"></i></a>
          </li>
          <li >
            <a className='social-links' href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </li>
          <li >
            <a className='social-links' href="#"><i className="fa-brands fa-behance"></i></a>
          </li>
        </ul>
      </div>
    </div>
    </div>
   </div>
  )
}

export default Footer