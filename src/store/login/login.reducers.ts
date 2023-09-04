import { Action, createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword, currenState => {
        return {
            ...currenState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        }
    }),
    on(recoverPasswordSuccess, currenState => {
        return {
            ...currenState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        }
    }),
    on(recoverPasswordFail, (currenState, action) => {
        return {
            ...currenState,
            error: action.error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        }
    })
)

export function loginReducer(state: LoginState, action: Action) {
    return reducer(state, action);
}