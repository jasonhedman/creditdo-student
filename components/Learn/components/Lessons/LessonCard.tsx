import React from 'react'
import { Lesson } from '../../../../hooks/types'
import Card from '../../../utility/Card'
import { Heading, VStack, HStack, Text } from '@chakra-ui/react'
import CompletedBadge from './CompletedBadge'

interface Props {
    lesson: Lesson
}

const LessonCard: React.FC<Props> = ({lesson}) => {
  return (
    <Card>
      <HStack
        justifyContent='space-between'
      >
        <VStack
          alignItems='flex-start'
        >
          <Heading
          size='sm'>
            {lesson.title}
          </Heading>
          <Text
            fontSize='xs'
            color='gray'
          >
            {"due " + lesson.dueDate.toString().substring(4, 10)}
          </Text>
        </VStack>
        <CompletedBadge completed={lesson.completed}></CompletedBadge>
      </HStack>
    </Card>
  )
}

export default LessonCard