import React from 'react'
import './Navbar.css'
import NavIcons from '../NavIcons/NavIcons'
import TrendCard from '../TrendCard/TrendCard'
import { useDisclosure } from '@chakra-ui/react'; 
import { Box, Drawer} from '@chakra-ui/react';
import { DrawerBody, DrawerContent, DrawerOverlay} from "@chakra-ui/react";
import { BsArrowBarLeft } from 'react-icons/bs';

function RightNavbar() {
    const {isOpen,onOpen,onClose}=useDisclosure();
  return (
    <Box className='col-sm-12 d-flex flex-column'>
      <div variant='white' onClick={onOpen}className="mt-2">
          <div className='icons'>
          <BsArrowBarLeft/>
          </div>
      </div>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerBody>
          <NavIcons/>
          <Box>
          <TrendCard/>
          </Box>
        </DrawerBody>
      </DrawerContent>
      </Drawer>
      <div className="non-icons">
      <NavIcons/>
      <TrendCard/>
      </div>
    </Box>
  )
}

export default RightNavbar
