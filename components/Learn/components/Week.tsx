import { VStack } from '@chakra-ui/react'
import React from 'react'
import LessonCard from "./LessonCard"
import WeekHeader from "./WeekHeader"
import { Lesson, WeeklyLessons } from "../../../hooks/types"

interface Props {
    weekNumber : number;
    lessons : WeeklyLessons;
}

const Week: React.FC<Props> = ({weekNumber, lessons}) => {
  return (
    <VStack 
        spacing={2}
    >
        <WeekHeader weekNumber={weekNumber} />
        {
            lessons.lessons.map((lesson, index) => (
                <LessonCard
                    key={index}
                    lesson={lesson}
                />
            ))
        }
    </VStack>
  )
}

export default Week