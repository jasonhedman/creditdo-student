import React from 'react'

import { Box } from '@chakra-ui/react'
import Activity from './Activity'
import Earned from './Earned'

const Save : React.FC = () => {
  return (
    <Box>
        <Activity />
        <Earned />
    </Box>
  )
}

export default Save