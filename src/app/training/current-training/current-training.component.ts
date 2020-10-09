import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {StopTrainingComponent} from '../current-training/stop-training/stop-training.component';

import {ExerciseService} from '../excercise.service';
import {Excercise} from '../excercise.model';

import { Store } from '@ngrx/store';
import * as fromroot from '../../app.reducer';
import * as fromTraining from '../training.reducers';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {


  //variable declaration
  progress :number = 0;
  timer:number;
  constructor(private MatDialog:MatDialog,private ExerciseService:ExerciseService,public store:Store) { }

  ngOnInit(): void {
  this.startOrResumeTimer();
  }


  //Function's
  startOrResumeTimer() {
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      const step = ex.duration / 100 * 1000;
      this.timer = setInterval(() => {
        this.progress = this.progress + 1;
        if (this.progress >= 100) {
          this.ExerciseService.completeExercise();
          clearInterval(this.timer);
        }
      }, step);
    });
  }
  
  stopProgress(){
   clearInterval(this.timer);
   const dialogRef =  this.MatDialog.open(StopTrainingComponent,{
     data:{
       progress: this.progress
     }
   });


   dialogRef.afterClosed().subscribe(result=>{
     if(result){
       this.ExerciseService.cancelExercise(this.progress);
     }
     else{
      this.startOrResumeTimer()
     }
   })
  }

}
