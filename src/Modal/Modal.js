
import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent,  ModalHeader, ModalOverlay,Text } from '@chakra-ui/react'
import React, { Children } from 'react'
const ModalShow = ({children,isModalOpen,isModalClose,title}) => {

  return (
    <div>

  
  <Modal isOpen={isModalOpen} onClose={isModalClose} size={'lg'} >
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton  />
      <ModalHeader>
        <Text
        fontFamily={"cursive"}
        textAlign="center"
        fontSize={"30px"}
        >
        {title}
        </Text>
      </ModalHeader>
      <Divider></Divider>
      <ModalBody>
{children}
      </ModalBody>

     
    </ModalContent>
  </Modal>
    </div>
  )
}

export default ModalShow


