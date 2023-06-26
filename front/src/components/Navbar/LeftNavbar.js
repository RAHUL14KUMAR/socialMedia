import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard'
import SideDrawer from '../sideDrawer/SideDrawer'

function LeftNavbar() {
  return (
    <div className='col-sm-3'>
        <SideDrawer/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default LeftNavbar