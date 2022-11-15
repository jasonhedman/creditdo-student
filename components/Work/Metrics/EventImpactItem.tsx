import { Box, Grid, GridItem, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { RiMoneyDollarCircleLine, RiScales2Fill } from 'react-icons/ri';
import { GiMeal } from 'react-icons/gi'
import { FaShoppingCart } from 'react-icons/fa'

interface Props {
    name: String;
    pounds: number;
    money: number;
    meals: number;
    avgCost: number;
    selected: boolean;
}

const EventImpactItem: React.FC<Props> = ({ name, pounds, money, meals, avgCost, selected }) => {
    return (
        <Box>
            <Grid templateColumns='repeat(2, 240px)' gap={3} alignItems='flex-start' justifyContent='flex-start'>
                <GridItem
                    w='100'
                    h='90'
                    bg='purple.500'
                    borderRadius='xl'
                    paddingTop='4'
                    paddingLeft='5'
                >
                    <HStack spacing={6}>
                        <VStack
                            color='white'
                            spacing={0}
                            alignItems='flex-start'
                        >
                            <Text
                                fontSize='xs'
                                fontWeight='bold'
                            >
                                Your class collected
                            </Text>
                            <HStack>
                                <Text
                                    fontSize='30px'
                                    fontWeight='bold'
                                >
                                    {pounds.toLocaleString()}
                                </Text>
                                <Text
                                    fontWeight='semibold'
                                >
                                    LBS
                                </Text>
                            </HStack>
                        </VStack>
                        <RiScales2Fill color='white' size='50px'/>
                    </HStack>
                </GridItem>
                <GridItem
                    w='100'
                    h='90'
                    bg='green.500'
                    borderRadius='xl'
                    paddingTop='4'
                    paddingLeft='5'
                    alignItems='flex-start'
                    justifyContent='flex-start'
                >
                    <HStack spacing={6}>
                        <RiMoneyDollarCircleLine color='white' size='50px'/>
                        <VStack
                            color='white'
                            spacing={0}
                            alignItems='flex-start'
                        >
                            <Text
                                fontSize='xs'
                                fontWeight='bold'
                            >
                                Valued At
                            </Text>
                            <HStack>
                                <Text
                                    fontSize='30px'
                                    fontWeight='bold'
                                >
                                    ${(money / 1000).toFixed(1)}k
                                </Text>
                            </HStack>
                        </VStack>
                    </HStack>
                </GridItem>
                <GridItem
                    w='100'
                    h='90'
                    bg='yellow.500'
                    borderRadius='xl'
                    paddingTop='4'
                    paddingLeft='5'
                >
                    <HStack spacing={6}>
                        <VStack
                            color='white'
                            spacing={0}
                            alignItems='flex-start'
                        >
                            <Text
                                fontSize='xs'
                                fontWeight='bold'
                            >
                                Equivalent to
                            </Text>
                            <HStack
                            >
                                <Text
                                    fontSize='30px'
                                    fontWeight='bold'
                                >
                                    {meals.toLocaleString()}
                                </Text>
                                <Text
                                    fontWeight='semibold'
                                >
                                    MEALS
                                </Text>
                            </HStack>
                        </VStack>
                        <GiMeal color='white' size='50px'/>
                    </HStack>
                </GridItem>
                <GridItem
                    w='100'
                    h='90'
                    bg='pink.500'
                    borderRadius='xl'
                    paddingTop='4'
                    paddingLeft='5'
                    alignItems='flex-start'
                    justifyContent='flex-start'
                >
                    <HStack spacing={6}>
                        <FaShoppingCart color='white' size='50px'/>
                        <VStack
                            color='white'
                            spacing={0}
                            alignItems='flex-start'
                        >
                            <Text
                                fontSize='xs'
                                fontWeight='bold'
                            >
                                Costs on avg.
                            </Text>
                            <HStack>
                                <Text
                                    fontSize='30px'
                                    fontWeight='bold'
                                >
                                    ${Math.round(avgCost)}
                                </Text>
                                <Text
                                    fontWeight='semibold'
                                >
                                    / LB
                                </Text>
                            </HStack>
                        </VStack>
                    </HStack>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default EventImpactItem