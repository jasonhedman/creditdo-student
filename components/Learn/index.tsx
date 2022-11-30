import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { WeeklyLessons } from '../../hooks/types'
import useGoals from '../../hooks/useGoals'
import LearnPage from './components/Lessons/LearnPage'
import { lessonData, eventGData, shortGData, longGData, doneGData } from '../../data/learn'
import GoalsPage from './components/Goals/GoalsPage'


const Learn = () => {
    const weeklyLessons: WeeklyLessons[] = lessonData;

    const { eventList, shortList, longList, doneList } = useGoals();

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
                <GoalsPage 
                    eventGoals={eventList} 
                    shortTermGoals={shortList} 
                    longTermGoals={longList} 
                    done={doneList}/>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default Learn