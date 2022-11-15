import React from 'react'

import { Box, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import { IconType } from 'react-icons';

interface Props {
    teacher: string,
    pounds: number,
    money: number,
    meals: number,
    avgCost: number,
    icon: IconType,
    timeFrame: string,
    ranking: number
}

const LeaderboardItem: React.FC<Props> = ({ teacher, pounds, money, meals, avgCost, icon, timeFrame, ranking}) => {
    return (
        <Flex
            w='100%'
            flexDirection='column'
        >
            <HStack
                w='100%'
                alignItems='flex-start'
            >
                <Text
                    fontSize='24px'
                    color='gray'
                >
                    {ranking}
                </Text>
                <Icon 
                    as={icon} 
                    w={8} 
                    h={8} 
                />
                <VStack
                    flex={1}
                    alignItems='flex-start'
                >
                    <VStack
                        alignItems='flex-start'
                        spacing={0}
                    >
                        <Text
                            fontSize='md'
                        >
                            {teacher}&apos;s
                        </Text>
                        <Text
                            fontSize='md'
                        >
                            {timeFrame} class
                        </Text>                        
                    </VStack>
                    <HStack
                        marginLeft='auto'                
                    >
                        <VStack
                            alignItems='flex-start'
                            spacing={0}
                        >
                            <Text
                                color='gray'
                                fontSize='xs'
                                fontWeight='semibold'
                            >
                                POUNDS
                            </Text>
                            <Text
                                color='purple.500'
                                fontSize='xl'
                                fontWeight='semibold'
                            >
                                {pounds.toLocaleString()}
                            </Text>
                        </VStack>
                        <VStack
                            spacing={0}
                        >
                            <Text
                                color='gray'
                                fontSize='xs'
                                fontWeight='semibold'
                            >
                                MEALS
                            </Text>
                            <Text
                                color='yellow.500'
                                fontSize='xl'
                                fontWeight='semibold'
                            >
                                {meals.toLocaleString()}
                            </Text>
                        </VStack>
                        <VStack
                            spacing={0}
                        >
                            <Text
                                color='gray'
                                fontSize='xs'
                                fontWeight='semibold'
                            >
                                VALUE
                            </Text>
                            <Text
                                color='green.500'
                                fontSize='xl'
                                fontWeight='semibold'
                            >
                                ${(money / 1000).toFixed(1)}k
                            </Text>
                        </VStack>
                        <VStack
                            spacing={0}
                        >
                            <Text
                                color='gray'
                                fontSize='xs'
                                fontWeight='semibold'
                            >
                                AVG. COST
                            </Text>
                            <Text
                                color='pink.500'
                                fontSize='xl'
                                fontWeight='semibold'
                            >
                                ${Math.round(avgCost)} / lb
                            </Text>
                        </VStack>
                    </HStack>
                </VStack>
            </HStack>
        </Flex>
    )
}

export default LeaderboardItem