import React from 'react'

import { HStack, Image, Text, VStack } from '@chakra-ui/react';

const Header : React.FC = () => {
  return (
    <HStack
        w='100%'
        justifyContent='space-between'
    >
        <VStack
            align="flex-start"
        >
            <Text
                fontSize="xl"
                fontWeight="bold"
            >
                Welcome Erica!
            </Text>
            <Text
                fontSize="lg"
            >
                Do good. Earn greatness
            </Text>
        </VStack>
        <Image
            src={`https://api.multiavatar.com/jasonhedman.png`}
            h='80px'
            w='80px'
            alt={'avatar'}
        />
    </HStack>
  )
}

export default Header;