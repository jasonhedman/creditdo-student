import React from 'react'
import { VStack } from '@chakra-ui/react'
import Week from './Week'
import { WeeklyLessons } from '../../../../hooks/types'

interface Props {
    schedule: WeeklyLessons[]
}

const LearnPage: React.FC<Props> = (props) => {

  return (
    <VStack
        spacing='10'
    >
        {
            props.schedule?.map((lesson, index) => (
                <Week 
                    key={index}
                    weekNumber={index+1}
                    lessons={lesson}
                />
                  
            ))
        }
    </VStack>
  )
}

export default LearnPage