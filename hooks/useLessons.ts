import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, doc, updateDoc } from "firebase/firestore";

import { Lesson } from "./types";

const useLessons = (classId : string) => {

    const [lessons, loading, error] = useCollectionData<Lesson>(collection(db, "classes", classId, "lessons") as CollectionReference<Lesson>);


    const partitionWeeks = (lessons: Lesson[]) => {
        const weeklyLessons: Lesson[][] = [[], []];
        lessons.forEach((element: Lesson) => {
            if (element.week == 1){
                weeklyLessons[0].push(element);
            }
            else{
                weeklyLessons[1].push(element);
            }
        });
        return weeklyLessons;
    } 

    return {
        lessons: partitionWeeks(lessons || []),
        loading
    }
}

export default useLessons;