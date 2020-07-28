export interface Project{
    id: number,
    userId: string,
    name: string,
    description: string,
    category: string,
    dueDate: string,
    figma: string,
    github: string,
    privacy: boolean,
    date: string
}

export interface Props{
    data: {
        id: number,
        userId: string,
        name: string,
        description: string,
        category: string,
        dueDate: string,
        figma: string,
        github: string,
        privacy: boolean,
    }
}

export const init = [{
    "id": 0,
    "userId": "",
    "name": "",
    "description": "",
    "category": "",
    "dueDate": "",
    "figma": "",
    "github": "",
    "privacy": false,
    "date": "",
}]