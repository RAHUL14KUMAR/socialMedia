import React from 'react'
import './Side.css'
import { Box,Button, Drawer} from '@chakra-ui/react';
import { DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import Logo from '../../img/logo.png'
import InfoCard from '../InfoCard/InfoCard'

function SideDrawer() {
    const {isOpen,onOpen,onClose}=useDisclosure();
  return (
    <div>
      <Box className=" mt-1" display="flex" bg="white" w="100%">
        <Button variant='white' onClick={onOpen}>
        <img src={Logo} className='navicon'alt="" />
        
        </Button>
        </Box>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Your Account</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <InfoCard/>
            </Box>
          </DrawerBody>
        </DrawerContent>
        </Drawer>
    </div>
  )
}

export default SideDrawer
