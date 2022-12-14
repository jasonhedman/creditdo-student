import React from 'react'

import { Button, HStack, Image, Text, VStack, Box } from '@chakra-ui/react'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'

interface Event {
    title: string;
    type: string;
    day: string;
    month: string;
    date: number;
    time: string;
    location: string;
    image: string;
}

const event : Event = {
    title: 'Food Drive',
    type: 'Supply School Drive',
    month: 'Aug',
    date: 21,
    day: "Sat",
    time: '10:00 AM',
    location: '1234 Main St, New York, NY',
    image: 'https://via.placeholder.com/150'
}

const UpcomingEvents = () => {
  return (
    <VStack
      alignItems='flex-start'
    >
      <Text
        fontSize='xl'
        fontWeight='bold'
      >
        Upcoming Events
      </Text>
      <HStack>
        <Box
          position='relative'
        >
          <Image 
            src={event.image}
            alt='event image'
          />
          <VStack
            position='absolute'
            zIndex={2}
            left={1}
            top={1}
            bg='blackAlpha.500'
            spacing={0}
            p={1}
            rounded='md'
          >
            <Text
              color='white'
              fontSize='sm'
            >
              {event.month}
            </Text>
            <Text
              color='white'
              fontSize='sm'
            >
              {event.date}
            </Text>
          </VStack>
        </Box>
        <VStack
          alignItems='flex-start'
          spacing={2}
        >
          <Text
            fontSize='sm'
            fontWeight='bold'
          >
            {event.title}
          </Text>
          <Text
            fontSize='sm'
          >
            {event.type}
          </Text>
          <HStack>
            <FaClock />
            <Text
              fontSize='sm'
            >
              {event.day}, {event.time}
            </Text>
          </HStack>
          <HStack>
            <FaMapMarkerAlt />
            <VStack
              alignItems='flex-start'
              spacing={0}
            >
              <Text
                fontSize='xs'
              >
                {event.location}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Button
        w='100%'
      >
        Clock In
      </Button>
      <Button
        color='blue.500'
        variant='text'
        w='100%'
      >
        Record Hours
      </Button>
    </VStack>
  )
}

export default UpcomingEvents