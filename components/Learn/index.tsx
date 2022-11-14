import React from 'react'

import { Flex } from '@chakra-ui/react'
import Week from "./components/Lessons/Week"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Goal, WeeklyLessons } from '../../hooks/types'
import useLessons from '../../hooks/useLessons'
import { Timestamp } from 'firebase/firestore'
import LearnPage from './components/Lessons/LearnPage'
import { lessonData, eventGData, shortGData, longGData, doneGData } from '../../data/learn'
import GoalsPage from './components/Goals/GoalsPage'


const Learn = () => {

    const weeklyLessons: WeeklyLessons[] = lessonData;
    const eventG: Goal[] = eventGData;
    const shortG: Goal[] = shortGData;
    const longG: Goal[] = longGData;
    const doneG: Goal[] = doneGData;
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
            <TabPanel>
                <GoalsPage eventGoals={eventG} shortTermGoals={shortG} longTermGoals={longG} done={doneG}/>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default Learn