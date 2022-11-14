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
export interface Goal {
    id: string
    title: string
    location: string
    dueDate: Date
    completed: boolean
}

export const eventGData = [
    {
        id: '1234234123',
        title: 'Food Drive',
        location: 'School Gym',
        reason: null,
        dueDate: now,
        completed: false
    },
    {
        id: '12342123',
        title: 'Book Sorting',
        reason: null,
        location: 'Library',
        dueDate: now,
        completed: false
    },
]

export const shortGData = [
    {
        id: '123423434123',
        title: 'Save $60',
        reason: 'books',
        location: null,
        dueDate: now,
        completed: false
    },
    {
        id: '12342334134123',
        title: 'Save $200',
        reason: 'sneakers',
        location: null,
        dueDate: now,
        completed: false
    },
]

export const longGData = [
    {
        id: '1234234134134123',
        title: 'Save $600',
        reason: 'phone',
        location: null,
        dueDate: now,
        completed: false
    },
    {
        id: '12342334343343134123',
        title: 'Save $2000',
        reason: 'college',
        location: null,
        dueDate: now,
        completed: false
    },
]

export const doneGData = [
    {
        id: '1243343134123',
        title: 'Save $10',
        reason: 'snaxs',
        location: null,
        dueDate: now,
        completed: true
    },
]