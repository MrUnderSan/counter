export type SettingLimitsType = {
    maxValue: number
    minValue: number
}

export type SettingReducerStateType = {
    limits: SettingLimitsType
    isCorrectValue: boolean
}

type ChangeMaxLimitActionType = ReturnType<typeof changeMaxLimit>
type ChangeMinLimitActionType = ReturnType<typeof changeMinLimit>
type ChangeCorrectStatusActionType = ReturnType<typeof changeCorrectStatus>

export type SettingActionsType = ChangeMaxLimitActionType | ChangeMinLimitActionType | ChangeCorrectStatusActionType

const initState: SettingReducerStateType = {
    limits: {
        maxValue: 9,
        minValue: 0
    },
    isCorrectValue: true
}
export const settingReducer = (state: SettingReducerStateType = initState, action: SettingActionsType) => {
    switch (action.type) {
        case 'CHANGE-MAX-LIMIT':
            return {...state, limits: {...state.limits, maxValue: action.maxValue}}
        case 'CHANGE-MIN-LIMIT':
            return {...state, limits: {...state.limits, minValue: action.minValue}}
        case 'CHANGE-CORRECT-STATUS':
            return {...state, isCorrectValue: action.isCorrectValue}
        default:
            return state
    }
}

export const changeMaxLimit = (maxValue: number) => (
    {type: 'CHANGE-MAX-LIMIT' as const, maxValue}
)

export const changeMinLimit = (minValue: number) => (
    {type: 'CHANGE-MIN-LIMIT' as const, minValue}
)

export const changeCorrectStatus = (isCorrectValue: boolean) => (
    {type: 'CHANGE-CORRECT-STATUS' as const, isCorrectValue}
)
