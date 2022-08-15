import React from 'react'

import {
    Text,
    VStack,
    HStack
} from '@chakra-ui/react'

import Widget from './Widget'

const info : InfoProps[] = [
    {
        amount: 10,
        title: 'Hours \n Worked'
    },
    {
        amount: 2,
        title: 'Events \n Worked'
    },
    {
        amount: 1342,
        title: 'Pounds of Food Collected'
    }
]

const WorkWidget : React.FC = () => {
  return (
    <Widget
        title="Work"
        href="https://www.google.com"
        bg="orange.300"
    >
        <HStack>
            {
                info.map((info, index) => (
                    <InfoDisplay key={index} {...info} />
                ))
            }
        </HStack>
    </Widget>
  )
}

interface InfoProps {
    amount: number;
    title: string;
}

const InfoDisplay : React.FC<InfoProps> = ({ amount, title }) => {
    return (
        <VStack
            spacing={0}
            flex={1}
        >
            <Text
                textAlign='center'
                fontSize='2xl'
                fontWeight='bold'
                color='whiteAlpha.900'
            >
                {amount}
            </Text>
            <Text
                textAlign='center'
                fontSize='sm'
                color='whiteAlpha.800'
            >
                {title}
            </Text>
        </VStack>
    )
}


export default WorkWidget