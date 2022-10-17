import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Profile from '../components/Profile'

const ProfilePage : NextPage = () => {
  return (
    <PageContainer
      bg='orange.400'
    >
      <Profile />
    </PageContainer>
  )
}

export default ProfilePage