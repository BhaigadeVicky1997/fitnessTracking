import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { AuthService } from '../auth.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  //Variable Dclarations
  maxDate;
  isLoading$ : Observable<boolean>;
  constructor(private authService: AuthService,private store:Store<fromRoot.State>) { }

  ngOnInit(): void {
   this.isLoading$ = this.store.select(fromRoot.getIsLoading)
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.pass
    });
  }
}
