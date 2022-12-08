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
    <VStack>
        <Box
            bg={bgColor}
            borderRadius='xl'
            w={340}
            h={180}
            paddingTop='4'
            paddingLeft='5'
        >
            <Text
                color='white'
                fontSize='sm'
                fontWeight='semibold'
            >
                {company}
            </Text>
            <br />
            <Text
                color='white'
                fontSize='24px'
                fontWeight='semibold'
                w='50%'
            >
                ${amount}
            </Text>
            <Text
                color='white'
                fontSize='xs'
                w='50%'
            >
                Total Balance
            </Text>
            <br />
            <HStack
            spacing={10}
            >   
                <HStack>
                    <Text
                        color='white'
                        fontSize='sm'
                        w='50%'
                    >
                        **** 
                    </Text>
                    <Text
                        color='white'
                        fontSize='sm'
                        w='50%'
                    >
                        **** 
                    </Text>
                    <Text
                        color='white'
                        fontSize='sm'
                        w='50%'
                    >
                        {cardNumber.substring(8,12)} 
                    </Text>
                    <Text
                        color='white'
                        fontSize='sm'
                        w='50%'
                    >
                        {cardNumber.substring(12,16)}
                    </Text>
                </HStack>
                <Image 
                    src={logo} 
                    alt={company}
                />
            </HStack>
        </Box>
    </VStack>
  )
}

export default EarnedItem