import React from 'react'

import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';

import { IconType } from 'react-icons'

interface Props {
    title: string;
    amount: number;
    icon: IconType;
    bgColor: string;
    textColor: string;
}

const ActivityItem : React.FC<Props> = ({ title, amount, icon, bgColor, textColor}) => {
  return (
    <Box>
        <HStack>
            <Box
                bg={bgColor}
                rounded='full'
                h={'48px'}
                w={'48px'}
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Icon 
                    as={icon}
                    color='white'
                    rounded='full'
                    h={'32px'}
                    w={'32px'}
                />
            </Box>
            <VStack
                spacing={0}
            >
                <Text
                    fontSize='md'
                    color={textColor}
                    fontWeight='semibold'
                >
                    {title}
                </Text>
                <Text
                    fontSize='28px'
                    color={bgColor}
                    fontWeight='semibold'
                >
                    ${amount}
                </Text>
            </VStack>
        </HStack>
    </Box>
  )
}

export default ActivityItem