export type LimitReducerStateType = {
    maxLimit: number
    minLimit: number
}

type ChangeLimitsActionType = ReturnType<typeof changeLimits>

type ActionsType = ChangeLimitsActionType

const initState: LimitReducerStateType = {maxLimit: 9, minLimit: 0}
export const limitReducer = (state: LimitReducerStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'CHANGE-LIMITS':
            return {...state, maxLimit: action.maxLimit, minLimit: action.minLimit}
        default:
            return state
    }
}

export const changeLimits = (maxLimit: number, minLimit: number) => (
    {type: 'CHANGE-LIMITS' as const, maxLimit, minLimit}
)