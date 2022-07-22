import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {BsFillPersonXFill} from "react-icons/bs"
import { missingPerson } from '../constant/data'
const MissingPersonTable = () => {
  return (
    <div>
        <Flex fontSize={"30px"} gap="3" >
        <BsFillPersonXFill/>
        <Text 
        fontFamily={"heading"}
        fontSize="20px"
        fontWeight="medium" >
            {missingPerson}
        </Text>
        </Flex>
    </div>
  )
}

export default MissingPersonTable