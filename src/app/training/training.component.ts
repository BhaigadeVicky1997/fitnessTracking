import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ExerciseService} from '../training/excercise.service';

import { Store } from '@ngrx/store';

import * as fromAction from '../training/training.actions';
import * as fromTraining from '../training/training.reducers';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  //Variable Declarations
  ongoingTraining$: Observable<boolean>;


  constructor(private ExerciseService:ExerciseService,public store : Store<fromTraining.State>) { }
  
  ngOnInit(){
    
    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
    console.log(this.ongoingTraining$);
    // this.exerciseSubscription = this.ExerciseService.exerciseChanged.subscribe(result=>{
    //   console.log(result);
    //   if(result){
    //   this.onGoingTraining = true;
    //   }
    //   else{  
    //   this.onGoingTraining = false;
    //   }
    // })
    
  }


  

}
