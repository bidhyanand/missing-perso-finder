import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Image, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Component/Header'
import { deleteColor, headingColor } from '../../constant/color'
import { action, contactName, contactNumber, location, missingPerson, name, picture, similarity, status, submittedDate, submittedList, submitterDetails, submitterIp } from '../../constant/data'
import ModalShow from '../../Modal/Modal'
import Sidebar from '../Sidebar'



const MissingPersonTable = () => {

  // // modal state for image
  const[isImageModal,setIsImageModal]=useState(false)

  // // function for image modal
  const modal=()=>{
    setIsImageModal(!isImageModal)
  }

// state to store the index value array ma -1 hudaina ra click garepaxi 0 at least hunxa tha pauna la -1 haleko
const [clickedIndex,setClickedIndex]=useState(-1)

// function for clicked on image
const handleModal=(index)=>{
console.log(index)
setClickedIndex(index)
// onOpen()
modal()
}

// for delete operation using alert dialog hook of chakra ui
const {isOpen,onOpen,onClose}=useDisclosure()

  // storing the api data in the state
  const [apiData,setApiData]=useState([])
  // console.log(apiData,"state");

  
  // redux wata store gareko data lai yeha lera aako 
  const selector = useSelector(state=> state.UserData.yes)

  // states of loading
  const [isLoading,setIsLoading]=useState(true)

  // Api call gareko List missing person ko 
    const dataCall = async ()=>{
      setIsLoading(true)
      let response = await axios({
        method : "GET",
        url : "https://ymissing.herokuapp.com/api/admin/missing",
        headers : {
          "apptoken" : "App Token "+selector.token
        }
      })
      setApiData(response.data)
      // api wata data lina lai variable jastai response lai dot garnu parxa
      setIsLoading(false)
    }

// api call gareko delete handling ko lagi
const handleAction= async (id)=>{
  console.log(id,"xxx");
  let responseApi= await axios ({

    method: "DELETE",
    url:`https://ymissing.herokuapp.com/api/admin/missing/${id}`,
    headers :{
      "apptoken" : "App Token "+selector.token
    }
  })
  onClose()
}


    // ekpalta matra call garnu parne bhayeko le useEffect lagaiyeko ho
    useEffect(()=>{
      dataCall()
    },[])
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
            {missingPerson}
        </Text>
        <br/>
        {isLoading?
      <>
      Data Is Loading....
      </>  
      :
      <>
         <TableContainer>
  <Table variant= "simple" >
    <Thead>
      <Tr>
        <Th>{picture} </Th>
        <Th>{name} </Th>
        <Th>{contactName} </Th>
        <Th>{contactNumber} </Th>
        <Th>{submittedDate} </Th>
        <Th> {status} </Th>
        <Th>{location}</Th>
        <Th>{action}</Th>
      </Tr>
    </Thead>
    <Tbody>
 
{/* state ma save gareko data lai map garekko hamro data missing bbhanne aaray bhitra baseko xa tyesaile .missing gareko  */}
{/* ? use kina gareko ho bhane arko kehi lai call garepaxi api hit huna lai kehi time lagxa tyesaile use gareko natra error aauunxa */}
{/* ? na lagai lodaing lauda ni hunxa */}
        {apiData?.missing?.map((data,index)=>{
          return(
      <Tr key={index} >

<Td>
<Image onClick={()=>handleModal(index)} src={data.image} alt="a" cursor="pointer" ></Image>

<ModalShow isModalOpen={isImageModal} isModalClose={modal} >
{clickedIndex!==-1&&<>
<Image src={apiData.missing[clickedIndex].image}/>
</>
}

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
  {data.date}
</Td>

<Td>
  {data.status}
</Td>
<Td>
  {data.location}
</Td>

<Td>

<Menu>
  <MenuButton as={Button}>
Action
  </MenuButton>
 <MenuList>
 <MenuItem  color={deleteColor} onClick={onOpen} >
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
      </>
      }
     
</Sidebar>
    </div>
  )
}

export default MissingPersonTable