import {Action} from '@ngrx/store';
import {UIActions,STOP_LOADING,START_LOADING} from '../shared/ui.actions';
export interface State{
    isLoading: boolean;
};

const initialState:State = {
isLoading :false
};

export function uiReducer(state = initialState,action: Action)
{
   switch(action.type){
    case  START_LOADING:
        return {
            isLoading : true
        }
    case STOP_LOADING:
        return {
            isLoading : false
        }
    default:
    {
        return state;
    }    
   }
}

export const getIsLoading = (state:State) =>  state.isLoading;
console.log(getIsLoading);
 
