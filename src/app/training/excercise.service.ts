import { Excercise } from '../training/excercise.model';
import { Subject, Subscription } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';

import * as UI from '../shared/ui.actions';
import * as fromAction from '../training/training.actions';
import * as fromTraining from '../training/training.reducers';
import { take } from 'rxjs/operators';


@Injectable()
export class ExerciseService {

  exerciseChanged = new Subject<Excercise>();
  exercisesChanged = new Subject<Excercise[]>();
  private availableExercises: Excercise[] = [];
  private runningExercise: Excercise;
  finishedExercisesChanged = new Subject<Excercise[]>();
  private fbSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private MatSnackBar:MatSnackBar,
    private UIService:UIService,
    private store : Store<{ui:fromTraining.State}>
    ) {}

  fetchAvailableExercises() {
    this.store.dispatch(new UI.StartLoading());
    this.fbSubs.push(this.db
      .collection('availableExercises')
      .snapshotChanges()
      .map(docArray => {
          this.store.dispatch(new UI.StopLoading());
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data()['name'],
            duration: doc.payload.doc.data()['duration'],
            calories: doc.payload.doc.data()['calories']
          };
        },err=>{
          this.store.dispatch(new UI.StopLoading());
          this.UIService.snackBarOpen('Fetching Exercise Failed Please Try Again Later',null,3000)
        });
      })
      .subscribe((exercises: Excercise[]) => {
        this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new fromAction.AvailableExercise(exercises));
      }));
  }

  startExercise(selectedId: any) {
    // this.db.doc('availableExercises/' + selectedId).update({lastSelected: new Date()});
    // this.runningExercise = this.availableExercises.find(
    //   ex => ex.id === selectedId
    // );
    // this.exerciseChanged.next({ ...this.runningExercise });
    this.store.dispatch(new fromAction.startTraining(selectedId));
  }

  completeExercise() {
  //   this.addDataToDatabase({
  //     ...this.runningExercise,
  //     Date: new Date(),
  //     state: 'completed'
  //   });
    
  //   this.store.dispatch(new fromAction.stopTraining());
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex,
        Date: new Date(),
        state: 'completed'
      });
      this.store.dispatch(new fromAction.stopTraining());
    });
  }

  cancelExercise(progress: number) {
    // this.addDataToDatabase({
    //   ...this.runningExercise,
    //   duration: this.runningExercise.duration * (progress / 100),
    //   calories: this.runningExercise.calories * (progress / 100),
    //   Date: new Date(),
    //   state: 'cancelled'
    // });
    // // this.runningExercise = null;
    // // this.exerciseChanged.next(null);
    // this.store.dispatch(new fromAction.stopTraining());
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex,
        duration: ex.duration * (progress / 100),
        calories: ex.calories * (progress / 100),
        Date: new Date(),
        state: 'completed'
      });
      this.store.dispatch(new fromAction.stopTraining());
    });
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  fetchCompletedOrCancelledExercises() {
    this.fbSubs.push(this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Excercise[]) => {
        // console.log(exercises);
        // this.finishedExercisesChanged.next(exercises);
        this.store.dispatch(new fromAction.finishedTraining(exercises));
      }));
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(exercise: Excercise) {
    this.db.collection('finishedExercises').add(exercise);
  }
}
