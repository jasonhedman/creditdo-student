import React from 'react'

import { Box, HStack, Text, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'

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

    const [currentTeacherIndex, setCurrentTeacherIndex] = React.useState<number>(0);
    const [currentYearIndex, setCurrentYearIndex] = React.useState<number>(0);

    return (
        <Box
            w='100%'
        >
            <HStack
                w='100%'
                justifyContent='space-between'
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
                            {dropdownOptionsTeacher[currentTeacherIndex]}
                        </MenuButton>
                        <MenuList>
                            {
                                dropdownOptionsTeacher.map((dropdown, index) => (
                                    <MenuItem
                                        color='cyan.500'
                                        fontWeight='semibold'
                                        onClick={() => setCurrentTeacherIndex(index)}
                                        key={dropdown}
                                    >
                                        {dropdown}
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                    {/* <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<RiArrowDropDownLine />}
                            color='cyan.500'
                            fontWeight='semibold'
                            bg='white'
                        >
                            {dropdownOptionsYear[currentYearIndex]}
                        </MenuButton>
                        <MenuList>
                            {
                                dropdownOptionsYear.map((dropdown, index) => (
                                    <MenuItem
                                        color='cyan.500'
                                        fontWeight='semibold'
                                        onClick={() => setCurrentYearIndex(index)}
                                        key={dropdown}
                                    >
                                        {dropdown}
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu> */}
                </HStack>
            </HStack>
            {
                leaderboardClasses.map((leaderboardClass, index) => (
                    <LeaderboardItem
                        key={index}
                        {...leaderboardClass}
                    />
                ))
            }
        </Box>
    )
}

export default Leaderboard