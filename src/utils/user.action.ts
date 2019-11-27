import { UserAction } from "./UserAction"
import { StateTypes } from "./types"

const UserActions = {
    changeUserInfo: (name: string): UserAction => ({
        type: StateTypes.CHANGE_USER_INFO,
        name
    }),
    changeUserAge: (age: string): UserAction => ({
        type: StateTypes.CHANGE_USER_AGE,
        age
    }),
}

export default UserActions;