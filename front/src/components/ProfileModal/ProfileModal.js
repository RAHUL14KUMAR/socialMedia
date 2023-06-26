import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import {InputGroup, InputRightElement, VStack} from '@chakra-ui/react'
import { FormControl,FormLabel,Input,Button,useToast} from '@chakra-ui/react'

function ProfileModal({ modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  const handleSubmit=()=>{

  }
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your Info</h3>
        <VStack spacing='5px' color='black'>
        <div  class='d-flex'>
        <FormControl id='firstname' style={{margin:4+'px'}}>
        <FormLabel>
            FIRSTNAME
        </FormLabel>
        <Input
            placeholder='firstname call'
            type='text'
            // value={firstname}
            // onChange={(e)=>setFirstName(e.target.value)}
        />
        </FormControl>
        <FormControl id='lastname' style={{margin:4+'px'}}>
        <FormLabel>
            LastNAME
        </FormLabel>
        <Input
            placeholder='lastname call'
            type='text'
            // value={lastname}
            // onChange={(e)=>setLastName(e.target.value)}
        />
       </FormControl>
       <FormControl id='workat' style={{margin:4+'px'}}>
        <FormLabel>
            WORKAT
        </FormLabel>
        <Input
            placeholder='WORK PLACE'
            type='text'
            // value={lastname}
            // onChange={(e)=>setLastName(e.target.value)}
        />
       </FormControl>
        </div>

        <FormControl id='name'>
        <FormLabel>
            UserName
        </FormLabel>
        <Input
            type='text'
            // value={username}
            placeholder='enter your username'
            // onChange={(e)=>setUserName(e.target.value)}
        />
      </FormControl>

      <FormControl id='Password'>
        <FormLabel>
            PASSWORD
        </FormLabel>
        <InputGroup>
        <Input
            // type={show?'text':'password'}
            placeholder='enter your password'
            // value={password}
            // onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width='4.75rem'>
            <Button h='1.75rem' size='sm'>
                {/* {show?"hide":"show"} */}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
        <FormControl id='relation'>
        <FormLabel>
            RelationShip Status
        </FormLabel>
        <Input
            // value={username}
            type="text"
            placeholder='Relationship Status'
            // onChange={(e)=>setUserName(e.target.value)}
        />
      </FormControl>

        <FormControl className='d-flex'>
            <FormLabel>
                Profile image
            </FormLabel>
          <Input type="file" name="profileImage" />
          <FormLabel>
          Cover image
          </FormLabel>
          <Input type="file" name="coverImage"/>
        </FormControl>
        <Button
            colorScheme="orange"
            width="100%"
            style={{ marginTop: 15 }}
            // onClick={submitHandler}
        >
            Update User
        </Button>
        </VStack>
      </form>
    </Modal>
  );
};

export default ProfileModal;
