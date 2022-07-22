import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { createMissingList } from '../constant/data'

const CreateMissingList = () => {


  return (
    <div>
        <Flex fontSize={"30px"} gap="3" >
        <FaEdit/>
        <Text 
        fontFamily={"heading"}
        fontSize="20px"
        fontWeight="medium"
       >
          {createMissingList}
                 </Text>
        </Flex>
    </div>
  )
}

export default CreateMissingList