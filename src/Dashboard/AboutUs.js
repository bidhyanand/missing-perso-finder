import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { aboutUs } from '../constant/data'

const AboutUs = () => {
  return (
    <div>
          <Flex fontSize={"30px"} gap="3" >
        <BsFillInfoCircleFill/>
        <Text 
        fontFamily={"heading"}
        fontSize="20px"
        fontWeight="medium" >
          {aboutUs}
       </Text>
        </Flex>
    </div>
  )
}

export default AboutUs