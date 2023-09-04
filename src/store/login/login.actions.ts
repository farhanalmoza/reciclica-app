import { createAction, props } from "@ngrx/store";

export const recoverPassword = createAction("[Recover password]");
export const recoverPasswordSuccess = createAction("[Recover password] Success");
export const recoverPasswordFail = createAction("[Recover password] Fail", props<{ error: any }>());