import {Action} from '@ngrx/store';

export const SET_AUTHENTICATE =  '[Auth] Set Authenticate';
export const SET_UNAUTHENTICATE =  '[Auth] Set Unauthenticate';

export class setAuthenticated implements Action{
    readonly type  = SET_UNAUTHENTICATE;
}


export class setUnAuthenticates implements Action{
    readonly type  = SET_AUTHENTICATE;
}

export type AuthActions = setAuthenticated | setUnAuthenticates;