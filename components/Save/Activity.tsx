import React from 'react'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { FaHandshake } from 'react-icons/fa'
import { BsPiggyBankFill } from 'react-icons/bs';

import ActivityItem from './ActivityItem';

const activities = [
    {
        title: "EARNED",
        amount: 100,
        icon: FaHandshake,
        bgColor: "orange.500",
        textColor: "orange.300"
    },
    {
        title: "SAVED",
        amount: 140,
        icon: BsPiggyBankFill,
        bgColor: "green.500",
        textColor: "green"
    }
]

const Activity = () => {
  return (
    <VStack
        w='100%'
        spacing={4}
        alignItems='flex-start'
    >
        <Text
            fontSize='xl'
            color='gray'
            fontWeight='semibold'
        >
            Activity
        </Text>
        <HStack
            w='100%'
            justifyContent={'space-between'}
        >
            {
                activities.map((activity, index) => (
                    <ActivityItem
                        key={index}
                        title={activity.title}
                        amount={activity.amount}
                        icon={activity.icon}
                        bgColor={activity.bgColor}
                        textColor={activity.textColor}
                    />
                ))
            }
        </HStack>
    </VStack>
  )
}

export default Activity