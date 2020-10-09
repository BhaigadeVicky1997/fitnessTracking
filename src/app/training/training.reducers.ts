import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { TrainingActions, SET_AVAILABLE_TRAINING, SET_FINISHED_TRAINING, START_TRAINING, STOP_TRAINING } from '../training/training.actions';
import { Excercise } from '../training/excercise.model';
import * as fromRoot from '../app.reducer';

export interface TrainingState {
    availableTrainig: Excercise[];
    finishedTraining: Excercise[];
    activeTraining: Excercise;
};

export interface State extends fromRoot.State {

    training: TrainingState;
}

const initialState: TrainingState = {
    availableTrainig: [],
    finishedTraining: [],
    activeTraining: null
};

export function trainingReducer(state = initialState, action: TrainingActions) {
    switch (action.type) {
        case SET_AVAILABLE_TRAINING:
            return {
                ...state,
                availableTrainig: action.payload

            }
        case SET_FINISHED_TRAINING:
            return {
                ...state,
                finishedTraining: action.payload
            }
        case START_TRAINING:
            return {
                ...state,
                activeTraining: { ...state.availableTrainig.find(ex => ex.id === action.payload) },
            }
        case STOP_TRAINING:
            return {
                ...state,
                activeTraining: null
            }
        default: {
            return state;
        }
    }
}


export const getTraining = createFeatureSelector<TrainingState>('training');

export const getAvailableExercises = createSelector(getTraining, (state: TrainingState) => state.availableTrainig);
export const getFinishedExercises = createSelector(getTraining, (state: TrainingState) => state.finishedTraining);
export const getActiveTraining = createSelector(getTraining, (state: TrainingState) => state.activeTraining);
export const getIsTraining = createSelector(getTraining, (state: TrainingState) => state.activeTraining != null);
