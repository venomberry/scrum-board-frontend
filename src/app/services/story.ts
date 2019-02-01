import { Task } from './task';

export interface Story {
    id: number;
    name: string;
    tasks: Task[];
}
