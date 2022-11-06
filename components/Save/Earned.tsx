import React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'

import EarnedItem from './EarnedItem'

const giftCards = [
    {
        company: "Key Food Supermarkets",
        amount: 50,
        cardNumber: "********34564567",
        logo: "url",
        bgColor: "red.500"
    },
    {
        company: "Associated Supermarket",
        amount: 50,
        cardNumber: "********34564567",
        logo: "url",
        bgColor: "blue.500"
    }
]

const Earned = () => {
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
            Earned $
        </Text>
        <VStack
            alignItems='flex-start'
            w='100%'
        >
            {
                giftCards.map((giftCard, index) => (
                    <EarnedItem
                        key={index}
                        company={giftCard.company}
                        amount={giftCard.amount}
                        cardNumber={giftCard.cardNumber}
                        logo={giftCard.logo}
                        bgColor={giftCard.bgColor}
                    />
                ))
            }
        </VStack>
    </VStack>
  )
}

export default Earned