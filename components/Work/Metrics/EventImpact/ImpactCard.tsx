import React from 'react'

import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
    icon: IconType,
    bg: string,
    desription: string,
    amount: number,
    unit: string
}

const ImpactCard : React.FC<Props> = ({ icon, bg, desription, amount, unit}) => {
  return (
    <HStack 
        bg={bg}
        borderRadius='xl'
        p={2}
        w='100%'
    >
        <Icon 
            as={icon}
            color='white'
            h='30px'
            w='30px'
        />
        <VStack
            flex={1}
            alignItems='flex-start'
            spacing={0}
        >
            <Text
                color='white'
                fontSize='xs'
                fontWeight='bold'

            >
                {desription}
            </Text>
            <HStack>
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                    color='white'
                >
                    {amount.toLocaleString()}
                </Text>
                <Text
                    fontWeight='semibold'
                    color='white'
                    fontSize='sm'
                >
                    {unit}
                </Text>
            </HStack>
        </VStack>
        
    </HStack>
  )
}

export default ImpactCard