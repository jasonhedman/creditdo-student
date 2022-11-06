import React from 'react'

import { Flex } from '@chakra-ui/react'
import Week from "./components/Week"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { WeeklyLessons } from '../../hooks/types'
import useLessons from '../../hooks/useLessons'
import { Timestamp } from 'firebase/firestore'
import LearnPage from './components/LearnPage'
import { lessonData } from '../../data/lessons'

const Learn = () => {

    const weeklyLessons: WeeklyLessons[] = lessonData;
    //useLessons();

  return (
    <Tabs isFitted
        colorScheme="orange"
    >
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