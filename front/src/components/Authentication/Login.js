import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {InputGroup, InputRightElement, VStack} from '@chakra-ui/react'
import { FormControl,FormLabel,Input,Button,useToast} from '@chakra-ui/react'
import axios from 'axios'
import { useStateValue } from '../../StateProvider'


function Login() {

    const[{},dispatch]=useStateValue();

    const toast=useToast();
    const navigate=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [show,setshow]=useState(false);

    const handleClick=()=>{
        setshow(!show);
    }

    const submitHandler=async()=>{
        if(!username||!password){
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top"
              });
              return;
        }
        try{
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
        
              const { data } = await axios.post(
                `http://localhost:5000/auth/login`,
                { username, password },
                config
              );
              toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
              });
              localStorage.setItem("user", JSON.stringify(data.user));
            // console.log(JSON.stringify(data));
            // console.log(JSON.stringify(data.user._id));
            // console.log(data.user._id);
              navigate('/home');
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
                        <FormControl id='username' isRequired>
                            <FormLabel>
                                USERNAME
                            </FormLabel>
                            <Input 
                            type='text'
                            value={username}
                            placeholder='enter your username'
                            onChange={(e)=>setUserName(e.target.value)} />
                        </FormControl>
                        <FormControl id='Password' isRequired>
                            <FormLabel>
                                PASSWORD
                            </FormLabel>
                            <InputGroup>
                            <Input
                                type={show?'text':'password'}
                                value={password}
                                placeholder='enter your password'
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <InputRightElement width='4.75rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show?"hide":"show"}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                            colorScheme="orange"
                            width="100%"
                            style={{ marginTop: 15+"px" }} onClick={submitHandler}>
                            Login
                        </Button>
                    </VStack>
  )
}

export default Login
