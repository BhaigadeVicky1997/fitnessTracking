import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ExerciseService } from '../excercise.service';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

import { Observable, Subscription } from 'rxjs';
import { Excercise } from '../excercise.model';
import { Store } from '@ngrx/store';
import * as fromroot from '../../app.reducer';
import * as fromTraining from '../training.reducers';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']

})
export class NewTrainingComponent implements OnInit {

  //Variable Declaration
  @Output() trainingStart = new EventEmitter<void>();

  exercises$: Observable<Excercise[]>;
  isLoading$: Observable<boolean>;

  constructor(

    private ExerciseService: ExerciseService,
    private Store:Store<fromroot.State>
  ) { }

  ngOnInit() {
    
    this.isLoading$ = this.Store.select(fromroot.getIsLoading);
    this.exercises$ = this.Store.select(fromTraining.getAvailableExercises);
    this.ExerciseService.fetchAvailableExercises();
  }



  onStartTraining(form: NgForm) {
    console.log(form.value.exercise);
    this.ExerciseService.startExercise(form.value.exercise);
  }

  // ngOnDestroy(){
  //   if(this.exerciseSubscription){
  //     this.exerciseSubscription.unsubscribe();
  //   }
  // }



}
