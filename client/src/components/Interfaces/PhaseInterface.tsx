export interface PhaseInterface{
    id: Number,
    userId: String,
    projectId: Number,
    phaseNumber: Number,
    name: String,
    description?: String,
    category: String,
    dueDate: String,
    completed: Boolean,
    date: String
}

export const init = {
    id: 0,
    userId: "",
    projectId: 0,
    phaseNumber: 0,
    name: "",
    description: "",
    category: "",
    dueDate: "",
    completed: false,
    date: ""
}

export interface Props{
    data: {
        id: Number,
        userId: String,
        projectId: Number,
        phaseNumber: Number,
        name: String,
        description?: String,
        category: String,
        dueDate: String,
        completed: Boolean,
        date: String
    }
}