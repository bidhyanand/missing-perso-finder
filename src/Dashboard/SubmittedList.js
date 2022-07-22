import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaListAlt } from 'react-icons/fa'
import { submittedList } from '../constant/data'

const SubmittedList = () => {
  return (
    <div>
        <Flex fontSize={"30px"} gap="3" >
        <FaListAlt/>
        <Text 
        fontFamily={"heading"}
        fontSize="20px"
        fontWeight="medium" >
            {submittedList}
        </Text>
        </Flex>
    </div>
  )
}

export default SubmittedList