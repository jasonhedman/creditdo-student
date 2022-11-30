import { Goal } from "./types";
import { useState } from "react";
import { lessonData, eventGData, shortGData, longGData, doneGData } from '../data/learn'

const useGoals = () => {

    const [ eventList, setEventList ] = useState(eventGData);
    const [ shortList, setShortList ] = useState(shortGData);
    const [ longList, setLongList ] = useState(longGData);
    const [ doneList, setDoneList ] = useState(doneGData);
    
    const completeGoal = (goal: Goal) => {
        goal.completed = !goal.completed;
        var goalList: Goal[];
        if (goal.type === 'event') goalList = eventList;
        else if (goal.type === 'short') goalList = shortList;
        else goalList = longList;


        for (let i = 0; i < goalList.length; ++i) {
            if (goalList[i].id === goal.id) {
                goalList.splice(i, 1);
                break;
            }
        }
        var newDoneList = doneList;
        newDoneList.push(goal);
        setDoneList(newDoneList);

        if(goal.type === 'event') setEventList(goalList);
        else if(goal.type === 'short') setShortList(goalList);
        else setLongList(goalList);
    }

    const uncompleteGoal = (goal: Goal) => {
        goal.completed = !goal.completed;
        var list: Goal[] = doneList;
        for (let i = 0; i < list.length; ++i) {
            if(list[i].id === goal.id) {
                list.splice(i, 1);
                break;
            }
        }
        setDoneList(list);

        if(goal.type === 'event'){
            const newList = eventList;
            newList.push(goal);
            setEventList(newList);
        }
        else if(goal.type === 'short'){
            const newList = shortList;
            newList.push(goal);
            setShortList(newList);
        }
        else {
            const newList = longList;
            newList.push(goal);
            setLongList(newList);
        }
    }

    return {
        eventList,
        shortList,
        longList,
        doneList,
        completeGoal,
        uncompleteGoal
    }
}

export default useGoals;