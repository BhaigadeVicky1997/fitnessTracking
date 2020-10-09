import { Store } from '@ngrx/store';
import { AuthActions, SET_UNAUTHENTICATE, SET_AUTHENTICATE } from '../auth/auth.actions';
export interface State {
    isAuthenticate: boolean;
}

const initialState: State = {
    isAuthenticate: false
}

export function authReduxer(state = initialState, action: AuthActions) {

    switch (action.type) {
        case SET_AUTHENTICATE:
            return {
                isAuthenticate: true
            }

        case SET_UNAUTHENTICATE:
            return {
                isAuthenticate: false
            }
        default:
            return state;
    }
}


export const getIsAuth = (state:State) =>  state.isAuthenticate;