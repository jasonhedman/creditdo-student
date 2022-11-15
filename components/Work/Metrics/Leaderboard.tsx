import { Box, HStack, VStack, Text, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import LeaderboardItem from './LeaderboardItem'

const leaderboardClasses = [
    {
        teacher: "Mrs. Garcia",
        pounds: 1342,
        money: 260,
        meals: 250,
        avgCost: 10,
        icon: BsPersonCircle,
        timeFrame: "Spring 2018",
        ranking: 1
    },
    {
        teacher: "Mrs. Smith",
        pounds: 1342,
        money: 260,
        meals: 250,
        avgCost: 10,
        icon: BsPersonCircle,
        timeFrame: "Spring 2018",
        ranking: 2
    }
]

const dropdownOptionsTeacher = [
    "Teacher: All",
    "Teacher: NYC"
]

const dropdownOptionsYear = [
    "Year: All",
    "Spring 2018"
]

const Leaderboard = () => {
    return (
        <Box>
            <HStack
                spacing='160px'
            >
                <Text
                    color='gray'
                    fontSize='lg'
                    fontWeight='bold'
                >
                    Leaderboard
                </Text>
                <HStack>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<RiArrowDropDownLine />}
                            color='cyan.500'
                            fontWeight='semibold'
                            bg='white'
                        >
                            {dropdownOptionsTeacher[0]}
                        </MenuButton>
                        <MenuList>
                            {
                                dropdownOptionsTeacher.map((dropdown, index) => (
                                    // FIX!!! This part is not working for some reason, only showing one letter
                                    <MenuItem
                                        color='cyan.500'
                                        fontWeight='semibold'
                                    >
                                        {dropdown[index]}
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<RiArrowDropDownLine />}
                            color='cyan.500'
                            fontWeight='semibold'
                            bg='white'
                        >
                            {dropdownOptionsYear[0]}
                        </MenuButton>
                        <MenuList>
                            {
                                dropdownOptionsYear.map((dropdown, index) => (
                                    // FIX!!! This part is not working for some reason, only showing one letter
                                    <MenuItem
                                        color='cyan.500'
                                        fontWeight='semibold'
                                    >
                                        {dropdown[index]}
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                </HStack>
            </HStack>
            <br />
            {
                leaderboardClasses.map((leaderboardClass, index) => (
                    <LeaderboardItem
                        key={index}
                        teacher={leaderboardClass.teacher}
                        pounds={leaderboardClass.pounds}
                        money={leaderboardClass.money}
                        meals={leaderboardClass.meals}
                        avgCost={leaderboardClass.avgCost}
                        icon={leaderboardClass.icon}
                        timeFrame={leaderboardClass.timeFrame}
                        ranking={leaderboardClass.ranking}
                    />
                ))
            }
        </Box>
    )
}

export default Leaderboard