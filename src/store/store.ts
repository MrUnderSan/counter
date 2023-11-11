import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface CounterState {
    count: number
    incrementCount: () => void
    resetCounter: (num: number) => void
}

export const useCounter = create<CounterState>((set, get) => ({
    count: 0,
    incrementCount: () => {
        set({count: get().count + 1})
    },
    resetCounter: (num: number) => {
        set({count: num})
    }
}))

interface SettingLimitsType {
    maxValue: number
    minValue: number
}

interface SettingState {
    limits: SettingLimitsType
    isCorrectValue: boolean
    changeMaxLimit: (max: number) => void
    changeMinLimit: (min: number) => void
    changeCorrectStatus: (isCorrectValue: boolean) => void
}

export const useSetting = create<SettingState>((set, get) => ({
    limits: {
        maxValue: 9,
        minValue: 0
    },
    isCorrectValue: true,
    changeMaxLimit: (maxValue: number) => {
        set({limits: {...get().limits, maxValue}})
    },
    changeMinLimit: (minValue: number) => {
        set({limits: {...get().limits, minValue}})
    },
    changeCorrectStatus: (isCorrectValue: boolean) => {
        set({isCorrectValue})
    }
}))

interface LimitsType {
    maxLimit: number
    minLimit: number
}

interface LimitsState {
    limits: LimitsType
    changeLimits: (maxLimit: number, minLimit: number) => void
}

export const useLimits = create<LimitsState>()(
    persist(
        (set) => ({
            limits: {
                maxLimit: 9,
                minLimit: 0,
            },
            changeLimits: (maxLimit: number, minLimit: number) => {
                set({limits: {maxLimit, minLimit}})
            }
        }),
        {
            name: 'counter-limits',
        }
    )
)