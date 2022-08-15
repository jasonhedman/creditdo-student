import React from 'react'

import {
  Flex,
  Box
} from '@chakra-ui/react'

import Navbar from '../components/Navbar'

interface Props {
    children: React.ReactNode
}

const MobileLayout : React.FC<Props> = ({ children}) => {
  return (
    <Flex
      minH='100vh'
      direction='column'
      py={2}
      position='relative'
    >
      <Flex
        flex={1}
        direction='column'
      >
        {children}
      </Flex>
      <Navbar />
    </Flex>
  )
}

export default MobileLayout