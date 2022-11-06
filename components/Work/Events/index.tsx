import { Box } from '@chakra-ui/react'
import React from 'react'
import PastEvents from './PastEvents'
import UpcomingEvents from './UpcomingEvents'

const Events : React.FC = () => {
  return (
    <Box>
      <UpcomingEvents />
      <PastEvents />
    </Box>
  )
}

export default Events