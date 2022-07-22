import { Box, Flex, Text ,Button,PinInput,PinInputField, HStack,FormControl,FormLabel,InputGroup,Input,InputRightElement,} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {  headingColor } from "../constant/color"
import {  otp, password, resetPassword, reTypePassword } from "../constant/data"
const OtpHandler=()=>{
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm()
    const[show,setShow]=useState(false)
    const onSubmit=async(data)=>{
        console.log(data)
let response=await axios.post("https://ymissing.herokuapp.com/api/auth/reset",data)
if(response.data.type==="error"){
  toast.error(response.data.msg,{
    autoClose:2000
  })
}
else{
  toast.success("Password changed sucessfuly",{
    icon:"🚀",
    autoClose:2000
    })
}
}

        navigate('/')

  
    const handleClick=()=>{
        setShow(!show)
        
    }
   
    return(
        <div>
<Flex justifyContent="center" >
    <Box>
        
        <Text
        color={headingColor}
        fontSize="3xl"
        fontWeight="bold"
        fontStyle="italic"
        fontFamily="cursive"
        >{otp}</Text>
<br/>

<HStack>
    
  <PinInput {...register("code",{required:true})} type='alphanumeric' isInvalid >
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
  </HStack>
  <br/>
  <form onSubmit={handleSubmit(onSubmit)} >
  <FormControl isRequired >
<FormLabel>{password}</FormLabel>
<InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        {...register("pw",{required:true})}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormControl>
    <br/>
    <FormControl isRequired >
<FormLabel>{reTypePassword}</FormLabel>
<InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Re-Type Password'
        {...register("rpw",{required:true})}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </FormControl>
<br/>
        <Flex justifyContent="center" >
<Button 
width="100%"
backgroundColor={headingColor}
type="submit"
>{resetPassword}</Button>
</Flex>
</form>
    </Box>
</Flex>
        </div>
    )
}
export default OtpHandler