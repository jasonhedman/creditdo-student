import { Checkbox, HStack, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Goal } from '../../../../hooks/types'

interface Props {
  goal: Goal,
  caption: string,
  onClick: (goal: Goal) => void
}

const GoalComponent: React.FC<Props> = ({ goal, caption, onClick}) => {
 
  if (!goal.completed) {
    return (
      <Checkbox 
        colorScheme='green' 
        size='lg' 
        spacing='5'
        isChecked={goal.completed}
        onChange={() => onClick(goal)}
      >
        <VStack
          spacing={0}
          alignItems='left'
        >
            <HStack spacing='1'>
                <Text fontSize='md' as='b'>{goal.title}</Text>
                <Text fontSize='sm' color='gray'>{"on " + goal.dueDate.getMonth().toString() + "/" + goal.dueDate.getDate().toString()}</Text>
            </HStack>
            <Text fontSize='sm'>{caption}</Text>
        </VStack>
      </Checkbox>
    )
  }

  return (
    <Checkbox 
      colorScheme='green' 
      size='lg' 
      spacing='5'
      onChange={() => onClick(goal)}
      isChecked={goal.completed}
      >
    <VStack
      spacing={0}
      alignItems='left'
    >
        <HStack spacing='1'>
            <Text fontSize='md' as='del' color='green'>{goal.title}</Text>
            <Text fontSize='sm' color='green' as='del'>{"on " + goal.dueDate.getMonth().toString() + "/" + goal.dueDate.getDate().toString()}</Text>
        </HStack>
        <Text fontSize='sm' color='green' as='del'>{caption}</Text>
    </VStack>
  </Checkbox>
  )
}

export default GoalComponent