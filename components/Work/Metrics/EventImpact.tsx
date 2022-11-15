import { Box, HStack, VStack, Text, Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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

/* const [currentIndex, setCurrentIndex] = useState<number>(0);

useEffect(() => {
  for (let i = 0; i < eventImpacts.length; i++) {
    if (eventImpacts[i].selected) {
        setCurrentIndex(i)
    }
  }
}, [eventImpacts]) */


const EventImpact = () => {
    return (
        <Box>
            <VStack
                align-items='flex-start'
                w='100%'
            >
                <HStack
                    spacing={223}
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
                            bg='white'
                        >
                            {eventImpacts[0].name}
                        </MenuButton>
                        <MenuList>
                            {
                                eventImpacts.map((eventImpact, index) => (
                                    <MenuItem
                                        color='cyan.500'
                                        fontWeight='semibold'
                                    >
                                        {eventImpacts[index].name}
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
                <br />
                {
                    // Change to only map if selected = true
                    eventImpacts.map((eventImpact, index) => (
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
        </Box>
    )
}

export default EventImpact