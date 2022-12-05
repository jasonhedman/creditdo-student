import React from 'react'

import { Flex } from '@chakra-ui/react'

import EventImpact from './EventImpact'
import Leaderboard from './Leaderboard'


const Metrics : React.FC = () => {
  return (
    <Flex
      direction='column'
      gap={8}
    >
      <EventImpact />
      <Leaderboard />
    </Flex>
  )
}

export default Metrics