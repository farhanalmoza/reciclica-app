import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const recoverPassword = createAction("[Recover password]");
export const recoverPasswordSuccess = createAction("[Recover password] Success");
export const recoverPasswordFail = createAction("[Recover password] Fail", props<{ error: any }>());

export const login = createAction("[Login]");
export const loginSuccess = createAction("[Login] Success", props<{ user: User }>());
export const loginFail = createAction("[Login] Fail", props<{ error: any }>());