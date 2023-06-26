import React from 'react'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'

function MiddleNavbar() {
  return (
    <div className='col-sm-6 mx-2'>
      <PostShare/>
      <Posts/>
    </div>
  )
}

export default MiddleNavbar
