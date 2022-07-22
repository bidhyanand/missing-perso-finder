import { Box,Image,Text,Flex ,Avatar,Button,Divider,GridItem,Modal,ModalBody,ModalCloseButton,ModalContent,ModalOverlay,SimpleGrid, useDisclosure,Tag,ModalHeader} from "@chakra-ui/react"
import { textColor } from "../../constant/color"
import {FaDev} from 'react-icons/fa'
import {MdPeopleAlt,MdWork} from 'react-icons/md'
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTwitter,TiSocialInstagram} from 'react-icons/ti'
// passing the props in the userDetail
const UserDetail = ({ image, name, position, description, facebook, linkedin, twitter, instagram ,company,username,skills}) => {
    // modal function
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      // P0ddar#gi8
        <Box 
         >
          
            <Image 
            height={{base:"150",md:"300"}}
            width={{base:"150",md:"300"}}
            cursor={"pointer"}
            onClick={onOpen}
                src={image}>



                </Image>
            <br />
            <Text

                fontFamily={"heading"}
                fontWeight="semibold">
                {name}
            </Text>
            <Text
                color={textColor}>
                {position}
            </Text>
            <br />
            <Text
                color={textColor}
                fontSize={"13px"}>
                {description}
            </Text>
            <br />
            <Flex gap={5} >
                <a href={facebook} target="_blank" > <TiSocialFacebook />  </a>
                <a href={linkedin} target="_blank" >  <TiSocialLinkedin /></a>
                <a href={twitter} target="_blank" >   <TiSocialTwitter /></a>
                <a href={instagram} target="_blank" >  <TiSocialInstagram /></a>
            </Flex>


{/* this is for modal */}
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'} >
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton  />
      <ModalHeader>
        <Text
        fontFamily={"cursive"}
        textAlign="center"
        fontSize={"30px"}
        >
        Team Deatils
        </Text>
      </ModalHeader>
      <Divider></Divider>
      <ModalBody>
        <SimpleGrid columns={2}>
<GridItem >
<Avatar size='2xl' name="Dipesh Mishra"src={image}>
      </Avatar>
</GridItem>
<GridItem>
    <Flex justifyContent={"flex-start"} gap={5}>
    <MdPeopleAlt fontSize={"25"} /> 
    <Text
    fontFamily={"heading"}
    fontWeight="bold"
    fontSize={"20px"} >
       {name}
    </Text>
    </Flex>
    <Text
    fontSize={"15px"}
    textAlign={'center'}
    color= {textColor} >
       {username}
    </Text>
    <br/>
    <Flex gap={5} >
<FaDev fontSize="20" />
<Text
fontSize={15}
color={textColor}>
    {position}

</Text>
    </Flex>
    <br/>

    <Flex gap={5} >
<MdWork fontSize="20" />
<Text
fontSize={15}
color={textColor}>
{company}
</Text>
    </Flex>

</GridItem>

        </SimpleGrid>
        <br/>

      <Divider/>
      <br/>

<SimpleGrid columns={5} spacing={1} >
    
    

{skills.map((data,index)=>{
    return(
        <>
        <GridItem>
        <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
     {data}
    </Tag>  
        </GridItem>
        
        </>
    )
})}


    {/* <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
     {skills}
    </Tag>  
    

    <GridItem>
    <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
      {skills}
    </Tag>  
    </GridItem>

    <GridItem>
    <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
      {skills}
    </Tag>  
    </GridItem>
    <GridItem>
    <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
      {skills}
    </Tag>  
    </GridItem>
    <GridItem>
    <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
     {skills}
    </Tag>  
    </GridItem>
    <GridItem>
    <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
    {skills}
    </Tag>  
    </GridItem>
    <GridItem>
    <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
      {skills}
    </Tag>  
    </GridItem>
    <GridItem>
    <Tag size={"md"} key={"md"} variant='outline' colorScheme='teal'>
     {skills}
    </Tag>  
    </GridItem> */}

    

</SimpleGrid>

      </ModalBody>

     
    </ModalContent>
  </Modal>

        </Box>

        
    )
}
export default UserDetail