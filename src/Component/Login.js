import {
    Flex, Input,
    Text,
    InputRightElement,
    Button,
    InputGroup,
    FormLabel,
    FormControl

} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { emailAddress, forgotPassword, login, password } from "../constant/data"
import {  userData } from "../reducers/userSlice"
const Login = ({toClose}) => {
    // input hook form
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
    // show hide button states
    const [show, setShow] = useState(false)
    // function for show hide button
    const handleClick = () => {
        setShow(!show)
    }
    // data redux ma pathauna dispatch garya ho
    const dispatch = useDispatch()
    // onSubmit function
    const onSubmit = async (data) => {
        // api calling for login 
        const response = await axios.post("https://ymissing.herokuapp.com/api/auth/login", data)
        if (response.data.type === "error") {
            // toast message for error
            toast.error(response.data.msg, {
                autoClose: 2000
            })
        }
        else {
            // toast message for sucess
            toast.success("Login Sucessfull", {
                icon: "🚀",
                autoClose: 2000
            })
            dispatch(userData(response.data))
            toClose()
        }

    }
    return (
        <>

            <br />

            <Flex justifyContent={'center'} >

                {/* <Box> */}
                {/* w={{ "base": "80%", md: "30%" }}
                    border={"2px solid black"} */}

                {/* <Center
                        h={{ "base": "40px", md: '80px' }}
                        bg={headingColor}>
                        <Text
                         color={"white"} 
                        fontWeight={"bold"}
                        > {login} Account </Text>
                    </Center> */}
                {/* <Box p={10}  > */}



                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* email address input field */}
                    <FormControl >
                        <FormLabel htmlFor='email'>{emailAddress}</FormLabel>
                        <Input
                            {...register("email", { required: "Enter valid Email"})}
                            variant='outline'
                            placeholder='Email Address' />
                           <p> {errors.email?.message}</p>
                    </FormControl>

                    <br />
                    {/* password input field */}
                    <FormControl >
                        <FormLabel htmlFor='email'>{password}</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                variant='outline'
                                {...register("password", { required: "Enter Your Correct Password" })}
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                            {/* password hide show button */}
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <p>{errors.password?.message}</p>

                    </FormControl>
                    <br />
                    {/* login button */}
                    <Button
                        isDisabled={isSubmitting}
                        isLoading={isSubmitting}
                        size='md'
                        height='48px'
                        width={{ base: "100%", md: "100%" }}
                        border='2px'
                        type="submit" > {login}

                    </Button>



                    <Text
                        textAlign={'center'}
                        mt={10}
                        fontWeight="bold">
                        <Link to='/forgotPassword'>{forgotPassword} </Link>
                    </Text>
                </form>
                {/* </Box>
                </Box> */}

            </Flex>



        </>
    )
}
export default Login