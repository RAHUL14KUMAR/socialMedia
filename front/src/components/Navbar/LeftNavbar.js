import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard'
import SideDrawer from '../sideDrawer/SideDrawer'
import { BsBoxArrowRight } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/react'; 
import { Box,Button, Drawer} from '@chakra-ui/react';
import { DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";

function LeftNavbar() {
  const {isOpen,onOpen,onClose}=useDisclosure();

  return (
    <div className='col-sm-3'>
        <SideDrawer/>
        <div variant='white' onClick={onOpen}className="mt-2">
          <div className='icon'>
          <BsBoxArrowRight/>
          </div>
        </div>
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay/>
          <DrawerContent>
            <DrawerBody>
              <Box>
              <ProfileCard/>
              </Box>
            </DrawerBody>
            <DrawerBody>
              <Box>
              <FollowersCard/>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <div className="non-icon">
          <ProfileCard/>
          <FollowersCard/>
        </div>
    </div>
  )
}

export default LeftNavbar