import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class UIService {
  loadingStateChanged = new Subject<boolean>();

constructor(private MatSnackBar:MatSnackBar){}

  snackBarOpen(message,action,duration){
    this.MatSnackBar.open(message,action, {
        duration: duration
      });
  }
}
