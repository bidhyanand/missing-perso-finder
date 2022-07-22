import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Image, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Component/Header'
import { deleteColor, headingColor } from '../../constant/color'
import { action, contactName, contactNumber, createdBy, createdOn, foundList, foundPicture, location, name,  picture,  similarity, status, submitterDetails, submitterIp} from '../../constant/data'
import ModalShow from '../../Modal/Modal'
import Sidebar from '../Sidebar'
const FoundListTable = () => {

  // for delete operation using alert dialog hook of chakra ui
const {isOpen,onOpen,onClose}=useDisclosure()

// state for loadiing 
const [isLoading,setIsLoading]=useState(true)

 // redux wata store gareko data lai yeha lera aako 
 const selector = useSelector(state=> state.UserData.yes)

 
// state to store the api data found 
const[apiData,setApiData]=useState([])
console.log(apiData,"state")


  // list missing submiited api calling
const apiCall=async()=>{

  setIsLoading(true)

  let response=await axios({
    method: "GET",
    url:"https://ymissing.herokuapp.com/api/admin/missing/found",
    headers:{
      "apptoken" : "App Token " + selector.token
    }

  })
console.log(response.data,"found")
setApiData(response.data)

setIsLoading(false)
 

}

useEffect(()=>{


  apiCall()
  },[])

  // constructing the action function handler
const handleAction=async(id)=>{
  console.log(handleAction,"id")
  // calling api for action i.e = 
  let response= await axios ({
    method: "DELETE",
    url:`https://ymissing.herokuapp.com/api/admin/missing/${id}` ,
    headers:{
      "apptoken" : "App Token " + selector.token
    }
  })
  onClose()
}

// this is for picture to show in modal
// satees to store the index of picture clicked
const[pictureClickedIndex,setPictureClickedIndex]=useState(-1)

// function for handlePicture
const handlePicture = (index) =>{
setPictureClickedIndex(index)
// console.log(index,"hi")
modalPicture()
}

// modal for picture 
const [isModalPicture,setIsModalPicture]=useState(false)

// function for modal picture to show modal
const modalPicture=()=>{
setIsModalPicture(!isModalPicture)
}

// this is for modal of foundPicture
// function for onClick
const handleFoundPicture=(index)=>{
setFoundPictureIndex(index)
console.log(index,"foundPicture")
foundPictureModal()
}
// states to store the clicked index
const [foundPictureIndex,setFoundPictureIndex]=useState(-1)

// function to showModal
const foundPictureModal=()=>{
setIsFoundModalPicture(!isFoundModalPicture)
}
// states for modal
const[isFoundModalPicture,setIsFoundModalPicture]=useState(false)
  return (
    <div>

<Header></Header>
<Sidebar>
<Text
        color={headingColor}
        textAlign={"left"}
        fontFamily={"heading"}
        fontSize="30px"
        fontWeight="medium" >
          {foundList}
        </Text>
        <br/>
{isLoading?<>
Data is Loading...
</>
:
<>
<TableContainer>
  <Table variant= "simple" >
    <Thead>
      <Tr>
        <Th>{picture }</Th>
        <Th>{foundPicture}</Th>
        <Th>{name} </Th>
        <Th>{contactName} </Th>
        <Th>{contactNumber} </Th>
        <Th> {submitterIp} </Th>
        <Th>{submitterDetails} </Th>
        <Th> {similarity} </Th>
        <Th>{location}</Th>
        <Th>{status} </Th>
        <Th>{createdOn} </Th>
        <Th>{createdBy} </Th>
        <Th>{action}</Th>
      </Tr>
    </Thead>
    <Tbody>

    {apiData?.missing?.map((data,index)=>{
      return(
        <Tr key={index} >
          <Td>
        <Image onClick={()=>handlePicture(index)} src={data.image} width="100" height={"100"} cursor="pointer" />
        <ModalShow isModalOpen={isModalPicture} isModalClose={modalPicture} >
{pictureClickedIndex!==-1&&<>
<Image src={apiData.missing[pictureClickedIndex].image}/>
</>}
        </ModalShow>
        </Td>

        <Td>
          <Image onClick={()=>handleFoundPicture(index)} src={data.foundImage} width="100" height={"100"} cursor="pointer" />
          
          <ModalShow isModalOpen={isFoundModalPicture} isModalClose={foundPictureModal} >
            {foundPictureIndex!==-1&&<>
              <Image src={apiData.missing[foundPictureIndex].foundImage}/>
            </>}

          </ModalShow>
        </Td>

        <Td>
          {data.name}
        </Td>

        <Td>
          {data.contact_person}
        </Td>

        <Td>
          {data.contact_number}
        </Td>

        <Td>
          {data.ip}
        </Td>

        <Td>
          {data.submitterDetails}
        </Td>

        <Td>
          {data.similarity}%
        </Td>

        <Td>
          {data.location}
        </Td>

        <Td>
          {data.status}
        </Td>

        <Td>
          {data.date}
        </Td>

<Td>
  {data.user_id.firstname}
{data.user_id.lastname}
  </Td>       

  
  <Td>

    {/* algert dialog from chakra ui but using inside menu  */}
  <Menu>
  <MenuButton as={Button}>
Action
  </MenuButton>
 <MenuList>
 <MenuItem color={deleteColor} onClick={onOpen} >
  Delete

      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={()=>handleAction(data._id)} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </MenuItem>
 </MenuList>

</Menu>
   
</Td>

  

        </Tr>
      )
    })}

    
    </Tbody>
    
  </Table>
</TableContainer>

</>}

        
</Sidebar>
    </div>
  )
}

export default FoundListTable