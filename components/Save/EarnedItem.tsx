import React from 'react'
import { Box, HStack, VStack, Text, Image } from '@chakra-ui/react';

interface Props {
    company: string;
    amount: number;
    cardNumber: string;
    logo: string;
    bgColor: string;
}


const EarnedItem: React.FC<Props> = ({company, amount, cardNumber, logo, bgColor}) => {
  return (
    <VStack
        bg={bgColor}
        borderRadius='xl'
        w='100%'
        p={4}
        spacing={8}
        alignItems='flex-start'
    >
        <Text
            color='white'
            fontSize='sm'
            fontWeight='semibold'
        >
            {company}
        </Text>
        <VStack
            alignItems='flex-start'
            spacing={0}
        >
            <Text
                color='white'
                fontSize='30px'
                fontWeight='semibold'
            >
                ${amount}
            </Text>
            <Text
                color='white'
                fontSize='xs'
            >
                Total Balance
            </Text>
        </VStack>
        <HStack
            justifyContent='space-between'
            w='100%'
        >
            <Text
                color='white'
                fontSize='sm'
            >
                **** **** {cardNumber.substring(8,12)} {cardNumber.substring(12,16)}
            </Text>
            <Image src={logo} />
        </HStack>
    </VStack>
  )
}

export default EarnedItem