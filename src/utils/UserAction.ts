import { StateTypes } from "./types";

export type UserAction = {
    name: string;
    type: StateTypes.CHANGE_USER_INFO;
} | {
    age: string;
    type: StateTypes.CHANGE_USER_AGE;
}
