import { userReducer, userState } from "./user.reducer";
import { UserAction } from "./UserAction";
import React, { createContext, useContext, useReducer, ComponentType, Dispatch } from 'react';

type State = typeof initialState;

type Action = UserAction;

const mainReducer = (state: State, action: Action) => ({
    user: userReducer(state.user, action),
});

const initialState = {
    user: userState
}

const StateCtx = createContext(initialState);
const DispatchCtx = createContext((() => 0) as Dispatch<Action>);

export const Provider: ComponentType = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState as never);

    return (
        <DispatchCtx.Provider value={dispatch}>
            <StateCtx.Provider value={state}>
                {children}
            </StateCtx.Provider>
        </DispatchCtx.Provider>
    );
};

export const useDispatch = () => {
    return useContext(DispatchCtx);
};

export const useGlobalState = <K extends keyof State>(property: K) => {
    const state = useContext(StateCtx);
    return state[property];
};
