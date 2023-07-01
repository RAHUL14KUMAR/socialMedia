import React from 'react'
import Left from './LeftNavbar'
import Middle from './MiddleNavbar'
import RightNavbar from './RightNavbar'
function Navbar() {
  return (
    <div className='d-flex justify-content-space-between'>
      <div className="col-lg-3 ">
      <Left/>
      </div>
        <Middle/>
        <div className="col-lg-3 ">
          <RightNavbar/>
        </div>
    </div>
  )
}

export default Navbar
