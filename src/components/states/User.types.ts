export type AuthUser = {
    name: string
    email: string
};

export type CounterState = {
    count: number
}

export type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

export type ResetAction = {
    type:'reset'
}

export type CounterAction = UpdateAction | ResetAction