import { background, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import content from '../data/sidebarContent'
import {Link as RouterLink,useLocation} from 'react-router-dom'
import { headingColor } from '../constant/color'

const SidebarDataMap = () => {
    const location = useLocation()
    console.log(location,"pathName")
    return (

        // backgroundColor  = {data.link === "/missingPersonFinder/homeDashBoard"?"red":""}

        <div>
            {content.map((data, index) => {
                console.log("hello link", data.link)
                return (
                    <RouterLink 
                    to={data.link} key={index} >
                        <Flex gap={"3"}  >
                    <Text
                     fontSize={"30"} 
                     color={location.pathname === data.link?  "red" : headingColor }
                     >
                    {data.icon}
                    <br/>

                    

                    </Text>
                    
                            <Text
                     color={location.pathname === data.link?  "red" : headingColor }

                                fontFamily={"heading"}
                                fontSize="20px"
                                fontWeight="medium"
                            >
                                {data.title}
                            </Text>

                        </Flex>
                        <br />
                      
                    {/* // for knowing the path of the user */}

                    </RouterLink>


                )

            })}

        </div>
    )
}

export default SidebarDataMap