import React from 'react'

import { VStack } from '@chakra-ui/react'

import Header from './Header'
import Actions from './Actions'
import EditProfile from './EditProfile'

const Profile = () => {
  return (
    <VStack
      direction='column'
      align='center'
      justify='center'
      spacing={8}
      flex={1}
    >
      <Header />
      <Actions />
      <EditProfile profilePicture='https://api.multiavatar.com/jasonhedman.png' firstName='Erica' lastName='Leung'/>
    </VStack>
  )
}

export default Profile