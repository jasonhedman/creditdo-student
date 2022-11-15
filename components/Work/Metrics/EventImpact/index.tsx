import React, { useState } from 'react'

import { Box, HStack, VStack, Text, Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react'

import { RiArrowDropDownLine } from 'react-icons/ri'

import EventImpactItem from './EventImpactItem'

const eventImpacts = [
    {
        name: "4/23 Key Food",
        pounds: 1342,
        money: 260,
        meals: 250,
        avgCost: 10,
        selected: true
    }
]

const EventImpact = () => {


    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <VStack
            align-items='flex-start'
            spacing={4}
        >
            <HStack
                w='100%'
                justifyContent={'space-between'}
            >
                <Text
                    fontSize='xl'
                    color='gray'
                    fontWeight='semibold'
                >
                    My Class Impact
                </Text>
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<RiArrowDropDownLine />}
                        color='cyan.500'
                        fontWeight='semibold'
                        variant='ghost'
                    >
                        {eventImpacts[currentIndex].name}
                    </MenuButton>
                    <MenuList>
                        {
                            eventImpacts.map((eventImpact, index) => (
                                <MenuItem
                                    color='cyan.500'
                                    fontWeight='semibold'
                                    onClick={() => setCurrentIndex(index)}
                                    key={index}
                                >
                                    {eventImpact.name}
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                </Menu>
            </HStack>
            <Text
                fontSize='lg'
                color='gray'
                w='100%'
                justifyContent='flex-start'
            >
                From Most Recent Event
            </Text>
            {
                eventImpacts
                    .filter((_, index) => index === currentIndex)
                    .map((eventImpact, index) => (
                        <EventImpactItem
                            key={index}
                            name={eventImpact.name}
                            pounds={eventImpact.pounds}
                            money={eventImpact.money}
                            meals={eventImpact.meals}
                            avgCost={eventImpact.avgCost}
                            selected={eventImpact.selected}
                        />
                    ))
            }
        </VStack>
    )
}

export default EventImpact