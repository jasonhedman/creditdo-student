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
    <Box>
        <VStack>
            <Box
                bg={bgColor}
                borderRadius='xl'
                w={400}
                h={60}
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
                <br />
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
                <br />
                <br />
                <HStack
                    spacing={200}
                >
                    <Text
                        color='white'
                        fontSize='sm'
                    >
                        **** **** {cardNumber.substring(8,12)} {cardNumber.substring(12,16)}
                    </Text>
                    <Image 
                        src={logo} 
                        alt={company}
                    />
                </HStack>
            </Box>
        </VStack>
    </Box>
  )
}

export default EarnedItem