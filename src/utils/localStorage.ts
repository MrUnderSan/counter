import {LimitReducerStateType} from '../store/limitReducer';

export const loadLimits = (): LimitReducerStateType | undefined  => {
    try {

        const localStorageLimits = localStorage.getItem('counterLimits')
        if (localStorageLimits === null) {
            return undefined;
        }
        return JSON.parse(localStorageLimits)
    } catch (err) {
        return undefined;
    }
};

export const saveLimits = (limits: LimitReducerStateType) => {
    localStorage.setItem('counterLimits', JSON.stringify(limits))
}