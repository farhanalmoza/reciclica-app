import { Action, ActionCreator, createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.actions";
import { LoadingState } from "./LoadingState"
import { TypedAction } from "@ngrx/store/src/models";

const initialState: LoadingState = {
    show: false
}

const reducers = createReducer(
    initialState,
    on(show, () => {
        return {show: true};
    }),
    on(hide, () => {
        return {show: false};
    })
);

export function loadingReducer(state: LoadingState, action: Action | TypedAction<"[Loading] show"> | TypedAction<"[Loading] hide"> | ActionCreator<"UNKNOWN", () => TypedAction<"UNKNOWN">>) {
    return reducers(state, action);
}