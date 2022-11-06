import { Timestamp } from "firebase/firestore";
const now = new Date();

export const lessonData = [
    {
        weekNumber: 1,
        lessons: [
            {
                id: "12341234123",
                title: "Lesson 1",
                lengthHours: 2,
                dueDate: now,
                completed: true,
                week: 1
            },
            {
                id: "1221343412",
                title: "Lesson 2",
                lengthHours: 1,
                dueDate: now,
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
                dueDate: now,
                completed: true,
                week: 2
            },
            {
                id: "122123",
                title: "Lesson 4",
                lengthHours: 1,
                dueDate: now,
                completed: false,
                week: 2
            }
        ]
    }
];