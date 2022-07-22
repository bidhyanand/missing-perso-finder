import {
    Box,
    Flex, Input,
    Center,
    Text,
    Button,
    FormLabel,
    FormControl

} from "@chakra-ui/react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {  headingColor } from "../constant/color"
import { emailAddress, forgotPassword,  next, } from "../constant/data"
const ForgotPassword = () => {
    const { register, handleSubmit,formState:{errors,isSubmitting} } = useForm()
    const navigate=useNavigate()
    const onSubmit = async(data) => {
console.log(data)

let response=await axios.post("https://ymissing.herokuapp.com/api/auth/forgot",data)
if(response.data.type==="error"){
    toast.error(response.data.msg,{
        autoClose:2000
    })
}
else{
    toast.success("OTP code is send to gmail acccont.",{
        icon: "🚀",
        autoClose:2000
        
    })
}

navigate("/changePassword")
    }
    return (
        <>

            <br />

            <Flex justifyContent={'center'} >

                <Box
                    w={{ "base": "80%", md: "30%" }}
                    border={"2px solid black"}>

                    <Center
                        h={{ "base": "40px", md: '80px' }}
                        bg={headingColor}>
                        <Text
                         color={"white"} 
                        fontWeight={"bold"}
                        > {forgotPassword} </Text>
                    </Center>
                    <Box p={10}                 >
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <FormControl isRequired >
                            <FormLabel  htmlFor='email'>{emailAddress}</FormLabel>
                            <Input
                                {...register("email",{required:true})}
                                variant='outline'
                                placeholder='Email' />
                            </FormControl>
                            <br />
                           
                            <Button
                            isDisabled={isSubmitting}
                            isLoading={isSubmitting}
                                size='md'
                                height='48px'
                                width={{ base: "100%", md: "100%" }}
                                border='2px'
                                type="submit" > {next} 
                                </Button>
                                
                        </form>
                    </Box>
                </Box>

            </Flex>

        </>
    )
}
export default ForgotPassword