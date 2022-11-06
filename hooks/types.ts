import { Timestamp } from "firebase/firestore";

export interface Lesson {
    id: string;
	title: string;
	lengthHours: number;
    dueDate: Timestamp;
	completed: boolean;
    week: number
}

export interface WeeklyLessons {
    weekNumber: number
    lessons: Lesson[]
}
