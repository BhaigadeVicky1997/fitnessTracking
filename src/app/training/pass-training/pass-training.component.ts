import { Component, OnInit ,ViewChild,AfterViewInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Excercise } from '../excercise.model';
import { ExerciseService } from '../excercise.service';
import {Store} from '@ngrx/store';
import * as  fromTraining from '../training.reducers';

@Component({
  selector: 'app-pass-training',
  templateUrl: './pass-training.component.html',
  styleUrls: ['./pass-training.component.scss']
})
export class PassTrainingComponent implements OnInit,AfterViewInit  {
  displayedColumns = ['Date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Excercise>();
 
@ViewChild(MatSort ,{ static: false }) sort: MatSort; 

@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private ExerciseService:ExerciseService,private store:Store<fromTraining.State>) { }

  ngOnInit() {
    this.store.select(fromTraining.getFinishedExercises).subscribe(
      (exercises: Excercise[]) => {
        this.dataSource.data = exercises;
      }
    )
    this.ExerciseService.fetchCompletedOrCancelledExercises();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue:string){
this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
