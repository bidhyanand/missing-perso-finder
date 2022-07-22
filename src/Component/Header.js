import { Button, Flex, GridItem,  SimpleGrid, Wrap, WrapItem ,useDisclosure, Text, Avatar, Image, Menu, MenuButton, MenuItem, Portal, MenuList, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody,} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { headingColor } from '../constant/color'
import { lastName, login, missingPersonFinder, signup } from '../constant/data'
import Login from './Login'
import Signup from './Signup'
import ModalShow from '../Modal/Modal'
import { Link, useNavigate } from 'react-router-dom'
import {TbUserSearch} from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../reducers/userSlice'
import { FaAlignJustify } from 'react-icons/fa'
import SidebarDataMap from './SidebarDataMap'
const Header = () => {

    // selector ma baskeo data lai call gareko type sucess xa bbhane userko detail dekhauna lai         
    const selector = useSelector(state=>state.UserData.yes)
    console.log(selector);
        // function for handleLogin
        const handleLogin=()=>{
            onOpen()
                }
                // function for handleSignup
            const handleSignup=()=>{
            setSignupModel(!signupModel)
            }
              // event for first model
    const { isOpen, onOpen, onClose } = useDisclosure()
    // state to check second model
    const [signupModel,setSignupModel]=useState(false)

    // event for logout modal
    const[isLogout,setIsLogout]=useState(false)

    // modal function for logout
    const modalLogout=()=>{
        setIsLogout(!isLogout)
        console.log("i am working go else")
    }

    // reducer wata data launa lai dispatch garya ho
    const dispatch=useDispatch()

// for navigation
const navigate=useNavigate()

    // function for handleLogout
    const handleLogout=()=>{
        console.log("handle log here")
        modalLogout()
        
    }

    // this function is for logout button inside the modal
    const handleLogoutModal=()=>{
      dispatch(logout())
      navigate('/')
    }

// event for drawer modal
const[isDrawerOpen,setIsDrawerOpen]=useState(false)

// modal function for drawer
const handleDrawer=()=>{
  setIsDrawerOpen(!isDrawerOpen)
}



const date= new Date().toLocaleString()
// console.log(date);


  
const [time, setTime] = useState(date);




useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date().toLocaleString())
  }, 1000);
  return () => clearInterval(interval);
}, []);




   
  return (
    <div>
        <Flex justifyContent={{"base":"space-around", "md":"space-between" }} bgColor={headingColor} pt={5} pb={5} pl={{"md":"10"}} >
           <Flex gap={3}  >
            <Box display={{ base: "none", md: "inline-block" }} >

            <TbUserSearch fontSize={"35px"} />
           
            </Box>
         
            <Box display={{ base: "inline-block", md: "none" }}   >

           <FaAlignJustify fontSize={"35px"} onClick={handleDrawer}  />

            </Box>
                <Text
                    fontFamily="heading"
                    fontWeight={"bold"}
                    fontSize="20px"
                >

                   <Link to="/missingPersonFinder/homeDashBoard"> {missingPersonFinder} </Link>

                </Text>

                <Text  fontFamily="heading"
                    fontWeight={"bold"}
                    fontSize="20px">
            

                </Text>
                <Text  
                display={{base:"none",md:"inline-block"}}
                fontFamily="heading"
                    fontWeight={"bold"}
                    fontSize="20px">
                {time}
                </Text>

           </Flex>


            {selector?.type === "success"?
           <>
           <Flex pr={{"base":"0" , "md":"20"}}  >
     <Menu  >
<MenuButton>
<Text
     fontWeight="bold"
      fontSize="20px"
     >
      {selector.details.firstname }    {
            selector.details.lastname
           }
      </Text>
</MenuButton>
      <MenuList>
        <MenuItem
        onClick={handleLogout}>
            LogOut
        </MenuItem>
      </MenuList>

     </Menu>


     < AlertDialog
        isOpen={isLogout}
        onClose={modalLogout}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Logout Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={modalLogout}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleLogoutModal} ml={3}>
                LogOut
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
           

           </Flex>
           </>
            :

<Flex pr={{"md":"20"}} >
                    <Button variant='ghost'
                    colorScheme={headingColor}
                    onClick={handleLogin}
                    >
                        {login}
                    </Button>

                    <Button variant='ghost'
                    colorScheme={headingColor}
                    onClick={handleSignup}
                    >
                        {signup}
                    </Button>
                    
                </Flex> 
            }




            </Flex>
            <SimpleGrid column={3} >
    <GridItem colSpan={1} pl={{"base":"1","md":"10"}} mt="5">

    </GridItem>
    </SimpleGrid>
     {/* form showing Modal */}

     <ModalShow isModalOpen={isOpen} isModalClose={onClose} title="Login" >
<Login toClose={onClose} />
</ModalShow>

{/* modal for signup */}
<ModalShow isModalOpen={signupModel} isModalClose={setSignupModel} title="Signup" >
    <Signup/>
</ModalShow>


{/* for drawer */}
<Drawer
        isOpen={isDrawerOpen}
        placement='left'
        onClose={handleDrawer}
       
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
<SidebarDataMap/>


          </DrawerBody>

         
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default Header