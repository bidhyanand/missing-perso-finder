import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../Component/Header'
import { blueColor, deleteColor, foundColor, headingColor, submittedColor } from '../../constant/color'
import { dashboard, dashFound, dashMissing, dashSubmitted } from '../../constant/data'
import Sidebar from '../Sidebar'

const HomeDashBoard = () => {

    // redux wata store gareko data lai yeha lera aako 
    const selector = useSelector(state => state.UserData.yes)

    // loading is use to handle the error
    const [isLoading,setIsLoading]=useState(true)

    //  to store the api data constructing the states
    const [apiData, setApiData] = useState({})
    console.log(apiData, "love you")
    // api calling for dashboard function
    const apiCall = async () => {

        setIsLoading(true)

        let response = await axios({
            method: "GET",
            url: "https://ymissing.herokuapp.com/api/admin/dash",
            headers: {
                apptoken: "App Token " + selector.token
            }

        })
        setApiData(response.data)
        console.log(response.data, "dashdata");

    setIsLoading(false)

    }
    // useeffect is call to run the at the firsttime while loading the data
    useEffect(() => {
        apiCall()
    }, [])


    return (
        <div>
            <Header />
            <Sidebar>

{isLoading?<>
Data is Loading...
</>
:
<>
<Text
                    color={headingColor}
                    textAlign={"center"}
                    fontSize="30px"
                    fontWeight="medium"
                    >
                   🙏🏻 {dashboard} 🙏🏻
                </Text>
                <br />
                <br />

               <SimpleGrid columns={{base:"1",md:"3" }} ml="10" gap={10} >
               {/* <Flex gap={10} justifyContent="center" > */}
                    <Link to="/missingPersonFinder/MissingPersonTable">
                    <Box
                    

                        border={`1px solid ${deleteColor}`}
                        borderRadius={"20px"}
                        width={"300px"}
                        height={"120px"}
                        boxShadow="lg"
                        bgColor={deleteColor} >
                        <Text
                    
                            color={"white"}
                            fontSize="45px"
                            textAlign={"center"}>
                            {apiData.data.missing}
                        </Text>

                        <Text
                            color={"white"}
                            textAlign={"center"}
                            fontSize="30px">
                            {dashMissing}
                        </Text>

                    </Box>

                    </Link>
                    <Link to="/missingPersonFinder/submittedList">
                    <Box
                        border={`1px solid ${submittedColor}`}
                        width={"300px"}
                        borderRadius="20px"
                        height={"120px"}
                        bgColor={submittedColor}>

                        <Text
                            color={"white"}
                            fontSize="45px"
                            textAlign={"center"}>
                            {apiData.data.submitted}

                        </Text>


                        <Text
                            color={"white"}
                            textAlign={"center"}
                            fontSize="30px">
                            {dashSubmitted}
                        </Text>

                    </Box>
                    </Link>
                    <Link to ="/missingPersonFinder/FoundListTable">
                                           <Box
                        border={`1px solid ${foundColor}`}
                        borderRadius="20px"
                        width={"300px"}
                        height={"120px"}
                        bgColor={foundColor} >
                        <Text
                            color={"white"}
                            fontSize="45px"
                            textAlign={"center"}>
                            {apiData.data.found}

                        </Text>

                        <Text
                            color={"white"}
                            textAlign={"center"}
                            fontSize="30px">
                            {dashFound}
                        </Text>

                    </Box>
                    </Link>
 
                {/* </Flex> */}
               </SimpleGrid>


</>}

                
            </Sidebar>

        </div>
    )
}

export default HomeDashBoard