import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { CgSearchFound } from 'react-icons/cg'
import { foundList } from '../constant/data'

const FoundList = () => {
  return (
    <div>
         <Flex fontSize={"30px"} gap="3" >
        <CgSearchFound/>
        <Text 
        fontFamily={"heading"}
        fontSize="20px"
        fontWeight="medium" >
          {foundList}
       </Text>
        </Flex>
    </div>
  )
}

export default FoundList