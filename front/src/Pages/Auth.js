import React from 'react'
import Logo from "../img/logo.png";
import {
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';

import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

function Auth() {
  return (
    <div className='d-flex align-items-center' style={{width:100+'vw',height:100+'vh'}}>
        <div className="container d-flex justify-content-center mt-4">
            <div className="row  d-flex align-items-center mt-3">
                <div className="col-sm-6 d-flex p-2">
                    <img src={Logo} alt=""/>
                    <div>
                        <h1>LETS SHARE</h1>
                        <h6>explore ideas throughout the world</h6>
                    </div>
                </div>
                <div className="col-sm-6  bg-white mt-1" style={{border:3+'px',borderColor:'orange' ,borderStyle:'solid',marginBottom:2+'em'}}>
                    <Tabs variant='soft-rounded' colorScheme='orange'>
                        <TabList mb='1em'>
                            <Tab width='50%' style={{marginTop:4+'px'}}>Login</Tab>
                            <Tab width='50%' style={{marginTop:4+'px'}}>Signup</Tab>
                        </TabList>
                    <TabPanels>
                            <TabPanel>
                                <Login/>
                            </TabPanel>
                            <TabPanel>
                                <Signup/>
                            </TabPanel>
                    </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth
