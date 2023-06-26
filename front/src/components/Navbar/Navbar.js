import React from 'react'
import Left from './LeftNavbar'
import Middle from './MiddleNavbar'
import RightNavbar from './RightNavbar'
function Navbar() {
  return (
    <div className='d-flex justify-content-space-between'>
        <Left/>
        <Middle/>
        <RightNavbar/>
    </div>
  )
}

export default Navbar
