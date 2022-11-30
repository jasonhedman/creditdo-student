import React from 'react'
import { NextPage } from 'next'
import PageContainer from '../../components/utility/PageContainer'
import CreateGoal from '../../components/Learn/components/Goals/CreateGoal'

const CreateGoalPage : NextPage = () => {
  return (
    <PageContainer>
        <CreateGoal />
    </PageContainer>
  )
}

export default CreateGoalPage