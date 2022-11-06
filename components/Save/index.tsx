import React from 'react'

import { Box, Flex } from '@chakra-ui/react'
import Activity from './Activity'
import Earned from './Earned'

const Save : React.FC = () => {
  return (
    <Flex
      flexDir='column'
      w='100%'
      gap={8}
    >
      <Activity />
      <Earned />
    </Flex>
  )
}

export default Save