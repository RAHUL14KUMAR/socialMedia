import React from 'react'
import './Side.css'
import { Box,Button, Drawer} from '@chakra-ui/react';
import { DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'; 
import { UilSearch } from '@iconscout/react-unicons'
import Logo from '../../img/logo.png'
import InfoCard from '../InfoCard/InfoCard'

function SideDrawer() {
    const {isOpen,onOpen,onClose}=useDisclosure();
  return (
    <div>
      <Box className=" mt-1" display="flex" bg="white" w="100%">
        <Button variant='white' onClick={onOpen}>
        <img src={Logo} style={{width:40+'px',height:20+'px'}} alt="" />
        
        </Button>
        <div className="d-flex">
            <div className="search d-flex">
                <input  variant="dark" type="text" placeholder="#Explore" style={{color:'black',border:2+'px',borderStyle:'solid',borderRadius:3+'px'}}/>
                <div style={{background:'white',marginLeft:2+'px'}}>
                <div className="s-icon mt-1 "style={{color:'white',marginLeft:2+'px',cursor:'pointer',background:'orange',width:1.5+'em',height:1.48+'em',borderRadius:5+'px'}}>
                    <UilSearch/>
                </div>
                </div>
            </div>
            </div>
        </Box>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Update User</DrawerHeader>
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
