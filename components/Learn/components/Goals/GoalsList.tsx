import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Goal } from '../../../../hooks/types'
import GoalComponent from './GoalComponent'

interface Props {
    name: String
    goalList: Goal[]
}


const GoalsList: React.FC<Props> = ({name, goalList}) => {

    const generateGoal = (goal: Goal, index: number) => {
        let caption: string = '';
        if (goal.location) {
            caption = '@ ' + goal.location;
        }
        else{
            caption = 'For ' + goal.reason;
        }
        return (
            <GoalComponent key={index} title={goal.title} dueDate={goal.dueDate} caption={caption} done={goal.completed}/>
        )
    }

    if (goalList.length > 0){
        return (
            <VStack
                spacing={2}
                alignItems='left'
                w='100%'
                >
                <Heading size='sm' color='gray'>{name}</Heading>
                <VStack
                    spacing={2}
                    alignItems='left'
                    w='100%'
                >
                    {
                        goalList.map((goal, index) => generateGoal(goal, index))
                    }
                </VStack>
            </VStack>
        )
    }
    return null;
}

export default GoalsList