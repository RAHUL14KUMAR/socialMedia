import React,{useState} from 'react'
import {InputGroup, InputRightElement, VStack} from '@chakra-ui/react'
import { FormControl,FormLabel,Input,Button,useToast} from '@chakra-ui/react'
import axios from 'axios'

function Signup() {

    const toast=useToast();
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmpassword]=useState("");

    const [show,setShow]=useState(false);

    const handler=()=>{
        setShow(!show);
    }
    const submitHandler=async()=>{
        if(!password||!firstname||!lastname||!username||!confirmpassword){
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            return;
        }
        if(password!==confirmpassword){
            toast({
                title: "enter correct password",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            return;
        }
        try{
            const options={
                headers:{
                    "Content-type":"application/json"
                }
            }
            const {data}=await axios.post(
                `http://localhost:5000/auth/register`,{username,password,firstname,lastname},options)
                toast({
                    title:"registeration successfull",
                    status:"success",
                    duration:5000,
                    isClosable:true,
                    position:"top"
                })
            console.log(data);
            localStorage.setItem("userInfo",JSON.Stringify(data.user));
        }catch(error){
            toast({
                title: "Error Occured!",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
        }
    }

  return (
    <VStack spacing='5px' color='black'>
        <div class='d-flex'>
        <FormControl id='firstname' style={{margin:4+'px'}}isRequired>
        <FormLabel>
            FIRSTNAME
        </FormLabel>
        <Input
            placeholder='firstname call'
            value={firstname}
            onChange={(e)=>setFirstName(e.target.value)}
        />
        </FormControl>
        <FormControl id='lastname' style={{margin:4+'px'}} isRequired>
        <FormLabel>
            LastNAME
        </FormLabel>
        <Input
            placeholder='lastname call'
            value={lastname}
            onChange={(e)=>setLastName(e.target.value)}
        />
        </FormControl>
        </div>
      
      <FormControl id='name' isRequired>
        <FormLabel>
            UserName
        </FormLabel>
        <Input
            value={username}
            placeholder='enter your username'
            onChange={(e)=>setUserName(e.target.value)}
        />
      </FormControl>
      <FormControl id='Password' isRequired>
        <FormLabel>
            PASSWORD
        </FormLabel>
        <InputGroup>
        <Input
            type={show?'text':'password'}
            placeholder='enter your password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width='4.75rem'>
            <Button h='1.75rem' size='sm' onClick={handler}>
                {show?"hide":"show"}
            </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="passwords" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm"  onClick={handler}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="orange"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  )
}

export default Signup
