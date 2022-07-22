import { Text , Flex} from '@chakra-ui/react'
import React from 'react'
import {  FaHome} from 'react-icons/fa'
import { home } from '../constant/data'
const Home = () => {
  return (
    <div>
        <Flex fontSize={{base:"15px",md:"30px"}} gap="3" >
        <FaHome/>
        <Text 
        fontFamily={"heading"}
        fontSize={{base:"10px",md:"20px"}}
        fontWeight="medium" >
            {home}
        </Text>
        </Flex>
        
      
    </div>
  )
}

export default Home