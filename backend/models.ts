export interface user {
    name: string
}

export interface message {
    event:typeEvent
    id: number
    date: Date
    name: string
    message: string
}

export const enum typeEvent {
    'conection',
    'message'
}