export type CounterReducerStateType = number

type IncrementCountActionType = ReturnType<typeof incrementCount>
type ResetCounterActionType = ReturnType<typeof resetCounter>

type ActionsType = IncrementCountActionType | ResetCounterActionType

const initState: CounterReducerStateType = 0
export const counterReducer = (state: CounterReducerStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'INCREMENT-COUNT':
            return action.num + 1
        case 'RESET-COUNTER':
            return action.num
        default:
            return state
    }
}

export const incrementCount = (num: number) => (
    {type: 'INCREMENT-COUNT' as const, num}
)

export const resetCounter = (num: number) => (
    {type: 'RESET-COUNTER' as const, num}
)