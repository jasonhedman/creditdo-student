import { Box } from '@chakra-ui/react'
import React from 'react'
import EventImpact from './EventImpact'
import Leaderboard from './Leaderboard'


const Metrics : React.FC = () => {
  return (
    <Box>
      <EventImpact />
      <br />
      <br />
      <br />
      <Leaderboard />
    </Box>
  )
}

export default Metrics