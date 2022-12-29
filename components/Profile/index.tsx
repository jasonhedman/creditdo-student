import React from 'react'

import { VStack } from '@chakra-ui/react'

import Header from './Header'
import Actions from './Actions'

const Profile = () => {
  return (
    <VStack
      direction='column'
      align='center'
      justify='center'
      spacing={8}
      flex={1}
    >
      <Header profilePicture='https://api.multiavatar.com/jasonhedman.png' firstName='Erica' lastName="L." teacher='Ms. Garcia'/>
      <Actions />
    </VStack>
  )
}

export default Profile