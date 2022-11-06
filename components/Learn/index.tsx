import React from 'react'

import { Flex } from '@chakra-ui/react'
import Week from "./components/Week"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { WeeklyLessons } from '../../hooks/types'
import useLessons from '../../hooks/useLessons'
import { Timestamp } from 'firebase/firestore'
import LearnPage from './components/LearnPage'

const Learn = () => {

    const weeklyLessons: WeeklyLessons[] = 
    [
        {
            weekNumber: 1,
            lessons: [
                {
                    id: "12341234123",
                    title: "Lesson 1",
                    lengthHours: 2,
                    dueDate: Timestamp.now(),
                    completed: true,
                    week: 1
                },
                {
                    id: "1221343412",
                    title: "Lesson 2",
                    lengthHours: 1,
                    dueDate: Timestamp.now(),
                    completed: true,
                    week: 1
                }
            ]
        },
        {
            weekNumber: 1,
            lessons: [
                {
                    id: "12341223",
                    title: "Lesson 3",
                    lengthHours: 2,
                    dueDate: Timestamp.now(),
                    completed: true,
                    week: 2
                },
                {
                    id: "122123",
                    title: "Lesson 4",
                    lengthHours: 1,
                    dueDate: Timestamp.now(),
                    completed: false,
                    week: 2
                }
            ]
        }
    ];
    //useLessons();

  return (
    <Tabs isFitted
        colorScheme="orange">
        <TabList>
            <Tab>Lessons</Tab>
            <Tab>My Goals</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <LearnPage schedule={weeklyLessons}/>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default Learn