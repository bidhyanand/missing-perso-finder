import { Box, Center, Container, Flex, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../Component/Header'
import { textColor } from '../constant/color'
import { ExperiencedProfessionalTeam } from '../constant/data'
// import bidhya from '../Images/bidhya.jpeg'
// import bhanu from '../Images/bhanu.jpeg'
// import manish from '../Images/manish.jpeg'
// import dipesh from '../Images/dipesh.jpg'
import team from '../data/team'
import UserDetail from './Form/UserDetail'
import Sidebar from './Sidebar'
const AboutUsDetail = () => {
    
    return (
        <div>
           <Header></Header>
           <Sidebar>

           <Text
                pt={"10"}
                textAlign={"center"}
                fontSize="28px"
            >{ExperiencedProfessionalTeam}</Text>
            <br />
            <Text
                color={textColor}
                textAlign={"center"}>
                You can relay on our amazing features list and also our customer services will be
                <br />great experience for you without doubt and in no-time
            </Text>
            <br />
            <br />
{/* displaying the index 0 along in the display section */}
            <Flex justifyContent={"center"}>
               <Box width={300}>
               <UserDetail
               
                    image={team[0].image}
                    name={team[0].name}
                    position={team[0].position}
                    description={team[0].description}
                    linkedin={team[0].linkedin}
                    twitter={team[0].twitter}
                    instagram={team[0].instagram}
                    facebook={team[0].facebook}
                    username={team[0].username}
                    company={team[0].company}
                    skills={team[0].skills}
                     
                />
               </Box>
            </Flex>
            <br />
            <br />



            {/* <Container> */}
                <SimpleGrid  columns={{base:"2",md:"3"}} ml={5} >
                    {/* filtering the index except 0 index and mappind the data */}
                    { team.filter((id, index) => index >=1 ).map((data, index) => {
                        return (
                            //    <>
                           
                                <Box key={index}
                            >
                                <UserDetail
                                    image={data.image}
                                    name={data.name}
                                    position={data.position}
                                    description={data.description}
                                    linkedin={data.linkedin}
                                    twitter={data.twitter}
                                    instagram={data.instagram}
                                    facebook={data.facebook}
                                    company={data.company}
                                    username={data.username}
                                    skills={data.skills}
                                />
                                <br/>
                                      </Box>
                                 

                        )
                    })}
                </SimpleGrid>
            {/* </Container> */}
           </Sidebar>






            {/* <Container>
        <SimpleGrid columns={{"base" : 2, md : 3}} gap = {8} >
        <GridItem
        >
            <Box 
             >
                <Image src={bidhya} ></Image>
                <br/>
                <Text 

                fontFamily={"heading"} 
                fontWeight="semibold">
                Bidhyanand Poddar
                </Text>
                <Text
                color={textColor}>
                    React Developer
                </Text>
                <br/>
                <Text
                color={textColor}
                fontSize={"13px"}>
                You can relay on our amazing features list and also our customer services will be great experience.
                </Text>
            </Box>
            </GridItem>
            <GridItem>
            <Box 
             >
                <Image src={bhanu} ></Image>
                <br/>
                <Text 

                fontFamily={"heading"} 
                fontWeight="semibold">
                Bhanubhakta Bista
                </Text>
                <Text
                color={textColor}>
                    React Developer
                </Text>
                <br/>
                <Text
                color={textColor}
                fontSize={"13px"}>
                You can relay on our amazing features list and also our customer services will be great experience.
                </Text>
            </Box>
            </GridItem>
            <GridItem>
            <Box 
             >
                <Image src={manish} ></Image>
                <br/>
                <Text 

                fontFamily={"heading"} 
                fontWeight="semibold">
                Manish Yadav
                </Text>
                <Text
                color={textColor}>
                    React Developer
                </Text>
                <br/>
                <Text
                color={textColor}
                fontSize={"13px"}>
                You can relay on our amazing features list and also our customer services will be great experience.
                </Text>
            </Box>
        </GridItem>
        </SimpleGrid>
        </Container> */}



        </div>
    )
}

export default AboutUsDetail