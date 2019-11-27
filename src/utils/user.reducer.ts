import { UserAction } from "./UserAction";
import { StateTypes } from "./types";

export const userState = {
    name: 'Yura',
    age: 23
}

export type UserState = typeof userState;


export const userReducer = (state: UserState = userState, action: UserAction) => {
    switch (action.type) {
        case StateTypes.CHANGE_USER_INFO:
            return {
                ...state,
                name: action.name,
            }
        case StateTypes.CHANGE_USER_AGE:
            return {
                ...state,
                age: action.age
            }
        default: return state;
    }
};