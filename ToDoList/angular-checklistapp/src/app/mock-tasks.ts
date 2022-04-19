import {Task} from './shared/task.model';
export const TASKS: Task[] = [
    {
        id:1, 
        text:"This is task 1", 
        day: new Date("2020-05-20T10:30:00"), 
        reminder: true,
    },
    {
        id:2, 
        text:"This is task 2", 
        day: new Date("2020-10-20T10:30:00"), 
        reminder: false,
    },
    {
        id:3, 
        text:"This is task 3", 
        day: new Date("2020-07-20T10:30:00"), 
        reminder: true,
    }
];