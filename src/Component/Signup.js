import {
    Flex, Input,
    InputRightElement,
    Button,
    InputGroup,
    FormLabel,
    FormControl

} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { emailAddress, firstName,  lastName, password, signup, userName } from "../constant/data"
const Signup = () => {
    // input hook form (isSubmitting react hook form ko default ho yo formState ma use garna sakinxa errors jasta)
    const { register, handleSubmit, formState: {errors, isSubmitting } } = useForm()
    // show hide button states
    const [show, setShow] = useState(false)
    // function for show hide button
    const handleClick = () => {
        setShow(!show)
    }
    // onSubmit function
    const onSubmit = async (data) => {
        console.log(data)
// api calling for signup form
        let response = await axios.post("https://ymissing.herokuapp.com/api/auth/register",data)
        if (response.data.type === "error") {
            // toast for error message
            toast.error(response.data.msg, {
            
                autoClose: 2000
            })
        }
        else{
            // toast for sucess message
            toast.success(response.data.msg,{
                icon: "🚀",
                autoClose : 2000})
        }
    }
    return (
        <>

            <br />

            <Flex justifyContent={'center'} >

                {/* <Box>
                  w={{ "base": "80%", md: "30%" }}
                  border={"2px solid black"}

                  <Center
                      h={{ "base": "40px", md: '80px' }}
                      bg={headingColor}>
                      <Text
                       color={"white"} 
                      fontWeight={"bold"}
                      > {signup } Account </Text>
                  </Center> */}
                {/* <Box p={10} > */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <FormControl  >
                    {/* email address input field */}  
                        <FormLabel htmlFor='email'>{emailAddress}</FormLabel>
                        <Input
                            {...register("email", { required: "Enter valid Email" })}
                            variant='outline'
                            placeholder='Enter Email Address' />
                            <p>{errors.email?.message}</p>
                    </FormControl>
                    <br />
                    {/* firstname input field */}
                    <FormControl  >
                        <FormLabel>{firstName}</FormLabel>
                        <Input
                            {...register("firstname", { required: "Enter First Name" })}
                            variant='outline'
                            placeholder='Enter First Name' />
                            <p>{errors.firstname?.message}</p>
                    </FormControl>
                    <br />
                    {/* lastname input field */}
                    <FormControl  >
                        <FormLabel >{lastName}</FormLabel>
                        <Input
                            {...register("lastname", { required: "Enter Last Name" })}
                            variant='outline'
                            placeholder='Enter Last Name' />
                            <p>{errors.lastname?.message}</p>
                    </FormControl>
                    <br />
                    {/* username input field */}
                    <FormControl  >
                        <FormLabel >{userName}</FormLabel>
                        <Input
                            {...register("username", { required: "Enter Username" })}
                            variant='outline'
                            placeholder='Enter  Username' />
                            <p>{errors.username?.message}</p>
                    </FormControl>
                    <br />
                    {/* password input field */}
                    <FormControl  >
                        <FormLabel>{password}</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                variant='outline'
                                {...register("password", { required: "Enter Your Password" })}
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            {/* hide shoe button control */}
                            <InputRightElement width='4.5rem'>
                                <Button
                                
                                h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <p>{errors.password?.message}</p>
                    </FormControl>
                    <br />
                    {/* signup button */}
                    <Button
                    // isSubmitting suru ma false hunxa jasle garda button dekhaira hunxa click garepaxi true hunxa ra button disabled hunxa
                    disabled = {isSubmitting}
                    isLoading = {isSubmitting}
                        size='md'
                        height='48px'
                        width={{ base: "100%", md: "100%" }}
                        border='2px'
                        type="submit" > {signup}
                    </Button>




                </form>
                {/* </Box> */}
                {/* </Box> */}

            </Flex>

        </>
    )
}
export default Signup