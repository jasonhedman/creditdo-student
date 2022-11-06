import { VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { Event } from '../../../types/event'
import PastEvent from './PastEvent'

const pastEvents : Event[] = [
    {
        title: 'Food Drive',
        type: 'Supply School Drive',
        month: 'Aug',
        date: "21",
        day: "Sat",
        time: '10:00 AM',
        imageURL: 'https://via.placeholder.com/75'
    },
    {
        title: 'Food Drive',
        type: 'Supply School Drive',
        month: 'Aug',
        date: "21",
        day: "Sat",
        time: '10:00 AM',
        imageURL: 'https://via.placeholder.com/75'
    },
]

const PastEvents = () => {
  return (
    <VStack
        alignItems='flex-start'
    >
        <Text
            fontSize='xl'
            fontWeight='bold'
        >
            Past Events
        </Text>
        <HStack
            w="100%"
        >
            {
                pastEvents.map((event, index) => (
                    <PastEvent 
                        key={index}
                        event={event}
                    />
                ))
            }
        </HStack>
    </VStack>
  )
}

export default PastEvents