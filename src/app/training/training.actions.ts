import {Action} from '@ngrx/store';
import {Excercise} from '../training/excercise.model';
export const SET_AVAILABLE_TRAINING =  '[Training] Available Training';
export const SET_FINISHED_TRAINING =  '[Training] Finished Training';
export const START_TRAINING =  '[Training] Start Training';
export const STOP_TRAINING =  '[Training]  Stop Training';


export class AvailableExercise implements Action{
    readonly type  = SET_AVAILABLE_TRAINING;
    constructor(public payload:Excercise[]){}
}


export class finishedTraining implements Action{
    readonly type  = SET_FINISHED_TRAINING;
    constructor(public payload:Excercise[]){}
}

export class startTraining implements Action{
    readonly type  = START_TRAINING;
    constructor(public payload:string){

    }
}


export class stopTraining implements Action{
    readonly type  = STOP_TRAINING;
}


export type TrainingActions = AvailableExercise | finishedTraining | startTraining | stopTraining;