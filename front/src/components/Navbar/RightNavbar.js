import React, { useState } from 'react'
import './Navbar.css'
import NavIcons from '../NavIcons/NavIcons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import {Box} from '@chakra-ui/react'
function RightNavbar() {

    const [modalOpened, setModalOpened] = useState(false);
  return (
    <Box className='col-sm-3 d-flex flex-column'>
      <NavIcons/>
      <TrendCard/>
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </Box>
  )
}

export default RightNavbar
