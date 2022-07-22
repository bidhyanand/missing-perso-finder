import {
    Box,
    Flex, Input,
    Center,
    Text,
    Button,
    FormLabel,
    FormControl,
    SimpleGrid,
    GridItem
  
  } from "@chakra-ui/react"
  import Header from '../../Component/Header.js'
  import { useForm } from "react-hook-form"
  import { toast } from "react-toastify"
import { headingColor } from "../../constant/color"
import { contactPersonName, contactPersonNumber, missingPersonDetails, missingPersonName, post, uploadFile,location } from "../../constant/data"
import Sidebar from "../Sidebar.js"
import axios from "axios"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
  const PostMissingPersonForm = () => {
    const { register, handleSubmit,formState:{errors,isSubmitting} } = useForm()
// redux ma save bhako hunxa selector wata token launu parne bhayeko le yaha selector lai impor tgareko 
    const selector = useSelector(state=> state.UserData.yes)

  
// navigation
const navigate=useNavigate()

    const onSubmit = async(data) => {
      // data = {...data, image  : data.file}
      let formData = new FormData()
      formData.append("image",data.file[0])
      formData.append("name",data.name)
      formData.append("contact_person",data.contact_person)
      formData.append("contact_number",data.contact_number)
      formData.append("location",data.location)

console.log(data)
      let response=await axios ({

        method:"POST",
        url:("https://ymissing.herokuapp.com/api/admin/missing"),
        data : formData,
        headers:{
         "apptoken" : "App Token " + selector.token
        }

       })


  toast.success("Post sucessFull",{
    icon: "🚀",
    autoClose:2000

    
  })
navigate('/missingPersonFinder/MissingPersonTable' )
  
    }

// creating function for api call and calling post missing api


    return (
        <>
  

            
  <Header/>

<Sidebar>
<Flex justifyContent={'center'} >
  
  <Box
      w={{ "base": "80%", md: "50%" }}
      border={"2px solid black"}>

      <Center
          h={{ "base": "40px", md: '80px' }}
          bg={headingColor}>
          <Text
           color={"white"} 
          fontWeight={"bold"}
          > {missingPersonDetails} </Text>
      </Center>
      <Box p={10}                 >
          <form onSubmit={handleSubmit(onSubmit)} >
              <FormControl isRequired >
              <FormLabel  htmlFor='name'>{missingPersonName}</FormLabel>
              <Input
                  {...register("name",{required:true})}
                  variant='outline'
                  placeholder='Enter Missing person Name' />
              </FormControl>
              <br />
              <FormControl isRequired >
              <FormLabel  htmlFor='name'>{contactPersonName}</FormLabel>
              <Input
                  {...register("contact_person",{required:true})}
                  variant='outline'
                  placeholder='Enter Contact Person Name' />
              </FormControl>
              <br />
              <FormControl isRequired >
              <FormLabel  htmlFor='email'>{contactPersonNumber}</FormLabel>
              <Input
                  {...register("contact_number",{required:true})}
                  variant='outline'
                  placeholder='Enter contact Persson Number' />
              </FormControl>
              <br />
              <FormControl isRequired >
              <FormLabel  htmlFor='email'>{location}</FormLabel>
              <Input
                  {...register("location",{required:true})}
                  variant='outline'
                  placeholder='Enter The contact Address' />
              </FormControl>
              <br />

              <FormControl isRequired >
              <FormLabel  htmlFor='file'>{uploadFile}</FormLabel>
              <Input
                  {...register("file",{required:true})}
                  variant='unstyled'
                  type={"file"}
                  accept="image/*" 
                  color={"red"}/>
              </FormControl>
              <br />
              
             

              <Button
                  size='md'
                  height='48px'
                  width={{ base: "100%", md: "100%" }}
                  border='2px'
                  type="submit"
                  isDisabled={isSubmitting}
                   > {post} 
                  </Button>

              
                  


                  
          </form>
      </Box>
  </Box>

</Flex>
</Sidebar>


           
  
        </>
    )
  }
  export default PostMissingPersonForm