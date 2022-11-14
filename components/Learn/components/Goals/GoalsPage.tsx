import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Goal } from '../../../../hooks/types'
import GoalsList from './GoalsList'

interface Props {
    eventGoals: Goal[]
    shortTermGoals: Goal[]
    longTermGoals: Goal[]
    done: Goal[]
}

const GoalsPage: React.FC<Props> = ({eventGoals, shortTermGoals, longTermGoals, done}) => {


  return (
    <VStack spacing='10'>
      <GoalsList name='Event Goals' goalList={eventGoals}/>
      <GoalsList name='Short Term Goals' goalList={shortTermGoals}/>
      <GoalsList name='Long Term Goals' goalList={longTermGoals}/>
      <GoalsList name='Done' goalList={done} />
    </VStack>

  )
}

export default GoalsPage