export interface TaskProps{
    data: {
        id: Number,
        userId: string,
        phaseId: Number,
        taskText: string,
        completed: boolean,
        date: String
        }
    }

export interface TaskInterface {
    id: Number,
    userId: string,
    phaseId: Number,
    taskText: string,
    stage: string,
    completed: boolean,
    date: String
}

const init = {
        completed: false,
        date: "",
        id: 0,
        phaseId: 0,
        taskText: "",
        userId: ""
}