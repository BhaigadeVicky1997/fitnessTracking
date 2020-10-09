import { User } from '../auth/user.model';
import { AuthData } from '../auth/authData.model';
import { from, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ExerciseService } from '../training/excercise.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';

import * as UI from '../shared/ui.actions';
import * as fromroot from '../app.reducer';

@Injectable()
export class AuthService {


  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private Store: Store<{ ui: fromroot.State }>, private UIService: UIService, private snackbar: MatSnackBar, private ExerciseService: ExerciseService, private router: Router, private angularFireAuth: AngularFireAuth) { }

  initAuthListener() {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.ExerciseService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {

    // this.UIService.loadingStateChanged.next(true);
    this.Store.dispatch(new UI.StartLoading());
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        //this.UIService.loadingStateChanged.next(false);
        this.Store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        console.log(error);
        //this.UIService.loadingStateChanged.next(false);
        this.Store.dispatch(new UI.StopLoading());
        this.UIService.snackBarOpen(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    //  this.UIService.loadingStateChanged.next(true);
    this.Store.dispatch(new UI.StartLoading());
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        //this.UIService.loadingStateChanged.next(false);
        this.Store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        //this.UIService.loadingStateChanged.next(false);
        this.Store.dispatch(new UI.StopLoading());
        console.log(error);
        this.UIService.snackBarOpen(error.message, null, 3000);
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}