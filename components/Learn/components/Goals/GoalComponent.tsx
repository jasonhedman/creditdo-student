import { Checkbox, HStack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Goal } from '../../../../hooks/types'

interface Props {
  title: string,
  caption: string,
  dueDate: Date
  done: boolean
}

const GoalComponent: React.FC<Props> = ({title, caption, dueDate, done}) => {
  if (!done) {
    return (
      <Checkbox colorScheme='green' size='lg' spacing='5'>
        <VStack
          spacing={0}
          alignItems='left'
        >
            <HStack spacing='1'>
                <Text fontSize='md' as='b'>{title}</Text>
                <Text fontSize='sm' color='gray'>{"on " + dueDate.getMonth().toString() + "/" + dueDate.getDate().toString()}</Text>
            </HStack>
            <Text fontSize='sm'>{caption}</Text>
        </VStack>
      </Checkbox>
    )
  }

  return (
    <Checkbox colorScheme='green' size='lg' spacing='5' defaultChecked>
    <VStack
      spacing={0}
      alignItems='left'
    >
        <HStack spacing='1'>
            <Text fontSize='md' as='del' color='green'>{title}</Text>
            <Text fontSize='sm' color='green' as='del'>{"on " + dueDate.getMonth().toString() + "/" + dueDate.getDate().toString()}</Text>
        </HStack>
        <Text fontSize='sm' color='green' as='del'>{caption}</Text>
    </VStack>
  </Checkbox>
  )
}

export default GoalComponent